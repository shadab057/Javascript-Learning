// undefined 

let firstname ;
console.log( typeof firstname);
firstname ='shadab';
console.log(typeof firstname , firstname);

// const firstname ;
// console.log( typeof firstname);  //Uncaught SyntaxError: Missing initializer in const declaration 

// null

let myvariable = null;
console.log(typeof myvariable)

// BigInt
// let mynumnber = 123;
// // console.log(mynumnber);
// console.log(Number.MAX_SAFE_INTEGER);

// let mynumnber = BigInt(123456678908454567676667643334556667754);
let mynumnber = BigInt(12);
let sameMyNumber = 123n;
console.log(mynumnber + sameMyNumber);