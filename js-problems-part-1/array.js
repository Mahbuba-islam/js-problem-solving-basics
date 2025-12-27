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
