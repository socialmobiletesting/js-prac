let num = [];
num[0] = 5;
num[99] = 8;


// of to fetch values
for(let value of num){
    console.log(value);
}

// in to fetch keys
for(let key in num){
    console.log(key);
}