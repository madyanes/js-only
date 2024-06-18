/**
 * Promise Concurrency -> Promise.race()
 * It settles when any of the promises settles.
 */

Promise.race([Promise.resolve(1), Promise.resolve(2), Promise.reject(3)]).then(
  (values) => console.log(values)
) // 1

Promise.race([Promise.reject(1), Promise.resolve(2), Promise.reject(3)]).then(
  undefined,
  (error) => console.log(error)
) // 1
