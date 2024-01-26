function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target==arr[i]){
            return i
        }
    }
    return -1
}
console.log(linearSearch([3,4,5,2,6,8,9,18],18))