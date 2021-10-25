// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function () {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function (title) {
//       return this.inventory.find((book) => book.title === title).price;
//     },
//   };
// }

function createBookShop(inventory: { title: string; price: number }[]) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title: string) {
      return this.inventory.find((book) => book.title === title)?.price;
    },
  };
}
const inventory = [
  { title: 'ハリーポッター', price: 1000 },
  { title: 'JavaScript入門', price: 1500 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('ハリーポッター'));

// function saveFile(url,data) {
//   $.ajax({method:'POST',url:url,data:data})
// }

// function saveFile(url, data) {
//   $.ajax({
//     data,
//     url,
//     method: 'POST',
//   });
// }

const color = 'red';

const Car2 = {
  color,
  drive() {
    return 'ブーーーン！';
  },
  getColor() {
    return this.color;
  },
};
