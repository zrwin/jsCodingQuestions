//remove duplicates from arr

const arr= [1,2,3,4,5,5,5,5,5,5,5,6]

//we can do that using sets
const ans = [... new Set(arr)]
console.log(ans)

//we can do that using filter
const seen=[]

const filteredArr= arr.filter((item) =>{
    if(seen.indexOf(item)=== -1){
        seen.push(item);
        return true;
    }
   return false
}) 
console.log(filteredArr)


// we can do using filter by checking first index 
// indexOf returns first index

const newAns= arr.filter((value, index) => {
  console.log(`Value: ${value}, Index: ${index}, First Index: ${arr.indexOf(value)}`);
  return arr.indexOf(value) === index;
});
console.log("This is the last one: ", newAns)
// Output:

// Value: 1, Index: 0, First Index: 0 ✅
// Value: 2, Index: 1, First Index: 1 ✅
// Value: 2, Index: 2, First Index: 1 ❌ (duplicate)
// Value: 3, Index: 3, First Index: 3 ✅

// Resulting array: [1, 2, 3]

