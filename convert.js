let name = "Farhan";

let age = "21";

age = Number(age);
let isStudent = "true";

isStudent = Boolean(isStudent);
let hobbies = "reading, coding, drawing";

hobbies = hobbies.split(", ");
let salary = null;

salary = String(salary);

if (age > 17) {
    console.log("You are an adult.");
}

if (isStudent === true) {
    console.log("You are a student.");
}

if (hobbies.length > 2) {
    console.log("You have more hobbies.");
}

if (salary === "null") {
    console.log("You have no salary.");
}