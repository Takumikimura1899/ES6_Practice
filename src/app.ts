import { Item } from './item';
import { forLoop } from './for';
import { forEachLoop, forEachTotal } from './forEach';

let elem = document.getElementById('output');
let aBook = new Item('はじめてのTypeScript', 1980);
let colors = ['red', 'blue', 'green'];
let numbers = [2, 5, 7, 11];

aBook.say(elem);

// forLoop(colors);

forEachLoop(colors);

forEachTotal(numbers);
