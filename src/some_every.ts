let computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

let allComputersCanRun = true;

let someComputersCanRun = false;

for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

// 全てがtrueだったらtrueどれか一つでもfalseだったらfalse 論理積
console.log(
  computers.every((computer) => {
    return computer.ram >= 16;
  })
);

// どれか一つでもtrueだったらtrue全てがfalseだったらfalse 論理和
console.log(
  computers.some((computer) => {
    return computer.ram >= 16;
  })
);

let names = ['けん', 'はなこ', 'そういちろう'];

console.log(
  names.every((name) => {
    return name.length >= 3;
  })
);

console.log(
  names.some((name) => {
    return name.length >= 3;
  })
);

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

let userName = new Field('my_username');
let password = new Field('my_password');
let birthday = new Field('2000/10/10');

let fields = [userName, password];

console.log(userName.validate() && password.validate() && birthday.validate());

let formIsValid = fields.every((field) => {
  return field.validate();
});

console.log(formIsValid);

if (formIsValid) {
  // サーバーにリクエストを投げる処理
} else {
  // エラーを表示する
}

let submittedUsers = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];
console.log(
  submittedUsers.every((submittedUser) => {
    return submittedUser.hasSubmitted === true;
  })
);

let requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
];

console.log(
  requests.some((request) => {
    return request.status === 'pending';
  })
);
