const products = [ 
    {name: 'Laptop', price: 1000}, 
    {name: 'Mouse', price: 25}, 
    {name: 'Keyboard', price: 75}, 
    {name: 'Monitor', price: 300}, 
    {name: 'Cable', price: 10} 
];

const results = products
.filter(item => item.price > 50)
.map(item => item.name)
.reduce((acc, name) => acc + ',' +  name);

console.log(results);