/**
 * Calculate sum of all Promise values (part 3)
 *
 * What if some Promises are rejected? We catch the error and ignore them:
 */

function sumOfPromises(promises) {
  return promises.reduce(async (sum, promise) => {
    try {
      const newValue = await promise
      // ignore non-integer value
      return Number.isInteger(newValue) ? (await sum) + newValue : sum
    } catch (e) {
      return sum // do nothing for rejected promise
    }
  }, 0)
}

// example of one reject value and three resolved integers or strings
sumOfPromises([
  Promise.reject(1),
  Promise.resolve('a'),
  Promise.resolve(3),
  Promise.resolve(4),
]).then(console.log) // 7
