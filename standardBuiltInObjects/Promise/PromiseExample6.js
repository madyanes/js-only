/**
 * Promise Concurrency -> Promise.allSettled()
 * It fulfills when all promises settle.
 */

Promise.allSettled([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject(3),
]).then((values) => console.log(values))

// Output:
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'rejected', reason: 3 }
// ]

Promise.allSettled([
  Promise.reject(1),
  Promise.reject(2),
  Promise.reject(3),
]).then((values) => console.log(values))

// Output:
// [
//   { status: 'rejected', reason: 1 },
//   { status: 'rejected', reason: 2 },
//   { status: 'rejected', reason: 3 }
// ]
