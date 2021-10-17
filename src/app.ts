import { Item } from './item';
import { forLoop } from './for';
import { forEachLoop, forEachTotal, images } from './forEach';
import { doubledNumbersForEach } from './map';

let elem = document.getElementById('output');
let aBook = new Item('はじめてのTypeScript', 1980);
let colors = ['red', 'blue', 'green'];
let numbers = [2, 5, 7, 11];

aBook.say(elem);

// forLoop(colors);

forEachLoop(colors);

forEachTotal(numbers);

images();

doubledNumbersForEach(numbers);
