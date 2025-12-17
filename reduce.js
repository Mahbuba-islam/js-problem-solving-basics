//  **reduce()**  
//    - Problem: Write a function that takes an array of numbers and returns the total sum using `reduce()`.  
//    - Example Input: `[10, 20, 30]` → Output: `60`.



// count subtotal

const cart = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    quantity: 1,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Headphones",
    price: 150,
    quantity: 2,
    category: "Accessories"
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 12,
    quantity: 4,
    category: "Kitchen"
  },
  {
    id: 4,
    name: "Notebook",
    price: 5,
    quantity: 10,
    category: "Stationery"
  }
];

console.log(cart);



const subTotal = cart.reduce((subtotal, product) => {
    return subtotal + product.price*product.quantity
}, 0)

console.log(subTotal);


// find best scorer
const players = [
  { name: "Rahim", score: 45 },
  { name: "Karim", score: 60 },
  { name: "Jamal", score: 30 },
  { name: "Selina", score: 75 },
  { name: "Nadia", score: 90 }
];

const bestScorer = players.reduce((bestScorer, player)=> {
 if(bestScorer.score > player.score){
    return bestScorer
 }
 return player
}, players[0])

console.log(bestScorer);
