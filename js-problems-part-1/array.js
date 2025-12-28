// ===============================
// Helpers
// ===============================

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const isLetter = ch => /[a-z]/.test(ch);
const isDigit = ch => /\d/.test(ch);

// ===============================
// Problem 1: String → Char Array (remove spaces)
// ===============================

const charIntoArray = (str) => {
  return Array.from(str).filter(ch => ch !== ' ');
};

console.log(charIntoArray('This is my book'));

// without function
console.log(Array.from('hello'));
console.log([...'hello']);


// ===============================
// Problem 2: Keep only vowels
// ===============================

const getVowels = (str) => {
  return Array.from(str.toLowerCase())
    .filter(ch => VOWELS.includes(ch));
};

console.log(getVowels('I love U'));

// without function
const text = 'This is very beautiful';
const vowelsOnly = Array.from(text.toLowerCase())
  .filter(ch => VOWELS.includes(ch));

console.log(vowelsOnly);

// ===============================
// Problem 3: Keep only consonants
// ===============================

const getConsonants = (str) => {
  return Array.from(str.toLowerCase())
    .filter(ch => isLetter(ch) && !VOWELS.includes(ch));
};

console.log(getConsonants('I love you'));


// ===============================
// Problem 4: Replace digits with *
// ===============================


const replaceDigits = (str) => {
  return Array.from(str.toLowerCase(), ch =>
    isDigit(ch) ? '*' : ch
  );
};

console.log(replaceDigits('A1B2C3'));


// ===============================
// Problem 5: Remove special characters
// ===============================


const removeSpecialChars = (str) => {
  return Array.from(str.toLowerCase())
    .filter(isLetter);
};

console.log(removeSpecialChars('He!!o@Wor#ld').join(''));



/*
=========================================================================
 Problem 6: Remove all spaces and convert to array
 Input: "Java Script Rocks"
 Output: ['j','a','v','a','s','c','r','i','p','t','r','o','c','k','s']
==========================================================================
*/

//one way
const convertArray = (str) => {
  const arr = []
  const results = [...str]
  
  results.forEach(ch => {
    if(ch !== ' '){
      arr.push(ch)
    }
  })

  return arr

}

console.log('p-6',convertArray("Rocks Java Script "));


// another way
const str = "Java Script Rocks"
const results = Array.from(str).filter(ch => ch !== ' ')

console.log(results);



/*
=========================================================================
 Problem 7: Keep only uppercase letters
 Input: "HeLLoWOrLd"
 Output: ['H','L','L','W','O','L']
==========================================================================
*/

const inputStr =  "HeLLoWOrLd"
const isUpperCase = ch => /[A-Z]/.test(ch)
const uppercaseResults = Array.from(inputStr).filter(ch => isUpperCase(ch))
console.log(uppercaseResults);



/*
=========================================================================
 Problem 8: Count vowels in a string
 Input: "Frontend Developer"
 Output: 6
==========================================================================
*/

const inputVowles = "Frontend Developer"
const vowles = ['a', 'e', 'i', 'o', 'u']
let count = 0
for(const ch of inputVowles){
 if(vowles.includes(ch)){
  count = count+1
 }

}

console.log(count);





/*
=========================================================================
 Problem 9: Replace vowels with #
 Input: "javascript"
 Output:  ['j','#','v','#','s','c','r','#','p','t']
==========================================================================
*/

const input = "javascript"
const replaceResults = [...input].map(ch => {
  if(vowles.includes(ch)){
    ch = '#'
  }
  return ch
})
console.log(replaceResults);





/*
=========================================================================
 Problem 10: Extract digits only
 Input: "A1B2C3D4"
 Output:  ['1','2','3','4']
==========================================================================
*/

const inputString = "A1B2C3D4"
const isNumber = ch => /[0-9]/.test(ch)
const extractNumber = Array.from(inputString).filter(ch => isNumber(ch) )
console.log(extractNumber);



/*
=========================================================================
 Problem 11: Reverse characters (no reverse())
 Input:  "hello"
 Output:  Output: ['o','l','l','e','h']
==========================================================================
*/


const inputString1 = "hello"

const reservedResults = (inputString1) => {
  const reserved = []
  const array = Array.from(inputString1)
  while(array.length>0){
    reserved.push(array.pop())
  }
  return reserved
}

console.log(reservedResults(inputString1));




/*
=========================================================================
 Problem 12:  Remove duplicate characters
 Input:  "programming"
 Output:  Output: ['p','r','o','g','a','m','i','n']
==========================================================================
*/


const inputString2 = 'programming'
const uniqueArray = []
const uniqueResults = [...inputString2].forEach(char => !uniqueArray.includes(char) && uniqueArray.push(char))
console.log(uniqueArray);





/*
=========================================================================
 Problem 13:  Keep only alphabets and digits
 Input: "JS@2024!!"
 Output:  Output: ['j','s','2','0','2','4']
==========================================================================
*/

const inputString3 = 'JS@2024!!'
const isAlphabetAndDigits = ch => /^[a-zA-Z0-9]$/.test(ch)
const output = [...inputString3].filter(ch => isAlphabetAndDigits(ch))

console.log(output);



/*
=========================================================================
 Problem 14:  Convert string to array of char codes
 Input: "ABC"
Output:[65, 66, 67]
==========================================================================
*/

const inputString4 = "ABC"
const charCodesResults = [...inputString4].map(ch => ch.charCodeAt(0))

console.log(charCodesResults);

// console.log(inputString4.charCodeAt(0))