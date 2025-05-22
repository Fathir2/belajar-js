 // Rating film
function CekUmur(umur) {
if (umur > 0 && umur < 17) {
    console.log("belum cukup umur untuk nonton film");
} else if (umur >= 17) {
    console.log("umur sudah cukup untuk nonton film");
} else {
    console.log("umur tidak valid");
}
}
 
CekUmur(14);
 CekUmur(20);


 // cek uang 

 function CekUang (uang) {
    if (uang >= 5000) {
     console.log("oke, boleh beli eskrim");
 } else {
    console.log("belum cukup uangnya, nabung dulu ya..."); 

 }
}

CekUang(5000);
CekUang(1000);


// gabung 


function CekUangdanUmur (uang, umur) {
    if (uang >= 5000 && umur >= 18) {
        console.log("baik umur ataupun uang, sama-sama cukup");
    } else if (uang < 5000 && umur >= 18  ) {
         console.log("uangnya gk cukup, tapi usianya iya");
    } else if (uang >= 5000 && umur < 18) {
        console.log("uangnya cukup tapi umurnya tidak"); 
    }


}

CekUangdanUmur(5000, 18);

