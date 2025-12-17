
// generate lookup table 

// input 
const postArray = [
    {id:"p-100", title:'Intro to sql', author:'Alex'},
    {id:"p-101", title:'Data stracture', author:'Alex'},
    {id:"p-102", title:'understanding reduce', author:'Alex'},
    {id:"p-103", title:'CSS Grid Tricks', author:'Alex'},
]

//output
// {
//     "p-100" :  {"id":"p-100", "title":'Intro to sql', "author":'Alex'},
//     "p-101" :  {"id":"p-101", "title":'Intro to sql', "author":'Alex'},
//     "p-102" :  {"id":"p-102", "title":'Intro to sql', "author":'Alex'},
//     "p-103" :  {"id":"p-103", "title":'Intro to sql',"author":'Alex'}
// }


const lookupTable = postArray.reduce((table, post) => {
  table[post.id] = post

  return table
}, {})



//Count Occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Expected Output:


// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// // Expected Output:
// {
//   applee,
//   banana: 2,
//   orange: 1
// }


const countFruit = fruits.reduce((table, fruit) => {
 
  if(table[fruit]){
   table[fruit] = table[fruit] + 1
  }
  else{
    table[fruit] = 1
  }
  return table
}, {})


console.log(countFruit);


// Find Maximum Value
const numbers = [10, 25, 8, 32, 15];

// Expected Output:
32

const maxValue = numbers.reduce((acc, number) => {
  if(number> acc){
    return number
  }
  return acc
}, numbers[0])


console.log(maxValue);


// Flatten Deeply Nested Arrays
const nested = [1, [2, [3, [4, 5]]]];

// Expected Output:
[1, 2, 3, 4, 5]

const flat = nested.flat(Infinity)

console.log(flat);

// with reduce

const nested2 = [1, [2, [3, [4, 5]]]];


const flatten = (arr) => {
    return arr.reduce((accArray, nestArray) => {
   if(Array.isArray(nestArray)){
    return accArray.concat(flatten(nestArray))
   }
   return accArray.concat(nestArray)
}, []);

}

const flattenArray = flatten(nested2)
console.log(flattenArray);



// Find Longest Word
const words = ["reduce", "javascript", "fun", "developer"];

// Expected Output:
"javascript"


const longest = words.reduce((acc, word) => {
      if(acc.length> word.length){
        return acc
      }
      return word
}, words[0])


console.log(longest);










const pairs = [
  ["name", "Mahbuba"],
  ["role", "Mentor"],
  ["city", "Queens"]
];

// Expected Output:
// {
//   name: "Mahbuba",
//   role: "Mentor",
//   city: "Queens"
// }

//👉 Hint: প্রতিটি সাব-অ্যারের প্রথম আইটেম হবে key, দ্বিতীয় আইটেম হবে value।

const getObj = pairs.reduce((acc, pair) => {
  const [key, value] = pair
  acc[key] = value
  return acc
}, {})

console.log(getObj);



//### 4. Merge Multiple Objects

const objs = [
  {a:1, b:2},
  {b:3, c:4},
  {d:5}
];

// Expected Output:
// {
//   a:1,
//   b:3,
//   c:4,
//   d:5
// }

//👉 Hint: প্রতিটি অবজেক্টকে accumulator এর সাথে মিশাও।

const mergeObj = objs.reduce((acc, obj) => {
  acc = {...acc , ...obj}
  
  return acc
}, {})



console.log(mergeObj);



 const a ={a:1, b:2}
 const b=  {b:3, c:4}
 const c = {d:5}

 const result = {...a, ...b, ...c}
 console.log('result:', result);

//### 5. Unique Authors List

const posts = [
  {id:1, author:"Alex"},
  {id:2, author:"Sam"},
  {id:3, author:"Alex"},
  {id:4, author:"Mahbuba"}
];

// Expected Output:
["Alex", "Sam", "Mahbuba"]

//👉 Hint: আগেই থাকা author আবার যোগ করবে না।


//### 6. Reverse Array

const arr = [1,2,3,4];

// Expected Output:
[4,3,2,1]

//👉 Hint: প্রতিটি নতুন আইটেমকে accumulator এর শুরুতে যোগ করো।


// 7. Calculate Average Age

const people = [
  {name:"A", age:20},
  {name:"B", age:30},
  {name:"C", age:40}
];

// Expected Output:
30

