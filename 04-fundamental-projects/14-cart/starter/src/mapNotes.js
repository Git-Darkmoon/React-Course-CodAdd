// create a new Map instance
const cart = new Map()

// set some key-value pairs

cart.set("apple", { name: "Apple", price: 0.5, quantity: 3 })
cart.set("banana", { name: "Banana", price: 0.3, quantity: 6 })
cart.set("orange", { name: "Orange", price: 0.4, quantity: 4 })

// get the value associated with a key
const appleDetails = cart.get("apple") // returns { name: 'Apple', price: 0.5, quantity: 3 }

// check if a key exists in the map
const hasPear = cart.has("pear") // returns false

// get the number of key-value pairs in the map
const size = cart.size // returns 3

// delete a key-value pair from the map
cart.delete("banana")

// loop over the key-value pairs in the map
for (let [key, { name, price, quantity }] of cart) {
  console.log(key, name, price, quantity) // prints 'apple' 'Apple' 0.5 3, 'banana' 'Banana' 0.3 6, 'orange' 'Orange' 0.4 4
}

//Converting

const items = [
  { id: 1, name: "first", price: 10 },
  { id: 2, name: "second", price: 20 },
]
const cartItems = items.map((item) => [item.id, item])

console.log(cartItems)
// prints:
// [
//   [1, { id: 1, name: 'first', price: 10 }],
//   [2, { id: 2, name: 'second', price: 20 }],
// ];

// create a new Map instance
const cart2 = new Map(cartItems)

// convert the Map to an array of key-value pairs
const cartArray = Array.from(cart2.entries())

console.log(cartArray)
// prints:
// [
//   [1, { id: 1, name: 'first', price: 10 }],
//   [2, { id: 2, name: 'second', price: 20 }]
// ]
