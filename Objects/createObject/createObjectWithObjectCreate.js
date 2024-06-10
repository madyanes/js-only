// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
  },
}

const me = Object.create(person)

me.name = 'Madyan' // "name" is a property set on "me", but not on "person"
me.isHuman = true // Inherited properties can be overwritten
me.printIntroduction() // Output: "My name is Madyan. Am I human? true"

/******************************************************************************** */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
/******************************************************************************** */

// Below is an example of how to use Object.create() to achieve classical inheritance.
// This is for a single inheritance, which is all that JavaScript supports.

// Shape - superclass
function Shape() {
  this.x = 0
  this.y = 0
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.info('Shape moved.')
}

// Rectangle - subclass
function Rectangle() {
  Shape.call(this) // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
})

const rect = new Rectangle()

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle) // true
console.log('Is rect an instance of Shape?', rect instanceof Shape) // true
rect.move(1, 1) // Logs 'Shape moved.'

console.log(rect) // Rectangle { x: 1, y: 1, move: [Function], }
