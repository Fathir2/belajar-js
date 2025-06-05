const players = [ 
    {name: 'Player1', score: 150}, 
    {name: 'Player2', score: 230}, 
    {name: 'Player3', score: 180}, 
    {name: 'Player4', score: 90} 
];

const totalScore = players.reduce((acc, score) => acc + score, 0 );

console.log(totalScore);