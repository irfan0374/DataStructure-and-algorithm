// // binerySearch

// function binerySearch(arr,target){
//     let leftIndex=0;
//     let rightIndex=arr.length-1
//     while(leftIndex<=rightIndex){
//         let mid=Math.floor((leftIndex+rightIndex)/2);
//         if(target==arr[mid]){
//             return mid
//         }
//         if(target<arr[mid]){
//             rightIndex=mid-1
//         }else{
//             leftIndex=mid+1
//         }
//     }
//     return-1
// }
// console.log(binerySearch([3,5,7,8,9,10,11,14],10))   

// // binerySearch Recrusivly/-----

// function binerySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let mid=Math.floor((leftIndex+rightIndex)/2)

//     if(target==arr[mid]){
//         return mid
//     }
//     if(target<arr[mid]){
//         return search(arr,target,leftIndex,mid-1)
//     }else{
//         return search(arr,target,mid+1,rightIndex)
//     }
// }
// console.log(binerySearch([2,3,4,5,6,7,8,9],6))


