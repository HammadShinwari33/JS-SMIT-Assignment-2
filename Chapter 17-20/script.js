// =================================================== Chapter 17-20 ====================================================

// ============================= Arrays and Loos =================================

// ============== question 1,2 ===============

// let array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


// ============== question 3 ===============

// for(i = 1; i <= 10; i++){
//     console.log(i)
// };


// ============== question 4 ===============

// let number = +prompt("Enter the number for the multiplication table:");
// let length = +prompt("Enter the length of the multiplication table:");

// if (isNaN(number) || isNaN(length)) {
//   console.log("Please enter valid numbers.");
// } else {
//   for (let i = 1; i <= length; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }


// ============== question 5 ===============

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// ============== question 6 ===============

// ====== a =====

// let countingSeries = [];
// for (let i = 1; i <= 15; i++) {
//   countingSeries.push(i);
// };
// console.log(countingSeries.join(','));

// ====== b =====

// let reverseCounting = [];
// for (var i = 10; i >= 1; i--) {
//   reverseCounting.push(i);
// };
// console.log(reverseCounting.join(', '));

// ====== c =====

// let evenSeries = [];
// for (var i = 0; i <= 20; i += 2) {
//   evenSeries.push(i);
// };
// console.log(evenSeries.join(', '));

// ====== d =====

// let oddSeries = [];
// for (var i = 1; i <= 19; i += 2) {
//   oddSeries.push(i);
// };
// console.log(oddSeries.join(', '));

// ====== e =====

// let series = [];
// for (var i = 2; i <= 20; i += 2) {
//     series.push(i + "k");
// };
// console.log("Series: " + series);


// ============== question 7 ===============

// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(array, item) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase() === item.toLowerCase()) {
//       return true;
//     }
//   }
//   return false;
// }

// const userInput = prompt("Enter an item to search for:");

// if (userInput) {
//   const found = searchItem(A, userInput);

//   if (found) {
//     alert(`"${userInput}" is found in the list.`);
//   } else {
//     alert(`"${userInput}" is not found in the list.`);
//   }
// };


// ============== question 8 ===============

// let A = [24, 53, 78, 91, 12];
// let max = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > max) {
//         max = A[i];
//     }
// }
// console.log("The largest number in the array is: " + max);


// ============== question 9 ===============

// const A = [24, 53, 78, 91, 12];
// let min = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < min) {
//     min = A[i];
//   }
// };
// console.log("The smallest number is: " + min);


// ============== question 10 ===============

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }