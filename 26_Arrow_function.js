// let test = function(){
//     console.log("Hello from func!");
// }
// test();

// let add = function(num1, num2, num3=1){
//                 return num1 + num2 + num3;
//             }


// console.log(add(4, 3));



// let add = (num1, num2, num3=1) => {
//                 console.log("inside arrow => func");
//                 return num1 + num2 + num3;
//             }


// console.log(add(5, 9));



//Example of arrow function
//example1
let add = (num1, num2, num3=1) => num1 + num2 + num3;
console.log(add(10, 12));

/**
 * Arrow Function with Curly Braces {}:
When using {} in an arrow function, 
you need to explicitly "return" a value for the function to work as expected.
Without a return statement, 
the function "returns" undefined by default, causing the filter() method to behave incorrectly.
 */
let add1 = (num1, num2, num3=1) => {
    return num1 + num2 + num3;
}
console.log(add1(10, 12));


//example2
let str = () => console.log("inside str");
// console.log(str()); //output inside str undefined
str(); //Since str() is called directly, it prints "inside str" without returning anything, and there’s no console.log() to print undefined.

// (async () => console.log("inside str"))(); --> async() function

// let str = function(){
//     console.log("inside str");
// }
// str();

//example3
//Make sure you are giving return statement first for below case
let addPrintReturn = (num1, num2, num3=1) => num1 + num2 + num3; console.log("inside arrow => func");
console.log(addPrintReturn(15, 19));
