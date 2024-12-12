// let values = new Array(); // array constructor
// let values = []; // array constructor




// let values = [];
// values.push(5, 8); //adding value
// values.push(2, 3);
// values[4] = 9; //adding value

// // console.log(values);


// function test(){
//     console.log(values[1]); // will print single index value
//     for(i=0; i<values.length; i++){
//         console.log(values[i]);
        
//     }
// }

// test();




let myValues = [2, 5, "Avi", function(){
    console.log("Hello from myValues!");
}]; // we can insert function also inside arraylist

function myValuesFunc(){
    for(i=0; i<myValues.length; i++){
        console.log(myValues[i]);
        
    }
}

myValuesFunc();
myValues[3](); //we can call arraylist object which is a function
 