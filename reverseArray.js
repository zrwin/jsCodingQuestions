let arr= [1,2,3,4,5];

// using inbuilt function
arr.reverse()
console.log(arr);

const arr2= [...arr];

//using while loop
let i = 0 
let n = arr2.length -1

while(i<n){
    let temp = arr2[i]
    arr2[i]= arr2[n]
    arr2[n]= temp
    i++
    n--
}

console.log(arr2);

