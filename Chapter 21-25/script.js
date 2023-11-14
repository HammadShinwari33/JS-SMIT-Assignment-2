// =================================================== Chapter 21-25 ====================================================

// ============================= String Methods =================================

// ============== question 1 ===============

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name")
// let result = firstName + " " + lastName;
// document.write(result);

// ============== question 2 ===============

// let userInput = prompt("Enter your favourite mobile phone");
// userInputLength = userInput.length
// document.write(userInput,userInputLength);

// ============== question 3 ===============

// let word = "Pakistani";
// let index = word.indexOf('n');
// document.write("The index of 'n' in 'Pakistani' is: " + index);


// ============== question 4 ===============

// let a = "Hello world";
// document.write("last index of l is: ",a.lastIndexOf("l"));


// ============== question 5 ===============

// let x = "Pakistani";
// document.write("The third index in 'Pakistani' is: ",x.charAt(2));


// ============== question 6 ===============

// let firstName = prompt("Enter a first name");
// let lastName = prompt("Enter a last name");
// let result = firstName.concat(lastName);
// document.write(result);


// ============== question 7 ===============

// let city = "Hyderabad";
// let new_city = city.replace("Hyder", "Islam");
// document.write(new_city);


// ============== question 8 ===============

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");
// document.write(replacedMessage);


// ============== question 9 ===============

// let stringNumber = "472";
// let parsedNumber = +(stringNumber);
// console.log("Original string:", stringNumber, typeof stringNumber);
// console.log("Parsed number:", parsedNumber, typeof parsedNumber);


// ============== question 10 ===============

// let dryFruit = "peanuts";
// document.write("UpperCase : ", dryFruit.toUpperCase())


// ============== question 11 ===============

// function toTitleCase(input) {
//     let words = input.toLowerCase().split(' ');
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
//   }
//   const userInput = prompt('Enter a sentence or phrase:');
//   if (userInput !== null) {
//     const titleCaseInput = toTitleCase(userInput);
//     alert('Title Case: ' + titleCaseInput);
//   }


// ============== question 12 ===============

// let number = 35.36;
// let String = number.toString().replace('.', '');
// document.write(String);


// ============== question 13 ===============


// ============== question 14 ===============

// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// function searchItem(array, userInput) {
//   userInput = userInput.toLowerCase(); 
//   for (let item of array) {
//     if (item.toLowerCase() === userInput) {
//       return true; 
//     }
//   }
//   return false; 
// }
// const userInput = prompt("Enter an item to search:"); 
// const found = searchItem(A, userInput);
// if (found) {
//   console.log(`"${userInput}" is found in the list.`);
// } else {
//   console.log(`"${userInput}" is not found in the list.`);
// }


// ============== question 15 ===============


// ============== question 16 ===============


// ============== question 17 ===============

// var userInput = prompt("Enter a string:");
// if (userInput.length > 0) {
//   let lastCharacter = userInput.charAt(userInput.length - 1);
//   document.write("The last character is: " + lastCharacter);
// } else {
//   document.write("You didn't enter any text.");
// }


// ============== question 18 ===============

// const inputString = "The quick brown fox jumps over the lazy dog";
// const lowerCaseString = inputString.toLowerCase();
// const words = lowerCaseString.split(' ');
// let count = 0;
// for (const word of words) {
//   if (word === 'the') {
//     count++;
//   }
// }
// console.log(`The word "the" appears ${count} times in the given string.`);
