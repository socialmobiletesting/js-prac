let alien = {
    name: "Avisek",
    language: "JS",
    'work exp': 5,
    laptop: {
        OS: 'Windows',
        RAM: 4
    }
};

for(let key in alien.laptop){
    console.log(key, alien.laptop[key]); // var "key" will extract the KEY & VALUE
}

// for(let key in alien){
//     console.log(key, alien[key]); // var "key" will extract the KEY & VALUE
// }