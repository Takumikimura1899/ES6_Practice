let numbers = [10, 20, 30];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  console.log(sum);
}

console.log(
  numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
);

let primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];

console.log(
  primaryColors.reduce((prev, primaryColor) => {
    prev.push(primaryColor.color);
    return prev;
  }, [])
);

console.log(
  primaryColors.map((primaryColor) => {
    // const arry = [];
    // arry.push(primaryColor.color);
    // return arry;
    return primaryColor.color;
  })
);

function balancedParens(string) {
  return !string.split('').reduce((prev, char) => {
    if (prev < 0) {
      return prev;
    }
    if (char === '(') {
      return prev + 1;
    }
    if (char === ')') {
      return prev - 1;
    }
  }, 0);
}

console.log(balancedParens(')('));
console.log(balancedParens('()'));

let trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
let totalDistance;

console.log(
  (totalDistance = trips.reduce((prev, trip) => {
    return prev + trip.distance;
  }, 0))
);

let desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' },
];

let deskTypes = desks.reduce(
  (prev, desk) => {
    if (desk.type === 'sitting') {
      prev.sitting++;
    } else {
      prev.standing++;
    }

    return prev;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

let numbers2 = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((acc, elem) => {
    let existingElem = acc.find((target) => {
      return target === elem;
    });

    if (!existingElem) {
      acc.push(elem);
    }
    return acc;
  }, []);
}
console.log(unique(numbers2));

const results = [
  '△',
  '〇',
  '〇',
  '△',
  '✕',
  '△',
  '✕',
  '〇',
  '△',
  '✕',
  '△',
  '〇',
  '✕',
  '〇',
  '✕',
];

function winningScore(array) {
  return array.reduce((prev, char) => {
    if (char === '〇') {
      return prev + 3;
    } else if (char === '△') {
      return prev + 1;
    } else {
      return prev;
    }
  }, 0);
}

console.log('winningScore', winningScore(results));
console.log('totalGames', results.length);
console.log('average', winningScore(results) / results.length);
