//Below is the best practise to use for loop
// for(let i=0; i<100; i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

//Below is the best practise to use while loop
//if you don't know the size of the value
//although these is option of legth to use for loop
let num = 123456;
let num2 = 0;

while(num>0){
    console.log(num%10);
    num = (num/10);
    num = parseInt(num/10); //type conversion from float to int to avoid .6
    // console.log(num);
}
