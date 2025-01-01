// statement, expression, variable
const nama = "Luka Megurine"; // Mendeklarasikan variabel 'nama' dengan nilai string "Luka Megurine".
const age = 20; // Mendeklarasikan variabel 'age' dengan nilai angka 20.
const husband = "Fathir Sagtiana"; // Mendeklarasikan variabel 'husband' dengan nilai string "Fathir Sagtiana".

// Menggabungkan nilai variabel 'nama', 'age', dan 'husband' dalam string menggunakan operator "+".
console.log("Hello, my name is " + nama, " and I am " + age + " years old." + " My husband's name is " + husband);

// tipe data
const year = new Date().getFullYear(); // Mendapatkan tahun saat ini menggunakan objek 'Date'.
const text = "sekarang tahun " + year; // Menggabungkan string dengan nilai tahun yang diperoleh.
console.log(text); // Menampilkan teks yang menyebutkan tahun saat ini di konsol.

// boolean
const isMarried = true; // Deklarasi variabel boolean 'isMarried' dengan nilai true.
console.log(isMarried); // Menampilkan nilai 'isMarried'.

const isGreater = 10 > 5; // Mengevaluasi apakah 10 lebih besar dari 5, menghasilkan nilai boolean true.
console.log(isGreater); // Menampilkan hasil evaluasi.

const isLess = 10 < 5; // Mengevaluasi apakah 10 lebih kecil dari 5, menghasilkan nilai boolean false.
console.log(isLess); // Menampilkan hasil evaluasi.

// null & undefined
let varNull = null; // Mendeklarasikan variabel 'varNull' dengan nilai null (tidak memiliki nilai).
let varUndefined = undefined; // Mendeklarasikan variabel 'varUndefined' dengan nilai undefined.
console.log(varNull); // Menampilkan nilai null.
console.log(varUndefined); // Menampilkan nilai undefined.

const myName = { name: 'Luka Megurine', age: null }; // Objek dengan properti 'name' dan 'age', di mana 'age' bernilai null.
const MyName2 = { name: 'Fathir Sagtiana', age: undefined }; // Objek dengan 'name' dan 'age', di mana 'age' bernilai undefined.

console.log(JSON.stringify(myName)); // Mengonversi objek 'myName' ke format JSON dan menampilkannya.
console.log(JSON.stringify(MyName2)); // Mengonversi objek 'MyName2' ke format JSON dan menampilkannya.

// change tipe data to string, number and boolean
// contoh perubahan tipe data:

// string
const number = 10; // Deklarasi variabel 'number' dengan tipe data number.
const boolean = true; // Deklarasi variabel 'boolean' dengan tipe data boolean.

const numberToString = String(number); // Mengubah tipe data number menjadi string.
const booleanToString = String(boolean); // Mengubah tipe data boolean menjadi string.

console.log(numberToString); // Menampilkan string hasil konversi dari 'number'.
console.log(booleanToString); // Menampilkan string hasil konversi dari 'boolean'.

// number
const string = "10"; // Deklarasi variabel string.
const boolean2 = true; // Deklarasi variabel boolean.

const stringToNumber = Number(string); // Mengubah tipe data string menjadi number.
const booleanToNumber = Number(boolean2); // Mengubah tipe data boolean menjadi number.

console.log(stringToNumber); // Menampilkan hasil konversi string menjadi number.
console.log(booleanToNumber); // Menampilkan hasil konversi boolean menjadi number.

// boolean
const number2 = 10; // Deklarasi variabel number.
const string2 = "10"; // Deklarasi variabel string.

const numberToBoolean = Boolean(number2); // Mengubah tipe data number menjadi boolean.
const stringToBoolean = Boolean(string2); // Mengubah tipe data string menjadi boolean.

console.log(numberToBoolean); // Menampilkan hasil konversi number menjadi boolean.
console.log(stringToBoolean); // Menampilkan hasil konversi string menjadi boolean.

// konversi implicit
const number3 = 10; // Deklarasi variabel number.
const string3 = 'umurku ' + number3; // Deklarasi variabel string.

console.log(string3); // Menampilkan hasil penjumlahan number dan string.

const bool = true; // Deklarasi variabel boolean.
const string4 = 1 + bool; 

console.log(string4); // Deklarasi variabel string.

const title3 = "Operator Aritmatika"; // Deklarasi variabel string.
console.log(title3);

// oprator
const number4 = 10; // Deklarasi variabel number.
const number5 = 20; // Deklarasi variabel number.

const sum = number4 + number5; // Penjumlahan antara 'number4' dan 'number5'.
const subtract = number4 - number5; // Pengurangan antara 'number4' dan 'number5'.
const multiply = number4 * number5; // Perkalian antara 'number4' dan 'number5'.
const divide = number4 / number5; // Pembagian antara 'number4' dan 'number5'.

console.log(sum); // Menampilkan hasil penjumlahan.
console.log(subtract); // Menampilkan hasil pengurangan.
console.log(multiply); // Menampilkan hasil perkalian.
console.log(divide); // Menampilkan hasil pembagian.

const title2 = " comparison Operator"; // Deklarasi variabel string.
console.log(title2);

// comparison operator
const number6 = 10; // Deklarasi variabel number.
const number7 = 20; // Deklarasi variabel number.

const isEqual = number6 === number7; // Mengevaluasi apakah 'number6' sama dengan 'number7'.
const isNotEqual = number6 !== number7; // Mengevaluasi apakah 'number6' tidak sama dengan 'number7'.
const isLessThan = number6 < number7; // Mengevaluasi apakah 'number6' kurang dari 'number7'.
const isGreaterThan = number6 > number7; // Mengevaluasi apakah 'number6' lebih besar dari 'number7'.
const isLessThanOrEqual = number6 <= number7; // Mengevaluasi apakah 'number6' kurang dari atau sama dengan 'number7'.
const isGreaterThanOrEqual = number6 >= number7; // Mengevaluasi apakah 'number6' lebih besar dari atau sama dengan 'number7'.

console.log(isEqual); // Menampilkan hasil evaluasi.  
console.log(isNotEqual); // Menampilkan hasil evaluasi.
console.log(isLessThan); // Menampilkan hasil evaluasi.
console.log(isGreaterThan); // Menampilkan hasil evaluasi.
console.log(isLessThanOrEqual); // Menampilkan hasil evaluasi.
console.log(isGreaterThanOrEqual); // Menampilkan hasil evaluasi.

const title = "Logical Operator"; // Deklarasi variabel string.
console.log(title);

// logical operator
const number8 = 10; // Deklarasi variabel number.
const number9 = 20; // Deklarasi variabel number.

const isAnd = number8 > 5 && number9 < 30; // Mengevaluasi apakah 'number8' lebih besar dari 5 dan 'number9' kurang dari 30.
const isOr = number8 > 5 || number9 < 30; // Mengevaluasi apakah 'number8' lebih besar dari 5 atau 'number9' kurang dari 30.
const isNot = !(number8 > 5 && number9 < 30); // Mengevaluasi apakah 'number8' lebih besar dari 5 dan 'number9' kurang dari 30.

console.log(isAnd); // Menampilkan hasil evaluasi.
console.log(isOr); // Menampilkan hasil evaluasi.
console.log(isNot); // Menampilkan hasil evaluasi.

const title1 = "string Operator"; // Deklarasi variabel string.
console.log(title1);

// string operator
const string5 = "Fathir"; // Deklarasi variabel string.
const string6 = "Sagtiana"; // Deklarasi variabel string.

const isEqual2 = string5 === string6; // Mengevaluasi apakah 'string5' sama dengan 'string6'.
const isNotEqual2 = string5 !== string6; // Mengevaluasi apakah 'string5' tidak sama dengan 'string6'.
const gabung = string5 + " " + string6;

console.log(isEqual2); // Menampilkan hasil evaluasi.
console.log(isNotEqual2); // Menampilkan hasil evaluasi. 
console.log(gabung); 


// soal 

const currency = "IDR"; 
let value = 10000 + 5000; 
const money = currency + " " + value; 

console.log(money);

// function 

function add(nama = "Fathir Sagtiana", umur = 17) {
    const title = "Hello, my name is " + nama + " and I am " + umur + " years old.";
    console.log(title);

 
}

add();
add("Luka Megurine", 20);


function tambah(a, b) {
    return a + b; // balikin hasil penjumlahan
  }
  
  let hasil = tambah(5, 3);
  console.log(hasil); // Output: 8


  function perkalian(a, b) {
    return a * b; // balikin hasil perkalian
  }
  
  let hasil2 = perkalian(5, 3);
  console.log(hasil2); // Output: 15
  
// arrow function

const coba = (a, b) => a + b;

console.log(coba(5, 3));

