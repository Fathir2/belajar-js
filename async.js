/**
 * asyncronous adalah teknik dimana proses yang membutuhkan waktu lama untuk mengeksekusi kode programnya, 
 * jadi proses tersebut akan dijalankan secara asynchronous atau tidak berurutan. tentunya dengan menggunakan teknik asyncronous, 
 * kita dapat menghindari proses blocking pada program kita sehingga program kita akan berjalan lebih cepat. 
 * ibaratnya seperti kita sedang mengantri di kasir, ketika kita sedang mengantri di kasir, kita tidak perlu menunggu orang yang mengantri didepan kita selesai bertransaksi,
 * kita dapat melakukan hal lain sambil menunggu giliran kita untuk bertransaksi.
 *  nah di bawah ini adalah contoh teknik asyncronous:
 * 
 * 1. Callback
 * 2. Promises
 * 3. Async/Await
 * 
 * 
 */

// Contoh menggunakan Callback
function fetchData(callback) {
    setTimeout(() => {
        callback("Data berhasil diambil");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output setelah 1 detik: Data berhasil diambil
});

// Contoh menggunakan Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data berhasil diambil");
        }, 1000);
    });
}

fetchData().then((data) => {
    console.log(data); // Output setelah 1 detik: Data berhasil diambil
}).catch((error) => {
    console.error(error);
});

// Contoh menggunakan Async/Await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data berhasil diambil");
        }, 1000);
    });
}

async function main() {
    try {
        const data = await fetchData();
        console.log(data); // Output setelah 1 detik: Data berhasil diambil
    } catch (error) {
        console.error(error);
    }
}

main();