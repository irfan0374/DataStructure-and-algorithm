// function fibnoci(n) {
//     let fib = [0, 1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
// }
// // console.log(fibnoci(6))

function fib(n){
    if(n<2){
        return n
    }
    return fib(n-1)+fib(n-2)
}



// // recursive fibnocci

// function fibnocci(n) {
//     if (n < 2) {
//         return n
//     }
//     return fibnocci(n - 1) + fibnocci(n - 2)
// }
// console.log(fibnocci(5))
