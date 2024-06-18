function promiseCall() {
  // two callbacks, resolve and reject
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(1) // the case of resolve
      } else {
        reject(0) // the case of reject
      }
    }, 300) // with 300 milliseconds delay
  })

  // then, catch, and finally methods
  myPromise
    .then((value) => console.log(`Resolved to ${value}`))
    .catch((error) => console.log(`Rejected with value ${error}`))
    .finally(() => console.log('Done'))
}

// call promiseCall 5 times
promiseCall()
promiseCall()
promiseCall()
promiseCall()
promiseCall()
