// function add(num1, num2, num3){
//     return num1 + num2 + num3;
// }

// console.log(add(4, 3, 6));

//num3=1, if we are not sending any arguments then by default num3 will accept 1
function add(num1, num2, num3=1){
    return num1 + num2 + num3;
}

console.log(add(4, 3));



function test(user){
    let u = "Animesh";
    console.log(`"local variable ${u}"`);
    return `Hello ${user} !`;
}

let user = "Avisek";
let str = test(user); //encapsulating returned data inside variable str
console.log(str);
// console.log(str + "u value is " + u); // output undefined, as u not globally defined