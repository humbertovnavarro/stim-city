// Runs in the browser
export default function evaluater() {
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