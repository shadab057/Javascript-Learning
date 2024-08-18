//  lexical scope

// function outerFunction(){
// let outerVariable = "I am from outer";

// function innerFunction(){
//     let innerVariable = "I am from inner";
//     console.log(outerVariable); // Accessible
//     console.log(innerVariable);
// }
// innerFunction();
// // console.log(innerVariable); // Error : innerVariable is not defined
// }
// outerFunction();
// // console.log(outerVariable);  // Error : outerVariable is not defined


function myApp(){
    const myvar = "value1";
    function myfunc(){}
    const myfunc2 = function(){}
    const myfunc3 = ()=>{}    // Arrow fucntion
console.log(myvar);
}

myApp();