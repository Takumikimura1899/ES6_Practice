export function doubledNumbersForEach(arry: number[]) {
  let doubledNumbersArry: number[] = [];
  arry.forEach((elem) => {
    doubledNumbersArry.push(elem * 2);
  });
  console.log(doubledNumbersArry);
}
