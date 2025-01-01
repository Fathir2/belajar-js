/** Yo! kali ini kita akan mempelajari tentang conditional flow di JavaScript
 * apa itu conditional flow? Conditional Flow di JavaScript adalah cara untuk mengontrol jalannya program berdasarkan kondisi tertentu. 
 * Conditional flow memungkinkan kode menjalankan blok tertentu jika suatu kondisi benar (true) dan melewati blok lain jika kondisi tersebut salah (false).
 * 
 */

const beliMainan = false; // Deklarasi variabel 'beli mainan' dengan nilai boolean true.

if (beliMainan) { // Jika 'beli mainan' bernilai true
    console.log("Beli mainan"); // Menampilkan pesan "Beli mainan" di konsol.
} else { // Jika 'beli mainan' bernilai false
    console.log("Tidak beli mainan"); // Menampilkan pesan "Tidak beli mainan" di konsol.
}

// contoh lain
const umur = 18; // Deklarasi variabel 'unur' dengan nilai number.

if ( umur <= 17) { // Jika 'umur' kurang dari atau sama dengan 17
    console.log("Tidak boleh masuk"); // Menampilkan pesan "Tidak boleh masuk" di konsol.    
} else { // Jika 'umur' lebih besar dari 17
    console.log("Boleh masuk"); // Menampilkan pesan "Boleh masuk" di konsol.
}

// bisa menggunakan cara yang lebih sederhana menggunakan ternary operator
const umur2 = 18; // Deklarasi variabel 'unur' dengan nilai number.
const valid = true; // Deklarasi variabel 'valid' dengan nilai boolean.
const result = valid >= 17 ? "Tidak boleh masuk" : "Boleh masuk" ; // Deklarasi variabel 'result' dengan nilai boolean. 

console.log(result);

/** selain if-else statement, ada kuga yang namanya switch statement.
 * apa itu switch statement? Switch statement adalah struktur kontrol yang digunakan untuk mengevaluasi nilai tertentu dan menjalankan blok kode yang sesuai.
 * cara kerja switch statement adalah mengevaluasi nilai yang diberikan dan menjalankan blok kode yang sesuai menggunakan kondisi case.
 * berikut contoh penggunaannya
 */

const day = "Monday"; // Deklarasi variabel 'day' dengan nilai string "Saturday".
switch (day) { // Mengevaluasi nilai variabel 'day' dan menjalankan blok kode sesuai kondisi case.
    case "Sunday": // Jika 'day' bernilai "Sunday"
        console.log("Today is Sunday"); // Menampilkan pesan "Today is Sunday" di konsol.
        break; // Menghentikan eksekusi switch statement.
    case "Monday": // Jika 'day' bernilai "Monday"
        console.log("Today is Monday"); // Menampilkan pesan "Today is Monday" di konsol.
        break; // Menghentikan eksekusi switch statement.
    case "Tuesday": // Jika 'day' bernilai "Tuesday"
        console.log("Today is Tuesday"); // Menampilkan pesan "Today is Tuesday" di konsol.
        break; // Menghentikan eksekusi switch statement.
    case "Wednesday": // Jika 'day' bernilai "Wednesday"
        console.log("Today is Wednesday"); // Menampilkan pesan "Today is Wednesday" di konsol.
        break; // Menghentikan eksekusi switch statement.    
    case "Thursday": // Jika 'day' bernilai "Thursday"
        console.log("Today is Thursday"); // Menampilkan pesan "Today is Thursday" di konsol.
        break; // Menghentikan eksekusi switch statement.
    case "Friday": // Jika 'day' bernilai "Friday"    
        console.log("Today is Friday"); // Menampilkan pesan "Today is Friday" di konsol.           
        break; // Menghentikan eksekusi switch statement.
    case "Saturday": // Jika 'day' bernilai "Saturday"
        console.log("Today is Saturday"); // Menampilkan pesan "Today is Saturday" di konsol.
        break; // Menghentikan eksekusi switch statement.
    default: // Jika 'day' bernilai default
        console.log("Invalid day"); // Menampilkan pesan "Invalid day" di konsol.
}

/** selanjutnya kita akan mempelajari tentang looping di javascript 
 * apa itu looping? looping adalah suatu perulangan yang digunakan untuk mengulang sejumlah instruksi atau perintah berulang kali dalam program.
 * looping terbagi menjadi beberapa jenis, yaitu for loop, while loop, dan do-while loop.
 * untuk permulaan, kita akan membahas tentang for loop. 
 * semenjak kehadiran ES6, JavaScript memiliki berbagai jenis for loop, seperti for-in loop, for-of loop, dan for loop. 
 * yang akan kita bahas adalah for loop terlebih dahulu. 
*/

// for loop
for (let i = 0; i < 10; i++) { // Deklarasi variabel 'i' dengan nilai 0.
    console.log(i); // Menampilkan nilai variabel 'i' di konsol.
}

// for in 

const person = {
    name: 'Luka Megurine',
    age: 20,
    email: 'WlWwT@example.com',
    address: {
        city: 'Jakarta',
        country: 'Indonesia',
    },
};

for (const key in person) { // Deklarasi variabel 'key' dengan nilai 'person'.
    console.log('Variabel ' + key + ' bernilai', person[key]); // Menampilkan nilai variabel 'key' di konsol.
}

// for of

const colors = ['red', 'green', 'blue']; // Deklarasi array 'colors' dengan nilai 'red', 'green', dan 'blue'.
for (const color of colors) { // Deklarasi variabel 'color' dengan nilai 'colors'.
    console.log('Variabel ' + color + ' bernilai', color); // Menampilkan nilai variabel 'color' di konsol.
}

/** selanjutnya kita akan menggunakan while loop
 * while loop adalah salah satu jenis looping di JavaScript yang digunakan untuk mengulang instruksi atau perintah berulang kali hingga kondisi tertentu tidak lagi bernilai true.
 * bagaimana cara kerjanya? 
 * cara kerja while loop adalah mengulang instruksi atau perintah berulang kali hingga kondisi tertentu tidak lagi bernilai true.
 *  begini cara kerjanya.
 */

let i = 0; // Deklarasi variabel 'i' dengan nilai 0.

while (i < 10) { // Mengulang instruksi atau perintah berulang kali hingga kondisi tertentu tidak lagi bernilai true.
    console.log(i); // Menampilkan nilai variabel 'i' di konsol.
    i++; // Menambahkan nilai variabel 'i' dengan 1.
}

// contoh lain

let j = 0; // Deklarasi variabel 'j' dengan nilai 0.
while (j < 10) { // Mengulang instruksi atau perintah berulang kali hingga kondisi tertentu tidak lagi bernilai true.
    console.log(j); // Menampilkan nilai variabel 'j' di konsol.
    j++; // Menambahkan nilai variabel 'j' dengan 1.
}

// do while loop

let k = 0; // Deklarasi variabel 'k' dengan nilai 0.
do {
    console.log(k); // Menampilkan nilai variabel 'k' di konsol.
    k++; // Menambahkan nilai variabel 'k' dengan 1.
} while (k < 10); // Mengulang instruksi atau perintah berulang kali hingga kondisi tertentu tidak lagi bernilai true.

//contoh lain yang agak kompleks

let success = false;
let attempts = 0;

do {
    attempts++;
    console.log(`Coba koneksi (percobaan ke-${attempts})`);
    // Simulasi kondisi keberhasilan
    success = Math.random() > 0.7;
} while (!success && attempts < 5);

if (success) {
    console.log("Koneksi berhasil!");
} else {
    console.log("Gagal terkoneksi setelah 5 percobaan.");
}

// state management

// break 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}   

// continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

/** ERORR HANDLING 
 * error handling adalah cara untuk menangani kesalahan atau error yang mungkin terjadi dalam program kita.
 * ada beberapa jenis error handling di javascript, yaitu try-catch, throw, dan finally.
 * untuk permulaan kita akan membahas tentang throw terlebih dahulu.
 * 
*/

const error = new Error('Terjadi kesalahan');
console.error(error);

// contoh lain menggunakan if-else statement

const paid = false;
if (paid) {
    console.log("Lunas");
} else {
    throw new Error("Belum lunas");
}

// menggunakan try-catch eror 

try {
    const paid = false;
    if (paid) {
        console.log("Lunas");
    } else {
        throw new Error("Belum lunas");
    }
} catch (error) {
    console.error(error);
}

// menggunakan finally

try {
    const paid = false;
    if (paid) {
        console.log("Lunas");
    } else {
        throw new Error("Belum lunas");
    }
} finally {
    console.log("Program selesai");
}
