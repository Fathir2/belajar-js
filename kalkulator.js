function Tambah(a, b) {
    return a + b;
}

function Kurang(a, b) {
    return a - b;
}

function Kali(a, b) {
    return a * b;
}

function Bagi(a, b) {
    if (b === 0) {
        throw new Error("Pembagian dengan nol tidak diperbolehkan");
    }
    return a / b;
}

console.log("Hasil Penjumlahan: " + Tambah(5, 3)); // Output: 8
console.log("Hasil Pengurangan: " + Kurang(5, 3)); // Output: 2
console.log("Hasil Perkalian: " + Kali(5, 3)); // Output: 15
console.log("Hasil Pembagian: " + Bagi(5, 3)); // Output: 1.6666666666666667
console.log("Hasil Pembagian: " + Bagi(5, 0)); // Output: Error: Pembagian dengan nol tidak diperbolehkan


function sapa (nama) {
    return "Halo, " + nama + "Teman";
}

sapa("Farhan"); // Output: "Halo, Farhan!"
sapa;
