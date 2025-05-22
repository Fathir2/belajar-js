function sapa(nama) {
    console.log("Halo, " + nama + "teman");
}

if (typeof nama === "undefined") {
    console.log("Halo, teman");
}

sapa("Farhan"); // Output: "Halo, Farhan!"
// Output: "Halo, undefinedteman"
