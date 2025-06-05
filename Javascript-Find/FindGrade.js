const students = [
  { name: 'Ani', grade: 'B' },
  { name: 'Bima', grade: 'C' },
  { name: 'Cici', grade: 'A' },
  { name: 'Dina', grade: 'A' }
];

// TODO: Temukan siswa pertama yang mendapat nilai 'A'
const hasil = students.find(item => item.grade === 'A');

console.log(hasil);