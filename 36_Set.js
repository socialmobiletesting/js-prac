
// let nums = new Set("Piyasa"); // in JS Set is a constructor

// // console.log(nums);

// let test = () => {
//     console.log(nums);
// }

// test();


// let nums = new Set();

// nums.add(5);
// nums.add("Avisek");
// nums.add(2);
// nums.add(9);


// let test = () => {
//     nums.forEach(
//         value => {
//             console.log(value);
//         }
//     )

// }

// test();


let nums = new Set();

nums.add(5);
nums.add("Avisek");
nums.add(2);
nums.add(9);


let test = () => {
    console.log(nums.has("Avisek")); // to check if value is present
    
}

test();