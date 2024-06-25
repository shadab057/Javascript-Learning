//  switch statement

// let day = 0;


// if(day === 0){
//     console.log("sunday");
// }else if(day === 1){
//     console.log("monday")
// }
// else if(day === 2){
//     console.log("tuesday")
// }
// else if(day === 3){
//     console.log("wednesday")
// }
// else if(day === 4){
//     console.log("thursday")
// }
// else if(day === 5){
//     console.log("friday")
// }
// else if(day === 6){
//     console.log("saturday")
// }

// else{
//     console.log("Invalid Day")
// }


// let day = 2;
// switch(day) {
//     case 0:
//       day = ("Sunday");
//       break;
//     case 1:
//       day = ("Monday");
//       break;
//     case 2:
//        day =( "Tuesday");
//       break;
//     case 3:
//       day = ("Wednesday");
//       break;
//     case 4:
//       day = ("Thursday");
//       break;
//     case 5:
//       day = ("Friday");
//       break;
//     case 6:
//       day = ("Saturday");
//       break;
//       default :
//       console.log("Invalid Day")
//   }

let day = 3;
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);  // Output: Wednesday


