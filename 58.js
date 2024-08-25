// filter method 

//  const filterArray = [1.3,2,6,4,8];
// const isEven = function(number){
//     return number%2===0;
// }

// //  filter function callback function  True or False

//  const evenNumbers =filterArray.filter(isEven);
//  console.log(evenNumbers);


 const filterArray = [1.3,2,6,4,8];
const isOdd = function(number){
    return number%2!==0;
}

//  filter function callback function  True or False

 const evenNumbers =filterArray.filter(isOdd);
 console.log(evenNumbers);