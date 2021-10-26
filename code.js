"useStrict";
// ===40===
// Create a function that counts the integer's number of digits.
// function count(n) {
// 	return n<0 ?[...(Math.abs(n) + "")].map((n) => +n).length :[...(n + "")].map((n) => +n).length
// }
// ===40===
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

// function derivative(b, m) {
//   return Math.pow(m, b - 1) * b;
// }

// console.log(derivative(3, -2));
// ===39===
// Write a function that converts an object into an array of keys and values.
// function objectToArray(obj) {
//   return Object.entries(obj);
// }

// console.log(
//   objectToArray({
//     D: 1,
//     B: 2,
//     C: 3,
//   })
// );
// ===38===

// function isRepdigit(num) {
//   if (num < 0) {
//     return false;
//   } else {
//     let set = new Set(num.toString().split(""));

//     return set.size > 1 ? false : true;
//   }
// }

// console.log(isRepdigit(622));
// ===37===
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// function indexShuffle(str) {
//   const even = [...str].filter((char, i) => i % 2 === 0);
//   const odd = [...str].filter((char, i) => i % 2);

//   return [...even, ...odd].join("");
// }

// console.log(indexShuffle("it was a beautiful day"));
// // ===36===
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// function arrayOfMultiples(num, length) {
//   return Array.from({ length }, (_, i) => num * (i + 1));
// }

// console.log(arrayOfMultiples(7, 5));

// ===35===
// function triangle(n) {
//   let res = (n * (n + 1)) / 2;
//   return res;
// }
// console.log(triangle(3));

// ===34===
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
// function keysAndValues(obj) {
//   let keys = Object.keys(obj);
//   let values = Object.values(obj);
//   return [keys, values];
// }

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// ===33===
// Given a word, write a function that returns the first index and the last index of a character.
// function charIndex(word, char) {
//   let first = word.indexOf(char);
//   let last = word.lastIndexOf(char);
//   return first === -1 || last === -1 ? undefined : [first, last];
// }

// console.log(charIndex("hello", "l"));
// ===32===
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// function toArray(obj) {
//   return Object.entries(obj);
// }
// console.log(toArray({ a: 1, b: 2 }));
// // ===31===
// Create a function that concatenates n input arrays, where n is variable.
// function concat(...args) {
//   let arr = args.reduce((prev, cur) => {
//     return prev.concat(cur);
//   });
//   return arr;
// }
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));

// ===30===
// The right shift operation is similar to floor division by powers of two.

// Sample calculation using the right shift operator ( >> ):
// const shiftToRight = (x, y) => Math.floor(x/2 ** y);

// ===29===
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Please check the examples below for a clearer representation of the behavior expected

// function makePlusFunction(baseNum) {
//   return (x) => x + baseNum;
// }
// const plusTwo = makePlusFunction(2);

// console.log(plusTwo(0));
// ===28===
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// function reverseCase(str) {
//   // 90
//   let arr = str
//     .split("")
//     .map((character) => {
//       if (character == character.toUpperCase()) {
//         return character.toLowerCase();
//       } else {
//         return character.toUpperCase();
//       }
//     })
//     .join("");

//   console.log(arr);
// }
// console.log(reverseCase("Happy Birthday"));
// ===27===
// function calculateDifference(obj, limit) {
//   return Object.values(obj).reduce((acc, cur) => acc + cur) - limit;
// }
// const obj = { skate: 20000, painting: 30000, shoes: 1 };
// console.log(calculateDifference(obj, 50000));
// ===26===
// If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.
// const regex = /^$/g;
// ===25===
// Create a function which returns the number of true values there are in an array.
// function countTrue(arr) {
//   return arr.filter((val) => val === true).length;
// }
// console.log(countTrue([true, false, false, true, false]));
// ===24===
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that returns if it's possible to earn a bonus when you roll the dice.

// function possibleBonus(a, b) {
//   return b - a <= 6 && b - a > 0;
// }
// console.log(possibleBonus(1, 9));
// //===23===
// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// function arrayOperation(x, y, n) {
//   let arr = [];
//   for (let i = x; i <= y; i++) {
//     if (i % n === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(arrayOperation(1, 10, 3));
//===22===
// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.
// function mauriceWins(mS, sS) {
//   return mS[1] > sS[0] && mS[2] > sS[1];
// }
// console.log(mauriceWins([3, 8, 10], [4, 7, 11]));

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
