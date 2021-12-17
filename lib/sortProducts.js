const isNES = new RegExp(/(nes)|(never ending stim)/);
const isMoonFlower = new RegExp(/(moon flower)/);
const xMas = new RegExp(/(x-mas)|(x\(mas\))/);
const isMiami = new RegExp(/(miami)/);
export default function sortProducts(products) {
  return products.sort((a, b) => {
    let order = 0;
    if (a.title > b.title) {
      order = 1;
    } else if (a.title < b.title) {
      order = -1;
    }
    if (a.type > b.type) {
      order = 1;
    } else if (a.type < b.type) {
      order = -1;
    }
    if (xMas.test(a.title.toLowerCase()) && !xMas.test(b.title.toLowerCase())) {
      order = -1;
    } else if (xMas.test(b.title.toLowerCase()) && !xMas.test(a.title.toLowerCase())) {
      order = 1;
    }
    if (isMoonFlower.test(a.title.toLowerCase()) && !isMoonFlower.test(b.title.toLowerCase())) {
      order = -1;
    } else if (isMoonFlower.test(b.title.toLowerCase()) && !isMoonFlower.test(a.title.toLowerCase())) {
      order = 1;
    }
    if (isNES.test(a.title.toLowerCase()) && !isNES.test(b.title.toLowerCase())) {
      order = -1;
    } else if (isNES.test(b.title.toLowerCase()) && !isNES.test(a.title.toLowerCase())) {
      order = 1;
    }
    if (isMiami.test(a.title.toLowerCase()) && !isMiami.test(b.title.toLowerCase())) {
      order = -1;
    } else if (isMiami.test(b.title.toLowerCase()) && !isMiami.test(a.title.toLowerCase())) {
      order = 1;
    }
    return order;
  });
}
