let arr = [2, 4, 6, 5, 2, 1, 8, 6, 9]

function mergeSort(arr) {

    if(arr.length<=1){
        return arr
    }

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right){
    let sortedArr=[];
    
    while(left.length&& right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

console.log(mergeSort(arr))