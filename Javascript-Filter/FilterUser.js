const users = [
  { id: 1, username: 'johndoe', active: true },
  { id: 2, username: 'janedoe', active: false },
  { id: 3, username: 'david', active: true }
];

// Ambil hanya user yang active: true
const hasil = users.filter(item => item.active);

console.log(hasil);