const produk = [
  { nama: 'Buku', harga: 10000 },
  { nama: 'Pensil', harga: 3000 },
  { nama: 'Pulpen', harga: 5000 }
];

const hasilHarga = produk.reduce((acc, curr) => acc + curr.harga, 0);

console.log(hasilHarga);