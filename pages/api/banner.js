const URL = 'https://stim-city.creator-spring.com';
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
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
  const imageData = await axios({
    url: image,
    method: 'GET',
    responseType: 'stream'
  });
  const writer = fs.createWriteStream('./public/banner.temp.jpg');
  imageData.data.pipe(writer);
  writer.on('finish', () => {
    fs.copyFile('./public/banner.temp.jpg', './public/banner.jpg', err => {
      console.error(err);
    });
  });
  writer.on('error', (err) => {
    console.error(err);
  });
  return image;
}
export default async function getBanner(req, res) {
  if (!interval) {
    await scrape();
    interval = setInterval(async () => {
      await scrape();
    }, 6 * 60 * 1000)
  }
  res.redirect(307, '/banner.jpg');
}
