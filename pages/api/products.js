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
        const prices = [];
        const titles = [];
        const types = [];
        const frontImages = [];
        const backImages = [];
        const links = [];
        function parseImage($el) {
            const backgroundImage = $el.style.backgroundImage;
            const start = backgroundImage.indexOf('"') + 1;
            const end = backgroundImage.indexOf('"', start);
            const url = backgroundImage.substring(start, end);
            return url;
        }
        document.querySelectorAll('.product-tile-price').forEach($el => {
            prices.push($el.textContent);
        });
        document.querySelectorAll('.product-tile-title').forEach($el => {
            titles.push($el.textContent);
        });
        document.querySelectorAll('.product-tile-product').forEach($el => {
            types.push($el.textContent);
        });
        document.querySelectorAll('.product-tile-image-default').forEach($el => {
            frontImages.push(parseImage($el));
        });
        document.querySelectorAll('.product-tile-link-wrapper').forEach($el => {
            links.push($el.href);
        });
        for(let i = 0; i < titles.length; i++) {
            products.push({
                price: prices[i],
                title: titles[i],
                type: types[i],
                frontImage: frontImages[i],
                link: links[i]
            });
        }
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