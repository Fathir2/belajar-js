const students = [ 
    {name: 'Alice', grade: 'B'},
     {name: 'Bob', grade: 'A'}, 
     {name: 'Charlie', grade: 'C'}, 
     {name: 'Diana', grade: 'A'} 
];

const hasil = students 
.find(item => item.grade === 'A' )
.some(item => item.grade === 'F');

console.log('Found: ' + students.name + ', Has F grade: ' + (hasil));




