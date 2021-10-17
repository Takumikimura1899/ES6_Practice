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
