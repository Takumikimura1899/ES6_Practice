var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addNumbers(numbers) {
    return numbers.reduce(function (sum, number) {
        return sum + number;
    }, 0);
}
console.log(addNumbers([1, 2, 3, 4, 5]));
function addNumbers2(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];
    return numbers.reduce(function (sum, number) {
        return sum + number;
    }, 0);
}
console.log(addNumbers2(1, 2, 3, 4, 5));
// rest演算子
function addNumbersRest() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, number) {
        return sum + number;
    }, 0);
}
console.log(addNumbersRest(1, 2, 3, 4, 5, 6, 7, 8));
var defaultColors = ['赤', '緑'];
var userFavoriteColors = ['オレンジ', '黄'];
var fallColors = ['茶', '紅葉'];
console.log(__spreadArray(__spreadArray([], defaultColors, true), userFavoriteColors, true));
console.log(__spreadArray(__spreadArray(__spreadArray(__spreadArray([
    '青'
], fallColors, true), [
    '紫'
], false), defaultColors, true), userFavoriteColors, true));
console.log(defaultColors.concat(userFavoriteColors));
function validateShoppingList() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.indexOf('牛乳') < 0) {
        return __spreadArray(['牛乳'], items, true);
    }
    return items;
}
console.log(validateShoppingList('オレンジ', 'パン'));
console.log(validateShoppingList('オレンジ', 'パン', '牛乳'));
var MathLibrary = {
    calculateProduct: function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        return this.multiply.apply(this, rest);
    },
    multiply: function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        return rest.reduce(function (sum, number) {
            return sum * number;
        }, 1);
    }
};
console.log(MathLibrary.calculateProduct(2, 3), MathLibrary.multiply(2, 3));
