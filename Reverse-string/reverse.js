const reverse = "MAHALEKSHMI"

function reverseString(str) {
    reverseStr ="";

    for(i =str.length-1; i>=0 ; i--) {
        reverseStr = reverseStr + str[i]
    }
    return reverseStr
}
let result = reverseString(reverse)
console.log(LowerCaseResult)