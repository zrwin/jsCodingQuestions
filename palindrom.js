const str ="apple"
const str1= "madam"

function checkPalin(str){
    const temp = str.split("").reverse().join("");
    return str ===temp
}

console.log(checkPalin(str)) // false
console.log(checkPalin(str1)) //true