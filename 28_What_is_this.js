//Non-arrow function
// let laptop = {
//     cpu: 'i9',
//     ram: '4gb',
//     os: 'ubuntu'
// }

// function greet1(){
    
//     // console.log(laptop.os);
//     return `Hello ${laptop.os}`;
// }

// // greet1(); // printing encapsulating value from function
// console.log(greet1()); // returning something from function


//Arrow function
// let laptop = {
//     cpu: 'i9',
//     ram: '4gb',
//     os: 'ubuntu',
//     greet : function(){
//         // console.log("Hello World");
//         console.log(this.cpu); // this represents the current object
//         // return `Hello ${j}`;

//     }
// }

// laptop.greet(laptop.cpu);
// console.log(laptop.greet(laptop.os));



// //object1
// let laptop1 = {
//     cpu: 'i9',
//     ram: 6,
//     os: 'ubuntu',
// }

// //object2
// let laptop2 = {
//     cpu: 'i12',
//     ram: 5,
//     os: 'windows',
// }

// //Using third party function to compare
// function getFastLaptop(laptop1, laptop2){
//     if(laptop1.ram>laptop2.ram){
//         console.log("Laptop1 ram is larger")
//     }else{
//         console.log("Laptop2 ram is larger")
//     }
// }

// getFastLaptop(laptop1, laptop2);



//object1
let laptop1 = {
    cpu: 'i9',
    ram: 6,
    os: 'ubuntu',

    compare : function(other){
        if(this.ram>other.ram){ 
            console.log("Laptop1 ram is larger")
        }else{
            console.log("Laptop2 ram is larger")
        }
    }
}

//object2
let laptop2 = {
    cpu: 'i12',
    ram: 8,
    os: 'windows',

}

//object3
let laptop3 = {
    cpu: 'i12',
    ram: 4,
    os: 'Mac',

}


laptop1.compare(laptop3); //after going inside laptop1.compare it will accept argument(laptop2/laptop3) with other

