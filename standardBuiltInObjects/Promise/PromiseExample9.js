/**
 * Calculate sum of all Promise values (part 2)
 *
 * What if some Promises do not resolve to integers? We ignore them:
 */

function sumOfPromises(promises) {
  return promises.reduce(async (sum, promise) => {
    const newValue = await promise
    return Number.isInteger(newValue) ? (await sum) + newValue : sum
  }, 0)
}

// example of three resolved integers or strings
sumOfPromises([
  Promise.resolve(1),
  Promise.resolve('a'),
  Promise.resolve(3),
]).then(console.log) // 4
