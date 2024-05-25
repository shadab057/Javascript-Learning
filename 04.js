//  let keyword 

// declare variable with let keyword


// var firstName = "shadab";
// var firstName = "mohd";
// console.log(firstName);



// In JavaScript, using the var keyword to declare variables has several drawbacks:

// Function Scope: Variables declared with var are function-scoped, meaning they are accessible throughout the entire function in which they are declared, regardless of block scope.

// No Block Scope: Unlike let and const, variables declared with var do not have block scope.

// Hoisting: Variables declared with var are hoisted to the top of their containing function or global scope during the compilation phase.

// Global Scope Pollution: Variables declared with var without being explicitly scoped within a function are automatically assigned to the global scope. 


// No Block-Level Declarations: With var, you can re-declare the same variable within the same scope without any errors.


let firstName = "shadab";
//  let firstName = "shadab";    //Uncaught SyntaxError: Identifier 'firstName' has already been declared

firstName = "mohd";
console.log(firstName);


//  reason is 

// block scope vs function scope (covered later in this  video)