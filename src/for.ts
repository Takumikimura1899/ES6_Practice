export function forLoop(arry: (string | number)[]) {
  for (let i = 0; i < arry.length; i++) {
    console.log('forLoop', i, ':', arry[i]);
  }
}
