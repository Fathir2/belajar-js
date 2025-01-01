/** 
 * halo semua, di pembahasan kali ini kita akan membahas tentang Functonal Programming pada JavaScript. 
 * apa itu Functional Programming? fungsional programming adalah paradigma pemrograman yang berfokus pada fungsi.
 * sebelum kita masuk ke dalam pembahasan, kita akan membahas terlebih dahulu apa itu paradigma pemrograman.
 * paradigma pemrograman adalah cara pandang kita dalam menyelesaikan masalah dengan menggunakan bahasa pemrograman.
 * ada beberapa paradigma pemrograman yang sering digunakan, diantaranya:
 * 1. Imperative Programming
 * 2. Declarative Programming
 * 3. Object Oriented Programming
 * 4. Functional Programming
 * 
 * pada pembahasan kali ini kita akan membahas tentang Functional Programming. 
 * seperti yang sudah saya jelaskan diatas, Functional Programming adalah paradigma pemrograman yang berfokus pada fungsi.
 * jadi dalam Functional Programming, fungsi adalah yang utama.
 * oke, kita akan bahas satu persatu tentang Functional Programming.
 * ada beberapa karakteristik dari Functional Programming, diantaranya:
 * 1. Pure Function
 * 2. Immutability`
 * 3. Higher Order Function
 * 4. Recursion
 * 
 * 1. Pure Function
 * Pure Function adalah fungsi yang menghasilkan nilai yang sama jika inputan yang diberikan juga sama.
 * Pure Function tidak memiliki efek samping, artinya Pure Function tidak mengubah nilai dari variabel diluar fungsi.
 * contoh Pure Function:
 * 
*/

function add(a, b) {
    return a + b;
} // fungsi ini adalah Pure Function, karena fungsi ini hanya menghasilkan nilai yang sama jika inputan yang diberikan juga sama.

/**
 * 2. Immutability
 * Immutability adalah karakteristik dari Functional Programming dimana nilai dari variabel tidak dapat diubah.
 * contoh Immutability:
*/

const name = "John"; // variabel name tidak dapat diubah nilainya. mengapa demikian? karena variabel name menggunakan const yang artinya variabel name adalah immutable. 
// contoh lain:

const arr = [1, 2, 3, 4, 5]; // variabel arr adalah immutable, karena variabel arr menggunakan const. nilai dari variabel arr tidak dapat diubah karena variabel arr adalah immutable.
// semisal kita ingin menambahkan nilai kedalam variabel arr, kita dapat menggunakan metode lain, yaitu dengan menggunakan metode spread operator.
const newArr = [...arr, 6]; // dengan menggunakan metode spread operator, kita dapat menambahkan nilai kedalam variabel arr tanpa mengubah nilai dari variabel arr.
// coba kita console.log variabel arr dan newArr

console.log(arr); // output: [1, 2, 3, 4, 5]
console.log(newArr); // output: [1, 2, 3, 4, 5, 6]

/**
 * 3. High Order Function
 * High Order Function adalah fungsi yang menerima fungsi lain sebagai parameter dan mengembalikan fungsi lain sebagai nilai kembali.
 * jadi, simpelnya High Order Function adalah fungsi yang menerima fungsi lain sebagai parameter.
 * sebagain contoh High Order Function:
*/

function sayHello(name) {
    return `Hello, ${name}`;
}

function greeting(name, callback) {
    return callback(name);
}

console.log(greeting("John", sayHello)); // output: Hello, John


/**
 *  
 * 4. Recursion
 * Recursion adalah teknik dimana sebuah fungsi memanggil dirinya sendiri untuk menyelesaikan masalah. 
 *  jadi fungsi tersebut akan memanggil dirinya sendiri sampai kondisi yang diinginkan tercapai.
 * contoh Recursion:
 * 
 */

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); // output: 120