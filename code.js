"useStrict";
//===21===
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.
// function isSubset(arr1, arr2) {
//   let res = arr1
//     .map((val) => arr2.includes(val))
//     .filter((val) => val === false);
//   return res.length > 0 ? false : true;
// }

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));
// //===20===
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

// function joinPath(portion1, portion2) {
//   let regex = /\//g;
//   let new1 = portion1.replace(regex, "");
//   let new2 = portion2.replace(regex, "");
//   return `${new1}/${new2}`;

//   // return !str?str.push('/'):
//   // console.log(str);
// }

// console.log(joinPath("r1AiTrL/", "KkyjD3K"));
// //===19===
// You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.

// function detectBrowser(userAgent) {
//   if (userAgent.includes("Firefox")) {
//     return "Mozilla Firefox";
//   } else if (userAgent.includes("Chrome")) {
//     return "Google Chrome";
//   } else {
//     return "Internet Explorer";
//   }
// }
// //===18===
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// function cardHide(card) {
//   let num = card.slice(0, -4);
//   let smth = "*".repeat(num.length);

//   return `${smth}${card.slice(-4)}`;
// }
// console.log(cardHide("1234123456785678"));
// function spelling(str) {
//   let res = [];
//   for (let i = 1; i <= str.length; i++) {
//     res.push(str.slice(0, i));
//   }
//   return res;
// }
// console.log(spelling("jkkake"));
//===17===
// Write a regular expression that matches a string if and only if it is a valid zip code.
// Zipcodes must be 5 digits long exactly and only contain numbers.
// Not allowed: non-numeric characters or whitespaces.
// This challenge is designed to use Regex only.

// let x = /^\d{5}$/;
// /* Write your regular expression here */

//===16===
// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

// function isPrefix(word, prefix) {
//   let res = prefix.slice(0, -1);

//   return word.includes(res);
// }

// function isSuffix(word, suffix) {
//   let res = suffix.slice(1);

//   return word.includes(res);
// }

// console.log(isPrefix("automation", "auto-"));
// console.log(isSuffix("arachnophobia", "-phobia"));
//===15===
// function num_of_digits(num) {
//   let string = Math.abs(num);
//   console.log(+Math.log10(string).toFixed() + 1);
// }
// console.log(num_of_digits(2));
// //===14===
// // Create a function to count the number of 1s in a 2D array.
// function countOnes(matrix) {
//   console.log(matrix.flat(1).filter((val) => val === 1).length);
// }

// console.log(
//   countOnes([
//     [1, 0, 1],
//     [0, 0, 0],
//     [0, 0, 1],
//     [1, 0, 1],
//   ])
// );
//===13===
// function addNums(nums) {
//   return nums
//     .split(", ")
//     .map((val) => parseInt(val))
//     .reduce((prev, cur) => prev + cur);
// }
// console.log(addNums("2, 5, 1, 8, 4"));
//===12===
// Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.

// function spotlightSum(n) {
//   return n * 9;
// }
// console.log(spotlightSum(18));

//===11===
// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.
// function getDecimalPlaces(num) {
//   let str = num.indexOf(".");
//   let length = num.length - 1;
//   return str === -1 ? 0 : length - str;
// }

// console.log(getDecimalPlaces("322"));
//===10===
// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
// function highLow(str) {
//   let res = str.split(" ").map((val) => parseInt(val));

//   if (res.length <= 1) {
//     return [res[0], res[0]];
//   } else {
//     return [`${Math.max(...res)} ${Math.min(...res)}`];
//   }
// }

// console.log(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
// //===9===
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.
// function minutesToSeconds(time) {
//   let res = time.split(":");
//   return res.reduce((acc, time) => acc * 60 + +time);
//   console.log(res);
// }

// console.log(minutesToSeconds("01:00"));
//===8===
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".

// function chatroomStatus(users) {
//   if (users.length < 1) {
//     return "no one online";
//   }
//   if (users.length === 1) {
//     let arr = users.join("");
//     return `${arr} online`;
//   }
//   if (users.length === 2) {
//     let arr = users.join(" and ");
//     return `${arr} online`;
//   } else {
//     let arr = users.slice(0, 2).join(", ");
//     return `${arr} and ${users.length - 2} more online`;
//   }

//   // return users.join(" and ");
// }

// console.log(chatroomStatus(["becky325", "asdsad", "sasad"]));
//===7===
// Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.
// function isJS(path) {
//   let regex = /(jsx|season) |(js|season)/g;
//   return regex.test(path);
// }
// console.log(isJS("/users/user.jsx"));
//===6===
// A value is omnipresent if it exists in every subarray inside the main array.
// function isOmnipresent(arr, val) {
//   return arr.every((value) => value.includes(val));
// }
// console.log(
//   isOmnipresent(
//     [
//       [1, 1],
//       [1, 3],
//       [5, 1],
//       [6, 1],
//     ],
//     3
//   )
// );
// === 5 ===
// Given an array and an integer n, return the sum of the first n numbers in the array.

// function sliceSum(arr, n) {
//   return n === 0 ? 0 : arr.slice(0, n).reduce((prev, cur) => prev + cur);
// }

// sliceSum([1, 3, 2], 2);

// // === 5 ===
// Create a function to convert an array of percentages to their decimal equivalents.
// function convertToDecimal(perc) {
//   return perc.map((val) => parseFloat(val) / 100);
// }

// console.log(convertToDecimal(["1%", "2%", "3%"]));

// // === 4 ===
// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.
// function simpleEncoder(str) {
//   str = str.toLowerCase().split("");
//   return str
//     .map((el, i) => (str.indexOf(el) == str.lastIndexOf(el) ? "[" : "]"))
//     .join("");
// }
// console.log(simpleEncoder("Muubashirr"));

// // === 3 ===
// // Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
// function inkLevels(inks) {
//   let array = Object.values(inks);
//   return Math.min(...array);
// }

// console.log(
//   inkLevels({
//     cyan: 23,
//     magenta: 12,
//     yellow: 10,
//   })
// );

// === 2 ===
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// function convertBinary(str) {
//   let newString = str.toLowerCase().replace(/[a-m]/g, "0");
//   return newString.replace(/[n-z]/g, "1");
// }

// console.log(convertBinary("housE"));

// === 1 ===
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.
// function firstPlace(road) {
//   if (road.length == 0) {
//     return "No road available";
//   }

//   let regex = /[a-z]|[A-Z]/g;
//   let res = road.match(regex);
//   console.log(res);
//   if (res == null) {
//     return "No car available";
//   } else {
//     return res.slice(-1)[0];
//   }
// }
// console.log(firstPlace("====="));
