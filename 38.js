// how to iterate object

// - for in loop


const person = {
    name: "shadab",
    age:22,
    hobbies:["guiter","sleeping","listening music"]
}

// - for in loop

// for ( const property in person) {
//     console.log(`${property} : ${person[property]}`);
// }

// - object.keys
Object.keys(person).forEach((property)=>{
    console.log(`${property}:${person[property]}`);
})