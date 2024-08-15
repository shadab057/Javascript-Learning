//  function
// input : string 
//  output : firstChracter

// function firstChracter(anyString){
//     return anyString[0];

// }

// console.log(firstChracter("abc"));

// example 2

// function
// inpupt : array, target (number)
// output: index of target if target present in Array

// [1,2,3,4,5,6,9] 

function findTarget(array , target){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i ;
        }
        
    }
    return -1 ;

}
const myarray = [1,2,4,6,9]
const ans = findTarget(myarray, 4);
console.log(ans);