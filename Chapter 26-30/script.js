// =================================================== Chapter 26-30 ====================================================

// ============================= Math Methods =================================

// ============ question 01 =============

// let x = +prompt("Enter a positive number");

// document.write("Number: " + x + "<br>");
// document.write("Round off value: " + Math.round(x) + "<br>");
// document.write("floor value: " + Math.floor(x) + "<br>");
// document.write("ceil value: " + Math.ceil(x));

// ============ question 02 =============

// let number = +prompt("Enter a negative number");

// document.write("Number: " + number + "<br>");
// document.write("round off value: " + Math.round(number) + "<br>")
// document.write("floor value: " + Math.floor(number) + "<br>" );
// document.write("ceil value: "+ Math.ceil(number));

// ============ question 03 =============

// function absoluteValue(number) {
//     return number < 0 ? -number : number;
// }
// let number1 = -4;
// let number2 = 5; 
// document.write('Absolute value of ' + number1 + ' is ' + absoluteValue(number1) + "<br>");
// document.write('Absolute value of ' + number2 + ' is ' + absoluteValue(number2) + "<br>");
  
// ============ question 04 =============

// function dice() {
//     let min = 1; // Minimum dice value
//     let max = 6; // Maximum dice value
//     let result = Math.floor(Math.random() * (max - min + 1)) + min;
//     document.body.textContent = `Dice Result: ${result}`;
// }
// dice();

// ============ question 05 =============

// function tossCoin() {
//     let randomNumber = Math.random();
//     let result;
//     if (randomNumber < 0.5) {
//         result = "Heads";
//     } else {
//         result = "Tails";
//     }
//     document.getElementById("result").innerText = `The coin landed on: ${result}`;
// };

// ============ question 06 =============

// let randomNumber = Math.floor(Math.random() * 100);
// document.write("The random number between 1 and 100 is: " + randomNumber);

// ============ question 07 =============

// let weight = prompt("Please enter your weight");
// document.write("The weight of user is: " + weight);

// ============ question 08 =============

// let number = +prompt("Enter a number between 1 and 10");

//     if(number === 3){
//         document.write("Conratulations! You win");
//     }
//     else if(number === 9){
//         document.write("Congratulations! You win");
//     }
//     else{
//         document.write("Better luck next time");
//     };
