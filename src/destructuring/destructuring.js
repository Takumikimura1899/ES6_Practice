var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var expense = {
    type: '交際費',
    amount: '4500 JPY'
};
// const type = expense.type;
// const amount = expense.amount;
var type = expense.type, amount = expense.amount;
console.log(type, amount);
var savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: 14040
};
function fileSummary(_a, _b) {
    var name = _a.name, extension = _a.extension, size = _a.size;
    var userName = _b.userName;
    return userName + ": " + name + "." + extension + "\u306E\u5BB9\u91CF\u306F" + size + "\u3067\u3059\u3002";
}
console.log(fileSummary(savedFile, { userName: 'taku' }));
var companies = ['Google', 'Facebook', 'Uber'];
var name1 = companies[0], name2 = companies[1], name3 = companies[2];
console.log(name1, name2, name3);
var fruits = ['もも', 'ぶどう', 'メロン', 'りんご'];
var fruit1 = fruits[0], fruit2 = fruits[1], rest = fruits.slice(2);
console.log(fruit1, rest);
var companies1 = [
    { name: 'Google', location1: 'マウンテンビュー' },
    { name: 'Facebook', location: 'メンロパーク' },
    { name: 'Uber', location: 'サンフランシスコ' },
];
var location1 = companies1[0].location1;
var Google = {
    locations: ['マウンテンビュー', 'ニューヨーク', 'ロサンゼルス']
};
var first = Google.locations[0];
console.log(first);
var locs = Google.locations;
var second = locs[1];
console.log(second);
var locations = Google.locations;
console.log(locations);
function signup(_a) {
    var userName = _a.userName, password = _a.password, email = _a.email, birthday = _a.birthday, city = _a.city;
    // ここでユーザーを作成してDBに保存する
}
var user1 = {
    userName: 'myUserName',
    password: 'myPassword',
    email: 'myemail@example.com',
    birthday: '1990/1/1',
    city: '東京'
};
console.log(signup(user1));
var points = [
    [4, 5],
    [10, 1],
    [0, 40],
];
console.log(points.map(function (_a) {
    var x = _a[0], y = _a[1];
    return { x: x, y: y };
}));
var classes = [
    ['化学', '1時限目', '鈴木先生'],
    ['物理', '2時限目', '佐藤先生'],
    ['数学', '3時限目', '木村先生'],
];
var classesAsObject = classes.map(function (_a) {
    var subject = _a[0], time = _a[1], teacher = _a[2];
    return { subject: subject, time: time, teacher: teacher };
});
var numbers3 = [1, 2, 3];
function doubleA(_a) {
    var head = _a[0], rest = _a.slice(1);
    if (!head) {
        return [];
    }
    return __spreadArray([2 * head], doubleA(rest), true);
}
console.log(doubleA(numbers3));
