import { product } from 'puppeteer';
import 'fs';
const URL = 'https://stim-city.creator-spring.com';
const fs = require('fs');
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
let productCache = [];
if(fs.existsSync('products.json'))
productCache = JSON.parse(fs.readFileSync('products.json'));
let interval = null;
async function scrape() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    page.setUserAgent(randomUseragent.getRandom());
    await page.goto(URL);
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
        window.scrollTo(0,document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    const products = await page.evaluate(() => {
        const products = [];
        function parseImage($el) {
            const backgroundImage = $el.style.backgroundImage;
            const start = backgroundImage.indexOf('"') + 1;
            const end = backgroundImage.indexOf('"', start);
            const url = backgroundImage.substring(start, end);
            return url;
        }
        document.querySelectorAll('.product-tile').forEach($el => {
            const price = $el.querySelector('.product-tile-price').innerText;
            const title = $el.querySelector('.product-tile-title').innerText;
            const type = $el.querySelector('.product-tile-product').innerText;
            const frontImage = parseImage($el.querySelector('.product-tile-image-default'));
            const additionalImages = [];
            $el.querySelectorAll('.product-tile-additional-image').forEach($el => {
                additionalImages.push(parseImage($el));
            });
            const link = $el.querySelector('.product-tile-link-wrapper').href;
            products.push({
                price,
                title,
                type,
                frontImage,
                additionalImages,
                link
            });
        });
        return products;
    });
    browser.close();
    fs.writeFile('products.json', JSON.stringify(products));
    return products;
}

export default async function handler(req, res) {
    if(productCache.length === 0) {
        productCache =  await scrape();
    }
    if(!interval) {
        interval = setInterval(async () => {
            productCache = await scrape();
        },5 * 60 * 1000)
    }
    res.send(productCache);
}
