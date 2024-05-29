function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flattenArray(val))
    } else {
      acc.push(val)
    }
    return acc
  }, [])
}

const randomArray = [10, 9, [8, 7], [6, [5, 4, [3, 2]]], 1]

const flattenedArray = flattenArray(randomArray)

console.log(flattenedArray) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
