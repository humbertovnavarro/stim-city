import { product } from 'puppeteer';
import 'fs';

const URL = 'https://stim-city.creator-spring.com';
const fs = require('fs');
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
let browser = null;
let page = null;
let productCache = [];
let interval = null;

try {
    productCache = JSON.parse(fs.readFileSync('products.json'));
    console.log("loaded files from cache")
} catch(error) {
    consoler.error('Could not read cache from file');
}
// Runs in the browser
function evaluater() {
        const scrapedProducts = [];
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
            const map = new Map();
            $el.querySelectorAll('.product-tile-additional-image').forEach($el => {
                const url = parseImage($el);
                if (!map.has(url) && url !== frontImage)
                    additionalImages.push(parseImage($el));
                map.set(url, true);
            });
            const link = $el.querySelector('.product-tile-link-wrapper').href;
            scrapedProducts.push({
                price,
                title,
                type,
                frontImage,
                additionalImages,
                link
            });
        });
        return scrapedProducts;
}

async function scrape() {
    if(!browser) browser = await puppeteer.launch({headless: true});
    if(!page) page = await browser.newPage();
    page.setUserAgent(randomUseragent.getRandom());
    await page.goto(URL);
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
        window.scrollTo(0,document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    const products = await page.evaluate(evaluater);
    if(!Array.isArray(products) || products.length === 0) {
        console.log('Bad scraping data');
        browser.close();
        return;
    }
    productCache = products;
    fs.writeFileSync('./products.json', JSON.stringify(products));
}

export default async function handler(req, res) {
    if(!interval) {
        interval = setInterval(async () => {
            try {
                await scrape();
            } catch(error) {
                console.error(error);
            }
        }, 5 * 60 * 1000)
    }
    res.send(productCache);
}
