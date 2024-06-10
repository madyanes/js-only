// Object literal
const product1 = {
  name: 'Monitor 20 inches',
  price: 300,
  available: true,
}

// Object.create()
// Using an existing object as the prototype of the newly created object.
const latestProduct = Object.create(product1)

// Object constructor function
function Product(name, price) {
  this.name = name
  this.price = price
  this.available = true
}

// Object factory function
function createProduct(name, price) {
  return {
    name,
    price,
    available: true,
  }
}

// Class
class AddProduct {
  constructor(name, price) {
    this.name = name
    this.price = price
    this.available = true
  }
}

const product2 = createProduct('Monitor 24 inches', 400)
const product3 = new Product('Monitor 27 inches', 500)
const product4 = new AddProduct('Monitor 30 inches', 600)

console.log('product2', product2) // { name: 'Monitor 24 inches', price: 400, available: true }
console.log('product3', product3) // Product { name: 'Monitor 27 inches', price: 500, available: true }
console.log('product4', product4) // AddProduct { name: 'Monitor 30 inches', price: 600, available: true }
console.log('latestProduct', latestProduct) // { name: 'Monitor 20 inches', price: 300, available: true }
