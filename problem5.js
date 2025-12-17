const cart = [
  {
    productId: 101,
    name: "Laptop",
    price: 1200,
    quantity: 1,
    category: "Electronics",
    rating: 4.7
  },
  {
    productId: 102,
    name: "Wireless Mouse",
    price: 25,
    quantity: 2,
    category: "Electronics",
    rating: 4.3
  },
  {
    productId: 103,
    name: "Headphones",
    price: 75,
    quantity: 1,
    category: "Electronics",
    rating: 4.5
  },
  {
    productId: 106,
    name: "Smartphone",
    price: 899,
    quantity: 1,
    category: "Electronics",
    rating: 4.6
  },
  {
    productId: 107,
    name: "Tablet",
    price: 450,
    quantity: 1,
    category: "Electronics",
    rating: 4.2
  },
  {
    productId: 108,
    name: "Smartwatch",
    price: 199,
    quantity: 2,
    category: "Electronics",
    rating: 4.4
  },
  {
    productId: 109,
    name: "Gaming Console",
    price: 499,
    quantity: 1,
    category: "Electronics",
    rating: 4.8
  },
  {
    productId: 110,
    name: "Bluetooth Speaker",
    price: 120,
    quantity: 1,
    category: "Electronics",
    rating: 4.1
  },
   {
    productId: 103,
    name: "Headphones",
    price: 75,
    quantity: 1,
    category: "Audio"
  },
  {
    productId: 104,
    name: "Coffee Mug",
    price: 10,
    quantity: 3,
    category: "Kitchen"
  },
  {
    productId: 105,
    name: "Notebook",
    price: 5,
    quantity: 5,
    category: "Stationery"
  }


];


const results = cart.filter(c => c.category === 'Electronics').sort((a,b) => b.rating - a.rating).slice(0,3).map(c => c.name)
console.log(results);