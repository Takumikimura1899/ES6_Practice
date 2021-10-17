export function doubledNumbersForEach(arry: number[]) {
  let doubledNumbersArry: number[] = [];
  arry.forEach((elem) => {
    doubledNumbersArry.push(elem * 2);
  });
  console.log(doubledNumbersArry);
}

export function doubledNumbersMap(arry: number[]) {
  let doubled = arry.map((elem) => {
    return elem * 2;
  });
  console.log('map', doubled);
}

let cars = [
  { type: '軽自動車', price: '安い' },
  { type: '高級車', price: '高い' },
];

let prices = cars.map((car) => {
  return car.price;
});

export function pluck(arry: any, property: string) {
  return arry.map((elem: any) => {
    return elem[property];
  });
}
