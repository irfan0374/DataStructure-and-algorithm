let arr=[1,2,3,4,5]

function sumArr(arr){
    if(arr.length==0){
        return 0
    }
    return arr[arr.length-1]+sumArr(arr.slice(0,arr.length-1))
}
console.log(sumArr(arr))
