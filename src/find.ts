let users = [{ name: '太郎' }, { name: '次郎' }, { name: '三郎' }];

let user;

(() => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === '次郎') {
      user = users[i];
      break;
    }
  }
  console.log(user);
})();

console.log(
  users.find((user) => {
    return user.name === '次郎';
  })
);

function Car(model) {
  this.model = model;
}

let cars = [new Car('プリウス'), new Car('ノート'), new Car('アクア')];

console.log(
  cars.find((car) => {
    return car.model === 'アクア';
  })
);

let posts = [
  { id: 1, title: '古い投稿' },
  { id: 2, title: '新しい投稿' },
];

let comment = { postId: 2, content: 'いいね！' };

function postForComment(posts, comment) {
  return posts.find((post) => {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));

let adminUsers = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

console.log(adminUsers.find((user) => user.admin === true));

let accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

console.log(accounts.find((account) => account.balance === 12));

function findWhere(array, criteria) {
  return array.find((elem) => {
    let property = Object.keys(criteria)[0];

    return elem[property] === criteria[property];
  });
}

let ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

console.log(findWhere(ladders, { height: 25 }));
