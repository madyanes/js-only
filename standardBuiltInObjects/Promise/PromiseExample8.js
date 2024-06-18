/**
 * Calculate sum of all Promise values (part 1)
 */

function sumOfPromises(promises) {
  // sumarize all resolved values
  return promises.reduce(
    async (sum, promise) => (await sum) + (await promise),
    0
  )
}

// example of three resolved integers
sumOfPromises([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(console.log) // 6
