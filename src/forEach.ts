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

export function images() {
  let images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 },
  ];

  let areas: number[] = [];

  images.forEach((image) => {
    let total = image.height * image.width;
    areas.push(total);
    console.log(areas);
  });
}
