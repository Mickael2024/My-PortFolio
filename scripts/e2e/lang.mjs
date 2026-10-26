import puppeteer from 'puppeteer-core'
const S = process.argv[2]
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })
await page.click('header nav button')
await new Promise((r) => setTimeout(r, 800))
console.log('lang:', await page.evaluate(() => document.documentElement.lang), '| h1:', await page.$eval('h1', (e) => e.textContent), '| nav:', await page.$eval('header nav ul li a', (e) => e.textContent))
await page.screenshot({ path: `${S}/hero-en.png` })
await page.reload({ waitUntil: 'networkidle0' })
console.log('persisted lang:', await page.evaluate(() => document.documentElement.lang))
await browser.close()
