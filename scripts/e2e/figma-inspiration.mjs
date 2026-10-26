import puppeteer from 'puppeteer-core'
const S = process.argv[2]
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage()
await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36')
await page.setViewport({ width: 1440, height: 1000 })
try {
  await page.goto('https://www.figma.com/fr-fr/communaute/modeles-de-portfolio?resource_type=files&editor_type=figma', { waitUntil: 'networkidle2', timeout: 60000 })
} catch (e) { console.log('goto:', e.message) }
await new Promise((r) => setTimeout(r, 4000))
for (let i = 0; i < 6; i++) { await page.evaluate(() => window.scrollBy(0, 900)); await new Promise((r) => setTimeout(r, 800)) }
await page.evaluate(() => window.scrollTo(0, 0))
await new Promise((r) => setTimeout(r, 1000))
console.log('title:', await page.title())
const texts = await page.evaluate(() => Array.from(document.querySelectorAll('a[href*="/community/file/"], a[href*="/communaute/fichier/"]')).map((a) => (a.textContent || '').trim().replace(/\s+/g, ' ')).filter(Boolean).slice(0, 60))
console.log(JSON.stringify(texts, null, 0))
const imgs = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map((i) => i.src).filter((s) => s.includes('figma') && !s.includes('avatar')).slice(0, 20))
console.log(JSON.stringify(imgs, null, 0))
await page.screenshot({ path: `${S}/figma-1.png`, fullPage: false })
await page.evaluate(() => window.scrollTo(0, 1000)); await new Promise((r) => setTimeout(r, 800))
await page.screenshot({ path: `${S}/figma-2.png`, fullPage: false })
await page.evaluate(() => window.scrollTo(0, 2000)); await new Promise((r) => setTimeout(r, 800))
await page.screenshot({ path: `${S}/figma-3.png`, fullPage: false })
await browser.close()
