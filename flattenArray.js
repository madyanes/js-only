function flattenArray(arr) {
  const result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item))
    } else {
      result.push(item)
    }
  })
  return result
}

const randomArray = [1, 2, 3, [4, 5], [6, [7, 8]], 9, 10]

const flattenedArray = flattenArray(randomArray)

console.log(flattenedArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
