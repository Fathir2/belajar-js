// push,pop, shift & unshift
let vocaloids = ['Hatsune Miku', 'Megurine Luka', 'Kagamine Rin']

vocaloids.pop();
vocaloids.push('MEIKO');
vocaloids.shift();
vocaloids.unshift('Hatsune Miku', 'kagamine rin');

console.log(vocaloids);

// forEach 

let angka = [1, 2, 3]; 

let hasil = angka.map(function(item) {
    return item + 3;
}
)

console.log(hasil);

angka.forEach(function(item) {
    console.log(item); 
}
);



