// let nums = [5, 7, 8, "Avisek"];

// function test(){
//     // let [a, b, c, d] = nums;
//     let [a, b,, d] = nums; // if third value I don't want to supply

//     console.log(d);    
// }

// test();



//split and merging specific output
let words = "My name is Avisek Saha";

function test1(){
    let mywords = words.split(' ');
    console.log(mywords);
    let [a, b, c, d, e] = mywords;
    
    console.log(d);
}

test1();