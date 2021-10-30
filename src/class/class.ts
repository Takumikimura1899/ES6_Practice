//ES5

// function Car(options) {
//   this.title = options.title;
// }

// Car.prototype.drive = function () {
//   return 'ウィーン';
// };

// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// Toyota.prototype.honk = function () {
//   return 'ブブー!!';
// };

// let car = new Car({ title: 'プリウス' });

// console.log(car.drive());

// const toyota = new Toyota({ color: 'red', title: 'アクア' });
// console.log(toyota);

// console.log(toyota.drive(), toyota.honk());

//ES6

class Car {
  // constructor(options) {
  //     this.title = options.title
  // }
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'ウィーン';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); //Car.constructor()
    this.color = options.color;
  }
  honk() {
    return 'ブブー！！';
  }
}

const toyota = new Toyota({ color: 'red', title: 'アクア' });
console.log(toyota, toyota.honk());

const car = new Car({ title: 'アクア' });
console.log(car, car.drive());

class Monster {
  constructor(options) {
    (this.health = 100), (this.name = options.name);
  }
}

const monster = new Monster({ name: 'スライム' });
console.log(monster);

class Snake extends Monster {
  bite(targetSnake) {
    targetSnake.health -= 10;
    console.log(targetSnake);
  }
}

const snake = new Snake({ name: 'baip' });
const snake2 = new Snake({ name: 'viper' });
snake.bite(snake2);
