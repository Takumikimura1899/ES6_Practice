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
function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function () {
            return this.inventory.reduce(function (total, book) { return total + book.price; }, 0);
        },
        priceForTitle: function (title) {
            var _a;
            return (_a = this.inventory.find(function (book) { return book.title === title; })) === null || _a === void 0 ? void 0 : _a.price;
        }
    };
}
var inventory = [
    { title: 'ハリーポッター', price: 1000 },
    { title: 'JavaScript入門', price: 1500 },
];
var bookShop = createBookShop(inventory);
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
var color = 'red';
var Car2 = {
    color: color,
    drive: function () {
        return 'ブーーーン！';
    },
    getColor: function () {
        return this.color;
    }
};
