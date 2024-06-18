/**
 * Promise async and await - part 2
 */

// an async generator function
async function* build() {
  // yield pauses the execution util the generator calls
  yield Promise.resolve(1)
  yield Promise.resolve(2)
  yield Promise.resolve(3)
  yield Promise.resolve(4)
  yield Promise.resolve(5)
}

// loop through the async generator function
;(async () => {
  for await (const value of build()) {
    console.log(value)
  }
})()
