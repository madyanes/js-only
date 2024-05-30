// It is not recommended to use Array.prototype.map()

function flattenArray(arr) {
  const result = []
  arr.map((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item))
    } else {
      result.push(item)
    }
    return item // Return item to satisfy .map(), though not really needed
  })
  return result
}

const randomArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

const flattenedArray = flattenArray(randomArray)

console.log(flattenedArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Kode yang kamu tulis untuk fungsi flattenArray sebenarnya sudah mendekati benar,
// tapi ada sedikit kesalahan pada penggunaannya.
// Kamu menggunakan map, yang biasanya digunakan
// untuk menghasilkan array baru dari hasil pemetaan elemen-elemen,
// namun dalam kasus ini, forEach lebih cocok
// karena kamu hanya perlu melakukan iterasi dan memodifikasi array result.
