/* Verify contextual help, chart identity and responsive release behavior. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright-core');
const localURL = file => 'file:///' + encodeURI(path.resolve(__dirname, file).replaceAll('\\', '/'));
const target = process.argv[2] || localURL('../src/index.html');
const shots = path.resolve(__dirname, '../screenshots');
fs.mkdirSync(shots, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(target, { waitUntil: 'load' });
    await page.click('a[href="#models"]');
    await page.locator('#view-models').waitFor({ state: 'visible' });
    assert.equal(await page.locator('#rankColor').getAttribute('aria-pressed'), 'true', 'Company colors are enabled by default');
    assert.ok((await page.locator('#rankChart .ch-col path').evaluateAll(nodes => new Set(nodes.map(n => n.getAttribute('fill'))).size)) > 3);
    assert.equal(await page.locator('[data-table-view="capability"]').getAttribute('aria-pressed'), 'true');
    for (const metric of ['deepswe','sweatlas','gpqa','scicode','lcr','nonhall','arena']) {
      assert.equal(await page.locator(`#modelTable th[data-sort="${metric}"]`).count(), 1, `${metric} is available in the capability view`);
    }
    await page.locator('[data-table-view="summary"]').click();
    assert.equal(await page.locator('#modelTable th[data-sort="deepswe"]').count(), 0);
    await page.locator('[data-table-view="usage"]').click();
    assert.equal(await page.locator('#modelTable th[data-sort="speed"]').count(), 1);
    await page.locator('[data-table-view="history"]').click();
    assert.equal(await page.locator('#modelTable th[data-sort="tb21"]').count(), 1);
    assert.equal(await page.locator('#modelTable th[data-sort="tb40"]').count(), 0, 'Benchmark versions are kept distinct');
    await page.locator('[data-table-view="capability"]').click();
    const svgLogos = await page.locator('#rankChart image').evaluateAll(async nodes => {
      const results = await Promise.all(nodes.map(node => new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(null);
        img.onerror = () => resolve(node.getAttribute('href'));
        img.src = node.getAttribute('href');
      })));
      return results.filter(Boolean);
    });
    assert.deepEqual(svgLogos, [], 'SVG chart logos load offline and on the public release');
    await page.screenshot({ path: path.join(shots, 'refined-models-1440.png') });
    await page.locator('#tableViews').evaluate(el=>{el.scrollIntoView({block:'start'});window.scrollBy(0,-90)});
    await page.screenshot({path:path.join(shots,'capability-table-1440.png')});
    assert.equal(await page.locator('#rankLegend').count(), 0, 'Remove the redundant company legend');
    const rankName = page.locator('#rankTitle .metric-help');
    assert.match(await rankName.innerText(), /AA/);
    assert.ok(!(await rankName.innerText()).includes('?'), 'Help must be the metric name itself');
    await rankName.hover();
    const portal = page.locator('#metricTipPortal');
    await portal.waitFor({ state: 'visible' });
    assert.match(await portal.innerText(), /能力|推理|评测/);
    await page.keyboard.press('Escape');
    assert.equal(await portal.isVisible(), false, 'Escape dismisses help');
    await rankName.focus();
    assert.equal(await portal.isVisible(), true, 'Keyboard focus opens help');
    await page.keyboard.press('Tab');
    assert.equal(await portal.isVisible(), false, 'Focus leaving dismisses help');

    const identity = page.locator('#rankChart [data-chart-model="claude-sonnet55"]');
    for (const child of ['.ch-logo', '.ch-name']) {
      await identity.locator(child).hover();
      assert.match(await page.locator('#rankChart .ch-tip').innerText(), /Anthropic/);
      assert.equal(await page.locator('#rankChart .ch-tip').isVisible(), true);
    }
    await identity.focus();
    assert.equal(await page.locator('#rankChart .ch-tip').isVisible(), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#rankChart .ch-tip').isVisible(), false);

    const firstBefore = await page.locator('#modelTable tbody tr').first().getAttribute('data-row');
    await page.locator('#modelTable th[data-sort="aaii"] .metric-help').click();
    await page.locator('#modelTable th[data-sort="aaii"]').focus();
    assert.equal(await portal.isVisible(), true, 'Sortable header focus explains the metric');
    assert.equal(await page.locator('#modelTable th[data-sort="aaii"]').getAttribute('aria-describedby'), 'metricTipPortal');
    assert.notEqual(await page.locator('#modelTable tbody tr').first().getAttribute('data-row'), firstBefore, 'Clicking the metric name still sorts');
    await page.locator('#modelTable th[data-sort="aaii"] .metric-help').click();
    for (const id of ['claude-sonnet55', 'claude-opus55', 'grok47']) {
      await page.locator(`#modelTable [data-cmp="${id}"]`).click();
    }
    const deepSWE = page.locator('#cmpBody .metric-help').filter({ has: page.locator('.metric-tip b:text-is("DeepSWE v1.1（Agent）")') });
    await deepSWE.hover();
    assert.equal(await portal.isVisible(), true);
    assert.match(await portal.innerText(), /代码|软件|仓库/);
    assert.ok(!(await deepSWE.innerText()).includes('?'));
    await page.screenshot({ path: path.join(shots, 'refined-compare-1440.png') });
    const bounds = await portal.boundingBox();
    assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 1440);

    for (const width of [1280, 390]) {
      await deepSWE.evaluate(el => el.blur());
      await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
      await page.waitForTimeout(200);
      await page.click('a[href="#models"]');
      await page.locator('#view-models').waitFor({ state: 'visible' });
      await deepSWE.focus();
      assert.equal(await portal.isVisible(), true);
      const tipBox = await portal.boundingBox();
      assert.ok(tipBox.x >= 0 && tipBox.x + tipBox.width <= width, 'Tooltip fits narrow screens');
      await page.keyboard.press('Escape');
      await page.screenshot({ path: path.join(shots, `refined-compare-${width}.png`) });
      for (const view of ['overview', 'models', 'pricing', 'intel']) {
        await page.click(`a[href="#${view}"]`);
        await page.locator(`#view-${view}`).waitFor({ state: 'visible' });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${view} does not overflow at ${width}`);
      }
      if (width === 390) {
        await page.click('a[href="#models"]');
        await page.locator('#view-models').waitFor({ state: 'visible' });
        const modelCell=page.locator('#modelTable tbody tr').first().locator('td').nth(2);
        await modelCell.scrollIntoViewIfNeeded();
        const before=await modelCell.boundingBox();
        await page.locator('#modelTable').evaluate(table=>table.parentElement.scrollLeft=table.scrollWidth);
        const after=await modelCell.boundingBox();
        assert.ok(Math.abs(before.x-after.x)<1, 'Model identity stays visible while scrolling the wide table');
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
        await page.screenshot({path:path.join(shots,'capability-table-390.png')});
        await page.locator('#modelTable').evaluate(table=>table.parentElement.scrollLeft=0);
        await page.locator('#rankChart .ch-identity').first().click();
        assert.equal(await page.locator('#rankChart .ch-tip').isVisible(), true, 'Tap reveals company on mobile');
        await page.screenshot({ path: path.join(shots, 'refined-models-390.png') });
      }
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.click('a[href="#overview"]');
    await page.locator('#view-overview').waitFor({ state: 'visible' });
    await page.screenshot({ path: path.join(shots, 'refined-overview-1440.png') });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: path.join(shots, 'refined-overview-390.png') });
    const broken = await page.locator('img').evaluateAll(images => images.filter(i => !i.complete || !i.naturalWidth).map(i => i.src));
    assert.deepEqual(broken, []);
    assert.deepEqual(errors, []);
    await page.evaluate(()=>{
      localStorage.setItem('llmboard.labColor','false');
      localStorage.removeItem('llmboard.colorPreferenceVersion');
      localStorage.setItem('llmboard.cols',JSON.stringify(['aaii','cai','tb40','cpt','priceOut','ctx','license']));
      localStorage.removeItem('llmboard.columnViewVersion');
    });
    await page.reload();
    assert.equal(await page.locator('#rankColor').getAttribute('aria-pressed'),'true','Existing monochrome preference is restored to company colors once');
    assert.equal(await page.locator('[data-table-view="capability"]').getAttribute('aria-pressed'),'true','Old default columns migrate to capability view');
    await page.click('a[href="#models"]');
    await page.locator('#view-models').waitFor({state:'visible'});
    await page.click('#rankColor');
    await page.locator('[data-table-view="summary"]').click();
    await page.reload();
    assert.equal(await page.locator('#rankColor').getAttribute('aria-pressed'),'false','Explicit color preference persists after migration');
    assert.equal(await page.locator('[data-table-view="summary"]').getAttribute('aria-pressed'),'true','Explicit table view persists');
    await page.evaluate(()=>{
      localStorage.setItem('llmboard.cols',JSON.stringify(['aaii','gpqa']));
      localStorage.removeItem('llmboard.columnViewVersion');
    });
    await page.reload();
    assert.equal(await page.locator('#modelTable th[data-sort="gpqa"]').count(),1,'Existing custom columns are preserved');
    assert.equal(await page.locator('#modelTable th[data-sort="cai"]').count(),0);
    assert.equal(await page.locator('.custom-view').getAttribute('hidden'),null);
    console.log(JSON.stringify({ target, contextualHelp: true, companyHoverAndTap: true, sorting: true, responsive: [1440, 1280, 390], brokenLogos: broken, errors }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
