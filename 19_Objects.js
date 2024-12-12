let input = 'language';

let alien = {
    name: "Avisek",
    language: "JS",
    'work exp': 5,
    laptop: {
        OS: 'Windows',
        RAM: 4
    }
};


// console.log(alien.name);
// console.log(alien['name']);
// console.log(alien["work exp"]);
// console.log(alien.laptop.RAM);
console.log(alien.laptop?.OS.length); //if any risk of key not defined then add ?, applicable for String 


console.log(alien[input]); // We are using expression to evaluating the value
console.log(alien);

delete alien.language // if you want to delete any object

console.log(alien);
