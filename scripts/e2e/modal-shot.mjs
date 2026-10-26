import puppeteer from 'puppeteer-core'
const S = process.argv[2]
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })
await page.evaluate(() => document.querySelector('[data-project="jirolink"]')?.click())
await new Promise((r) => setTimeout(r, 900))
await page.screenshot({ path: `${S}/modal2.png` })
await browser.close()
