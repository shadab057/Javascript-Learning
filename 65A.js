const arr = ["Angularjs","Node.js","JQuery","Bootstrap"];

// Remove element
// //  arr.splice(1,1);
//  const deletedItem = arr.splice(1,1);
//  console.log("deletedItem" , deletedItem);

// Add element 
//  arr.splice(1,0,"React");


// insert and delete together

const deletedItem = arr.splice(1,2,"inserted Item1", "inserted Item2")
console.log("deletedItem",deletedItem)


console.log(arr);