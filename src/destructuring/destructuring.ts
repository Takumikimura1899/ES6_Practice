const expense = {
  type: '交際費',
  amount: '4500 JPY',
};

// const type = expense.type;
// const amount = expense.amount;

const { type, amount } = expense;

console.log(type, amount);

const savedFile = {
  extension: 'jpg',
  name: 'profile',
  size: 14040,
};

function fileSummary(
  {
    name,
    extension,
    size,
  }: {
    extension: string;
    name: string;
    size: number;
  },
  { userName }: { userName: string }
) {
  return `${userName}: ${name}.${extension}の容量は${size}です。`;
}

console.log(fileSummary(savedFile, { userName: 'taku' }));

const companies = ['Google', 'Facebook', 'Uber'];

const [name1, name2, name3] = companies;

console.log(name1, name2, name3);

const fruits = ['もも', 'ぶどう', 'メロン', 'りんご'];

const [fruit1, fruit2, ...rest] = fruits;
console.log(fruit1, rest);

const companies1 = [
  { name: 'Google', location1: 'マウンテンビュー' },
  { name: 'Facebook', location: 'メンロパーク' },
  { name: 'Uber', location: 'サンフランシスコ' },
];

const [{ location1 }] = companies1;

const Google = {
  locations: ['マウンテンビュー', 'ニューヨーク', 'ロサンゼルス'],
};

const {
  locations: [first],
} = Google;

console.log(first);

const { locations: locs } = Google;
const [, second] = locs;

console.log(second);

const { locations } = Google;
console.log(locations);

function signup({ userName, password, email, birthday, city }) {
  // ここでユーザーを作成してDBに保存する
}

const user1 = {
  userName: 'myUserName',
  password: 'myPassword',
  email: 'myemail@example.com',
  birthday: '1990/1/1',
  city: '東京',
};

console.log(signup(user1));

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

console.log(
  points.map(([x, y]) => {
    return { x, y };
  })
);
