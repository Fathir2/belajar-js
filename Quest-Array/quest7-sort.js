const athletes = [ 
    {name: 'John', score: 95}, 
    {name: 'Alice', score: 87}, 
    {name: 'Bob', score: 95}, 
    {name: 'Carol', score: 92} 
];

athletes.sort((a, b) => {
  if (b.score !== a.score) {
    return b.score - a.score; // Urut berdasarkan score tertinggi
  } else {
    return a.name.localeCompare(b.name); // Kalau score sama, urut A-Z nama
  }
})


console.log(athletes);