// Reference: https://medium.com/paul-heintzelman/how-to-build-a-cache-in-javascript-from-the-ground-up-dee5642ce30a

/**
 * Cache with supporting namespaces
 *
 * With the basic version of our cache, keys could collide.
 * To prevent problems with the same key being used in two different places,
 * we will add the ability to set and use a namespace.
 * We could add a namespace argument to our methods but there is a more elegant solution using closures.
 */

const cache = {}

// Using a symbol here guarantees our defaultNamespace will not conflict
// with any namespace the consumer could use
const defaultNamespace = Symbol('defaultNamespace')

function useNamespace(namespace) {
  // Let's add the namespace to our cache right away
  // this simplifies the need to check for the namespace in get and set
  if (!cache[namespace]) {
    cache[namespace] = {}
  }

  function get(key) {
    return cache[namespace][key]
  }

  function set(key, value) {
    cache[namespace][key] = value
  }

  return { get, set }
}

// get a version of get and set with the defaultNamespace to export
const { get, set } = useNamespace(defaultNamespace)

// we also export useNamespace so the consumer can set their own namespace
export { get, set, useNamespace }
