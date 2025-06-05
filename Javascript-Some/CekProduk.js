const products = [
  { name: 'Susu', expired: false },
  { name: 'Roti', expired: false },
  { name: 'Keju', expired: true }
];

const check = products.some(item => item.expired === true);

console.log(check);