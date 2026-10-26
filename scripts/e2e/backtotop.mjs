import puppeteer from 'puppeteer-core'
const S = process.argv[2]
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage()
for (const [w, h, mobile] of [[1440, 900, false], [390, 844, true]]) {
  await page.setViewport({ width: w, height: h, isMobile: mobile, hasTouch: mobile })
  await page.goto('about:blank')
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })
  const before = await page.$('a[href="#top"][title]')
  await page.evaluate(() => window.scrollTo(0, 2400))
  await new Promise((r) => setTimeout(r, 700))
  const btn = await page.$('a[href="#top"][title]')
  const box = btn ? await btn.boundingBox() : null
  console.log(`${w}px: hidden at top=${before === null}, visible after scroll=${btn !== null}`, box ? `pos ${Math.round(box.x)},${Math.round(box.y)} (viewport ${w}x${h})` : '')
  await page.screenshot({ path: `${S}/btt-${w}.png` })
  if (btn) {
    await btn.click()
    await new Promise((r) => setTimeout(r, 1200))
    console.log(`${w}px: scrollY after click =`, await page.evaluate(() => window.scrollY))
  }
}
await browser.close()
