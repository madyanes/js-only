/**
 * It would be nice to be able to remove values from the cache.
 * To make this easier I will take advantage of the new JavaScript Map type.
 * It has methods for easily removing values and has some other handy features.
 * For example it will let us support more complex keys in our cache.
 */

const cache = {}

// Using a symbol here guarantees our defaultNamespace will not conflict
// with any namespace the consumer could use
const defaultNamespace = Symbol('defaultNamespace')

function useNamespace(namespace) {
  if (!cache[namespace]) {
    cache[namespace] = new Map()
  }

  function get(key) {
    return cache[namespace].get(key)
  }

  function set(key, value) {
    cache[namespace].set(key, value)
  }

  function remove(key) {
    cache[namespace].delete(key)
  }

  function removeAll() {
    cache[namespace].clear()
  }

  return { get, set, remove, removeAll }
}

const { get, set, remove } = useNamespace(defaultNamespace)

// We don't expose removeAll on the defaultNamespace.
// We only allow remove all on custom namespaces
export { get, set, remove, useNamespace }
