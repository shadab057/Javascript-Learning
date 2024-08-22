// callback function

// function myFunc(a){
//     console.log(a)
//     console.log('hello world');

// }

// // myFunc([1,2,3]);
// // myFunc("abc");
// myFunc({name: "shadab"})


function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);

}

function myFunc(callback){
    console.log("hello there I am a func and I can ...");
    callback("harshit");
}

myFunc(myFunc2);
