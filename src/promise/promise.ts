const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});
console.log(promise);

promise
  .then(() => console.log('処理が完了しました!!!'))
  .then(() => console.log('ここも実行されるよ！'))
  .catch(() => console.log('問題発生！'));

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
