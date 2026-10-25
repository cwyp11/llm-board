/* Verify the deployed release, including committed bytes and browser runtime. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const cp=require('node:child_process');
const crypto=require('node:crypto');
const {chromium}=require('playwright-core');
const root=path.resolve(__dirname,'..');
const target=process.argv[2]||'https://cwyp11.github.io/llm-board/?verify='+Date.now();
const digest=v=>crypto.createHash('sha256').update(v).digest('hex');

(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  const errors=[],consoleErrors=[],failed=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')consoleErrors.push({text:m.text(),url:m.location().url})});
  page.on('requestfailed',r=>failed.push({url:r.url(),error:r.failure().errorText}));
  const response=await page.goto(target,{waitUntil:'networkidle'});
  const remoteHash=digest(await response.body());
  // Git normalizes Windows CRLF; compare against committed release bytes.
  const committed=cp.execFileSync('git',['show','HEAD:index.html'],{cwd:root,maxBuffer:4000000});
  const committedHash=digest(committed);
  const local=fs.readFileSync(path.join(root,'index.html'),'utf8').replace(/\r\n/g,'\n');
  assert.equal(digest(local),committedHash,'Working release matches the committed release after newline normalization');
  const info=await page.evaluate(()=>({date:META.dataSnapshot,built:META.pageBuilt,models:MODELS.length,vendors:VENDORS.length,agentConfigurations:AGENT_MATRIX.length,subscriptionGroups:SUBSCRIPTIONS.length}));
  const shots=path.join(root,'screenshots');fs.mkdirSync(shots,{recursive:true});
  await page.screenshot({path:path.join(shots,'public-overview-1440.png')});
  await page.click('a[href="#models"]');
  for(const id of ['claude-opus55','claude-sonnet55','kimi-k31pro'])await page.locator(`#modelTable [data-cmp="${id}"]`).click();
  await page.locator('#cmpBody').evaluate(el=>{el.closest('.sec').scrollIntoView({block:'start'});window.scrollBy(0,-86)});
  await page.screenshot({path:path.join(shots,'public-compare-1440.png')});
  const broken=await page.locator('img').evaluateAll(images=>images.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));
  await page.setViewportSize({width:390,height:844});await page.click('a[href="#overview"]');
  await page.screenshot({path:path.join(shots,'public-overview-390.png')});
  console.log(JSON.stringify({target,status:response.status(),remoteHash,committedHash,info,broken,pageErrors:errors,consoleErrors,failedRequests:failed},null,2));
  assert.equal(response.status(),200);assert.equal(remoteHash,committedHash);
  assert.equal(info.models,72);assert.equal(info.date,'2026-10-24');assert.equal(info.built,'2026-10-25');
  assert.deepEqual(errors,[]);assert.deepEqual(consoleErrors,[]);assert.deepEqual(broken,[]);assert.deepEqual(failed,[]);
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
