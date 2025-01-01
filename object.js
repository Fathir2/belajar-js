// membuat data dalam sebuah object, kali ini kita buat object baru
const myName = { name: 'Luka Megurine', age: 20 };

console.log(myName.name);

// atau kita bisa membaut object dan memanggilnya dengan cara yang berbeda, dengan dibungkus dengan 
// konstan 
 const { name, age} = myName;

 console.log(name, age);

/**
 * itu tadi contoh sederhana membuat data dalam sebuah object dengan key dan value. 
 name dan age adalah key, Luka Megurine dan 20 adalah value
 selanjutnya kita buat object destructuring dan memanggilnya
 */

 const user = {
     id : 1,
     nama: 'Luka Megurine',
     umur: 20, 
     email: 'WlWwT@example.com',
     password: '12345',

 };

 const { id, email } = user;
 // nilai default dalam object destructuring
 
delete user.email;

console.log(user);

/**
 * kita bisa mengubah data dalam sebuah object menggunakan destructuring, 
 * selanjutnya kita buat object destructuring dan memanggilnya
 * 
 */

const customer = {
    id: 1,
    name: 'Luka Megurine',
    age: 20,
    email: 'WlWwT@example.com',
    password: '12345',
    address: {
        street: 'Jalan Jenderal Sudirman',
        city: 'Jakarta',
        country: 'Indonesia',   
    },
};

const { address: { street, city, country } } = customer;

console.log(street, city, country);

/**
 * itu tadi contoh sederhana membuat data dalam sebuah object dengan key dan value. 
 * name dan age adalah key, Luka Megurine dan 20 adalah value
 * selanjutnya kita akan membuat array. Array adalah kumpulan data yang disimpan dalam satu variabel. 
 * 
 */

const fruits = ['apple', 'banana', 'orange'];

console.log(fruits);
  
// mengakses elemen array
console.log(fruits[0]);

// nambah elemen array
fruits.push('grape');
console.log(fruits);

// menghapus elemen array
fruits.pop();
console.log(fruits);

// menghapus elemen array menggunakan shift
fruits.shift();
console.log(fruits);

// menambah elemen array menggunakan unshift
fruits.unshift('apple');
console.log(fruits);

// mengubah elemen array
fruits[0] = 'kiwi';
console.log(fruits);

// menggabungkan array
const vegetables = ['tomato', 'potato', 'onion'];
const allFruits = fruits.concat(vegetables);
console.log(allFruits);

// menggunakan array descructuring
const [a, b, c] = fruits;
console.log(a, b);

/**
 * selanjutnya kit akan mempelajari array method
 * kita akan membuat sebuah array baru dengan array method
 */

// menggunakan map

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

// map contoh yang lebih kompleks
const products = [
    { id: 1, name: "Laptop", price: 5000000 },
    { id: 2, name: "Handphone", price: 3000000 },
    { id: 3, name: "Tablet", price: 2000000 }
  ];

  const productNames = products.map((product) => product.name);
  console.log(productNames);

// menggunakan filter

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// contoh yang lebih kompleks
const siswa = [
    { nama: "Fathir", nilai: 80 },
    { nama: "Putri", nilai: 70 },
    { nama: "Aldi", nilai: 85 }
  ];
  
  const lulus = siswa.filter((s) => s.nilai >= 75);
  console.log(lulus);

// menggunakan reduce

const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// menggunakan find

const findNumber = numbers.find((number) => number === 3);
console.log(findNumber);

// menggunakan findIndex

const findIndex = numbers.findIndex((number) => number === 3);
console.log(findIndex);

// menggunakan sort

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

/**
 * itu tadi contoh array method. selanjutnya kita akan mempelajari Map object di 
 * JavaScript beserta contoh penggunaannya
 */

const map = new Map();

map.set('name', 'Luka Megurine');
map.set('age', 20);
console.log(map.get('name'));
console.log(map.get('age'));

// contoh yang lebih sederhana dan simpel 

const map2 = new Map([
    ['name', 'Luka Megurine'],
    ['age', 20],
  ]);
  
  console.log(map2.get('name'));
  console.log(map2.get('age'));

  // menambahkan elemen ke Map object
  map2.set('email', 'WlWwT@example.com');
  console.log(map2.get('email'));   

/**
 * selanjutnya kita akan mempelajari tentang Set di JavaScript beserta contoh penggunaannya.
 * apa itu set? Set adalah kumpulan nilai unik yang disimpan dalam satu variabel yang tidak memiliki urutan.
 * singkatnya set adalah kumpulan nilai unik yang disimpan dalam satu variabel. 
 * 
 */

 // cara menyimpan nilai di set 

 const set = new Set();
 set.add('Luka Megurine');
 set.add('Fathir Sagtiana');
 set.add('Fathir Sagtiana');
 console.log(set);

 // contoh yang lebih sederhana dan simpel

 const set2 = new Set(['Luka Megurine', 'Fathir Sagtiana', 'Fathir Sagtiana']);
 console.log(set2);

 // Method add hanya menerima satu argument sebagai nilai yang ingin kita tambahkan ke dalam set. 
 // Jika kita memberikan nilai yang sama, set hanya akan menyimpan sekali saja. 
 // Oleh karena itu, data yang ada di dalam set tidak akan terduplikat.

// mengakses nilai dalam set 

const set4 = new Set([1, 2, 3, 4, 5]);

for (const value of set4) {
    console.log(value);
}

// cara lain bisa menggunakan metode foreach

set4.forEach((value) => {
    console.log(value);
  });

// menghapus nilai di set

const set5 = new Set([1, 2, 3, 4, 5]);

set5.delete(3);
console.log(set5);

// ngat bahwa set tidak memiliki urutan atau index, jadi argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.


/** 
 * selanjutnya kita akan mempelajari tentang Spread Operator di JavaScript beserta contoh penggunaannya
 * apa itu spread operator? seperti namamya, yaitu menyebarkan. 
 * Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array.
 * Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array.
 * Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. 
 * 
 */

// spread operator pada object

const person = {
    name: 'Luka Megurine',
    age: 20,
    email: 'WlWwT@example.com',
    address: {
        city: 'Jakarta',
        country: 'Indonesia',
    },
};

const person2 = { ...person };
console.log(person2);

// spread operator dengan merge 

const person3 = {
    name: 'Luka Megurine',
    age: 20,
    email: 'WlWwT@example.com',
    address: {
        city: 'Jakarta',
        country: 'Indonesia',
    },
};

const person4 = {
    name: 'Fathir Sagtiana',
    age: 17,
    email: '5t9t7@example.com',
    address: {
        city: 'Bandung',
        country: 'Indonesia',        
    },
};

const updatedPerson = { 
  ...person3,
  husband: 'Fathir Sagtiana',
};
const updatedPerson2 = { 
  ...person4,
  wife: 'Luka Megurine',
};


const person5 = {
  ...updatedPerson,
  ...updatedPerson2,
  husband: updatedPerson.husband,
  wife: updatedPerson2.wife,
};

console.log(person5);


/**
 * selanjutnya kita akan mempelajari tentang Rest operator di JavaScript beserta contoh penggunaannya
 * rest operator adalah operator yang digunakan untuk mengumpulkan argumen yang tidak diketahui jumlahnya.
 * intinya rest operator adalah suatu operator yang mengumpulkan sisa-sisa argumen yang tidak diketahui jumlahnya 
 * untuk di gunakan dalam satu fungsi atau dalam beberapa fungsi.
 */

const add = (...args) => {
    let total = 0;
    for (const value of args) {
      total += value;
    }
    return total;
  };
  
  console.log(add(1, 2, 3, 4, 5)); // 15
    

  const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */

    const employee = {
      name: name,
      email: email,
      joinYear: joinYear,
    };
    employees.push(employee);
    console.log(employees);
     
  }
  