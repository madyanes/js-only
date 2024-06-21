/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 *
 * @param {number[]} arr
 * @param {Function} fn
 * @returns {number[]}
 */

const map = function (arr, fn) {
  // Inisialisasi array baru untuk menyimpan hasil transformasi
  const transformedArray = []

  // Lakukan iterasi melalui setiap elemen dalam array asli
  for (let i = 0; i < arr.length; i++) {
    // Terapkan fungsi `fn` pada elemen saat ini dan indeksnya
    // Kemudian simpan hasilnya dalam array baru
    transformedArray.push(fn(arr[i], i))
  }

  // Kembalikan array hasil transformasi
  return transformedArray
}

const result1 = map([1, 2, 3], (element, index) => element * index)
console.log('result1', result1) // [ 0, 2, 6 ]

const result2 = map([1, 2, 3], (element, index) => element * 10)
console.log('result2', result2) // [ 10, 20, 30 ]
