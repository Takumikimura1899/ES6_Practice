import { Item } from './item';
import { forLoop } from './for';
import { forEachLoop, forEachTotal, images } from './forEach';
import { doubledNumbersForEach, doubledNumbersMap, pluck } from './map';
import { commentsForPost, reject } from './filter';

let elem = document.getElementById('output');
let aBook = new Item('はじめてのTypeScript', 1980);
let colors = ['red', 'blue', 'green'];
let numbers = [2, 5, 7, 11];
let fruits = [
  { name: 'momo', price: 100 },
  { name: 'melon', price: 200 },
  { name: 'banana', price: 50 },
  { name: 'budou', price: 150 },
];
let post = { id: 4, title: '初めての投稿' };

let comments = [
  { postId: 4, comment: '良い記事ですね' },
  { postId: 3, comment: '勉強になりました' },
  { postId: 4, comment: 'なるほど' },
];

let products = [
  { name: 'きゅうり', type: '野菜', quantity: 10, price: 20 },
  { name: 'バナナ', type: 'フルーツ', quantity: 15, price: 30 },
  { name: 'セロリ', type: '野菜', quantity: 4, price: 40 },
  { name: 'オレンジ', type: 'フルーツ', quantity: 7, price: 50 },
  { name: 'キャベツ', type: '野菜', quantity: 3, price: 80 },
  { name: 'さんま', type: '魚', quantity: 2, price: 200 },
];

aBook.say(elem);

// forLoop(colors);

forEachLoop(colors);

forEachTotal(numbers);

images();

doubledNumbersForEach(numbers);

doubledNumbersMap(numbers);

console.log(pluck(fruits, 'price'));

console.log(
  products.filter((product) => {
    return (
      product.type === '野菜' && product.quantity > 3 && product.price > 30
    );
  })
);

console.log(commentsForPost(post, comments));

console.log(
  reject(numbers, (number: number) => {
    return number > 5;
  })
);
