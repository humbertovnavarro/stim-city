import { product } from 'puppeteer';
import evaluater from '../../lib/evaluator';
import 'fs';

const URL = 'https://stim-city.creator-spring.com';
const fs = require('fs');
const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
let productCache = [];
let interval = null;

try {
    productCache = JSON.parse(fs.readFileSync('products.json'));
    console.log("loaded files from cache")
} catch(error) {
    consoler.error('Could not read cache from file');
}

async function scrape() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    page.setUserAgent(randomUseragent.getRandom());
    await page.goto(URL);
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
        window.scrollTo(0,document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    let products = [];
    try {
        products = await page.evaluate(evaluater);
    } catch(error) {
        browser.close();
        console.error("Error while scraping page.");
        return;
    }
    if(!Array.isArray(products) || products.length === 0) {
        console.log('Bad scraping data');
        browser.close();
        return;
    }
    productCache = products;
    try {
        fs.writeFileSync('./products.json', JSON.stringify(products, null, 2));
    } catch {
        console.error("Could not write cache to file");
    }
    browser.close();
}

export default async function handler(_req, res) {
    if(productCache.length === 0) {
        await scrape();
    }
    if(!interval) {
        interval = setInterval(async () => {
            try {
                await scrape();
            } catch(error) {
                console.error(error);
            }
        },5 * 60 * 1000)
    }
    res.send(productCache);
}
