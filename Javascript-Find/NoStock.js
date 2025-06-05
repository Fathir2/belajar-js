const products = [
  { name: 'Laptop', stock: 4 },
  { name: 'Mouse', stock: 0 },
  { name: 'Keyboard', stock: 2 }
];

// TODO: Cari produk yang stock-nya habis
const hasil = products.find(item => item.stock === 0);

console.log(hasil);