// function expression 

function singHappyBirthday(){
    console.log("happy birthday to you .....");

}

singHappyBirthday();

// const singHappyBirthday = function(){
//     console.log("happy birthday to you .....")
// }

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);


function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(2));


function firstChracter(anyString){
    return anyString[0];

}

function findTarget(array, target){
    for(let i=0;i<array.length;i++){
    if (array[i]===target) {
        return i ; 
        
    }
    }
}