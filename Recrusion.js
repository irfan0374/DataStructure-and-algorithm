// // let arr=[4]

// function recursive(arr){
//     if(arr.length<=1){
//         return 1;
//     }else{
//         return arr[arr.length-1]*recursive(arr.slice(0,arr.length-1))
//     }

// }
// console.log(recursive(arr))


// // fibinocci

// function fib(n){
//     if(n<=1){
//         return n
//     }else{
//         return fib(n-1)+fib(n-2)
//     }
// }
// console.log(fib(5))


// // Factorial----

// function factorial(n){
//     if(n<=1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))


// // recrusion sum

function sum(arr){
    if(arr.length==0){
        return 0
    }
   return arr[arr.length-1]+sum(arr.slice(0,arr.length-1))
}
console.log(sum([1,2,3,4,4,10]))