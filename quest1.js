function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    console.log(angka + " adalah bilangan genap.");
  } else {
    console.log(angka + " adalah bilangan ganjil.");
  }
}

cekGanjilGenap(7); // Output: 10 adalah bilangan genap.
cekGanjilGenap(12); // Output: 7 adalah bilangan ganjil.
