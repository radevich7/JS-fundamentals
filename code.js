"useStrict";
//===10===
// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
function highLow(str) {
  let res = str.split(" ").map((val) => parseInt(val));

  if (res.length <= 1) {
    return [res[0], res[0]];
  } else {
    return [`${Math.max(...res)} ${Math.min(...res)}`];
  }
}

console.log(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
//===9===
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
