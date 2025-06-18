const angka = [8, 3, 5];

angka.sort((a, b) => {
  console.log('a:', a, 'b:', b, 'a-b:', a - b);
  return a - b;
});
