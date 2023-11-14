// =================================================== Chapter 38-42 ====================================================

// ============================= Functions =================================

// ===================== question 01 =======================

// function power(a, b) {
//     return Math.pow(a, b);
//   }
//   // Example usage:
//   var result = power(2, 3); // Calculates 2^3
//   console.log(result); // Outputs 8
  
// ===================== question 02 =======================

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//   }
//   // Example usage:
//   const yearToCheck = 2024;
//   if (isLeapYear(yearToCheck)) {
//     console.log(`${yearToCheck} is a leap year.`);
//   } else {
//     console.log(`${yearToCheck} is not a leap year.`);
//   }  

// ===================== question 03 =======================

// function calculateTriangleArea(a, b, c) {
//     var s = (a + b + c) / 2;
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// var sideA = 5;
// var sideB = 6;
// var sideC = 7;
// var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log("The area of the triangle is: " + triangleArea);

// ===================== question 04 =======================

// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//     const totalMarks = subject1 + subject2 + subject3;
//     const totalSubjects = 3;
//     return (totalMarks / (totalSubjects * 100)) * 100;
// }

// function mainFunction() {
//     const subject1Marks = 80;
//     const subject2Marks = 75;
//     const subject3Marks = 90;

//     const average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//     const percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);

//     console.log("Marks:");
//     console.log("Subject 1: " + subject1Marks);
//     console.log("Subject 2: " + subject2Marks);
//     console.log("Subject 3: " + subject3Marks);
//     console.log("Average: " + average);
//     console.log("Percentage: " + percentage + "%");
// }
// mainFunction();

// ===================== question 05 =======================

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1; 
//   }
//   let myString = "Hello, World!";
//   let characterToFind = "o";
//   let result = customIndexOf(myString, characterToFind);
//   console.log(result); 

// ===================== question 06 =======================

// function deleteVowels(sentence) {
//     const vowelsRegex = /[aeiou]/gi;
//     const result = sentence.replace(vowelsRegex, '');
//     return result;
//   }
//   const inputSentence = "This is a sample sentence";
//   const resultSentence = deleteVowels(inputSentence);
//   console.log(resultSentence);

// ===================== question 07 =======================

// function countSuccessiveVowels(text) {
//     let count = 0;
//     text = text.toLowerCase();
//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];
//         switch (currentChar + nextChar) {
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'ea':
//             case 'ei':
//             case 'eo':
//             case 'eu':
//             case 'ia':
//             case 'ie':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// const text = "javascript";
// const result = countSuccessiveVowels(text);
// console.log(`Number of occurrences of two successive vowels: ${result}`);


// ===================== question 08 =======================

// function convertToMeters(kilometers) {
//     return kilometers * 1000;
// }

// function convertToFeet(kilometers) {
//     return kilometers * 3280.84;
// }

// function convertToInches(kilometers) {
//     return kilometers * 39370.1;
// }

// function convertToCentimeters(kilometers) {
//     return kilometers * 100000;
// }

// var distanceInKilometers = parseFloat(prompt("Enter the distance in kilometers:"));

// if (isNaN(distanceInKilometers)) {
//     console.log("Please enter a valid number.");
// } 
// else {
//     console.log("Distance in meters: " + convertToMeters(distanceInKilometers) + " meters");
//     console.log("Distance in feet: " + convertToFeet(distanceInKilometers) + " feet");
//     console.log("Distance in inches: " + convertToInches(distanceInKilometers) + " inches");
//     console.log("Distance in centimeters: " + convertToCentimeters(distanceInKilometers) + " centimeters");
// }

// ===================== question 09 =======================

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     } else {
//         return 0; 
//     }
// }
// // Example usage
// const hoursWorked = 45; 
// const overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Hours worked: ${hoursWorked}`);
// console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);


// ===================== question 10 =======================

// function calculateCurrencyNotes(amountInHundreds) {
//     var amountInRupees = amountInHundreds * 100;
//     var notes100 = 0;
//     var notes50 = 0;
//     var notes10 = 0;
//     while (amountInRupees > 0) {
//       if (amountInRupees >= 100) {
//         notes100++;
//         amountInRupees -= 100;
//       } else if (amountInRupees >= 50) {
//         notes50++;
//         amountInRupees -= 50;
//       } else if (amountInRupees >= 10) {
//         notes10++;
//         amountInRupees -= 10;
//       }
//     }
//     console.log("Number of 100 rupee notes: " + notes100);
//     console.log("Number of 50 rupee notes: " + notes50);
//     console.log("Number of 10 rupee notes: " + notes10);
//   }
//   calculateCurrencyNotes(3);
  