// Reference: https://medium.com/paul-heintzelman/how-to-build-a-cache-in-javascript-from-the-ground-up-dee5642ce30a

/** Basic cache */

const cache = {}

function get(key) {
  return cache[key] // if the cache key doesn't exist this will return undefined
}

function set(key, value) {
  cache[key] = value
}

export { get, set }
