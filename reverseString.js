// // Revesing a string using str[i]= str[n] wont work 
// // as strings are immutable 
// // Hence if we want to reverse strigns without converting them to array 
// // then we can use string concat 

// // using inbuilt methods
const s= "Ziaur Rahman"
const ans = s.split("").reverse().join("")
console.log(s)
console.log(ans)


const str= "My name is Khan";

// //without using inbuilt functions
function strReverse(str) {
    let i = 0;
    let n = str.length - 1;
    let temp = '';

    while (i <= n) {
        temp += str[n];  // Concatenate characters in reverse order
        n--;
    }

    console.log(str);    // Original string
    console.log(temp);   // Reversed string
}


strReverse(str)

//reverse "My name is Khan" to "Khan is name my"

function wordReverse(str){
    
    let n = str.length-1
    let temp ="";
    let end =n+1
    
    while(n>=0){
        if(str[n] === " " || n ===0)
        {
            console.log(str.slice(n+1, end))
            temp += str.slice((n===0 ? 0 :n+1), end)
            temp+=" "
            end = n 
            
        }   
            n--
    }
    console.log(temp)

}

wordReverse(str)
