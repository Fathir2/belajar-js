const products = [
  { name: 'Keyboard', price: 200 },
  { name: 'Mouse', price: 100 },
  { name: 'Monitor', price: 1000 },
];

// a) Urutkan dari harga termurah ke termahal (ascending)
products.sort((a, b) => a.price - b.price);
console.log(products);

// b) Urutkan dari harga termahal ke termurah (descending)
products.sort((a, b) => b.price - a.price);
console.log(products);
