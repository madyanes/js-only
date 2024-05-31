/**The Map object holds key-value pairs and remembers the original insertion order of the keys.
 * Any value (both objects and primitive values) may be used as either a key or a value.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

const map1 = new Map()

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
map1.set('b', 4) // A key in the Map may only occur once; it is unique in the Map's collection.

console.log('map1.size: ' + map1.size) // 3

map1.set('a', 100)
console.log('a: ' + map1.get('a')) // 100

map1.delete('c')
console.log('map1.size: ' + map1.size) // 2

const family = new Map()
family.set('father', 'Sugeng Winarso')
family.set('mother', 'Arti')
family.set('me', 'Madyan Eka Septian')
family.set('sister1', 'Nadya Putri Sabilla')
family.set('sister2', 'Elok Cahya Maharani')

for (const member of family) {
  const [role, name] = member // returns a 2-member array of [key, value] for each iteration
  console.log(`${role} ==> ${name}`)
}
