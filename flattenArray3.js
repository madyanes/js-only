function flattenArray(arr) {
  return arr.flat(Infinity)
}

const randomArray = [1, [2, [3, 4], [[5]]]]

const flattenedArray = flattenArray(randomArray)

console.log(flattenedArray) // [1, 2, 3, 4, 5]
