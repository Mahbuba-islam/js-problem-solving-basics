// **Array.from()**  
//    - Problem: Convert a string into an array of characters using `Array.from()`.  
//    - Example Input: `"hello"` → Output: `["h", "e", "l", "l", "o"]`. 
// if it has any empty string remove this . ex: input - 'This is my book' output - 
//   ['T', 'h', 'i', 's',
//   'i', 's', 'm', 'y',
//   'b', 'o', 'o', 'k'
// ]



const charIntoArray = (word) => {
  const arr = Array.from(word)
  const results = []
  for(const word of arr){
    if(word !== ' '){
        results.push(word)
    }
  }
 return results
}
console.log(charIntoArray('This is my book'));


//-------------------------

  // without function
const results = Array.from('hello')
console.log(results);

//-------------------------

const char = 'hello'
const arr = [...char]
console.log(arr);

