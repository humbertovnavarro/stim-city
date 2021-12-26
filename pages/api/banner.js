const URL = 'https://stim-city.creator-spring.com';
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
let imageCache = '';
let interval = null;
async function scrape() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.setUserAgent(randomUseragent.getRandom());
  await page.goto(URL);
  await page.waitForTimeout(1000);
  const image = await page.evaluate(() => {
    function parseImage($el) {
      const backgroundImage = $el.style.backgroundImage;
      const start = backgroundImage.indexOf('"') + 1;
      const end = backgroundImage.indexOf('"', start);
      const url = backgroundImage.substring(start, end);
      return url;
    }
    return(parseImage(document.querySelector('.hero__inner')));
  });
  browser.close();
  return image;
}
export default async function getBanner(req, res) {
  if (imageCache === '') {
    imageCache = await scrape();
  }
  if (!interval) {
    interval = setInterval(async () => {
       imageCache = await scrape();
    }, 6 * 60 * 1000)
  }
  res.redirect(307, imageCache);
}
