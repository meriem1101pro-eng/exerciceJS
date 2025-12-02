const nums = [2, 5, 8, 7, 3];
const nouvNums = nums.map(function(element) {
    return element * 3;
});
console.log(nouvNums); 
const personnes = [ 
    { nom: "Rami", age: 33, estMember: true }, 
    { nom: "Fatihi", age: 24, estMember: false }, 
    { nom: "Chakib", age: 45, estMember: true }, 
    { nom: "Mounir", age: 37, estMember: false }
]; 

const persAges = personnes.filter(function(pers) {
    return pers.age >= 35;
});

console.log("\n Résultat Filter ..");
console.log(persAges);
