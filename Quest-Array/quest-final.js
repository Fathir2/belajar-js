const inventory = [ 
    {name: 'Sword', category: 'weapon', value: 100, quantity: 2}, 
    {name: 'Shield', category: 'armor', value: 80, quantity: 1}, 
    {name: 'Potion', category: 'consumable', value: 10, quantity: 5},
     {name: 'Bow', category: 'weapon', value: 60, quantity: 3},
      {name: 'Helmet', category: 'armor', value: 60, quantity: 2} 
    ];

const grouped = inventory.reduce((acc, item) => {
    const category = item.category;
    const totalValue = item.quantity * item.value;
    acc[category] = (acc[category] || 0) + totalValue;
    return acc;
}, {});

const result = Object.entries(grouped)
    .sort(([,a], [,b]) => a - b)
    .map(([cat, val]) => cat + ': ' + val)
    .join(', ');

console.log(result);