const users = [
  { id: 101, name: 'Andi' },
  { id: 102, name: 'Budi' },
  { id: 103, name: 'Citra' }
];

// TODO: Cari user yang memiliki id 102

const foundUser = users.find(user => user.id === 102);
console.log(foundUser);
