let map = new Map();

let test = () => {
    map.set("Avisek", "AA");
    map.set("Bibek", "BB");
    map.set("Chirag", "CC");
    map.set("Avisek", "DD"); // as it's .set hence old Avisek will be removed
    // map.add("Avisek", "DD")

    // console.log(map.keys()); // fetch key
    // console.log(map.has(2)); // validate key
    // console.log(map.get(3)); // fetch value

    // for(let [key, value] of map){
    //     console.log(key, value);
    // }

    map.forEach((key, value) => {
        console.log(key, value);
    })
}

test();

// for...of: Iterate over iterable objects (arrays, strings, etc.).
// for...in: Iterate over object properties.