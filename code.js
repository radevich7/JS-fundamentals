"useStrict";
// // === 5 ===
// Create a function to convert an array of percentages to their decimal equivalents.
function convertToDecimal(perc) {
  return perc.map((val) => parseFloat(val) / 100);
}

console.log(convertToDecimal(["1%", "2%", "3%"]));

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
