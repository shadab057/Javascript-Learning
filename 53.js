// param destructuring

// object
// react

const person = {
     firstname: "shadab",
     gender: "male",
     age: 500
}

// function printDetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }

function printDetails({firstname, gender , age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}
printDetails(person)