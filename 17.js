// nested  if else 

// winning number 19

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winnigNumber = 19;
let userGuess = +prompt("Guess a  number");

if (userGuess === winnigNumber) {
    console.log("Your guess is right !!");
} 
// nested if else
else{
  if(userGuess < winnigNumber ){
    console.log(" too low !!! ");
  }
  else{
    console.log(" too high  !!! ");
  }
}
