

// factorial

// function factorial(n){
//     let fact=0
//     for(let i=1;i<=n;i++){
//         fact*=i
//     }
//     return fact
// }
// console.log(factorial(5))


// recursive factorial

function recursiveFactorial(n) {
if(n==0){
    return 1
}
    return n * recursiveFactorial(n - 1)
}
console.log(recursiveFactorial(5))

