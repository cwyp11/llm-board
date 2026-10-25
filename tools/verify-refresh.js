/* Validate evidence, versions, dates and missing-data semantics of the refresh. */
const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const c={location:{pathname:'/index.html'}};
vm.createContext(c);
vm.runInContext(fs.readFileSync('src/js/data.js','utf8'),c);
const data=vm.runInContext('({META,MODELS,METRICS,SOURCES,SUBSCRIPTIONS,VENDORS,CHANGES,TIMELINE,NOTES,AGENT_MATRIX,AGENT_HISTORY:typeof AGENT_HISTORY==="undefined"?null:AGENT_HISTORY,COVERAGE:typeof COVERAGE==="undefined"?null:COVERAGE})',c);
assert.equal(data.META.dataSnapshot,'2026-10-24');
assert.equal(data.META.pageBuilt,'2026-10-25');
assert.ok(data.MODELS.length>50);
const byId=Object.fromEntries(data.MODELS.map(m=>[m.id,m]));
assert.equal(new Set(data.MODELS.map(m=>m.id)).size,data.MODELS.length);
assert.equal(byId['kimi-k31pro'].aaii.v,55);
assert.equal(byId['kimi-k31pro'].openWeights,'pending','Promised weights are not already-open weights');
assert.equal(byId['muse-wonder-full'].cpt,null,'No invented per-task API cost for a subscription-only model');
assert.equal(byId['claude-sonnet55'].cpt.v,5.46);
assert.ok(byId['ds-v41flash-1017']);
assert.ok(byId['ds-v41flash'],'The previous version remains available');
assert.ok(byId['claude-opus55'].gdpval21.v>1800);
assert.ok(data.METRICS.find(m=>m.k==='cai2').basis.includes('v2.0'));
assert.ok(data.METRICS.find(m=>m.k==='cai').history);
assert.ok(data.METRICS.find(m=>m.k==='gdpval').history);
assert.ok(data.METRICS.find(m=>m.k==='scicode').underReview);
let refreshed=0,historical=0;
for(const m of data.MODELS){
  assert.ok(m.brand&&m.org);
  for(const key of ['paramsTotal','paramsAct'])if(m[key]!=null){
    assert.ok(m[key].v>=100000000,`${m.id}.${key}: store absolute parameters, not billions`);
  }
  if(m.ctx!=null)assert.ok(m.ctx.v<=20000000,`${m.id}: context must not contain parameter count`);
  for(const metric of data.METRICS){
    const v=m[metric.k];if(v==null)continue;
    assert.equal(typeof v.v,'number',`${m.id}.${metric.k} must be numeric`);
    assert.ok(Number.isFinite(v.v));
    assert.ok(v.asOf<='2026-10-24');
    if(v.asOf==='2026-10-24'){
      refreshed++;
      assert.ok(v.src&&data.SOURCES[v.src],`${m.id}.${metric.k} has a source`);
      assert.ok(/^https:\/\//.test(v.url||data.SOURCES[v.src].url),`${m.id}.${metric.k} has an evidence URL`);
      assert.ok(v.basis,`${m.id}.${metric.k} records its comparison basis`);
    }else historical++;
  }
}
assert.equal(byId['reflection-beam'].paramsTotal.v,501300000000);
assert.equal(byId['reflection-beam'].paramsAct.v,23400000000);
assert.equal(byId['kimi-k31pro'].paramsTotal??null,null,'Do not transfer K3 parameters to K3.1');
assert.equal(byId['ds-v41flash-1017'].paramsTotal??null,null,'Do not merge backbone and Engram counts');
assert.ok(refreshed>200);
assert.ok(historical>0,'Unreverified data must not be stamped as current');
assert.ok(data.AGENT_MATRIX.length>0&&data.AGENT_HISTORY.rows.length>0);
for(const row of data.AGENT_MATRIX)for(const cell of row.cells){
  if(cell.s!=null){assert.equal(cell.version,'2.0');assert.ok(cell.url);}
}
assert.ok(data.SUBSCRIPTIONS.every(s=>s.checkedAt==='2026-10-24'&&s.url));
assert.ok(data.VENDORS.length>=18);
assert.ok(data.CHANGES.slice(0,4).every(c=>c.date>='2026-10-07'));
assert.ok(data.TIMELINE.some(t=>t.d==='10-24'));
for(const key of ['models','pricing','agents','subscriptions','vendors','research'])assert.ok(data.COVERAGE[key]);
// Exercise the production comparison function against incompatible and missing evidence.
const production=fs.readFileSync('src/js/app.js','utf8').match(/function bestOf\(list, mk\)\{[\s\S]*?\n\}/);
assert.ok(production);
vm.runInContext('const MET=Object.fromEntries(METRICS.map(m=>[m.k,m]));\n'+production[0],c);
const sonnet=structuredClone(byId['claude-sonnet55']),opus=structuredClone(byId['claude-opus55']);
assert.equal(c.bestOf([sonnet,opus],'aaii').v,Math.max(sonnet.aaii.v,opus.aaii.v));
assert.equal(c.bestOf([sonnet,opus],'priceOut').v,Math.min(sonnet.priceOut.v,opus.priceOut.v));
assert.equal(c.bestOf([sonnet,opus],'scicode').reason,'review');
const changed=structuredClone(sonnet);
changed.aaii.basis='Other benchmark version';
assert.equal(c.bestOf([changed,opus],'aaii').reason,'basis');
changed.aaii=structuredClone(sonnet.aaii);changed.aaii.variantMismatch=true;
assert.equal(c.bestOf([changed,opus],'aaii').reason,'variant');
changed.aaii=structuredClone(sonnet.aaii);changed.aaii.asOf='2026-10-02';
assert.equal(c.bestOf([changed,opus],'aaii').reason,'dated');
changed.aaii=structuredClone(sonnet.aaii);changed.aaii.kind='vendor';
assert.equal(c.bestOf([changed,opus],'aaii').reason,'mixed');
changed.aaii=null;
assert.equal(c.bestOf([changed,opus],'aaii').reason,'thin');
const partial=c.bestOf([changed,sonnet,opus],'aaii');
assert.equal(partial.partial,true);assert.equal(partial.have,2);
changed.apiStatus='retired';
assert.equal(c.bestOf([changed,opus],'priceOut').reason,'unavailable');
const elo=(v,low,high)=>({gdpval21:{v,ciLow:low,ciHigh:high,kind:'ind',basis:'same',asOf:'2026-10-24'}});
assert.equal(c.bestOf([elo(1900,1850,1950),elo(1880,1830,1930)],'gdpval21').reason,'ci');
assert.equal(c.bestOf([elo(1900,1870,1930),elo(1800,1770,1830)],'gdpval21').v,1900);
console.log(JSON.stringify({models:data.MODELS.length,vendors:data.VENDORS.length,metrics:data.METRICS.length,refreshed,historical,agentRows:data.AGENT_MATRIX.length,subscriptions:data.SUBSCRIPTIONS.length,comparisonGuards:true,date:data.META.dataSnapshot},null,2));
