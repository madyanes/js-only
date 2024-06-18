/**
 * Promise Concurrency -> Promise.all()
 * It fulfills when all of the promises fulfill, or rejects when any of the promises rejects.
 */

Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  (values) => console.log(values)
) // [1, 2, 3]

Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject(3)]).then(
  undefined,
  (error) => console.log(error)
) // 3
