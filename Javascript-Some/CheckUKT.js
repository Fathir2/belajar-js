const students = [
  { name: 'Ari', paid: true },
  { name: 'Bela', paid: true },
  { name: 'Caca', paid: false }
];

const check = students.some(item => item.paid === false);

console.log(check);