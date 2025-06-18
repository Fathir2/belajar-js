
const names = ['Sari', 'Budi', 'Ani', 'Didi'];

// a) Urutkan A → Z
// b) Urutkan Z → A

names.sort();
console.log(names);

names.sort((a, b) => b.localeCompare(a));
console.log(names);
