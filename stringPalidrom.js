const palidrome=(str)=>{
    if(str.length<2){
        return true
    }
    if(str[0]!==str[str.length-1]){
        return false
    }
    return palidrome(str.substring(1,str.length-1))
}
let str="helo"
console.log(palidrome(str))