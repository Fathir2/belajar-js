/**
 * di pembahasan kali ini kita akan mempelajari konsep OOP di JavaScript.
 * OOP atau Object-Oriented Programming adalah konsep pemrograman yang memanfaatkan konsep objek untuk memodelkan realitas dunia nyata.
 * pada OOP, objek adalah entitas yang memiliki atribut dan perilaku yang dapat diakses melalui metode.
 * yang akan kita bahas adalah class di JavaScript.
 * kali ini kita akan mempelajari tentang class di JavaScript
 * apa itu class? Class adalah sebuah template atau blueprint untuk membuat objek. 
 * objek adalah sebuah instance dari class yang memiliki atribut dan perilaku yang dapat diakses melalui metode.
 */


class Person {
    constructor(name, age) {
      this.name = name; // Atribut
      this.age = age; // Atribut
    }
    // Metode
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  // kode diatas merupakan parent class yang memiliki atribut dan perilaku yang dapat diakses melalui metode.
  
  // Membuat objek dari class Person
  const person1 = new Person("Luka Megurine", 20);
  person1.sayHello();

  // pewarisan atau inheritance. pewarisan adalah konsep dimana sebuah class dapat mewarisi atribut dan perilaku dari class lainnya.
  class Shape {
    area() {
      return 0;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2; // Mengoverride metode area
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.area()); // Output: 78.53981633974483
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height; // Mengoverride metode area
    }   
  }  
  
  const rectangle = new Rectangle(4, 6);
  console.log(rectangle.area());// Output: 24

  // update nilai atribut pada objek
  person1.name = "Maria Mikhalovna";
  person1.age = 17;
  person1.sayHello();

  // object composition 

  const canAttack = () => ({
    attack() {
      console.log('Attacking!');
    }
  });
  
  const canDefend = () => ({
    defend() {
      console.log('Defending!');
    }
  });
  
  const canCastSpell = () => ({
    castSpell() {
      console.log('Casting spell!');
    }
  });
  
  const createWarrior = (name) => {
    const warrior = { name, type: 'Warrior' };
    return Object.assign(warrior, canAttack(), canDefend());
  };
  
  const createMage = (name) => {
    const mage = { name, type: 'Mage' };
    return Object.assign(mage, canAttack(), canCastSpell());
  };
  
  const warrior = createWarrior('Arjuna');
  warrior.attack(); // Output: Attacking!
  warrior.defend(); // Output: Defending!
  
  const mage = createMage('Gandalf');
  mage.attack();    // Output: Attacking!
  mage.castSpell(); // Output: Casting spell!
  

  // menggunakan object.assign 

  const canWalk = {
    walk() {
      console.log('Walking...');
    }
  };
  
  const canEat = {
    eat() {
      console.log('Eating...');
    }
  };
  
  const canSwim = {
    swim() {
      console.log('Swimming...');
    }
  };
  
  // Gabungkan fungsi untuk membuat objek baru
  const person = Object.assign({}, canWalk, canEat, canSwim);
  person.walk(); // Output: Walking...
  person.eat();  // Output: Eating...
  person.swim(); // Output: Swimming...
  

 
  