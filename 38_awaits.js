// async function fetchData(){
//     let resp = await fetch("https://rahulshettyacademy.com/seleniumPractise/data/products.json");
//     let data = await resp.json();

//     console.log(data);
// }

// fetchData();

// let test = async () => {
//     let resp = await fetch("https://rahulshettyacademy.com/seleniumPractise/data/products.json");
//     let data = await resp.json();

//     console.log(data);
// }

// console.log(test());


(async () => {
    let resp = await fetch("https://rahulshettyacademy.com/seleniumPractise/data/products.json");
    let data = await resp.json();

    console.log(data);
})();

// console.log(test());