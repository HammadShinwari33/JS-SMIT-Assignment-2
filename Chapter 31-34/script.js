// =================================================== Chapter 31-34 ====================================================

// ============================= Date Methods =================================


// ============== question 1 ===============

// let date = new Date();
// document.write(date);


// ============== question 2 ===============

// let monthNames = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
//   let currentDate = new Date();
//   let currentMonth = currentDate.getMonth();
//   let currentMonthName = monthNames[currentMonth];
//   alert(currentMonthName);
  

// ============== question 3 ===============

// var currentDate = new Date();

// var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayIndex = currentDate.getDay();
// var currentDay = daysOfWeek[currentDayIndex];
// alert("Today is "+ currentDay);


// ============== question 4 ===============

// let currentDate = new Date();
// let currentDay = currentDate.getDay();

// if(currentDay === 6 || currentDay === 0){
//     console.log("It's Fun day");
// }else{
//     console.log("It's not a Fun day")
// }


// ============== question 5 ===============

// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();

// if(currentDate >= 15){
//     console.log("First fifteen day of Month")
// }else{
//     console.log("Last fifteen day of Month");
// }


// ============= question 06 ============

// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate - new Date('1970-01-01T00:00:00Z');
// var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 60000);
// console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);


// ============== question 7 ===============

// let currentDate = new Date();
// let currentHour = currentDate.getHours();

// if(currentHour < 12){
//     console.log("It's AM");
// }else{
//     console.log("It's PM");
// }


// ============== question 8 ===============

// let lastDayOf2020 = new Date(2020, 11, 31);
// let laterDate = lastDayOf2020;
// console.log(laterDate);


// ============== question 9 ===============

// const ramadanStartDate = new Date('2015-06-18');
// const currentDate = new Date();
// const timeDifference = currentDate - ramadanStartDate;
// const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert(`Number of days passed since 1st Ramadan 2015: ${daysPassed} days`);


// ======== question 10 =========

// ======== question 11 =========

// const currentDate = new Date();
// const currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.getElementById("result").innerHTML = currentDate;


// ============== question 12 ===============

// const currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// const formattedDate = currentDate.toDateString();
// alert("100 years ago, the date was: " + formattedDate);


// ============== question 13 ===============

// let age = prompt("Please enter your age:");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);


// ======== question 14 =========
