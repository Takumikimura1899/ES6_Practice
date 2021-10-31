var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject();
    }, 3000);
});
console.log(promise);
promise
    .then(function () { return console.log('処理が完了しました!!!'); })
    .then(function () { return console.log('ここも実行されるよ！'); })["catch"](function () { return console.log('問題発生！'); });
var url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
