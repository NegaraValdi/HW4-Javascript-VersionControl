// 100 Nilai Random

let arr = []
for (let index = 0; index < 100; index++) {
    arr.push(Math.round((Math.random() * 100)) + 1)
}

console.log("100 Nilai Random")
console.log(arr)

// Pecahan 2 Array

let arr_genap = []
let arr_ganjil = []

for (let index = 0; index < arr.length; index++) {
    if (index % 2 == 0) {
        arr_genap.push(arr[index])
    } else {
        arr_ganjil .push(arr[index])
    }
}

console.log("array genap")
console.log(arr_genap)
console.log("array ganjil")
console.log(arr_ganjil)

// 2 Array untuk Min, Max, Total, dan Rata-Rata

// Nilai Max

function nilaiMax(arr) {
    let max = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (max < arr[index]) {
            max = arr[index]
        }
    }
    return max
}

// Nilai Min

function nilaiMin(arr) {
    let min = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (min > arr[index]) {
            min = arr[index]
        }
    }
    return min
}

console.log('Array Genap')
max_arr_genap = nilaiMax(arr_genap)
min_arr_genap = nilaiMin(arr_genap)
console.log(max_arr_genap)
console.log(min_arr_genap)

console.log("Array Ganjil")
max_arr_ganjil = nilaiMax(arr_ganjil)
min_arr_ganjil = nilaiMin(arr_ganjil)
console.log(max_arr_ganjil)
console.log(min_arr_ganjil)

// Total

function total(arr) {
    let total = 0
    for (let index = 0; index < arr.length; index++) {
        total += arr[index]
    }
    return total
}

console.log("Array Genap")
total_arr_genap = total(arr_genap)
rerata_arr_genap = total_arr_genap / arr_genap.length
console.log(total_arr_genap)
console.log(rerata_arr_genap)

console.log("Array Ganjil")
total_arr_ganjil = total(arr_ganjil)
rerata_arr_ganjil = total_arr_ganjil / arr_ganjil.length
console.log(total_arr_ganjil)
console.log(rerata_arr_ganjil)

// Perbandingan Max

if (max_arr_ganjil == max_arr_genap) {
    console.log("Max pada kedua nilai sama")
} else if (max_arr_ganjil > max_arr_genap) {
    console.log("Max ganjil lebih besar")
} else if (max_arr_ganjil < max_arr_genap) {
    console.log("Max genap lebih besar")
}

// Perbandingan Min

if (min_arr_ganjil == min_arr_genap) {
    console.log("Min pada kedua nilai sama")
} else if (min_arr_ganjil > min_arr_genap) {
    console.log("Min ganjil lebih besar")
} else if (min_arr_ganjil < min_arr_genap) {
    console.log("Min genap lebih besar")
}

