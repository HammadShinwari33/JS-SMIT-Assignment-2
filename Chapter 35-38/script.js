// =================================================== Chapter 35-38 ====================================================

// ============================= Functions =================================

// ========= question 01 ===========

// let date = new Date();
// console.log(date);


// ========= question 02 ===========

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name")
// let fullName = firstName + " " + lastName;
// document.write(fullName);


// ========= question 03 ===========

// let num1 = +prompt("Enter a first number");
// let num2 = +prompt("Enter a second number");
// document.write(num1 + num2);


// ========= question 04 ===========

// function calculate(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           return "Division by zero is not allowed";
//         }
//         break;
//       default:
//         return "Invalid operator. Please use +, -, *, or /.";
//     }
  
//     return result;
//   }
  
//   Example usage:
//   const num1 = 5;
//   const num2 = 3;
//   const operator = '+';
  
//   const result = calculate(num1, num2, operator);
//   document.write(`Result: ${result}`);
  
// ========= question 05 ===========

// function square(x) {
//     return x * x;
//   }
//   document.write(result = square(5))  // result will be 25, which is 5 squared
  
// ========= question 06 ===========

// function factorial(num) {
//     if (num === 0) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
//   document.write(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
//   document.write(factorial(0)); // Output: 1 (0! is defined as 1)
    
// ========= question 07 ===========

// function countNumbers(start, end) {
//     const countDisplay = document.getElementById('count-display');
//     let currentNumber = start;

//     const intervalId = setInterval(function () {
//       countDisplay.textContent = currentNumber;

//       if (currentNumber === end) {
//         clearInterval(intervalId);
//       }

//       currentNumber++;
//     }, 1000); // Update the count every second (1000 milliseconds)
//   }

//   // Call the function with your desired start and end numbers
//   countNumbers(1, 10);

// ========= question 08 ===========

// function calculateHypotenuse(base, perpendicular) {
//     function square(x) {
//       return x * x;
//     }
  
//     function hypotenuseSquared(base, perpendicular) {
//       return square(base) + square(perpendicular);
//     }
  
//     function sqrt(x) {
//       return Math.sqrt(x);
//     }
  
//     return sqrt(hypotenuseSquared(base, perpendicular));
//   }
  
//   Example usage:
//   const base = 3;
//   const perpendicular = 4;
//   const hypotenuse = calculateHypotenuse(base, perpendicular);
//   console.log(`The hypotenuse is ${hypotenuse}`);

// ========= question 09 ===========

// function calculateRectangleArea(width, height) {
//     return width * height;
//   }  
// Example usage:
//   const widthValue = 5;
//   const heightValue = 8;
//   const areaValue = calculateRectangleArea(widthValue, heightValue);
//   console.log("Area (using values): " + areaValue);

// ========= question 10 ===========

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert the string to lowercase
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Reverse the string
//     const reversedStr = str.split('').reverse().join('');
    
//     // Compare the original string with the reversed string
//     return str === reversedStr;
//   }
  
//   // Example usage:
//   const inputString = "madam";
//   const result = isPalindrome(inputString);
//   document.write(`Is "${inputString}" a palindrome? ${result ? 'Yes' : 'No'}`);  

// ========= question 11 ===========

// function capitalizeFirstLetterOfEachWord(inputString) {
//     // Split the input string into an array of words
//     const words = inputString.split(' ');
  
//     // Iterate through the words and capitalize the first letter of each word
//     const capitalizedWords = words.map(word => {
//       if (word.length > 0) {
//         return word[0].toUpperCase() + word.slice(1); // Capitalize the first letter and concatenate the rest of the word
//       } else {
//         return word; // Handle empty words (e.g., multiple spaces)
//       }
//     });
  
//     // Join the capitalized words back into a string
//     const capitalizedString = capitalizedWords.join(' ');
  
//     return capitalizedString;
//   }
  
//   // Example usage
//   const inputString = 'the quick brown fox';
//   const outputString = capitalizeFirstLetterOfEachWord(inputString);
//   document.write(outputString); // Output: 'The Quick Brown Fox'
  
// ========= question 12 ===========

// function findLongestWord(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');
//     // Initialize variables to keep track of the longest word and its length
//     let longestWord = '';
//     let maxLength = 0;
//     // Iterate through the words in the array
//     for (let i = 0; i < words.length; i++) {
//       // Remove any non-alphanumeric characters from the word using a regular expression
//       const word = words[i].replace(/[^a-zA-Z0-9]/g, ''); 
//       // Check if the current word is longer than the previously found longest word
//       if (word.length > maxLength) {
//         longestWord = word;
//         maxLength = word.length;
//       }
//     }
//     return longestWord;
//   }
//   const exampleString = 'Web Development Tutorial';
//   const longestWord = findLongestWord(exampleString);
//   document.write(longestWord); // Output: 'Development'  

// ========= question 13 ===========

// function countOccurrences(string, letter) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   // Example usage:
//   const sampleString = 'JSResourceS.com';
//   const letterToCount = 'o';
//   const result = countOccurrences(sampleString, letterToCount);
//   document.write(`Number of occurrences of '${letterToCount}' in '${sampleString}': ${result}`);  

// ========= question 14 ===========

// Function to calculate the circumference of a circle

// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference);
//   }
  
//   // Function to calculate the area of a circle

//   function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area);
//   }
  
//   // Example usage:
//   const radius = 5; // Replace with your desired radius
//   calcCircumference(radius); // Output: The circumference is 31.41592653589793
//   calcArea(radius); // Output: The area is 78.53981633974483
  