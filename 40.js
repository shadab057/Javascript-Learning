// spread operator in the Array case

// const array1 = [1,2,3];
// const array2 = [5,6,7];

// // const newArray = [...array1, ...array2,89,68];
// // const newArray = [..."abc"]
// const newArray = [...'12234545']
// console.log(newArray)


// spread operator in objects
const obj1 = {
    key1:"value1",
    key2:"value2"
}
const obj2 = {
    key1:"valueunique",
    key3:"value3",
    key4:"value4"
}

// const newObject = {...obj1, ...obj2,key56:"hhdhas"}
const newObject = {..."abc"}
console.log(newObject)