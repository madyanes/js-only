# How to Build a Cache in JavaScript from the Ground Up

A [cache](<https://en.wikipedia.org/wiki/Cache_(computing)>) is a place to store data that you want to access more quickly in the future. It is a key component to writing performant software.

## Basic Cache

At a bare minimum a cache should have a way to get and set data. Let’s keep it simple and call the methods ‘get’, and ‘set’.

```javascript
const cache = {}

// if the cache key doesn't exist this will return undefined
// which is what we want
function get(key) {
  return cache[key]
}

function set(key, value) {
  cache[key] = value
}

module.exports = { get, set }
```

That’s the whole module. A cache in 13 lines of code. Using this in the previous example.

```javascript
const { get, set } = require('./basicCache')
function catCategorizer(cat) {
  let catTaxonomy = get(cat.id)
  if (!catTaxonomy) {
    catTaxonomy = complexCatAnalysis()
    set(cat.id, catTaxonomy)
  }

  return catTaxonomy
}
```

## Why we are not going to add has

`has` seems like a good friend of get. Shouldn’t we check to see if we have the value before fetching it?

```javascript
// unsafe code
if(has(key)) {
  get(key)
  ...
}
```

The above is not safe (time, thread or async). It is possible that `has(key)` returns true but `get(key)` returns undefined. This is because our state could change in between the two calls. It’s always safer to get the value first.

```javascript
// safer code
const value = get(key);
if(value) {
  ...
}
```

Note: generally, state in JavaScript doesn’t change between one line of code and the next, but the above could be asynchronous code instead and the time will change. The fact that has and the get execute at different times will be problematic once we introduce a timeout.

Because of this we are not going to add has or contains to our cache. But we are going to add plenty of other features.

## Improving Cache

1. [Supporting Namespaces](./cacheWithNamespace.js)
2. [Adding remove and removeAll](./cacheWithRemove.js)
3. [Adding Cache Expiration](./cacheWithExpiration.js)

Reference: [How to Build a Cache in JavaScript from the Ground Up, by Paul Heintzelman](https://medium.com/paul-heintzelman/how-to-build-a-cache-in-javascript-from-the-ground-up-dee5642ce30a).
