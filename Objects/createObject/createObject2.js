// general function
function drive() {
  console.log(this.constructor, 'Vroom!')
  // console.log(typeof this.constructor) // output: function
}

// class
class ClassCar {
  drive() {
    drive.call(this)
  }
}

const car1 = new ClassCar()
car1.drive() // output: [class ClassCar] Vroom!

// constructor
function ConstructorCar() {}
ConstructorCar.prototype.drive = function () {
  drive.call(this)
}

const car2 = new ConstructorCar()
car2.drive() // output: [Function: ConstructorCar] Vroom!

// factory
const proto = {
  drive() {
    drive.call(this)
  },
}

const factoryCar = () => Object.create(proto)

const car3 = factoryCar()
car3.drive() // output: [class Object] Vroom!

/**
 * In JavaScript, any function can return a new object.
 * When it’s not a constructor function or class, it’s called a factory function.
 *
 * ES6 classes desugar to constructor functions,
 * so everything that follows about constructor functions also applies to ES6 classes:
 *
 *    class Foo {}
 *    console.log(typeof Foo); // function
 *
 * Read more: https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
 */
