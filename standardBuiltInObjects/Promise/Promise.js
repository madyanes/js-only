/**
 * Promises
 *
 * Promises are a fundamental part of JavaScript, providing a way to handle asynchronous operations.
 * A Promise represents a value which might be available now, or in the future, or never.
 *
 * Characteristics of Promises:
 *    1. Single Value: Promises represent a single value that will be resolved or rejected.
 *    2. Immutable State: Once a Promise is resolved or rejected, its state cannot be changed.
 *    3. Error Handling: Promises have built-in error handling through .catch() or try...catch blocks.
 */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched successfully'), 0) // executed after 0 ms
  })
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

console.log(
  'This text will be printed first, because Promise will be executed later.'
)
