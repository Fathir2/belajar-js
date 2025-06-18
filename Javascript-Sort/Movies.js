const movies = [
  { title: "Zootopia", rating: 8.1 },
  { title: "Avengers", rating: 9.3 },
  { title: "Inception", rating: 9.3 },
  { title: "Batman", rating: 8.1 },
  { title: "Coco", rating: 8.5 }
];

movies.sort((a, b) => {
  if (b.rating !== a.rating) {
    return b.rating- a.rating; // Urut berdasarkan score tertinggi
  } else {
    return a.title.localeCompare(b.title); // Kalau score sama, urut A-Z nama
  }
});
console.log(movies.map(a => a.title));