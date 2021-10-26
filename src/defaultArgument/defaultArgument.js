// function makeAjaxRequest(url,method?) {
//     if(!method) {
//         method = 'GET'
//     }
//     // ajaxリクエストをするロジックがここにあると想定
//     return method;
// }
function makeAjaxRequest(url, method) {
    if (method === void 0) { method = 'GET'; }
    return method;
}
console.log(makeAjaxRequest('google.com'), makeAjaxRequest('google.com', 'POST'));
// function User(id) {
//   this.id = id;
// }
function User(id) {
    if (id === void 0) { id = generateId(); }
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
function createAdminUser(user) {
    if (user === void 0) { user = new User(generateId()); }
    user.admin = true;
    return user;
}
console.log(createAdminUser());
function addSum(a, b) {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}
function addSumES6(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log(addSum(2));
console.log(addSumES6(9));
function addOffset(style) {
    if (style === void 0) { style = { offset: '' }; }
    style.offset = '10px';
    return style;
}
