// function makeAjaxRequest(url,method?) {
//     if(!method) {
//         method = 'GET'
//     }

//     // ajaxリクエストをするロジックがここにあると想定

//     return method;
// }

function makeAjaxRequest(url: string, method = 'GET') {
  return method;
}

console.log(
  makeAjaxRequest('google.com'),
  makeAjaxRequest('google.com', 'POST')
);

// function User(id) {
//   this.id = id;
// }
function User(id = generateId()) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999;
}

// function createAdminUser(user) {
//   user.admin = true;
//   return user;
// }

// console.log(createAdminUser(new User(generateId())));

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

console.log(createAdminUser());

function addSum(a?: number, b?: number) {
  if (a === undefined) {
    a = 0;
  }
  if (b === undefined) {
    b = 0;
  }
  return a + b;
}

function addSumES6(a: number = 0, b: number = 0) {
  return a + b;
}

console.log(addSum(2));
console.log(addSumES6(9));

function addOffset(style: { offset: any } = { offset: '' }) {
  style.offset = '10px';

  return style;
}
