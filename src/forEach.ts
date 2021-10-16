export function forEachLoop(arry: (string | number)[]) {
  arry.forEach((element) => {
    console.log(element);
  });
}

export function forEachTotal(arry: number[]) {
  let total = 0;
  arry.forEach((element) => {
    total += element;
    console.log(total);
  });
}
