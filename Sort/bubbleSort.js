let arr = [4, 6, 3, 2, 5, 1, 7, 8]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]]
            }
        }
    }
    return arr
}
console.log(bubbleSort(arr))







