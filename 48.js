//  function inside function


function outerFunction(x){
    let y = 5;

function innerFunction(z){
    return x + y + z; 
}

return innerFunction;
}
let result = outerFunction(2)(3); // calling the returned inner function
console.log(result) ;

// function app(){
//     const myfunc = () =>{
//         console.log("hello from myfunc")
//     }

//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }
//     const mul = (num1, num2) => num1* num2;
//     console.log("inside app");
//     myfunc();
//   console.log(addTwo(2,3));
// }

// app();