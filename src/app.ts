import { Item } from './item';
import { forLoop } from './for';
import { forEachLoop, forEachTotal, images } from './forEach';
import { doubledNumbersForEach, doubledNumbersMap, pluck } from './map';

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

aBook.say(elem);

// forLoop(colors);

forEachLoop(colors);

forEachTotal(numbers);

images();

doubledNumbersForEach(numbers);

doubledNumbersMap(numbers);

console.log(pluck(fruits, 'price'));
