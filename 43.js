// Nested Destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

// const [user1,user2,user3] = users;
const [{firstName : user1firstName} , , {gender}] = users;
// console.log(user1,user2,user3);
// console.log(user1);
// console.log(user2);

console.log(user1firstName);
console.log(gender);
