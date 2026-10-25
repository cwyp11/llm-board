"""Capture public server-rendered AA data; not an automatic update pipeline."""
import argparse
import hashlib
import json
import pathlib
import re
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]


def extract_rsc(raw):
    chunks = re.findall(r'self\.__next_f\.push\((\[1,.*?\])\)</script>', raw)
    return ''.join(json.loads(chunk)[1] for chunk in chunks)


def objects_from_rsc(text):
    decoder = json.JSONDecoder()
    for match in re.finditer(r'\{"(?:slug|name|id|modelSlug)":', text):
        try:
            value, _ = decoder.raw_decode(text, match.start())
        except ValueError:
            continue
        if isinstance(value, dict):
            yield value


def collect(url, date, name):
    raw_dir = ROOT / 'research' / 'raw'
    raw_dir.mkdir(parents=True, exist_ok=True)
    request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(request, timeout=60) as response:
        raw = response.read()
    (raw_dir / f'{name}-{date}.html').write_bytes(raw)
    rsc = extract_rsc(raw.decode('utf-8'))
    (raw_dir / f'{name}-rsc-{date}.txt').write_text(rsc, encoding='utf-8')
    rows, metadata = {}, {}
    candidates = list(objects_from_rsc(rsc))
    for record in candidates:
        if 'slug' not in record:
            continue
        if 'intelligenceIndex' in record and 'contextWindowTokens' in record:
            rows[record['slug']] = record
        if record.get('releaseDate'):
            metadata[record['slug']] = record
    result = {'checkedAt': date, 'source': url, 'sourcePublishedAt': None,
              'htmlSha256': hashlib.sha256(raw).hexdigest(),
              'basis': 'Artificial Analysis Intelligence Index v4.3.2',
              'rows': list(rows.values()), 'metadata': list(metadata.values())}
    if not rows:
        result['records'] = [r for r in candidates if len(r) > 6]
    output = ROOT / 'research' / f'{date}-{name}.json'
    output.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'file': str(output), 'rows': len(rows), 'metadata': len(metadata),
                      'otherRecords': len(result.get('records', []))}))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--url', default='https://artificialanalysis.ai/leaderboards/models')
    parser.add_argument('--date', required=True)
    parser.add_argument('--name', default='aa')
    args = parser.parse_args()
    collect(args.url, args.date, args.name)
