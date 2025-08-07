function isAnagram(str1, str2) {
    const sortStr = s => s.toLowercase().split('').sort().join('');
    return sortStr(str1) === sortStr(str2);
  }

  
console.log("Ziaur", "ziaur")


//for checking without using in built functions

isAnagram(str1, str2){
  const count = new Array(26).fill(0);

  for(let i = 0 ; i< str1.length; i++){
    const index = str1.charCodeAt(i) - 'a'.charCodeAt(0)
    count[index]++
  }
  
  for(let i = 0 ; i< str2.length; i++){
    const index = str2.charCodeAt(i) - 'a'.charCodeAt(0)
    count[index]--
  }

  for(const item of count){
    if(item != 0){
      return false;
    }
  }

  return true;
  
}