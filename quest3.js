function cekUmur(umur) {
    if (umur >= 0 && umur < 13) {
        console.log("Anak-anak");
    } else if (umur >= 13 && umur < 18) {
        console.log("Remaja");
    } else if (umur >= 18) {
        console.log("Dewasa");
    } else {
        console.log("Umur tidak valid");
    }
}


cekUmur(10); // Output: "Anak-anak"
cekUmur(15); // Output: "remaja"
cekUmur(20); // Output: "Dewasa"