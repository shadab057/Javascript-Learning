// Objects  -> Reference type

// array are good but not suffficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects 

const  person = {
    name:"Shadab",
     age:24,
     hobblies:["guiter", "sleeping","listening music"]
    };
console.log(person);
// // dot notation
// console.log(person.hobblies);

// Bracket notation
console.log(person["hobblies"]);



// let school = {
//     name: 'Vivekananda School',
//     location: 'Delhi',
//     established: '1971',
//     20: 1000,
//     displayInfo: function () {
//         console.log(`The value of the key 20 is ${school['20']}`);
//     }
// }
// school.displayInfo();  

// // how to acccess data from objects 
// console.log(person.name);
// console.log(person.age)

// how to add key value pair to objects
person.gender = "male";
// Modifying existing properties
person.age = 22;

delete person.hobblies;
console.log(person)
