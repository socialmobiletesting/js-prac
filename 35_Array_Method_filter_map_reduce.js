
let nums = [45, 76, 12, 90, 89];

/**
 * filter() function will filter the value which is even
 */

// nums
//     .filter(
//         (n) => {
//             return n%2===0;
//         }
//     )
//     .forEach(
//         (n) => {
//             console.log(n);
//         }
//     );

// nums.forEach(
//     (n) => {
//         console.log(n);
//     }
// )

/**
 * map() function will take a refrence value and later with that value it can be mapped(as sum, multiply etc.)
 */

// nums
//     .filter(
//         (n) => {
//             return n%2===0;
//         }
//     )
//     .map(
//         (m) => {
//             return m*2;
//         }
//     )
//     .forEach(
//         (n) => {
//             console.log(n);
//             // console.log(n*2); // instead of n*2 we can use map logic
//         }
//     );

/**
 * reduce() function will sum all the filter values
 */

let result = nums
                .filter(
                    (n) => {
                        return n%2===0;
                    }
                )
                .reduce(
                    (a, b) => {
                        return (a+b); // reduce() will take two argument to sum
                    }
                )
console.log(result);