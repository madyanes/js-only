/**
 * Promise Concurrency -> Promise.any()
 * It fulfills when any of the promises fulfills, or rejects when all of the promises reject.
 */

Promise.any([Promise.resolve(1), Promise.resolve(2), Promise.reject(3)]).then(
  (values) => console.log(values)
) // 1

Promise.any([Promise.reject(1), Promise.reject(2), Promise.reject(3)]).then(
  undefined,
  (error) => console.log(error)
) // AggregateError: All promises were rejected
