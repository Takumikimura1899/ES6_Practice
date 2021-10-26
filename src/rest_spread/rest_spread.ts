function addNumbers(numbers: number[]) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
console.log(addNumbers([1, 2, 3, 4, 5]));

function addNumbers2(a: number, b: number, c: number, d: number, e: number) {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
console.log(addNumbers2(1, 2, 3, 4, 5));

// rest演算子
function addNumbersRest(...numbers: number[]) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbersRest(1, 2, 3, 4, 5, 6, 7, 8));

const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黄'];
const fallColors = ['茶', '紅葉'];

console.log([...defaultColors, ...userFavoriteColors]);
console.log([
  '青',
  ...fallColors,
  '紫',
  ...defaultColors,
  ...userFavoriteColors,
]);

console.log(defaultColors.concat(userFavoriteColors));

function validateShoppingList(...items: string[]) {
  if (items.indexOf('牛乳') < 0) {
    return ['牛乳', ...items];
  }
  return items;
}

console.log(validateShoppingList('オレンジ', 'パン'));
console.log(validateShoppingList('オレンジ', 'パン', '牛乳'));

const MathLibrary = {
  calculateProduct(...rest: number[]) {
    return this.multiply(...rest);
  },
  multiply(...rest: number[]) {
    return rest.reduce((sum, number) => {
      return sum * number;
    }, 1);
  },
};
console.log(MathLibrary.calculateProduct(2, 3), MathLibrary.multiply(2, 3));
