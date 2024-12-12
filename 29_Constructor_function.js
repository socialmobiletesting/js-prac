function laptop(name, tech){
    this.name = name
    this.tech = tech
    //we can use method inside constructor, return also can be done
    this.showVersion = function(){
        console.log("version 1.1");
        // return 7*6;
    }
}

// new creates new object by taking blueprint from constructor
let laptop1 = new laptop("Avisek", "JS");
let laptop2 = new laptop("Other", "Java");

console.log(laptop1);
laptop1.showVersion();
// let result = laptop1.showVersion();
// console.log(result);




