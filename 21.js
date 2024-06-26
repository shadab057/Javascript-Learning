//  while loop example 
let num = 100;
// let total = 0 ;


// total = total + 1;   //  0 + 1 =1
// total = total + 2;   // 1 + 2 = 3;
// total = total + 3;   // 3 + 3 = 6
// total = total + 4;   // 6 + 4 = 10
// total = total + 5;   // 10 + 5 = 15
// total = total + 6;   // 15 + 6 = 21
// total = total + 7;    // 21 + 7 = 28
// total = total + 8;    // 28 + 8 = 36
// total = total + 9;    // 36 + 9 = 45
// total = total + 10;   // 45 + 10 = 55


// linear time ---->
// let i = 0;
// while(i<=100){
//     total = total + i;
//     i++;
// }

// console.log(total);



// fast ----> constant time 
let total = (num*(num+1))/2;
console.log(total)