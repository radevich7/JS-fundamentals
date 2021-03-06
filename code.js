// // // "use strict";
// // ===206===
// /// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

// // Examples
// // isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // // There is only 1 unique positive value (1).
// // // There are 2 unique negative values (-3, -4).

// // isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// // isPositiveDominant([5, 0]) ➞ true

// // isPositiveDominant([0, -4, -1]) ➞ false
// // Notes
// // 0 counts as neither a positive nor a negative value.

// const isPositiveDominant = (arr) => {
//   const unique = [...new Set(arr)];
//   let totalMinus = 0;
//   let totalPlus = 0;
//   for (let i = 0; i < unique.length; i++) {
//     if (unique[i] > 0) totalPlus++;
//     if (unique[i] < 0) totalMinus++;
//   }
//   return totalMinus >= totalPlus ? false : true;
// };

// console.log(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]));
// // ===205===
// // Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

// // Examples
// // combinations(2, 3) ➞ 6

// // combinations(3, 7, 4) ➞ 84

// // combinations(2, 3, 4, 5) ➞ 120
// // Notes
// // Don't overthink this one.
// // Input may include the number zero.

// function combinations(items) {
//   if (arguments.length < 2) return items;

//   return [...arguments].reduce((prev, cur) => {
//     if (cur === 0) cur = 1;
//     return prev * cur;
//   });
// }

// console.log(combinations(2, 0));
// // ===204===
// // Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.

// // Examples
// // numberLenSort([1, 54, 1, 2, 463, 2]) ➞ [1, 1, 2, 2, 54, 463]

// // numberLenSort([999, 421, 22, 990, 32]) ➞ [22, 32, 999, 421, 990]

// // numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]) ➞ [9, 8, 7, 6, 5, 4, 2, 1, 3, 31]
// // Notes
// // If two numbers have the same number of digits, return them in the order they first appeared (this makes it different to just sorting the numbers normally).

// // const sorting= (arr)=>{
// //   return arr.map(val=>val+'').sort((a,b)=>a.length-b.length).map(val=>+val)

// // }

// // console.log(sorting([999, 421, 22, 990, 32]))
// // ===203===
// // Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.

// // Examples
// // shhh("HI THERE!") ➞ '"Hi there!", whispered Edabit.'

// // shhh("tHaT'S Pretty awesOme") ➞ '"That's pretty awesome", whispered Edabit.'

// // shhh("") ➞ '"", whispered Edabit.'
// // Notes
// // Don't forget to surround the original string with double quotation marks "".

// // const removeUpperCase=(sentence)=>{
// //   if(!sentence)return `"", whispered Edabit.`
// //   return `"${sentence[0].toUpperCase()}${sentence.slice(1).toLowerCase()}", whispered Edabit.`
// // }

// // console.log(removeUpperCase(""))
// // ===202===
// // Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

// // For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

// // Examples
// // strMatchBy2char("yytaazz", "yyjaaz") ➞ 3

// // strMatchBy2char("edabit", "ed") ➞ 1

// // strMatchBy2char("", "") ➞ 0
// // Notes
// // Don't forget to return the result.

// // const strMatch=(str1,str2)=>{
// //   if(str1.length===0 || str2.length===0) return 0;
// //   let total=0;
// //   for(let i=0;i<str1.length;i++){

// //   if(str1[i]===str2[i]&& str1[i+1]===str2[i+1] && str1[i+1]&& str2[i+1]){

// //       total++
// //   }

// //   }

// //       return total
// //   }

// //   console.log(strMatch('ABc','Ajc'))

// // ===201===
// // length of the array min 8
// //total time not exceed 120 min
// // very easy question 5 min each
// //easy question 10 min each
// // medium question 15 min each
// //hard ones 20 min each

// // const passInterview=(arr, time)=>{

// //   if(arr.length!==8 || time>120) return 'disqualified'
// //       let checker=[5,5,10,10,15,15,20,20]

// //       for (let i=0;i<arr.length;i++){
// //           if(arr[i]>checker[i]){
// //               return 'disqualified'
// //           }
// //       }
// //       return 'qualified'
// //   }

// //   console.log(passInterview([5, 5, 10, 10, 15, 15, 20, 20],130))
// // ===200===
// // Consider the following operation on an arbitrary positive integer:

// // If n is even -> n / 2
// // If n is odd -> n * 3 + 1
// // Create a function to repeatedly evaluate these operations, until reaching 1. Return the number of steps it took.

// // See the following example, using 10 as the input, with 6 steps:

// // 10 is even - 10 / 2 = 5
// // 5 is odd - 5 * 3 + 1 = 16
// // 16 is even - 16 / 2 = 8
// // 8 is even - 8 / 2 = 4
// // 4 is even - 4 / 2 = 2
// // 2 is even - 2 / 2 = 1 -> Reached 1, so return 6
// // Examples
// // collatz(2) ➞ 1

// // collatz(3) ➞ 7

// // collatz(10) ➞ 6

// // const collatz=(num)=>{
// //   let cur=num;
// //   let counter=0;
// //   while(cur!==1){
// //       if (cur===1) return counter;
// //        counter=counter+1;
// //       if(cur%2===0){

// //           cur=cur/2;
// //       }else{

// //           cur=cur*3+1;
// //       }

// //   }
// //   return counter
// // }

// // console.log(collatz(3))

// // ===199===
// // Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.

// // Worked Example
// // threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// // // 1st word: "eda"
// // // 2nd word: "dab"
// // // 3rd word: "abi"
// // // 4th word: "bit"
// // // Remember to sort the array!
// // Examples
// // threeLetterCollection("slap") ➞ ["lap", "sla"]

// // threeLetterCollection("click") ➞ ["cli", "ick", "lic"]

// // threeLetterCollection("cat") ➞ ["cat"]

// // threeLetterCollection("hi") ➞ []
// // Notes
// // Return an empty array if given a word with less than 3 letters.

// //1. if the word is less than 3letters return empty array
// //2. loop over the array and push it to the new array 3 letter word
// // 3. sort the array

// const collection = (str) => {
//   if (str.length < 3) return [];
//   let arr = [...str];

//   let min = 0;
//   let final = [];
//   for (let i = 0; i < arr.length - 3 + 1; i++) {
//     final.push(Array.from(arr).splice(i, 3).join(""));
//   }

//   return final.sort();
// };

// console.log(collection("click"));
// // ===198===
// // John is playing a dice game. The rules are as follows.

// // Roll two dice.
// // Add the numbers on the dice together.
// // Add the total to your overall score.
// // Repeat this for three rounds.
// // But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// // Create a function which takes in a matrix as input, and return John's score after his game has ended.

// // Examples
// // diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

// // diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

// // diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27
// // Notes
// // Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
// // John only has two dice and will always give you outcomes for three rounds.

// // const diceGame=(arr)=>{

// //   let total=[];
// //   // check if prev ===cur return 0;
// //   //if different add together
// //   for (let i=0; i < arr.length;i++){
// //      arr[i].reduce((prev,cur)=>prev===cur ? total.push(0) : total.push(prev+cur))
// //   }
// //   return total.includes(0) ? 0 : total.reduce((prev,cur)=>prev+cur)
// //   }

// //   console.log(diceGame([[1, 2], [3, 4], [5, 6]]))
// // ===197===
// // POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.

// // For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

// // Worked Example
// // timeToFinish(
// //   "And so brings my conclusion to its conclusion.",
// //   "And so brings my conclusion to"
// // ) ➞ 7

// // // "its" has 3 characters
// // // "conclusion." has 11 characters, including punctuation.
// // // 11 + 3 = 14
// // // 14 x 0.5 = 7
// // // Remember not to include spaces.
// // Examples
// // timeToFinish(
// //   "And so brings my conclusion to its conclusion.",
// //   "And so brings my conclusion to its conclus"
// // ) ➞ 2

// // timeToFinish(
// //   "As a result, my point is still valid.",
// //   "As a result, my"
// // ) ➞ 9

// // timeToFinish(
// //   "Thank you for reading my essay.",
// //   "T"
// // ) ➞ 12.5
// // Notes
// // The unfinished sentence is always found at the start of a complete sentence.
// // const timeToFinish = (finalSentence, currentSentence) => {
// //   let first = finalSentence.replace(/\s/g, "");
// //   let second = currentSentence.replace(/\s/g, "");
// //   return (first.length - second.length) / 2;
// // };

// // console.log(timeToFinish("Thank you for reading my essay.", "T"));

// // ===196===
// // Your task, is to create N x N multiplication table, of size n provided in parameter.

// // For example, when n is 5, the multiplication table is:

// // 1, 2, 3, 4, 5
// // 2, 4, 6, 8, 10
// // 3, 6, 9, 12, 15
// // 4, 8, 12, 16, 20
// // 5, 10, 15, 20, 25
// // This example will result in:

// // [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
// // Examples
// // multiplicationTable(1) ➞ [[1]]

// // multiplicationTable(3) ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
// // Notes
// // N/A

// // const multiplicationTable=(num)=>{
// //     let arr=[];
// //     for(let i=1;i<=num;i++){
// //         arr.push(i)
// //     }
// //     let final=[];
// //       for(let k=1;k<=arr.length;k++){
// //          arr.push(Array.from(arr,x=>x*k ))
// //     }
// //     console.log(final)
// // }
// // console.log(multiplicationTable(3))
// // ===195===
// // Given two integers a and b, return how many times a can be halved while still being greater than b.

// // Examples
// // halveCount(1324, 98) ➞ 3
// // // (1324 -> 662 -> 331 -> 165.5)

// // halveCount(624, 8) ➞ 6
// // // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

// // halveCount(1000, 3) ➞ 8
// // // (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)
// // Notes
// // Integer a will always be able to be halved at least once in every test case.

// // const halves=(num1,num2)=>{
// //     let cur=num1;
// //     let i=-1;
// //     while (cur>num2){
// //         cur/=2;
// //         i++
// //     }
// //     return i;
// // }

// // console.log(halves(624,8))
// // ===194===
// // Given a number between 1-26, return what letter is at that position in the alphabet. Return "invalid" if the number given is not within that range, or isn't an integer.

// // Examples
// // letterAtPosition(1) ➞ "a"

// // letterAtPosition(26.0) ➞ "z"

// // letterAtPosition(0) ➞ "invalid"

// // letterAtPosition(4.5) ➞ "invalid"
// // Notes
// // Return a lowercase letter.
// // Numbers that end with ".0" are valid.

// // String.fromCharCode()

// // const letter=(num)=>{
// //     return String.fromCharCode(96 + Math.round(num))}

// // console.log(letter(2))
// // ===193===
// // Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

// // Examples
// // const first = factory(15)
// // // returns a function first.

// // const arr = [30, 45, 60]
// // // 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4

// // first(arr) ➞ [2, 3, 4]
// // const second = factory(2)
// // // returns a function second.

// // const arr = [2, 4, 6]
// // // 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3

// // second(arr) ➞ [1, 2, 3]
// // Notes
// // Rounding not required.

// // const first=(num)=>(arr)=>arr.map(val=>val/num)
// //     // return(arr)=>()
// //     // return function second(arr){
// //     //     return arr.map(val=>val/num)
// //     // }

// // console.log(first(15)([30, 45, 60]))

// // ===192===

// // const fizzBuzz = (num) => {
// //   let arr = [];

// //   for (let x = 1; x <= num; x++) {
// //     if (x % 5 == 0 && x % 3 == 0) {
// //       arr.push("FizzBuzz");
// //     } else if (x % 3 == 0) {
// //       arr.push("Fizz");
// //     } else if (x % 5 == 0) {
// //       arr.push("Buzz");
// //     } else {
// //       arr.push(x);
// //     }
// //   }
// //   return arr;
// // };

// // console.log(fizzBuzz(10));
// // // ===191===
// // Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// // Examples
// // hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

// // hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

// // hasHiddenFee(["$1"], "$4") ➞ true
// // Notes
// // Remember that each price is given as a string.
// // All $ signs will be at the beginning of the number.

// // const hidden=(arr,totalNum)=>{

// //   return arr.map(val=>+val.slice(1)).reduce((prev,cur)=>prev+cur) === +totalNum.slice(1) ?false : true
// // }

// // console.log(hidden(["$2", "$4", "$1", "$8"], "$15"))

// // ===190===

// // // const unique = (arr) => {
// // if (arr.length === 0) {
// //   return 0;
// // }
// // //   let pointer1 = 0;
// // //   let pointer2 = 1;

// // // for(let i=0;i<Array.length;i++)
// // //     if (arr[pointer1] !== arr[pointer2]) {
// // //       pointer1++;
// // //       arr[pointer1] = arr[pointer2];
// // //     }
// // //     console.log(pointer1, pointer2);
// // //   }
// // return i + 1;
// // // };

// // console.log(unique([1, 1, 1, 2, 2, 3, 3, 5]));

// // ===189===

// // const sumZeor = (arr) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let k = 0; k < arr.length; i++) {
// //       if (arr[i] + arr[k] === 0) {
// //         return [arr[i], arr[k]];
// //       }
// //     }
// //   }
// // };
// // console.log(sumZeor([-3, -2, -1, 0, 1, 2, 3]));

// // ===188===
// // const validAnagram = (str1, str2) => {
// //   if (str1.length !== str2.length) return false;
// //   let obj = {};

// //   for (let letter of str1) {
// //     if (obj[letter]) {
// //       obj[letter]++;
// //     } else {
// //       obj[letter] = 0;
// //     }
// //   }
// //   for (let letter2 of str2) {
// //     if (obj[letter2]) {
// //       obj[letter2]--;
// //     }
// //   }
// //   return Object.values(obj).reduce((prev, cur) => prev + cur) === 0;
// // };
// // console.log(validAnagram("azz", "zza"));

// // ===187===
// // function isValidPhoneNumber(str) {
// //   return str[0] === "(" &&
// //     str[4] === ")" &&
// //     str[5] === " " &&
// //     str[9] === "-" &&
// //     str.length === 14
// //     ? true
// //     : false;
// // }

// // ===186===

// // const peelLayerOff= (array)=>{
// //     let len=array.length;
// //     if(len<3) return [];

// // return array.filter((val,index)=>index!==0 && index!==len-1 && val.splice(0,1) &&val.splice(-1))

// // }

// // console.log(peelLayerOff(
// //     [
// //   ["a", "b", "c", "d"],
// //   ["e", "f", "g", "h"],
// //   ["i", "j", "k", "l"],
// //   ["m", "n", "o", "p"]
// // ]
// //     ))
// // ===185===
// // Mubashir needs your help to compare two arrays.

// // First array arr1 contains some numbers and second array arr2 contains squared values of numbers given in the first array.

// // Create a function which takes these two arrays and returns true if all square values are available, false otherwise.

// // arr1 = [121, 144, 19, 161, 19, 144, 19, 11]
// // arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// // Returns true because 121 is square of 11, 14641 is square of 121, 20736 is square of 144, 361 is square of 19, 25921 the square of 161, and so on...

// // arr1 = [121, 144, 19, 161, 19, 144, 19, 11]
// // arr2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// // Examples
// // simpleComp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) ➞ true

// // simpleComp([4, 4], [1, 31]) ➞ false

// // simpleComp([2, 2, 3], [4, 4, 9]) ➞ true
// // Notes
// // Numbers can be in any order.

// // const simpleCopm=(arr1,arr2)=>{

// //     if (!arr1 || !arr2 ||  arr1.length !== arr2.length) {return false};
// //     if( arr1.length===0 && arr2.length===0) return true;
// //     let obj={};

// //     for(let num of arr1){
// //         if(obj[num**2]){
// //             obj[num**2]++
// //         }else{
// //             obj[num**2]=1
// //         }
// //     }

// //     for (let num of arr2){
// //         console.log(obj[num])
// //         if(obj[num]){
// //             obj[num]--;
// //         }

// //     }

// //     return Object.values(obj).reduce((prev,cur)=>prev+cur) === 0 ? true :false

// // }

// // console.log(simpleCopm([],[1]))

// // ===184===
// // You have cultivated a plant, and after three long months, the time has come to reap the fruits (or the flowers, in this case) of your hard work. During the growth phase, you added water and fertilizer, and kept a constant temperature. It's time to check how much the plant has grown!

// // A plant is represented horizontally, from the base to the left, to the end to the right:

// // ---@---@---@
// // The stem is made of hyphens, and the flowers are represented by symbols. A plant always starts with the stem, and always ends with flowers.

// // The four given parameters are:

// // seed (string) determines the type of flowers generated by the plant.
// // water (integer) each unit of water extends the portion of stem between the flowers, and gives the total number of segments (stem + flowers) of the plant.
// // fert (integer) each unit of fertilizer increases the amount of flowers, grouped in clusters.
// // temp (integer) if the temperature recorded is between 20°C and 30°C (bounds included) the plant grows normally, otherwise all the flowers die, except for a single survivor at the end of the stem.
// // Given the above parameters, implement a function that returns a string representing the plant (see the examples below for a better visualization).

// // Examples
// // plant("@", 3, 3, 25) ➞ "---@@@---@@@---@@@"
// // // Water gives the length of the stem portions between flowers.
// // // Water gives the total number of segments.
// // // Fertilizer gives the length of flowers clusters.
// // // In this case the temperature is in the acceptable range 20°C | 30°C

// // plant("#", 1, 5, 30) ➞ "-#####"

// // plant("&", 5, 1, 20) ➞ "-----&-----&-----&-----&-----&"

// // plant("§", 3, 3, 15) ➞ "---------§"
// // // The temperature out of range make all flowers die, except the last one.
// // // The stem is not affected by temperature.
// // Notes
// // All given cases will have valid parameters for water and fert, you have to only check that temp is in the "safe" range (20°C|30°C).

// // const plant = (seed, water, fert, temp) => {
// //   // check for the safe temperature (20-30 celsium)
// //   if (temp < 20 || temp > 30) {
// //     return "-".repeat(water ** 2) + seed;
// //   }

// //   return ("-".repeat(water) + seed.repeat(fert)).repeat(water);
// // };

// // console.log(plant("@", 3, 3, 21));

// // ===183===
// // Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

// // Examples
// // sumFoundIndexes([0, 3, 3, 0, 0, 3], 3) ➞ 8
// // // The number 3 was found at indexes 1, 2 and 5.
// // // 8 = 1 + 2 + 5

// // sumFoundIndexes([1, 2, 3, 4, 5, 6], 3) ➞ 2

// // sumFoundIndexes([100, 100, 100, 100, 100], 100) ➞ 10

// // sumFoundIndexes([5, 10, 15, 20], 2) ➞ 0
// // Notes
// // 0 can be the result if no number in the array matches or if the only matching element is at index 0.

// // function check(arr,num){
// //     return arr.map((val,index)=>val===num ? index : 0).reduce((prev,cur)=>+prev+ +cur)
// //     }

// //     console.log(check([0,3,3,0,0,3],3))
// // ===182===
// // The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

// // Examples
// // reverse("Hello World") ➞ "DLROw OLLEh"

// // reverse("ReVeRsE") ➞ "eSrEvEr"

// // reverse("Radar") ➞ "RADAr"
// // Notes
// // There will be no punctuation in any of the test cases.

// // function reverse (str){
// //     if
// //     return str.split('').reverse().map(val=>val==val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()).join('')
// //     }

// //     //

// //     console.log(reverse('Hello World'))
// // ===181===
// // A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

// // Create a function that determines whether a number is a Disarium or not.

// // Examples
// // isDisarium(75) ➞ false
// // // 7^1 + 5^2 = 7 + 25 = 32

// // isDisarium(135) ➞ true
// // // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

// // isDisarium(518) ➞ false

// // isDisarium(518) ➞ true

// // isDisarium(544) ➞ false

// // isDisarium(8) ➞ true

// // isDisarium(466) ➞ false
// // Notes
// // Position of the digit is 1-indexed.
// // A recursive version of this challenge can be found via this link.

// // const isDisarium = (num) => {
// //   return num
// //     .toString()
// //     .split("")
// //     .map((val, index) => val ** (index + 1))
// //     .reduce((prev, cur) => prev + cur) === num
// //     ? true
// //     : false;
// // };
// // console.log(isDisarium(135));

// // ===180===
// // Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.

// // Examples
// // dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"

// // dnaToRna("CGATATA") ➞ "GCUAUAU"

// // dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
// // Notes
// // Transcription is the process of making complementary strand.
// // A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.

// // const dnaToRna=(string)=>{
// //     let obj={"A": "U",
// //         "T":"A",
// //         "G":'C',
// //         'C':'G'
// //     }

// // return [...string].map((val,index)=>obj[val] ?val=obj[val]:val).join('')
// //     // val===obj[val] ? val=obj[val] :val
// // }

// // console.log(dnaToRna('UAAUCGCGCUAUAUGCGCAUG'))
// // ===179===
// // This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!

// // Examples
// // const s = "abcdefghijklmnopqrstuvwxyz"
// // challenge1(s) ➞ "abcde"
// // // First 5 characters of the string.

// // challenge2(s) ➞ "vwxyz"
// // // Last 5 characters of the string.

// // challenge3(s) ➞ "zyxwvutsrqponmlkjihgfedcba"
// // // All characters in the string from back.

// // challenge4(s) ➞ "fedcba"
// // // First 6 characters in the string (start with 6th character and go backwards).

// // challenge5(s) ➞ "tvxz"
// // // Take last 7 characters and only return odd positioned ones.
// // Notes
// // Check the Tests tab for more examples.
// // See the Resources tab for further information on learning string slicing.
// // You may use methods other than slice() as needed to complete some of the challenges.
// // All test cases follow the same slicing pattern as the above example.

// // function challenge1(s) {
// // 	return s.slice(0,5)
// // }

// // function challenge2(s) {
// // 	return s.slice(-5)
// // }

// // function challenge3(s) {
// // 	return [...s].reverse().join('').slice(0,s.length)
// // }

// // function challenge4(s) {
// // 	return s.slice(0,6).reverse()
// // }

// // function challenge5(s) {
// // 	return [...s.slice(-7)].filter((val,index)=>index%2===0).join('')
// // }

// // console.log(challenge5( 'abcdefghijklmnopqrstuvwxyz'))

// // ===178===
// // Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// // Examples
// // countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
// // // There are a total of 10 positive numbers.
// // // The sum of all negative numbers equals -65.

// // countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]

// // countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]

// // countPosSumNeg([]) ➞ []
// // Notes
// // If given an empty array, return an empty array: []
// // 0 is not positive.

// // const countPosSumNeg=(arr)=>{
// //     if(arr.length===0)return [];
// // let posLength=arr.filter(el=>el>0).length
// // let sumNegative=arr.filter(el=>el<0).reduce((prev,cur)=>prev+cur)

// // return [posLength,sumNegative]

// // };

// // console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]))
// // // // ===178===
// // const isSastry = (cur) => {
// //   return Number.isInteger(Math.sqrt(+(cur + `${cur + 1}`)));
// // };

// // console.log(isSastry(184));
// // // // ===177===
// // Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

// // Examples
// // stringCycling("abc", "hello") ➞ "abcab"

// // stringCycling("programming", "edabit") ➞ "progra"

// // stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"

// // stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"

// // stringCycling("to", "hide") ➞ "toto"

// // stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c"
// // Notes
// // All tests will include valid strings.
// // Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

// // Examples
// // stringCycling("abc", "hello") ➞ "abcab"

// // stringCycling("programming", "edabit") ➞ "progra"

// // stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"

// // stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"

// // stringCycling("to", "hide") ➞ "toto"

// // stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c"
// // Notes
// // All tests will include valid strings.

// // const stringCycling=(str1,str2)=>{
// //     let saver=[];
// //         if(str2.length>str1.length){
// //     // check if the string1 length less than second one than use it again
// //             for(let i=0; i<=str2.length;i++){
// //     // loop over second string
// //                 saver.push(str1)
// //             }
// //         }else{
// //     // otherwise split it based on the length of the second string
// //             return str1.slice(0,str2.length)
// //     }
// //     return saver.join('').slice(0,str2.length)
// // }
// // console.log(stringCycling("ad", "hello"))
// // // // ===176===

// // Create a function that takes two dates and returns the number of days between the first and second date.

// // Examples
// // getDays(
// //   new Date("June 14, 2019"),
// //   new Date("June 20, 2019")
// // ) ➞ 6

// // getDays(
// //   new Date("December 29, 2018"),
// //   new Date("January 1, 2019")
// // ) ➞ 3
// // // Dates may not all be in the same month/year.

// // getDays(
// //   new Date("July 20, 2019"),
// //   new Date("July 30, 2019")
// // ) ➞ 10
// // Notes
// // N/A

// // const getDays=(first,second)=>{
// //     return (second.getTime()-first.getTime())/1000/60/60/24
// // }

// // console.log(getDays(new Date('June 14, 2019'), new Date('June 20, 2019')))
// // // // ===175===
// // A half life is the amount of time for half of a radioactive substance to decay.

// // After 1 half life, 50% of a substance will be left.
// // After 2 half lives, 25% of a substance will be left.
// // After 3 half lives, 12.5% of a substance will be left, etc...
// // Create a function which calculates the remaining mass and the number of years that it took for the substance to decay. You will be given:

// // The mass of the substance.
// // The time in years for a halflife to elapse.
// // The number of half lives.
// // Worked Example
// // halflifeCalculator(1000, 5730, 2) ➞ [250, 11460]

// // // There are 2 half lives, so the mass decays from 1000 to 500, then from 500 to 250.
// // // Each halflife is 5730 years, and since there were 2, it took 11460 years in total.
// // Examples
// // halflifeCalculator(1600, 6, 3) ➞ [200, 18]

// // halflifeCalculator(13, 500, 1) ➞ [6.5, 500]

// // halflifeCalculator(100, 35, 5) ➞ [3.125, 175]
// // Notes
// // Round the final mass to three decimal places.
// // All inputs are positive numbers.
// // Return the final mass first, then the number of years.

// //  1 half life  50% => each half is divided by 2 for next half life
// // first argument: mass of substance
// // second argument : the time of the half life
// // third : the number of half lifes

// // const halfLifeCalc=(mass, timeElapse,quantityHalfs)=>{
// //     let weight=mass;
// // for (let i=0;i<quantityHalfs;i++){
// //         weight/=2

// //     }
// //     return [parseFloat(weight.toFixed(3)),parseFloat((timeElapse*quantityHalfs).toFixed(3))]

// // }
// // console.log(halfLifeCalc(1600,6,3))
// // // // ===174===
// // Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// // Examples
// // freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

// // freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

// // freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
// // Notes
// // Ignore tax or additional fees when calculating the total order cost.

// // const freeShipping=(obj)=>{
// //     return Object.values(obj).reduce((prev,cur)=>prev+cur)>50 ? true :false

// //     }

// //     console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
// // // // ===173===
// // // Create a function to partition an array from left to right.

// // // Examples
// // // movingPartition([-1, -1, -1, -1])
// // // ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

// // // movingPartition([1, 2, 3, 4, 5])
// // // ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

// // // movingPartition([]) ➞ []
// // // Notes
// // // With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
// // // An empty array should return an empty array: []

// // const  movingPartition=(arr) =>{
// //     if(arr.length===0)return [];

// //    return  arr.slice(1).map((_, i) => [arr.slice(0, i + 1), arr.slice(i + 1)]);

// // //     if(arr.length===0)return [];
// // // let array=[]

// // // for (let i=1;i<arr.length;i++){
// // //   let first= arr.slice(0,i)
// // //     let second=arr.slice(-(arr.length-i))
// // //     array.push([first,second])

// // // }
// // //     return array
// // }

// // console.log(movingPartition([1,2,3,4,5]))
// // // // ===172===
// // // // Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// // // // Examples
// // // // transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

// // // // transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

// // // // transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
// // // // Notes
// // // // Return the upvotes as an array.

// // // function transformUpvotes(str) {
// // //   return str
// // //     .split(" ")
// // //     .map((val) =>
// // //       val.includes("k") ? Number.parseFloat(val) * 1000 : Number.parseFloat(val)
// // //     );

// // //   // 													{
// // //   // 	if (val.includes('k')){
// // //   // 													Number.parseFloat(val)*1000
// // //   // 	}else{
// // //   // 		Number.parseFloat(val)
// // //   // 	}
// // //   // }

// // //   // )
// // // }
// // // console.log(transformUpvotes("6.8k 13.5k 12"));
// // // // ===171===
// // // // One cause for speeding is the desire to shorten the time spent traveling. In long distance trips, speeding does save an appreciable amount of time. However, the same cannot be said about short distance trips.

// // // // Create a function that calculates the amount of time saved were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

// // // // Examples
// // // // // The parameter's format is as follows:
// // // // // (speed limit, avg speed, distance traveled at avg speed)

// // // // timeSaved(80, 90, 40) ➞ 3.3

// // // // timeSaved(80, 90, 4000) ➞ 333.3

// // // // timeSaved(80, 100, 40 ) ➞ 6.0

// // // // timeSaved(80, 100, 10) ➞ 1.5
// // // // Notes
// // // // Speed = distance/time
// // // // The time returned should be in minutes, not hours.
// // // // Round the answer to one decimal place.
// // // // The speed limit and average speed are both given in mi/hr

// // // // write a function and call it
// // // // calculate thethe time spend on the trip with avg speed
// // // // calculate thethe time spend on the trip with speed limit
// // // // compare them and return the value

// // // // const timeSaved=(speedLimit,avgSpeed,distance)=>{
// // // //     // speed=distance/time; time=distance/speed
// // // //     const speedLimitTime=distance/(speedLimit)
// // // //     const avgSpeedTime=distance/(avgSpeed)
// // // //     return ((speedLimitTime-avgSpeedTime)*60).toFixed(1)

// // // // };

// // // // console.log(timeSaved(80,90,40))
// // // // // ===170===
// // // // Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".

// // // // To illustrate, the day of the week for "12/07/2016" is "Wednesday".

// // // // Examples
// // // // getDay("12/07/2016") ➞ "Wednesday"

// // // // getDay("09/04/2016") ➞ "Sunday"

// // // // getDay("12/08/2011") ➞ "Thursday"
// // // // Notes
// // // // This challenge assumes the week starts on Sunday.

// // // // const getDay=(str)=>{
// // // //     let days=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// // // //     const day=new Date(str);
// // // //     let weekday=day.getDay()

// // // //     return days[weekday]
// // // // }
// // // // console.log(getDay('12/07/2016'))
// // // // ===169===
// // // // When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// // // // Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

// // // // It takes 1 second to switch between pencils.
// // // // It takes 2 seconds to color a square.
// // // // See the example below for clarification.

// // // // color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// // // // // There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// // // // // You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// // // // // 10 + 4 = 14
// // // // Examples
// // // // colorPatternTimes(["Blue"]) ➞ 2

// // // // colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

// // // // colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
// // // // Notes
// // // // Only change coloring pencils if the next color is different to the color before it.
// // // // Return a number in seconds.

// // // // function colorPatternTimes(arr){
// // // //     // to switch pencils - 1sec
// // // //     // color square - 2sec
// // // //     let timeSquare=arr.length*2
// // // //     let timeSwitch=0;

// // // //     for (let i=0; i<arr.length;i++){
// // // //     if(arr[i]!==arr[i-1]){
// // // //         timeSwitch++
// // // //     }
// // // //     }
// // // //     return timeSwitch-1+timeSquare

// // // // }
// // // // console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]))
// // // // ===168===
// // // // Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

// // // // The first and last characters must be a consonant.
// // // // The character in the middle must be a vowel.
// // // // Examples
// // // // isVowelSandwich("cat") ➞ true

// // // // isVowelSandwich("ear") ➞ false

// // // // isVowelSandwich("bake") ➞ false

// // // // isVowelSandwich("try") ➞ false
// // // // Notes
// // // // Return false if the word is not 3 characters in length.
// // // // All words will be given in lowercase.
// // // // y is not considered a vowel.

// // // // function isVowelSandwich(str){
// // // //     if (str.length!==3) return false;

// // // //     function isVowel(c) {
// // // //         return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
// // // //     }

// // // //     return isVowel(str[1]) && !isVowel(str[0])&& !isVowel(str[2]) ? true :false

// // // //     }
// // // //     console.log(isVowelSandwich('bake'))

// // // // ===167===
// // // // Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

// // // // "{fraction} rounded to {n} decimal places is {answer}"

// // // // Examples
// // // // fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"

// // // // fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"

// // // // fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"
// // // // Notes
// // // // Add trailing zeros if n is greater than the actual number of decimal places the fraction has (see example #2).
// // // // Numbers greater than one may be given as top-heavy fractions (no mixed numbers).
// // // // n won't be 1 because that would cause "decimal places" to be "decimal place", making the challenge more cumbersome than it needs to be.

// // // // function fracRound(frac, n) {
// // // //   let [first, second] = frac.split("/");
// // // //   let length = n + 2;
// // // //   return `${frac} rounded to ${n} decimal places is ${(
// // // //     +first / +second
// // // //   ).toFixed(n)}`;
// // // // }

// // // // console.log(fracRound("21/98", 6));
// // // // ===166===
// // // // You are to read each part of the date into its own integer type variable. The year should be a 4 digit number. You can assume the user enters a correct date formatted d m yyyy (no error checking required).

// // // // Determine whether the entered date is a magic date. Here are the rules for a magic date:

// // // // mm * dd is a 1-digit number that matches the last digit of yyyy or
// // // // mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
// // // // mm * dd is a 3-digit number that matches the last 3 digits of yyyy
// // // // The program should then display true if the date is magic, or false if it is not.

// // // // Examples
// // // // Magic("1 1 2011") ➞ true

// // // // Magic("4 1 2001") ➞ false

// // // // Magic("5 2 2010") ➞ true

// // // // Magic("9 2 2011") ➞ false

// // // // ===165===

// // // // const getLength = function (array) {
// // // //   console.log(array);
// // // //   return array.length === 0 ? 0 : array.flat(Infinity).length;
// // // // };

// // // // console.log(getLength([1, [2, 3]]));
// // // // // ===164===

// // // // function duplicateCheck(array) {
// // // //   //     let arr=[]
// // // //   //     let unique=array.forEach(val=>arr.push(Array.from(new Set(val)).join('')))
// // // //   // let result=[];
// // // //   // for (let i=0;i<array.length;i++){
// // // //   //     if (array[i]===arr[i]){
// // // //   //         result.push(array[i])
// // // //   //     }
// // // //   // }
// // // //   // return result
// // // //   return array.filter((x) => new Set(x).size === x.length);
// // // // }

// // // // console.log(duplicateCheck(["abb", "abc", "abcdb", "aea", "bbb"]));
// // // // // // ===163===
// // // // write a function and call it
// // // //write condition
// // // //swithc statement for the cchecking for the condition

// // // // function game(p1, p2) {
// // // //   switch (p1 + p2) {
// // // //     case "PaperRock":
// // // //     case "ScissorsPaper":
// // // //     case "RockScissors":
// // // //       return "The winner is p1";
// // // //       break;
// // // //     case "RockPaper":
// // // //     case "PaperScissors":
// // // //     case "ScissorsRock":
// // // //       return "The winner is p2";
// // // //       break;
// // // //     default:
// // // //       return "It's a draw";
// // // //   }
// // // // }

// // // // console.log(game("Rock", "Paper"));

// // // // //
// // // // const secureBooking = function (params) {
// // // //   let passengerCount = 0;
// // // //   if (passengerCount === 0) {
// // // //     let bi = passengerCount;
// // // //   }
// // // //   return function () {
// // // //     bi++;

// // // //     console.log(bi);
// // // //   };
// // // // };
// // // // const booker = secureBooking();
// // // // booker();
// // // // booker();

// // // // let counter = 0;
// // // // function count() {
// // // //   console.log(counter);
// // // //   return counter++;
// // // // }

// // // // document.querySelector(".button").addEventListener("click", count);

// // // // const myName = "Jonas";

// // // // function first() {
// // // //   const age = 30;
// // // //   if (age >= 30) {
// // // //     const decade = 3;
// // // //     var millenial = true;
// // // //   }

// // // //   function second() {
// // // //     const job = "teacher";
// // // //     console.log(decade);
// // // //   }
// // // //   second();
// // // // }
// // // // first();
// // // // // ===163===
// // // // // Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// // // // // Examples
// // // // // isAnagram("cristian", "Cristina") ➞ true

// // // // // isAnagram("Dave Barry", "Ray Adverb") ➞ true

// // // // // isAnagram("Nope", "Note") ➞ false
// // // // // Notes
// // // // // Should be case insensitive.
// // // // // The two given strings can be of different lengths.

// // // // // write a function and call it
// // // // // to Lower case all of the strings
// // // // // Frequancy of letters for first str
// // // // // freaquancy of letteres for the second string
// // // // // compare if the number of letteres are the same

// // // // const isAnagram = (str1, str2) => {
// // // //   let string1 = str1.toLowerCase();
// // // //   let string2 = str2.toLowerCase();
// // // //   if (string1.length !== string2.length) {
// // // //     return false;
// // // //   }
// // // //   const lookup = {};
// // // //   for (let i = 0; i < string1.length; i++) {
// // // //     let letter = string1[i];
// // // //     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
// // // //   }
// // // //   for (let i = 0; i < string2.length; i++) {
// // // //     let letter = string2[i];
// // // //     if (!lookup[letter]) {
// // // //       return false;
// // // //     } else {
// // // //       lookup[letter] -= 1;
// // // //     }
// // // //   }
// // // //   return true;
// // // // };

// // // // console.log(isAnagram("cristian", "Cristina"));
// // // // // ===162===
// // // // const boomIntensity = (num) => {
// // // //   let letter = "o";
// // // //   if (num < 2) {
// // // //     return "boom";
// // // //   }
// // // //   if (num % 2 === 0 && num % 5 === 0) {
// // // //     return `(B${letter.repeat(num)}m!)`.toUpperCase();
// // // //   }
// // // //   if (num % 2 === 0) {
// // // //     return `B${letter.repeat(num)}m!`;
// // // //   }
// // // //   if (num % 5 === 0) {
// // // //     return `(B${letter.repeat(num)}m)`.toUpperCase();
// // // //   }
// // // // };
// // // // // ===161===
// // // // // Remove the Special Characters from a String
// // // // // Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// // // // // Examples
// // // // // removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"

// // // // // removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"

// // // // // removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"
// // // // // Notes
// // // // // N/A

// // // // // remove all special characters from the string (leave - spaces and _)

// // // // // write a function and call it
// // // // // set regex expression for this scenario
// // // // // remove thiose characters from the string

// // // // const replaceAll = (str) => {
// // // //   let regex = /[.!@#$%^&\*()=[\]{}<>+~,'`"?|]/g;
// // // //   return str.replace(regex, "");
// // // // };
// // // // console.log(replaceAll("aasdsadsd asdsd !"));
// // // // // ===160===
// // // // // Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// // // // // The string must contain an @ character.
// // // // // The string must contain a . character.
// // // // // The @ must have at least one character in front of it.
// // // // // e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// // // // // The . and the @ must be in the appropriate places.
// // // // // e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// // // // // If the string passes these tests, it's considered a valid email address.

// // // // // Examples
// // // // // validateEmail("@gmail.com") ➞ false

// // // // // validateEmail("hello.gmail@com") ➞ false

// // // // // validateEmail("gmail") ➞ false

// // // // // validateEmail("hello@gmail") ➞ false

// // // // // validateEmail("hello@edabit.com") ➞ true
// // // // // Notes
// // // // // Check the Tests tab to see exactly what's being evaluated.
// // // // // You can solve this challenge with RegEx, but it's intended to be solved with logic.
// // // // // Solutions using RegEx will be accepted but frowned upon :(

// // // // // write a function and check for
// // // // // @ character
// // // // // . character and its position
// // // // // at least one character in the front of the @ character

// // // // // if the upper case ?
// // // // // if empty string?
// // // // // if includes two or more @ characters
// // // // // if includes dots two or more in a row
// // // // // length of the string limit

// // // // const validateEmail = (str) => {
// // // //   // str.includes('@')
// // // //   // str.length>0

// // // //   const at = str.indexOf("@");
// // // //   const dot = str.lastIndexOf(".");
// // // //   const lengthBedore = str.slice(0, at);
// // // //   return (
// // // //     str.includes("@") && at < dot && str.length > 0 && lengthBedore.length > 0
// // // //   );
// // // // };

// // // // console.log(validateEmail("assd@asdsss.s"));

// // // // // ===159===
// // // // // Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// // // // // Examples
// // // // // reverseImage([
// // // // //   [1, 0, 0],
// // // // //   [0, 1, 0],
// // // // //   [0, 0, 1]
// // // // // ]) ➞ [
// // // // //   [0, 1, 1],
// // // // //   [1, 0, 1],
// // // // //   [1, 1, 0]
// // // // // ]

// // // // // reverseImage([
// // // // //   [1, 1, 1],
// // // // //   [0, 0, 0]
// // // // // ]) ➞ [
// // // // //   [0, 0, 0],
// // // // //   [1, 1, 1]
// // // // // ]

// // // // // reverseImage([
// // // // //   [1, 0, 0],
// // // // //   [1, 0, 0]
// // // // // ]) ➞ [
// // // // //   [0, 1, 1],
// // // // //   [0, 1, 1]
// // // // // ]

// // // // // write a function and call it.
// // // // // loop over the array and change 1 to 0s and 0s to 1s

// // // // const reverseImage = (arr) => {
// // // //   const reverse = arr.map((val) =>
// // // //     val.map((digit, index) =>
// // // //       digit === 1 ? (digit[index] = 0) : (digit[index] = 1)
// // // //     )
// // // //   );
// // // //   return reverse;
// // // // };

// // // // console.log(
// // // //   reverseImage([
// // // //     [1, 0, 0],
// // // //     [0, 1, 0],
// // // //     [0, 0, 1],
// // // //   ])
// // // // );

// // // // // ===1Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

// // // // // Examples
// // // // // singleOccurrence("EFFEAABbc") ➞ "C"

// // // // // singleOccurrence("AAAAVNNNNSS") ➞ "V"

// // // // // singleOccurrence("S") ➞ "S"
// // // // // Notes
// // // // // The function will not be case sensitive.

// // // // // Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

// // // // // Examples
// // // // // singleOccurrence("EFFEAABbc") ➞ "C"

// // // // // singleOccurrence("AAAAVNNNNSS") ➞ "V"

// // // // // singleOccurrence("S") ➞ "S"
// // // // // Notes
// // // // // The function will not be case sensitive.

// // // // // function singleOccurence (str){
// // // // // if (str.length===0){
// // // // //   return ''
// // // // // };
// // // // // const strUpper=str.toUpperCase();
// // // // // let obj={};

// // // // // for (let letter of strUpper ){
// // // // //   if (obj[letter]){
// // // // //       obj[letter]++;
// // // // //   }else{
// // // // //       obj[letter]=1;
// // // // //   }
// // // // //   // return Object.values()
// // // // // }

// // // // // // console.log(singleOccurence('EFFEAABbc'))
// // // // // function singleOccurence(str) {
// // // // //   //  If the input is empty return empty string
// // // // //   if (str.length === 0) {
// // // // //     return "";
// // // // //   }
// // // // //   // upper case all the elements

// // // // //   const strUpper = str.toUpperCase();
// // // // //   // create an object and count occurence for each character
// // // // //   let obj = {};

// // // // //   for (let letter of strUpper) {
// // // // //     if (obj[letter]) {
// // // // //       obj[letter]++;
// // // // //     } else {
// // // // //       obj[letter] = 1;
// // // // //     }
// // // // //   }

// // // // //   return Object.keys(obj).find((key) => obj[key] === 1);

// // // // //   // return Object.values()
// // // // // }

// // // // // console.log(singleOccurence("EFFEAABbc"));

// // // // // ===157===
// // // // // // Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// // // // // // Examples
// // // // // // reverse("Reverse") ➞ "esreveR"

// // // // // // reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"

// // // // // // reverse("The dog is big.") ➞ "The dog is big."
// // // // // // Notes
// // // // // // You can expect a valid string to be provided for each test case.
// // // // // const reverse = (str) => {
// // // // //   return str
// // // // //     .split(" ")
// // // // //     .map((val) => (val.length >= 5 ? val.split("").reverse().join("") : val))
// // // // //     .join(" ");
// // // // // };
// // // // // console.log(reverse("Reverse the order of every word greater than or equal to five characters."))
// // // // // ===156===
// // // // // Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

// // // // // The formula to calculate the temperature in Fahrenheit from Celsius is:

// // // // // F = C*9/5 +32
// // // // // The formula to calculate the temperature in Kelvin from Celsius is:

// // // // // K = C + 273.15
// // // // // Examples
// // // // // tempConversion(0) ➞ [32, 273.15]
// // // // // // 0°C is equal to 32°F and 273.15 K.

// // // // // tempConversion(100) ➞ [212, 373.15]

// // // // // tempConversion(-10) ➞ [14, 263.15]

// // // // // tempConversion(300.4) ➞ [572.72, 573.55]
// // // // // Notes
// // // // // Return calculated temperatures up to two decimal places.
// // // // // Return "Invalid" if K is less than 0.

// // // // function tempConversion(celsius) {
// // // //   if (celsius < -273.15) {
// // // //     return "Invalid";
// // // //   }
// // // //   function kelvin(c) {
// // // //     return (c + 273.15).toFixed(2);
// // // //   }

// // // //   function faranheit(c) {
// // // //     return ((c * 9) / 5 + 32).toFixed(2);
// // // //   }

// // // //   return [+faranheit(celsius), +kelvin(celsius)];
// // // // }
// // // // // ===155===
// // // // // Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.

// // // // // Examples
// // // // // lastDig(25, 21, 125) ➞ true
// // // // // // The last digit of 25 is 5, the last digit of 21 is 1, and the last
// // // // // // digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// // // // // // to the last digit of 125(5).

// // // // // lastDig(55, 226, 5190) ➞ true
// // // // // // The last digit of 55 is 5, the last digit of 226 is 6, and the last
// // // // // // digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
// // // // // // equal to the last digit of 5190(0).

// // // // // lastDig(12, 215, 2142) ➞ false
// // // // // // The last digit of 12 is 2, the last digit of 215 is 5, and the last
// // // // // // digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
// // // // // // not equal to the last digit of 2142(2).
// // // // // Notes
// // // // // Numbers can be negative.

// // // // // const lastDigit=(a,b,c)=>{
// // // // //     console.log(a%10)
// // // // //   	return ((a%10)*(b%10))%10 === c%10
// // // // // }

// // // // // console.log(lastDigit(25, 21, 125))
// // // // // ===154===
// // // // // You will be given a string of characters containing only the following characters: ():

// // // // // Create a function returns a number based on the number of sad and smiley faces there is.

// // // // // The happy faces :) and (: are worth 1.
// // // // // The sad faces :( and ): are worth -1.
// // // // // Working Example
// // // // // happinessNumber(":):(") ➞ -1
// // // // // // The first 2 characters are :)        +1      Total: 1
// // // // // // The next 2 are ):                    -1      Total: 0
// // // // // // The last 2 are :(                    -1       Total: -1
// // // // // Examples
// // // // // happinessNumber(":):(") ➞ -1

// // // // // happinessNumber("(:)") ➞ 2

// // // // // happinessNumber("::::") ➞ 0
// // // // // Notes
// // // // // All test cases will be valid.

// // // // // giveng a string
// // // // // - if :) +1
// // // // // - if :( -1
// // // // //  the characters should reaveluate on each step, so :): - 1 smiley and 1 sad
// // // // //  if there is any other input return 0
// // // // // return total

// // // // // const happyNumber = (str) => {
// // // // //   let split = str.split("");

// // // // // let count=0;

// // // // // // let checker=split.map((val, index)=> {val===')'&&val[index-1]===':' ? count++ :  val===')'&&val[index+1]===':' ? count-- :
// // // // // // val==='('&&val[index-1]===':' ? count-- :  val==='('&&val[index+1]===':' ? count+

// // // // // let countSmiley = 0;
// // // // // let countSadly = 0;
// // // // // for (let i = 0; i < split.length; i++) {
// // // // //   //  ")"
// // // // //   if (split[i] === ")") {
// // // // //     if (split[i - 1] === ":") {
// // // // //       countSmiley++;
// // // // //     }
// // // // //     if (split[i + 1] === ":") {
// // // // //       countSadly--;
// // // // //     }
// // // // //   }
// // // // //   // "("

// // // // //   if (split[i] === "(") {
// // // // //     if (split[i - 1] === ":") {
// // // // //       countSadly--;
// // // // //     }
// // // // //     if (split[i + 1] === ":") {
// // // // //       countSmiley++;
// // // // //     }
// // // // //   }
// // // // // }
// // // // // return countSadly + countSmiley;

// // // // // //
// // // // // }

// // // // // console.log(happyNumber(":::()):)"));

// // // // // ===153===
// // // // // Given an integer array, transform that array into a mirror.

// // // // // mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
// // // // // const mirror = (arr) => {
// // // // //   return [...arr, ...arr.reverse().slice(1)];
// // // // // };
// // // // // console.log(mirror([0, 2, 4, 6]));
// // // // // ===152===
// // // // // Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// // // // // If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// // // // // If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// // // // // If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

// // // // // function evenOrOdd(str) {
// // // // //   let split = str.split("");
// // // // //   let even = split
// // // // //     .filter((val) => val % 2 === 0)
// // // // //     .reduce((prev, cur) => parseInt(prev) + parseInt(cur));
// // // // //   let odd = split
// // // // //     .filter((val) => val % 2 !== 0)
// // // // //     .reduce((prev, cur) => parseInt(prev) + parseInt(cur));

// // // // //   if (even == odd) {
// // // // //     return "Even and Odd are the same";
// // // // //   }
// // // // //   return even > odd ? "Even is greater than Even" : "Odd is greater than Odd";
// // // // // }
// // // // // console.log(evenOrOdd("143"));

// // // // // ===151===
// // // // // There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// // // // // Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// // // // // Examples
// // // // // warOfNumbers([2, 8, 7, 5]) ➞ 2
// // // // // // 2 + 8 = 10
// // // // // // 7 + 5 = 12
// // // // // // 12 is larger than 10
// // // // // // So we return 12 - 10 = 2

// // // // // warOfNumbers([12, 90, 75]) ➞ 27

// // // // // warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168
// // // // // Notes
// // // // // The given array contains only positive integers.

// // // // //write a function and call it
// // // // // filter array to even and odd numbers
// // // // // sum odd and separetaly sum even
// // // // // compare them
// // // // // if even> odd even-odd
// // // // // odd>even odd-even

// // // // // let warOfNumbers = (arr) => {
// // // // //   let even = [];
// // // // //   let odd = [];

// // // // //   let filtered = arr.filter((val) =>
// // // // //     val % 2 === 0 ? even.push(val) : odd.push(val)
// // // // //   );
// // // // //   let sumEven = even.reduce((prev, cur) => prev + cur);
// // // // //   let sumOdd = odd.reduce((prev, cur) => prev + cur);

// // // // //   return sumEven > sumOdd
// // // // //     ? sumEven - sumOdd
// // // // //     : sumEven < sumOdd
// // // // //     ? sumOdd - sumEven
// // // // //     : 0;
// // // // // };

// // // // // console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));

// // // // // ===150===
// // // // // Write a function that takes time t1 and time t2 and returns the number of hours passed between the two times.
// // // // // var a = parseInt(t1)
// // // // // 	var b = parseInt(t2)
// // // // // 	if (t1.endsWith("PM")) { a += 12 } else if (a == 12) {a = 0}
// // // // // 	if (t2.endsWith("PM")) { b += 12 } else if (b == 12) {b = 0}
// // // // // 	if (a == b) { return "no time passed"}
// // // // // 	return b - a + " hours"
// // // // // }
// // // // // // ===149===
// // // // // A snail goes up the stairs. Every step, he must go up the step, then go across to the next step. He wants to reach the top of the tower.

// // // // // Write a function that returns the distance the snail must travel to the top of the tower given the height and length of each step and the height of the tower.

// // // // // Examples
// // // // // totalDistance(0.2, 0.4, 100.0) ➞ 300.0
// // // // // // Total distance is 300.

// // // // // totalDistance(0.3, 0.2, 25.0) ➞ 41.7

// // // // // totalDistance(0.1, 0.1, 6.0) ➞ 12.0
// // // // // Notes
// // // // // All given values are greater than 0.
// // // // // Round answers to the nearest tenth 0.1.
// // // // // Number of steps determined by tower height divided by stair height.
// // // // // For the purposes of this exercise, the last step's length must be counted to complete the journey.

// // // // // const totalDistance=(height, length, tower)=>{
// // // // //     return +(tower+(tower/height*length)).toFixed(1)
// // // // // }

// // // // // console.log(totalDistance(0.2, 0.4, 100.0))
// // // // // // ===148===
// // // // // Given a simple math expression as a string, neatly format it as an equation.

// // // // // Examples
// // // // // formatMath("3 + 4") ➞ "3 + 4 = 7"

// // // // // formatMath("3 - 2") ➞ "3 - 2 = 1"

// // // // // formatMath("4 x 5") ➞ "4 x 5 = 20"

// // // // // formatMath("6 / 3") ➞ "6 / 3 = 2"
// // // // // Notes
// // // // // You will need to deal with addition, subtraction, multiplication and division.
// // // // // Division will have whole number answers (and will obviously not involve 0).

// // // // // write a function and call it
// // // // // split and return as an array and later with template literal show it to the user

// // // // // function formatMath (expr){
// // // // //     return `${expr} = ${eval(expr.replace("x", "*"))}`
// // // // // }

// // // // // console.log(formatMath("6 / 3"))

// // // // // // ===147===
// // // // // // Create a function that takes a string and replaces the vowels with another character.

// // // // // // a = 1
// // // // // // e = 2
// // // // // // i = 3
// // // // // // o = 4
// // // // // // u = 5
// // // // // // Examples
// // // // // // replaceVowel("karachi") ➞ "k1r1ch3"

// // // // // // replaceVowel("chembur") ➞ "ch2mb5r"

// // // // // // replaceVowel("khandbari") ➞ "kh1ndb1r3"
// // // // // // Notes
// // // // // // The input will always be in lowercase.

// // // // // // create a function and call it
// // // // // // create reference object
// // // // // // replace vowels with a proper number from reference object

// // // // // function replaceVowels(string) {

// // // // // return word.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)
// // // // // return string.replace(/a/g,'1').replace(/e/g,'2').replace(/i/g,'3').replace(/o/g,'4').replace(/u/g,'5')
// // // // // }

// // // // // console.log(replaceVowels("karachi"));

// // // // // // ===146===

// // // // // // Fruitt salads are served best when the fruits are sliced and diced into small chunks!

// // // // // // For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// // // // // // Worked Example
// // // // // // fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// // // // // // // Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// // // // // // // Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// // // // // // // Final string: "apargrapepesple"
// // // // // // Examples
// // // // // // fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// // // // // // fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

// // // // // // fruitSalad(["banana"]) ➞ "anaban"
// // // // // // Notes
// // // // // // If a fruit has an odd number of letters, make the right side larger than the left.
// // // // // // For example: "apple" will be sliced into "ap" and "ple".
// // // // // // All fruits will be given in lowercase.

// // // // // // const fruitSalad = (arr) => {
// // // // //   // return arr.flatMap((f) => [f.slice(0, f.length / 2), f.slice(f.length / 2)]);
// // // // //   // let array=[]
// // // // //   // const splitParts=arr.map((val,index)=>{
// // // // //   //     if ( val.length%2===0){

// // // // //   //         let firstPart=val.slice(0,val.length/2)
// // // // //   //         let secondPart=val.slice(-val.length/2)
// // // // //   //          array.push(firstPart)
// // // // //   //          array.push(secondPart)
// // // // //   //     }else{
// // // // //   //         let firstPart=val.slice(0,Math.floor(val.length/2))
// // // // //   //         let secondPart=val.slice(-Math.round(val.length/2))
// // // // //   //          array.push(firstPart)
// // // // //   //          array.push(secondPart)

// // // // //   //     }

// // // // //   // })
// // // // //   //       return array.sort().join('')
// // // // // };

// // // // // // console.log(fruitSalad(["raspberries", "mango"]))

// // // // // // ===145===
// // // // // // Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.

// // // // // // Examples
// // // // // // solveForExp(4, 1024) ➞ 5

// // // // // // solveForExp(2, 1024) ➞ 10

// // // // // // solveForExp(9, 3486784401) ➞ 10
// // // // // // Notes
// // // // // // a is raised to the power of what in order to equal b?

// // // // // // let baseLog = (a, b) => {
// // // // // //   return Math.round(Math.log(b) / Math.log(a));
// // // // // // };
// // // // // // console.log(baseLog(2, 8));

// // // // // // ===144===
// // // // // // // Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// // // // // // // Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// // // // // // // Examples
// // // // // // // maskify("4556364607935616") ➞ "############5616"

// // // // // // // maskify("64607935616") ➞ "#######5616"

// // // // // // // maskify("1") ➞ "1"

// // // // // // // maskify("") ➞ ""
// // // // // // // Notes
// // // // // // // The maskify function must accept a string of any length.
// // // // // // // An empty string should return an empty string (fourth example above).

// // // // // // // writing the function and calling it

// // // // // // // check the length of the string and if length is <=4 return num,

// // // // // // // return  slice last four digits from the array and join them

// // // // // // const maskNumber=(string)=>{
// // // // // //   if (string.length<=4){
// // // // // //       return string
// // // // // //   }else {

// // // // // //   let regex=/[\s\S]/g
// // // // // //   let masked=string.replace(regex, '#')
// // // // // //   let digits= string.split('').slice(-4).join('')
// // // // // //   return masked.slice(0,string.length-4)+digits

// // // // // //   }

// // // // // // }

// // // // // // console.log(maskNumber('3242344543534'))

// // // // // // ===143===
// // // // // // A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

// // // // // // Examples
// // // // // // isHarshad(75) ➞ false
// // // // // // // 7 + 5 = 12
// // // // // // // 75 is not exactly divisible by 12

// // // // // // isHarshad(171) ➞ true
// // // // // // // 1 + 7 + 1 = 9
// // // // // // // 9 exactly divides 171

// // // // // // isHarshad(481) ➞ true

// // // // // // isHarshad(89) ➞ false

// // // // // // isHarshad(516) ➞ true

// // // // // // isHarshad(200) ➞ true
// // // // // // Notes
// // // // // // A recursive version of this challenge can be found here.

// // // // // // write a function and call it

// // // // // // number to string and  split the number

// // // // // // sum elements

// // // // // // check if the num is divisible but the sum

// // // // // // if yes => true, no =>false

// // // // // // function isHarshad (num){
// // // // // //   const sum= num.toString().split('').reduce((prev,cur)=>+prev+ +cur)

// // // // // //   return num%sum==0 ? true :false

// // // // // // }

// // // // // // console.log (isHarshad(481))

// // // // // // ===142===
// // // // // // Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// // // // // // If a binary string has an odd number of 1's, the parity bit is a 1.
// // // // // // If a binary string has an even number of 1's, the parity bit is a 0.
// // // // // // The parity bit is appended to the end of the binary string.
// // // // // // Create a function that adds the correct parity bit to a binary string.

// // // // // // Examples
// // // // // // addParityBit("1011011") ➞ "10110111"
// // // // // // // There are five 1's.
// // // // // // // Since five is odd, the parity bit should be a 1.
// // // // // // // Add the parity bit to the end of the string.
// // // // // // // Return the result.

// // // // // // addParityBit("0110000") ➞ "01100000"

// // // // // // addParityBit("0101101") ➞ "01011010"

// // // // // // addParityBit("1111111") ➞ "11111111"
// // // // // // Notes
// // // // // // All inputs will be 7-bits long (so that the parity bit makes it a full byte).

// // // // // // const parity = (string) => {
// // // // // //   let array = string.split("");
// // // // // //   let first = array.filter((x) => x == 1).length;
// // // // // //   if (first % 2 == 0) {
// // // // // //     array.push("0");
// // // // // //   } else array.push("1");

// // // // // //   return array.join("");
// // // // // // };

// // // // // // console.log(parity("0110000"));

// // // // // // ===141===
// // // // // // In this challenge you will receive an input of the form:

// // // // // // [[[[[[[[[[[]]]]]]]]]]]
// // // // // // In other words, an array containing an array containing an array containing... an array containing nothing.

// // // // // // Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

// // // // // // Examples
// // // // // // measureDepth([]) ➞ 1

// // // // // // measureDepth([[]]) ➞ 2

// // // // // // measureDepth([[[]]]) ➞ 3

// // // // // // measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11
// // // // // // Notes
// // // // // // For a bonus challenge, try to find a solution without recursion.
// // // // // // const measureDepth = (arr) => JSON.stringify(arr);

// // // // // // console.log(measureDepth([[[[[[]]]]]]));

// // // // // // ===140===
// // // // // // Return the total number of arrays inside a given array.

// // // // // // Examples
// // // // // // numOfSubbarrays([[1, 2, 3]]) ➞ 1

// // // // // // numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// // // // // // numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// // // // // // numOfSubbarrays([1, 2, 3]) ➞ 0

// // // // // //  create function and call it

// // // // // // calculate the number of arrays

// // // // // // if array.length <1 return 0, else length

// // // // // // const totalNum = (array) => {
// // // // // //   return array.filter((x) => x.length).length;
// // // // // // };
// // // // // // console.log(totalNum([]));
// // // // // // ===139===
// // // // // // Given an input string, reverse the string word by word, the first word will be the last, and so on.

// // // // // // Examples
// // // // // // reverseWords(" the sky is blue") ➞ "blue is sky the"

// // // // // // reverseWords("hello   world!  ") ➞ "world! hello"

// // // // // // reverseWords("a good example") ➞ "example good a"
// // // // // // Notes
// // // // // // A word is defined as a sequence of non-space characters.
// // // // // // The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// // // // // // You need to reduce multiple spaces between two words to a single space in the reversed string.
// // // // // // Try to solve this in linear time.

// // // // // // write a function and call it
// // // // // // split string into array
// // // // // // reverse
// // // // // // // join into the string and return it

// // // // // // const reverse=(string)=>{
// // // // // //     // let split= string.split(' ').filter(val=>val.length>0)
// // // // // //     // let reverse=split.reverse()
// // // // // //     // let join=reverse.join(' ')

// // // // // //     return string.split(' ').filter(val=>val.length>0).reverse().join(' ')

// // // // // //     }

// // // // // //     console.log(reverse('blue   sky here come'))

// // // // // // ===138===
// // // // // // Create a function that takes a word and returns true if the word has two consecutive identical letters.

// // // // // // Examples
// // // // // // doubleLetters("loop") ➞ true

// // // // // // doubleLetters("yummy") ➞ true

// // // // // // doubleLetters("orange") ➞ false

// // // // // // doubleLetters("munchkin") ➞ false

// // // // // //  create function and call it
// // // // // //  regex

// // // // // // function doubleLetters(word){
// // // // // //     let res=word.match(/\b.*([A-Za-z])\1.*\b/g)
// // // // // //     return res ? true :false
// // // // // // }
// // // // // // console.log(doubleLetters('lalaaala'))
// // // // // // ===137===
// // // // // // Create a function that takes a number as an argument and returns a string formatted to separate thousands.

// // // // // // Examples
// // // // // // formatNum(1000) ➞ "1,000"

// // // // // // formatNum(100000) ➞ "100,000"

// // // // // // formatNum(20) ➞ "20"
// // // // // // Notes
// // // // // // You can expect a valid number for all test cases.

// // // // // // function formatNum(num){
// // // // // //     // 2. Convert number to string
// // // // // //     let string= num+''

// // // // // //     if ( num>=1000){
// // // // // //         return num.toLocaleString()
// // // // // //         // let zeros=string.split('').filter(val=>+val===0)
// // // // // //         // let number=string.split('').filter(val=>+val!==0)
// // // // // //         // return number+zeros.join()
// // // // // //     }else {
// // // // // //         return string
// // // // // //     }

// // // // // // }

// // // // // // console.log(formatNum(100000))
// // // // // // ===136===

// // // // // // const twitter = "twitter.com";
// // // // // // const wes = {
// // // // // //   first: "Wes",
// // // // // //   last: "Bos",
// // // // // //   links: {
// // // // // //     social: {
// // // // // //       twitter: "https://twitter.com/wesbos",
// // // // // //       facebook: "https://facebook.com/wesbos.developer",
// // // // // //     },
// // // // // //     web: {
// // // // // //       blog: "https://wesbos.com",
// // // // // //     },
// // // // // //   },
// // // // // // };
// // // // // // const { twitter: tweet, facebook: fb } = wes.links.social;

// // // // // // console.log(wes);

// // // // // // ===135===
// // // // // // Given a two digit number, return true if that number contains one even and one odd digit.

// // // // // // 1create a function that takes two digit number as an argument

// // // // // //2 split the number into two

// // // // // //3 we need to check both numbers either they are even or odd

// // // // // //4 return true if one is even and one is odd, else false

// // // // // // 1
// // // // // // function twoDigit(n) {
// // // // // // return ("" + n)[0] % 2 !== ("" + n)[1] % 2;
// // // // // // let split=num.toString().split('')
// // // // // // // 3
// // // // // // let firstNum=+split[0]
// // // // // // let secondNum=+split[1]
// // // // // // let array=[]
// // // // // // const checkEven=(number)=>{
// // // // // //    return  number%2===0 ?array.push(true) :array.push(false)
// // // // // // }
// // // // // // checkEven(firstNum)
// // // // // // checkEven(secondNum)
// // // // // // return array.includes(false)&& array.includes(true) ? true :false
// // // // // // }
// // // // // // console.log(twoDigit(31));

// // // // // // // ===134===
// // // // // // const func1 = () => {
// // // // // //   return new Promise((resolve) => {
// // // // // //     setTimeout(() => {
// // // // // //       resolve("Func1");
// // // // // //     }, 2000);
// // // // // //   });
// // // // // // };

// // // // // // const basicSync = () => {
// // // // // //   func1().then((res) => {
// // // // // //     console.log("sync result:", res);
// // // // // //   });
// // // // // // };
// // // // // // basicSync();

// // // // // // const basicAsync = async () => {
// // // // // //   try {
// // // // // //     const result = await func1();
// // // // // //     console.log("dasd");
// // // // // //   } catch (error) {
// // // // // //     console.log(error);
// // // // // //   }
// // // // // // };
// // // // // // basicAsync();
// // // // // // func1(false)
// // // // // //   .then((res) => console.log(res))
// // // // // //   .catch((err) => console.log(err))
// // // // // //   .finally(() => console.log("FINALLY"));
// // // // // // // ===133===
// // // // // // const data = [
// // // // // //   { amount: "100", user: "admin", date: "March 6, 2019" },
// // // // // //   { amount: "120", user: "admin", date: "March 6, 2019" },
// // // // // //   { amount: "80", user: "admin", date: "March 7, 2019" },
// // // // // //   { amount: "200", user: "admin", date: "March 7, 2019" },
// // // // // // ];

// // // // // // function getDates(data) {
// // // // // //   return data.map(({ user, amount }) => {
// // // // // //     return `${user} owenes ${amount}`;
// // // // // //   });
// // // // // // }
// // // // // // console.log(getDates(data));
// // // // // // ===133===
// // // // // // Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// // // // // // function flickSwitch(arr) {
// // // // // //   if (arr.length === 0) {
// // // // // //     return arr;
// // // // // //   }

// // // // // //   let array = [];
// // // // // //   let res = true;
// // // // // //   for (let i = 0; i < arr.length; i++) {
// // // // // //     if (arr[i] !== "flick") {
// // // // // //       array.push(res);
// // // // // //     } else {
// // // // // //       res = !res;
// // // // // //       array.push(res);
// // // // // //     }
// // // // // //   }
// // // // // //   return array;
// // // // // // }
// // // // // // console.log(flickSwitch([false, false, "flick", "sheep", "flick"]));
// // // // // // ===132===
// // // // // // Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// // // // // // When positives and positives interact, they remain positive.
// // // // // // When negatives and negatives interact, they remain negative.
// // // // // // But when negatives and positives interact, they become neutral, and are shown as the number 0.
// // // // // // function neutralise(s1, s2) {
// // // // // //   return s1
// // // // // //     .split("")
// // // // // //     .map((val, index) => {
// // // // // //       return val == s2[index] ? val : 0;
// // // // // //     })
// // // // // //     .join("");
// // // // // // }
// // // // // // console.log(neutralise("-+-+-+", "-+-+-+"));

// // // // // // ===131===
// // // // // // Create a function that takes three values:

// // // // // // h hours
// // // // // // m minutes
// // // // // // s seconds
// // // // // // Return the value that's the longest duration.
// // // // // // function longestTime(h, m, s) {
// // // // // //   let arr = [h * 3600, m * 60, s];
// // // // // //   let max = Math.max(...arr);
// // // // // //   return [h, m, s][arr.indexOf(max)];
// // // // // // }
// // // // // // console.log(longestTime(1, 59, 3809));

// // // // // // ===131===
// // // // // // A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

// // // // // // function isHarshad(n) {
// // // // // //   //number => string=> split => number => add them up
// // // // // //   let number = n
// // // // // //     .toString()
// // // // // //     .split("")
// // // // // //     .reduce((prev, cur) => +prev + +cur);
// // // // // //   // check if the n divisible by result
// // // // // //   return n % number === 0 ? true : false;
// // // // // // }

// // // // // // console.log(isHarshad(171));

// // // // // // ===131===
// // // // // // Given a number, n, return a function which adds n to the number passed to it.
// // // // // // function add(n) {
// // // // // //   let num = n;
// // // // // //   return function add(n) {
// // // // // //     return num + n;
// // // // // //   };
// // // // // // }
// // // // // // console.log(add(20)(10));

// // // // // // ===130===
// // // // // // Create a function to check whether the given parameter is an Object or not.

// // // // // // function isObject(value) {
// // // // // //   console.log(typeof value);
// // // // // //   if (value === null) {
// // // // // //     return false;
// // // // // //   }
// // // // // //   return typeof value !== "object" ? false : true;
// // // // // // }
// // // // // // console.log(isObject(null));
// // // // // // ===129===
// // // // // // An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// // // // // // function isIsogram(str) {
// // // // // //   // split string into array

// // // // // //   // check if the value includes in the string more than once

// // // // // //   let filtered = new Set(str.toLowerCase().split(""));
// // // // // //   return filtered.size !== str.length ? false : true;
// // // // // //   // return true  if its a unique
// // // // // //   // return false if there is a match more than one
// // // // // // }

// // // // // // console.log(isIsogram("Algorism"));
// // // // // // ===128===
// // // // // // Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

// // // // // // function evenlyDivisible(a, b, c) {
// // // // // //   let arr = [];
// // // // // //   let i = a;
// // // // // //   while (i <= b) {
// // // // // //     if (i % c == 0) {
// // // // // //       arr.push(i);
// // // // // //     }
// // // // // //     i++;
// // // // // //   }
// // // // // //   return arr.length > 0 ? arr.reduce((prev, cur) => prev + cur) : 0;
// // // // // // }
// // // // // // console.log(evenlyDivisible(1, 10, 2));

// // // // // // ===127===
// // // // // // Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.
// // // // // // function findNaN(number) {
// // // // // //   //  check if the array includes NaN
// // // // // //   return number.findIndex(Number.isNaN);
// // // // // //   // if true, return indexOf NaN
// // // // // //   // else , return -1
// // // // // // }

// // // // // // console.log(findNaN([1, 2, 3]));

// // // // // // ===126===
// // // // // // Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.
// // // // // // function emphasise(str) {
// // // // // //   // split the string

// // // // // //   return str
// // // // // //     .split(" ")
// // // // // //     .map(
// // // // // //       (val) =>
// // // // // //         val.substring(0, 1).toUpperCase() + val.substring(1).toLowerCase()
// // // // // //     )
// // // // // //     .join(" ");
// // // // // //   // check if the first character is a letter
// // // // // //   // first character to uppercase and the rest to lower
// // // // // // }
// // // // // // console.log(emphasise("hello world"));
// // // // // // ===125===
// // // // // // Create a function that takes a number as its argument and returns an array of all its factors.
// // // // // // function factorize(num) {
// // // // // //   //  loop over and get numbers
// // // // // //   let arr = [];
// // // // // //   for (let i = 0; i <= num; i++) {
// // // // // //     if (num % i === 0) {
// // // // // //       arr.push(i);
// // // // // //     }
// // // // // //   }
// // // // // //   return arr;

// // // // // //   //push them into the array
// // // // // // }

// // // // // // console.log(factorize(12));

// // // // // // ===124===
// // // // // // Create a function that takes a number and returns an array with the digits of the number in reverse order.
// // // // // // function reverseArr(num) {
// // // // // //   return num
// // // // // //     .toString()
// // // // // //     .split("")
// // // // // //     .reverse()
// // // // // //     .map((val) => +val);
// // // // // // }

// // // // // // console.log(reverseArr(1485979));
// // // // // // ===123===
// // // // // // Create a function that takes the volume of a cube and returns the length of the cube's main diagonal, rounded to two decimal places.
// // // // // // function cubeDiagonal(volume) {
// // // // // //   return Math.round(Math.cbrt(volume) * Math.sqrt(3) * 100) / 100;
// // // // // // }
// // // // // // console.log(cubeDiagonal(8));

// // // // // // ===122===
// // // // // // Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// // // // // // function evenLast(arr) {
// // // // // //   return arr.length > 0
// // // // // //     ? arr.filter((val, index) => index % 2 === 0).reduce((a, b) => a + b) *
// // // // // //         arr.slice(-1)
// // // // // //     : 0;
// // // // // // }
// // // // // // console.log(evenLast([1, 3, 3, 1, 10]));

// // // // // // ===121===
// // // // // // Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.

// // // // // // class fittesIn {
// // // // // //   constructor(number) {
// // // // // //     this.ones = ~~(number / 1);
// // // // // //     this.threes = ~~(number / 3);
// // // // // //     this.nines = ~~(number / 9);
// // // // // //   }
// // // // // // }
// // // // // // let n = new fittesIn(5);
// // // // // // console.log(n);

// // // // // // ===120===
// // // // // // Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// // // // // // function getMiddle(str) {
// // // // // //   // Determine the length of the word
// // // // // //   let length = str.length;

// // // // // //   if (length % 2 === 0) {
// // // // // //     // if the word length is even => middle two characters
// // // // // //     let range1 = length / 2 - 1;
// // // // // //     let range2 = length / 2 + 1;
// // // // // //     return str.slice(range1, range2);
// // // // // //   } else {
// // // // // //     // if the word length is odd => middle character
// // // // // //     let range1 = length / 2;
// // // // // //     let range2 = length / 2 + 1;
// // // // // //     return str.slice(range1, range2);
// // // // // //   }
// // // // // // }
// // // // // // console.log(getMiddle("test"));

// // // // // // ===119===
// // // // // // Given an array of women and an array of men, either:

// // // // // // Return "sizes don't match" if the two arrays have different sizes.
// // // // // // If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// // // // // // function zipIt(women, men) {
// // // // // //   //  checking the sizes of the array

// // // // // //   if (women.length !== men.length) {
// // // // // //     return "sizes don't match";
// // // // // //   }
// // // // // //   return women.map((val, index) => [val, men[index]]);
// // // // // //   // paired two arrays, so [1el 1arr ; 1el 2arr]
// // // // // // }
// // // // // // console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));

// // // // // // ===118===
// // // // // // Given an array of numbers, write a function that returns an array that...

// // // // // // Has all duplicate elements removed.
// // // // // // // Is sorted from least to greatest value.

// // // // // // function uniqueSort(arr) {
// // // // // //   return Array.from(new Set(arr.sort((a, b) => a - b)));
// // // // // // }
// // // // // // console.log(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]));

// // // // // // ===117===
// // // // // // Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.
// // // // // // function isOrthogonal(arr1, arr2) {
// // // // // //   // a · b = ax · bx + ay · by = 0
// // // // // //   //   let res = [];
// // // // // //   //   for (let i = 0; i < arr1.length; i++) {
// // // // // //   //     res.push(arr1[i] * arr2[i]);
// // // // // //   //   }
// // // // // //   //   return res.reduce((a, b) => a + b) === 0;

// // // // // //   return !arr1.reduce((t, c, i) => t + c * arr2[i], 0);
// // // // // // }

// // // // // // console.log(isOrthogonal([-13, -26], [-8, 4]));
// // // // // // ===116===
// // // // // // Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
// // // // // // function sumTwoSmallestNums(arr) {

// // // // // //   return arr
// // // // // //     .filter((val) => val > 0)
// // // // // //     .sort((a, b) => a - b)
// // // // // //     .slice(0, 2)
// // // // // //     .reduce((prev, cur) => prev + cur);
// // // // // // }
// // // // // // console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
// // // // // // // ===115===

// // // // // // A man has n number of apples. If he eats a percentage p of the apples (if apples are available), his children will share the remainder of the apples. Create a function to determine the number of whole apples his children got. If his children did not get any apples, return "The children didn't get any apples".

// // // // // // function getNumberOfApples(n, p) {
// // // // // //   // determine the number of whole apples
// // // // // //   let wholeApples = Math.floor(n - (n * parseInt(p)) / 100);
// // // // // //   return wholeApples > 0 ? wholeApples : "The children didn't get any apples";
// // // // // //   // if >0 return number of apples , else return "The children didn't get any apples"
// // // // // // }
// // // // // // console.log(getNumberOfApples(40, "30%"));

// // // // // // ===114===
// // // // // // Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

// // // // // // Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!

// // // // // // function DECIMATOR(str) {
// // // // // //   // Calculate the number of characters
// // // // // //   // number of characters divide but 1/10 and round up to bigger number
// // // // // //   if (str.length > 0) {
// // // // // //     let numberCharacters = Math.ceil(str.split("").length / 10);
// // // // // //     let a = str.slice(0, -numberCharacters);
// // // // // //     return a;
// // // // // //   } else {
// // // // // //     return "";
// // // // // //   }
// // // // // //   // remove the number of characters from the end of the string

// // // // // //   // if the string is empty return empty string

// // // // // //   // else return strng without last characters
// // // // // // }
// // // // // // console.log(DECIMATOR("1234567890"));

// // // // // // ===113===
// // // // // // You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
// // // // // // function calculateLosses(obj) {
// // // // // //   // get all the values from the object
// // // // // //   //sum them up
// // // // // //   let values = Object.values(obj);
// // // // // //   return values.length > 0 ? values.reduce((a, b) => a + b) : "Lucky you";
// // // // // // }

// // // // // // console.log(
// // // // // //   calculateLosses({
// // // // // //     tv: 30,
// // // // // //     skate: 20,
// // // // // //     stereo: 50,
// // // // // //   })
// // // // // // );
// // // // // // ===112===
// // // // // // Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// // // // // // If a binary string has an odd number of 1's, the parity bit is a 1.
// // // // // // If a binary string has an even number of 1's, the parity bit is a 0.
// // // // // // The parity bit is appended to the end of the binary string.
// // // // // // Create a function that validates whether a binary string is valid, using parity bits.
// // // // // // function validateBinary(b) {
// // // // // //   // slice the last number from the string
// // // // // //   const array = b.split("");

// // // // // //   const lastNumber = array.splice(-1);

// // // // // //   //Check if lastNumber is =0
// // // // // //   if (lastNumber == 0) {
// // // // // //     //Count number 1 and if even return true and else false
// // // // // //     const res = array.filter((val) => val == 1).length;
// // // // // //     return res % 2 == 0 ? true : false;
// // // // // //   }
// // // // // //   //else if lastNumber =1
// // // // // //   if (lastNumber == 1) {
// // // // // //     //Cout  number 1 and if odd return true and else false
// // // // // //     const res = array.filter((val) => val == 1).length;
// // // // // //     return res % 2 == 0 ? false : true;
// // // // // //   }

// // // // // //   //Cout  number 1 and if odd return true and else false
// // // // // // }

// // // // // // console.log(validateBinary("00101100"));

// // // // // // ===111===
// // // // // // Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// // // // // // In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

// // // // // // function hackerSpeak(str) {
// // // // // //   const obj = { a: 4, e: 3, i: 1, o: " 0", s: 5 };
// // // // // //   for (let i = 0; i < str.length; i++) {
// // // // // //     if (obj[str[i]]) {
// // // // // //       str = str.replace(str[i], obj[str[i]]);
// // // // // //     }
// // // // // //   }
// // // // // //   return str;
// // // // // // }

// // // // // // function hackerSpeak(str) {
// // // // // //   var chars = { a: "4", e: "3", i: "1", o: "0", s: "5" };
// // // // // //   str = str.replace(/[aeios]/g, (letter) => chars[letter]);

// // // // // //   return str;
// // // // // // }
// // // // // // console.log(hackerSpeak("become a coder"));

// // // // // // ===110===
// // // // // // Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.

// // // // // // function primeInRange(n1, n2) {
// // // // // //   function isPrime(n) {
// // // // // //     for (let i = 2; i < n; i++) {
// // // // // //       if (!(n % i)) return false;
// // // // // //     }
// // // // // //     return n > 1;
// // // // // //   }

// // // // // //   for (let j = n1; j <= n2; j++) {
// // // // // //     if (isPrime(j)) return true;
// // // // // //   }
// // // // // //   return false;
// // // // // // }

// // // // // // console.log(primeInRange(10, 12));

// // // // // // ===109===
// // // // // // Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

// // // // // // function counterpartCharCode(char) {
// // // // // //   // let letter = /^p{L}/.test(char);
// // // // // //   // if (!letter) {
// // // // // //   //   return char.charCodeAt(0);
// // // // // //   // }
// // // // // //   if (char == char.toUpperCase()) {
// // // // // //     return char.toLowerCase().charCodeAt(0);
// // // // // //   } else {
// // // // // //     return char.toUpperCase().charCodeAt(0);
// // // // // //   }
// // // // // // }

// // // // // // console.log(counterpartCharCode("a"));

// // // // // // ===108===
// // // // // // You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

// // // // // // For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

// // // // // // function bbqSkewers(grill) {
// // // // // //   let non = grill.filter((x) => x.includes("x")).length;
// // // // // //   return [grill.length - non, non];
// // // // // // }

// // // // // // console.log(
// // // // // //   bbqSkewers([
// // // // // //     "--oooo-ooo--",
// // // // // //     "--xx--x--xx--",
// // // // // //     "--o---o--oo--",
// // // // // //     "--xx--x--ox--",
// // // // // //     "--xx--x--ox--",
// // // // // //   ])
// // // // // // );
// // // // // // ===107===
// // // // // // Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// // // // // // function removeABC(str) {
// // // // // //   if (str.match(/[a,b,c]/g)) {
// // // // // //     return str.replace(/[a,b,c]/g, "");
// // // // // //   } else {
// // // // // //     return null;
// // // // // //   }
// // // // // // }

// // // // // // console.log(removeABC("This is awesome"));

// // // // // // ===106===
// // // // // // Write a function that divides an array into chunks of size n, where n is the length of each chunk.

// // // // // // function chunkify(arr, size) {
// // // // // //   let result = [];
// // // // // //   if (size === 1) {
// // // // // //     return arr.map((val) => [val]);
// // // // // //   }
// // // // // //   let arrayCopy = arr;
// // // // // //   for (let i = 0; i < arr.length; i++) {
// // // // // //     result.push(arrayCopy.splice(0, size));
// // // // // //   }
// // // // // //   return arrayCopy.length > 0 ? [...result, arrayCopy] : [...result];
// // // // // // }
// // // // // // console.log(chunkify([2, 3, 4, 5, 6, 7], 1));
// // // // // // ===105===
// // // // // // Write a function that reverses all the words in a sentence that start with a particular letter.
// // // // // // function specialReverse(s, c) {
// // // // // //   return s
// // // // // //     .split(" ")
// // // // // //     .map((val) => (val.startsWith(c) ? val.split("").reverse().join("") : val))
// // // // // //     .join(" ");
// // // // // // }

// // // // // // console.log(specialReverse("word searches are super fun", "s"));

// // // // // // ===104===
// // // // // // Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
// // // // // // function capMe(arr) {
// // // // // //   return arr.map(
// // // // // //     (val) => val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase()
// // // // // //   );
// // // // // // }
// // // // // // console.log(capMe(["mavis", "senaida", "letty"]));
// // // // // // ===103===
// // // // // // Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.
// // // // // // function equal(a, b, c) {
// // // // // //   const size = new Set([a, b, c]).size;
// // // // // //   return size === 3 ? 0 : 4 - size;
// // // // // // }
// // // // // // console.log(equal(7, 3, 7));
// // // // // // ===102===
// // // // // // Create a function that returns true if an asterisk * is inside a box.
// // // // // // function inBox(arr) {
// // // // // //   return arr.map((val) => val.includes("*") === true).includes(true);
// // // // // // }
// // // // // // console.log(inBox(["###", "# #", "###"]));

// // // // // // ===101===
// // // // // // Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. The desired output should be given in kg and rounded to two decimal places.

// // // // // // How to solve:

// // // // // // Calculate the volume of the cylinder.
// // // // // // Convert cm³ into dm³.
// // // // // // 1dm³ = 1L, 1L is 1Kg.

// // // // // // function weight(r, h) {
// // // // // //   return +(3.14 * r ** 2 * h * 0.001).toFixed(2);
// // // // // // }
// // // // // // console.log(weight(4, 10));

// // // // // // ===100===
// // // // // // Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// // // // // // Return a boolean value (true or false).
// // // // // // Return true if the amount of x's and o's are the same.
// // // // // // Return false if they aren't the same amount.
// // // // // // The string can contain any character.
// // // // // // When "x" and "o" are not in the string, return true.

// // // // // // function XO(str) {
// // // // // //   let arr = str.toLowerCase().split("");
// // // // // //   let o = arr.filter((x) => x === "o").length;
// // // // // //   let x = arr.filter((x) => x === "x").length;
// // // // // //   return x === o;
// // // // // // }
// // // // // // console.log(XO("ooxx"));

// // // // // // ===99===
// // // // // // Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.
// // // // // // function isTriplet(n1, n2, n3) {
// // // // // //   let array = [n1, n2, n3].sort((a, b) => a - b);
// // // // // //   // console.log(Math.pow(array[0], 2));
// // // // // //   return Math.pow(array[0], 2) + Math.pow(array[1], 2) === Math.pow(array[2], 2)
// // // // // //     ? true
// // // // // //     : false;
// // // // // // }
// // // // // // console.log(isTriplet(1, 2, 3));

// // // // // // ===98===
// // // // // // Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
// // // // // // function makeTitle(str) {
// // // // // //   return str
// // // // // //     .split(" ")
// // // // // //     .map((val) => val.slice(0, 1).toUpperCase() + val.slice(1))
// // // // // //     .join(" ");
// // // // // // }
// // // // // // console.log(makeTitle("I am a title"));

// // // // // // ===97===
// // // // // // Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.
// // // // // // function countLoneOnes(n) {
// // // // // //   return ((n + "").match(/(?<!1)1(?!1)/g) || []).length;
// // // // // // }
// // // // // // console.log(countLoneOnes(101));

// // // // // // ===96===
// // // // // // Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// // // // // // function removeDups(arr) {
// // // // // //   return Array.from(new Set(arr));
// // // // // // }
// // // // // // console.log(removeDups(["John", "Taylor", "John"]));
// // // // // // ===95===
// // // // // // Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
// // // // // // function numbersSum(arr) {
// // // // // //   let arr1 = [];
// // // // // //   arr.forEach((val) => {
// // // // // //     if (typeof val === "number") {
// // // // // //       arr1.push(val);
// // // // // //     }
// // // // // //   });

// // // // // //   return arr1.length === 0 ? 0 : arr1.reduce((a, b) => a + b);
// // // // // // }
// // // // // // console.log(numbersSum([1, 2, "13", "4", "645"]));
// // // // // // ===94===
// // // // // // Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// // // // // // function missingNum(arr) {
// // // // // //   return 55 - arr.reduce((prev, cur) => prev + cur);
// // // // // // }

// // // // // // console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// // // // // // ===93===
// // // // // // Create a function that returns the mean of all digits.
// // // // // // function mean(num) {
// // // // // //   let arr = num.toString();
// // // // // //   let sum = arr
// // // // // //     .split("")
// // // // // //     .map((val) => +val)
// // // // // //     .reduce((prev, cur) => prev + cur);
// // // // // //   console.log(arr);
// // // // // //   return sum / arr.length;
// // // // // // }
// // // // // // console.log(mean(666));

// // // // // // ===92===
// // // // // // To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
// // // // // // function progressDays(runs) {
// // // // // //   let progress = [];
// // // // // //   for (let i = 0; i < runs.length; i++) {
// // // // // //     if (runs[i] < runs[i + 1]) {
// // // // // //       progress.push("yes");
// // // // // //     }
// // // // // //   }
// // // // // //   return progress.length;
// // // // // // }
// // // // // // console.log(progressDays([10, 11, 12, 9, 10]));
// // // // // // Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
// // // // // // ===91===
// // // // // // A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// // // // // // function factorChain(arr) {
// // // // // //   return arr.every((val) => Number.isInteger(+arr.pop(-1) / val));
// // // // // // }

// // // // // // console.log(factorChain([1, 2, 4, 8, 16, 32]));
// // // // // // ===90===
// // // // // // Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
// // // // // // function trace(arr) {
// // // // // //   if (arr.length === 1) {
// // // // // //     return +arr[0];
// // // // // //   }

// // // // // //   return arr.map((val, index) => val[index]).reduce((prev, cur) => prev + cur);
// // // // // // }

// // // // // // console.log(
// // // // // //   trace([
// // // // // //     [1, 2, 3],
// // // // // //     [4, 5, 6],
// // // // // //     [7, 8, 9],
// // // // // //   ])
// // // // // // );
// // // // // // ===89===
// // // // // // Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.
// // // // // // function factorGroup(num) {
// // // // // //   return Number.isInteger(Math.sqrt(num)) ? "odd" : "even";
// // // // // // }

// // // // // // console.log(factorGroup(36));
// // // // // // ===88===
// // // // // // Calculate the distance between two points in 2D
// // // // // // function lineLength([x1, y1], [x2, y2]) {
// // // // // //   return +Math.hypot(x2 - x1, y2 - y1).toFixed(2);
// // // // // // }
// // // // // // console.log(lineLength([15, 7], [22, 11]));

// // // // // // ===87===
// // // // // // You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation.

// // // // // // function assignPersonToJob(names, jobs) {
// // // // // //   let obj = {};
// // // // // //   names.forEach((key, i) => (obj[key] = jobs[i]));
// // // // // //   return obj;
// // // // // // }
// // // // // // names1 = ["Annie", "Steven", "Lisa", "Osman"];
// // // // // // jobs1 = ["Teacher", "Engineer", "Doctor", "Cashier"];

// // // // // // console.log(assignPersonToJob(names1, jobs1));
// // // // // // // ===86===
// // // // // // A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// // // // // // function countBoomerangs(arr) {
// // // // // //   let count = 0;
// // // // // //   for (let i = 0; i < arr.length; i++) {
// // // // // //     if (arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
// // // // // //       count++;
// // // // // //     }
// // // // // //   }
// // // // // //   return count;
// // // // // // }

// // // // // // console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
// // // // // // ===85===
// // // // // // function towerHanoi(discs) {
// // // // // //   return Math.pow(2, discs) - 1;
// // // // // // }

// // // // // // console.log(towerHanoi(3));
// // // // // // ===84===
// // // // // // Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// // // // // // function sevenBoom(arr) {
// // // // // //   return arr.toString().includes("7") ? "Boom!" : "there is no 7 in the array";
// // // // // // }

// // // // // // console.log(sevenBoom([2, 6, 8, 97, 3]));
// // // // // // ===83===
// // // // // // Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// // // // // // Return true if the marathon is 25 miles long, otherwise, return false.
// // // // // // function marathonDistance(d) {
// // // // // //   if (d.length === 0) {
// // // // // //     return false;
// // // // // //   }
// // // // // //   return d.reduce((a, b) => Math.abs(a) + Math.abs(b)) === 25 ? true : false;
// // // // // // }
// // // // // // console.log(marathonDistance([9, 7, 6, 5]));
// // // // // // ===82===
// // // // // // Create a function that returns true if all parameters are truthy, and false otherwise.
// // // // // // function allTruthy(...args) {
// // // // // //     return args.every(arg => arg)
// // // // // // }

// // // // // // ===81===
// // // // // // Mubashir needs your help to count a specific digit in an array.

// // // // // // You have to create a function that takes two integers n and d and makes an array of squares of all numbers from 0...<= n and returns the count of the digits d in the array.
// // // // // // function countDigits(n, d) {
// // // // // //   let arr = [];
// // // // // //   let regex = /[d]/g;
// // // // // //   for (let i = 0; i <= n; i++) {
// // // // // //     arr.push(i ** 2);
// // // // // //   }
// // // // // //   console.log(arr);
// // // // // //   let sum = arr
// // // // // //     .toString()
// // // // // //     .split("")
// // // // // //     .filter((val) => val == d);

// // // // // //   return sum.length;
// // // // // // }

// // // // // // console.log(countDigits(25, 2));
// // // // // // ===80===
// // // // // // Given a string of numbers separated by a comma and space, return the product of the numbers.

// // // // // // function multiplyNums(nums) {
// // // // // //   return nums
// // // // // //     .split(",")
// // // // // //     .map(Number)
// // // // // //     .reduce((a, b) => a * b);
// // // // // // }

// // // // // // console.log(multiplyNums("54, 75, 453, 0"));
// // // // // // ===79===

// // // // // // function countOnes(i) {
// // // // // //   return i
// // // // // //     .toString(2)
// // // // // //     .split("")
// // // // // //     .filter((val) => val == 1).length;
// // // // // // }
// // // // // // console.log(countOnes(100));
// // // // // // Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.
// // // // // // ===78===
// // // // // // You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

// // // // // // Here are a list of the characters classes in JavaScript:

// // // // // // const REGEXP = /\t /g;
// // // // // // // ===77===
// // // // // // Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// // // // // // For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
// // // // // // let sum;
// // // // // // function totalVolume(...boxes) {
// // // // // //   return boxes.reduce(
// // // // // //     (prev, cur) => prev + cur.reduce((prev, cur) => prev * cur, 1),
// // // // // //     0
// // // // // //   );
// // // // // // }
// // // // // // console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));

// // // // // // ===76===
// // // // // // Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// // // // // // function reverseAndNot(i) {
// // // // // //   return +(i.toString().split("").reverse().join("") + i.toString());
// // // // // // }
// // // // // // console.log(reverseAndNot(123));
// // // // // // ===75===
// // // // // // Sum of Resistance in Parallel Circuits
// // // // // // function parallelResistance(arr) {
// // // // // //   return +(1 / arr.reduce((acc, curr) => acc + 1 / curr, 0)).toFixed(1);
// // // // // // }

// // // // // // console.log(parallelResistance([10, 20, 10]));

// // // // // // ===74===
// // // // // // Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// // // // // // function matchLastItem(arr) {
// // // // // //   let lastElement = arr.slice(-1);
// // // // // //   let arrayWithoutLastPiece = arr.filter((val) => val != lastElement);
// // // // // //   const sum = arrayWithoutLastPiece.join("");
// // // // // //   return sum == lastElement ? true : false;
// // // // // // }

// // // // // // console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
// // // // // // ===73===
// // // // // // Working with multidimensional arrays

// // // // // // function isAdjacent(matrix, node1, node2) {
// // // // // //   for (let i = 0; i < matrix.length; i++) {
// // // // // //     // get the size of the inner array
// // // // // //     let innerArrayLength = matrix[i].length;
// // // // // //     // loop the inner array
// // // // // //     for (let j = 0; j < innerArrayLength; j++) {
// // // // // //       return matrix[node1][node2] === 1 ? true : false;
// // // // // //     }
// // // // // //   }
// // // // // // }
// // // // // // const matrix1 = [
// // // // // //   [0, 1, 0, 0],
// // // // // //   [1, 0, 1, 1],
// // // // // //   [0, 1, 0, 1],
// // // // // //   [0, 1, 1, 0],
// // // // // // ];

// // // // // // console.log(isAdjacent(matrix1, 0, 2));
// // // // // // ===72===

// // // // // // function recordTemps(records, currentWeek) {
// // // // // //   for (let i = 0; i < currentWeek.length; i++) {
// // // // // //     if (records[i][0] > currentWeek[i][0]) {
// // // // // //       records[i][0] = currentWeek[i][0];
// // // // // //     } else if (records[i][1] < currentWeek[i][1])
// // // // // //       records[i][1] = currentWeek[i][1];
// // // // // //   }
// // // // // //   return records;
// // // // // // }

// // // // // // console.log(
// // // // // //   recordTemps(
// // // // // //     [
// // // // // //       [34, 82],
// // // // // //       [24, 82],
// // // // // //       [20, 89],
// // // // // //       [5, 88],
// // // // // //       [9, 88],
// // // // // //       [26, 89],
// // // // // //       [27, 83],
// // // // // //     ],
// // // // // //     [
// // // // // //       [44, 72],
// // // // // //       [19, 70],
// // // // // //       [40, 69],
// // // // // //       [39, 68],
// // // // // //       [33, 64],
// // // // // //       [36, 70],
// // // // // //       [38, 69],
// // // // // //     ]
// // // // // //   )
// // // // // // );
// // // // // // ===71===
// // // // // // Fix the greetingMaker() function so that it works with the greeting() function.
// // // // // // The greeting() function has already been created (check the Tests tab).

// // // // // // function greetingMaker(x) {
// // // // // //   return function closure(name) {
// // // // // //     return x + ", " + name;
// // // // // //   };
// // // // // // }
// // // // // // const greeting = greetingMaker("Hello");

// // // // // // console.log(greeting("James"));
// // // // // // // ===70===
// // // // // // Mubashir needs your help to find out Increasing and Decreasing numbers for a given range.

// // // // // // Create a function that takes a number n and returns total occurrences of all the increasing or decreasing numbers in range 10^n.
// // // // // // function incDec(n) {
// // // // // //   let b = 1;
// // // // // //   for (let i = 1; i <= n; ++i) b = (b * (n + 10 - i)) / i;
// // // // // //   return Math.round((b * n) / 10 + 2 * b - 10 * n - 1);
// // // // // // }

// // // // // // console.log(incDec(3));
// // // // // // var startTime = performance.now();

// // // // // // function natural(n) {
// // // // // //   return (n * (n + 1)) / 2;
// // // // // // }
// // // // // // natural(1000000000000); // <---- measured code goes between startTime and endTime

// // // // // // var endTime = performance.now();

// // // // // // console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

// // // // // // ===69===
// // // // // // Create a function that takes an integer n and reverses it.
// // // // // // function rev(n) {
// // // // // //   return Math.abs(n).toString().split("").reverse().join("");
// // // // // // }
// // // // // // console.log(rev(215));

// // // // // // ===68===
// // // // // // Create the function that takes an array with objects and returns the sum of people's budgets.
// // // // // // function getBudgets(arr) {
// // // // // //   return arr.map((person) => person.budget).reduce((prev, acc) => prev + acc);
// // // // // // }

// // // // // // console.log(
// // // // // //   getBudgets([
// // // // // //     { name: "John", age: 21, budget: 23000 },
// // // // // //     { name: "Steve", age: 32, budget: 40000 },
// // // // // //     { name: "Martin", age: 16, budget: 2700 },
// // // // // //   ])
// // // // // // );
// // // // // // ===67===
// // // // // // Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.
// // // // // // function numLayers(n) {
// // // // // //   let thickness = 0.0005;
// // // // // //   return `${(thickness * 2 ** n)}m`;
// // // // // //   //  n === 0 ? thickness;
// // // // // // }
// // // // // // console.log(numLayers(5));
// // // // // // ===66===
// // // // // // Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// // // // // // "Asc" returns a sorted array in ascending order.
// // // // // // "Des" returns a sorted array in descending order.
// // // // // // "None" returns an array without any modification.

// // // // // // function ascDesNone(arr, str) {
// // // // // //   if (str === "None") {
// // // // // //     return arr;
// // // // // //   }
// // // // // //   return str === "Asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
// // // // // // }
// // // // // // console.log(ascDesNone([4, 3, 2, 1], "Asc"));

// // // // // // ===65===
// // // // // // The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
// // // // // // function clone(arr) {
// // // // // //   let newArr = [];
// // // // // //   arr.map((val) => console.log(newArr.push(val)));
// // // // // //   return [...arr, newArr];
// // // // // // }

// // // // // // console.log(clone([1, 2, 3]));
// // // // // // // ===64===
// // // // // // An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
// // // // // // function isSpecialArray(arr) {
// // // // // //   for (let i = 0; i < arr.length; i++)
// // // // // //     if (i % 2 !== arr[i] % 2) {
// // // // // //       return false;
// // // // // //     }
// // // // // //   return true;
// // // // // // }
// // // // // // console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
// // // // // // // ===63===
// // // // // // Create a function that calculates the missing value of 3 inputs using Ohm's law. The inputs are v, r or i (aka: voltage, resistance and current).
// // // // // // function ohmsLaw(v, r, i) {
// // // // // //   let result;
// // // // // //   if (!v && r && i) {
// // // // // //     result = r * i;
// // // // // //   } else if (!r && v && i) {
// // // // // //     result = v / i;
// // // // // //   } else if (!i && v && r) {
// // // // // //     result = v / r;
// // // // // //   } else {
// // // // // //     return "Invalid";
// // // // // //   }
// // // // // //   return +result.toFixed(2);
// // // // // // }
// // // // // // console.log(ohmsLaw(12, "", ""));

// // // // // // ===62===
// // // // // // Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
// // // // // // function sortIt(arr) {
// // // // // //   return arr.flat(0).sort((a, b) => a - b);
// // // // // // }
// // // // // // console.log(sortIt([[4], [1], [3]]));
// // // // // // // ===62===
// // // // // // Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// // // // // // function jazzify(arr) {
// // // // // //   return arr.map((val) => (val.includes("7") ? val : val.concat("7")));
// // // // // // }
// // // // // // console.log(jazzify(["G", "F", "C"]));

// // // // // // ===61===
// // // // // // A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.

// // // // // // function paths(n) {
// // // // // //   if (n < 0) {
// // // // // //     return -1;
// // // // // //   } else if (n == 0) {
// // // // // //     return 1;
// // // // // //   } else {
// // // // // //     return n * paths(n - 1);
// // // // // //   }
// // // // // // }

// // // // // // console.log(paths(2));

// // // // // // ===60===
// // // // // // Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.

// // // // // // function coneVolume(h, r) {
// // // // // //   return +((Math.PI * r ** 2 * h) / 3).toFixed(2);
// // // // // // }
// // // // // // console.log(coneVolume(3, 2));
// // // // // // ===59===
// // // // // // Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
// // // // // // function indexMultiplier(arr) {
// // // // // //   return arr.length === 0 ? 0 : arr.reduce((acc, cv, i) => acc + cv * i, 0);
// // // // // // }

// // // // // // console.log(indexMultiplier([9, 3, 7, -7]));
// // // // // // ===58===
// // // // // // function flatten(arr) {
// // // // // //   arr2 = [];
// // // // // //   for (let i = 0; i < arr.length; i++) {
// // // // // //     arr2.push(...arr[i]);
// // // // // //   }
// // // // // //   return arr2;
// // // // // // }
// // // // // // console.log(
// // // // // //   flatten([
// // // // // //     [1, 2],
// // // // // //     [3, 4],
// // // // // //   ])
// // // // // // );
// // // // // // ===57===
// // // // // // Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
// // // // // // function boxSeq(step) {}
// // // // // // const boxSeq = (step) => (step % 2 === 0 ? step : step + 2);
// // // // // // console.log(boxSeq(5));
// // // // // // ===56===
// // // // // // Create a function that squares every digit of a number.

// // // // // // function squareDigits(n) {
// // // // // //   let string = n
// // // // // //     .toString()
// // // // // //     .split("")
// // // // // //     .map((num) => eval(num ** 2))
// // // // // //     .join("");
// // // // // //   return +string;
// // // // // // }

// // // // // // console.log(squareDigits(9119));

// // // // // // ===55===
// // // // // // You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

// // // // // // If you can't find Nemo, return "I can't find Nemo :(".

// // // // // // function findNemo(sentence) {
// // // // // //   let index = sentence.split(" ").findIndex((word) => word === "Nemo") + 1;
// // // // // //   return index >= 0 ? `I found Nemo at ${index}!` : "I can't find Nemo :(";
// // // // // // }

// // // // // // console.log(findNemo("I am Ne mo Nemo !"));

// // // // // // ===54===
// // // // // // Create a function that moves all capital letters to the front of a word.
// // // // // // function capToFront(s) {
// // // // // //   let arr = s.split("");
// // // // // //   return arr
// // // // // //     .filter((val) => val === val.toUpperCase())
// // // // // //     .concat(arr.filter((val) => val === val.toLowerCase()))
// // // // // //     .join("");
// // // // // // }

// // // // // // console.log(capToFront("hApPy"));
// // // // // // ===53===
// // // // // // Create a function that takes an array of numbers and returns the second largest number.
// // // // // // function secondLargest(arr) {
// // // // // //   let sort = arr.sort((a, b) => b - a);
// // // // // //   return sort[1];
// // // // // // }

// // // // // // console.log(secondLargest([10, 40, 30, 20, 50]));
// // // // // // ===52===
// // // // // // Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// // // // // // function testJackpot(result) {
// // // // // //   let res = new Set(result);
// // // // // //   return res.size > 1 ? false : true;
// // // // // // }

// // // // // // console.log(testJackpot(["@", "@", "@", "2"]));

// // // // // // ===51===
// // // // // // Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.
// // // // // // function dis(price, discount) {
// // // // // //   return parseFloat((price * ((100 - discount) / 100)).toFixed(2));
// // // // // // }

// // // // // // console.log(dis(100, 75));
// // // // // // // ===50===
// // // // // // // Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// // // // // // // Perimeter of a square: 4 * side.
// // // // // // // Perimeter of a circle: 6.28 * radius.

// // // // // // function perimeter(l, num) {
// // // // // //   let s = 4 * num;
// // // // // //   let c = 6.28 * num;
// // // // // //   return eval(l);
// // // // // // }

// // // // // // console.log(perimeter("s", 1));
// // // // // // ===49===
// // // // // // Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
// // // // // // function removeLeadingTrailing(n) {
// // // // // //   return `${parseFloat(n)}`;
// // // // // // }
// // // // // // console.log(removeLeadingTrailing("230.000"));

// // // // // // ===48===
// // // // // // According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// // // // // // Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// // // // // // function compact(arr) {
// // // // // //   return arr.filter((el) => el);
// // // // // // }
// // // // // // console.log(compact([1, 0, false, null, undefined, "banana"]));
// // // // // // ===47===
// // // // // // Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

// // // // // // function calculator(num1, operator, num2) {
// // // // // //   let res = eval(`${num1}${operator}${num2}`);
// // // // // //   return num2 === 0 ? "Can't divide by 0!" : "${res}";
// // // // // // }

// // // // // // console.log(calculator("2", "/", "1"));
// // // // // // ===46===
// // // // // // Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
// // // // // // The total world's landmass is 148,940,000 [Km^2]
// // // // // // Round the result to two decimal places.

// // // // // // function areaOfCountry(name, area) {
// // // // // //   let totalLandmass = 148940000;
// // // // // //   return `${name}% is ${((area * 100) / totalLandmass).toFixed(
// // // // // //     2
// // // // // //   )} of the total world's landmass`;
// // // // // // }
// // // // // // console.log(areaOfCountry("USA", 9372610));
// // // // // // ("USA is 6.29% of the total world's landmass");

// // // // // // ===45===
// // // // // // Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// // // // // // function addName(obj, name, value) {
// // // // // //   let obje = { ...obj };
// // // // // //   obje[name] = value;
// // // // // //   return obje;
// // // // // // }

// // // // // // console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
// // // // // // ===44===
// // // // // // Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// // // // // // const add_suffix = (suffix) => (prefix) => prefix + suffix;
// // // // // // console.log(add_ly("hopeless"));

// // // // // // ===43===
// // // // // // Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

// // // // // // function intWithinBounds(n, lower, upper) {
// // // // // //   return n >= lower && n < upper && Number.isInteger(n) ? true : false;
// // // // // // }

// // // // // // console.log(intWithinBounds(6, 1, 6));
// // // // // // ===42===

// // // // // // Create a function that returns true if two arrays contain identical values, and false otherwise.

// // // // // // function checkEquals(arr1, arr2) {
// // // // // //   if (arr1.toString() == arr2.toString()) {
// // // // // //     return true;
// // // // // //   } else {
// // // // // //     return false;
// // // // // //   }
// // // // // // }

// // // // // // ===41===
// // // // // // Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// // // // // // To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// // // // // // function changeEnough(change, amountDue) {
// // // // // //   return 0.25 * change[0] +
// // // // // //     0.1 * change[1] +
// // // // // //     0.05 * change[2] +
// // // // // //     0.01 * change[3] >=
// // // // // //     amountDue
// // // // // //     ? true
// // // // // //     : false;
// // // // // // }
// // // // // // console.log(changeEnough([2, 100, 0, 0], 14.11));
// // // // // // ===40===
// // // // // // Create a function that counts the integer's number of digits.
// // // // // // function count(n) {
// // // // // // 	return n<0 ?[...(Math.abs(n) + "")].map((n) => +n).length :[...(n + "")].map((n) => +n).length
// // // // // // }
// // // // // // ===40===
// // // // // // Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

// // // // // // function derivative(b, m) {
// // // // // //   return Math.pow(m, b - 1) * b;
// // // // // // }

// // // // // // console.log(derivative(3, -2));
// // // // // // ===39===
// // // // // // Write a function that converts an object into an array of keys and values.
// // // // // // function objectToArray(obj) {
// // // // // //   return Object.entries(obj);
// // // // // // }

// // // // // // console.log(
// // // // // //   objectToArray({
// // // // // //     D: 1,
// // // // // //     B: 2,
// // // // // //     C: 3,
// // // // // //   })
// // // // // // );
// // // // // // ===38===

// // // // // // function isRepdigit(num) {
// // // // // //   if (num < 0) {
// // // // // //     return false;
// // // // // //   } else {
// // // // // //     let set = new Set(num.toString().split(""));

// // // // // //     return set.size > 1 ? false : true;
// // // // // //   }
// // // // // // }

// // // // // // console.log(isRepdigit(622));
// // // // // // ===37===
// // // // // // Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// // // // // // function indexShuffle(str) {
// // // // // //   const even = [...str].filter((char, i) => i % 2 === 0);
// // // // // //   const odd = [...str].filter((char, i) => i % 2);

// // // // // //   return [...even, ...odd].join("");
// // // // // // }

// // // // // // console.log(indexShuffle("it was a beautiful day"));
// // // // // // // ===36===
// // // // // // Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// // // // // // function arrayOfMultiples(num, length) {
// // // // // //   return Array.from({ length }, (_, i) => num * (i + 1));
// // // // // // }

// // // // // // console.log(arrayOfMultiples(7, 5));

// // // // // // ===35===
// // // // // // function triangle(n) {
// // // // // //   let res = (n * (n + 1)) / 2;
// // // // // //   return res;
// // // // // // }
// // // // // // console.log(triangle(3));

// // // // // // ===34===
// // // // // // Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
// // // // // // function keysAndValues(obj) {
// // // // // //   let keys = Object.keys(obj);
// // // // // //   let values = Object.values(obj);
// // // // // //   return [keys, values];
// // // // // // }

// // // // // // console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// // // // // // ===33===
// // // // // // Given a word, write a function that returns the first index and the last index of a character.
// // // // // // function charIndex(word, char) {
// // // // // //   let first = word.indexOf(char);
// // // // // //   let last = word.lastIndexOf(char);
// // // // // //   return first === -1 || last === -1 ? undefined : [first, last];
// // // // // // }

// // // // // // console.log(charIndex("hello", "l"));
// // // // // // ===32===
// // // // // // Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// // // // // // function toArray(obj) {
// // // // // //   return Object.entries(obj);
// // // // // // }
// // // // // // console.log(toArray({ a: 1, b: 2 }));
// // // // // // // ===31===
// // // // // // Create a function that concatenates n input arrays, where n is variable.
// // // // // // function concat(...args) {
// // // // // //   let arr = args.reduce((prev, cur) => {
// // // // // //     return prev.concat(cur);
// // // // // //   });
// // // // // //   return arr;
// // // // // // }
// // // // // // console.log(concat([1, 2, 3], [4, 5], [6, 7]));

// // // // // // ===30===
// // // // // // The right shift operation is similar to floor division by powers of two.

// // // // // // Sample calculation using the right shift operator ( >> ):
// // // // // // const shiftToRight = (x, y) => Math.floor(x/2 ** y);

// // // // // // ===29===
// // // // // // Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// // // // // // Please check the examples below for a clearer representation of the behavior expected

// // // // // // function makePlusFunction(baseNum) {
// // // // // //   return (x) => x + baseNum;
// // // // // // }
// // // // // // const plusTwo = makePlusFunction(2);

// // // // // // console.log(plusTwo(0));
// // // // // // ===28===
// // // // // // Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// // // // // // function reverseCase(str) {
// // // // // //   // 90
// // // // // //   let arr = str
// // // // // //     .split("")
// // // // // //     .map((character) => {
// // // // // //       if (character == character.toUpperCase()) {
// // // // // //         return character.toLowerCase();
// // // // // //       } else {
// // // // // //         return character.toUpperCase();
// // // // // //       }
// // // // // //     })
// // // // // //     .join("");

// // // // // //   console.log(arr);
// // // // // // }
// // // // // // console.log(reverseCase("Happy Birthday"));
// // // // // // ===27===
// // // // // // function calculateDifference(obj, limit) {
// // // // // //   return Object.values(obj).reduce((acc, cur) => acc + cur) - limit;
// // // // // // }
// // // // // // const obj = { skate: 20000, painting: 30000, shoes: 1 };
// // // // // // console.log(calculateDifference(obj, 50000));
// // // // // // ===26===
// // // // // // If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.
// // // // // // const regex = /^$/g;
// // // // // // ===25===
// // // // // // Create a function which returns the number of true values there are in an array.
// // // // // // function countTrue(arr) {
// // // // // //   return arr.filter((val) => val === true).length;
// // // // // // }
// // // // // // console.log(countTrue([true, false, false, true, false]));
// // // // // // ===24===
// // // // // // In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// // // // // // Can you reach your friend's tile number in the next roll? Create a function that returns if it's possible to earn a bonus when you roll the dice.

// // // // // // function possibleBonus(a, b) {
// // // // // //   return b - a <= 6 && b - a > 0;
// // // // // // }
// // // // // // console.log(possibleBonus(1, 9));
// // // // // // //===23===
// // // // // // Create a function that takes three parameters where:

// // // // // // x is the start of the range (inclusive).
// // // // // // y is the end of the range (inclusive).
// // // // // // n is the divisor to be checked against.
// // // // // // Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// // // // // // function arrayOperation(x, y, n) {
// // // // // //   let arr = [];
// // // // // //   for (let i = x; i <= y; i++) {
// // // // // //     if (i % n === 0) {
// // // // // //       arr.push(i);
// // // // // //     }
// // // // // //   }
// // // // // //   return arr;
// // // // // // }
// // // // // // console.log(arrayOperation(1, 10, 3));
// // // // // //===22===
// // // // // // Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// // // // // // Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// // // // // // Round 2: [m, s] Use his middle snail against Steve's slowest.
// // // // // // Round 3: [f, m] Use his fastest snail against Steve's middle.
// // // // // // Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.
// // // // // // function mauriceWins(mS, sS) {
// // // // // //   return mS[1] > sS[0] && mS[2] > sS[1];
// // // // // // }
// // // // // // console.log(mauriceWins([3, 8, 10], [4, 7, 11]));

// // // // // //===21===
// // // // // // Create a function that returns true if the first array is a subset of the second. Return false otherwise.
// // // // // // function isSubset(arr1, arr2) {
// // // // // //   let res = arr1
// // // // // //     .map((val) => arr2.includes(val))
// // // // // //     .filter((val) => val === false);
// // // // // //   return res.length > 0 ? false : true;
// // // // // // }

// // // // // // console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));
// // // // // // //===20===
// // // // // // Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

// // // // // // function joinPath(portion1, portion2) {
// // // // // //   let regex = /\//g;
// // // // // //   let new1 = portion1.replace(regex, "");
// // // // // //   let new2 = portion2.replace(regex, "");
// // // // // //   return `${new1}/${new2}`;

// // // // // //   // return !str?str.push('/'):
// // // // // //   // console.log(str);
// // // // // // }

// // // // // // console.log(joinPath("r1AiTrL/", "KkyjD3K"));
// // // // // // //===19===
// // // // // // You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.

// // // // // // function detectBrowser(userAgent) {
// // // // // //   if (userAgent.includes("Firefox")) {
// // // // // //     return "Mozilla Firefox";
// // // // // //   } else if (userAgent.includes("Chrome")) {
// // // // // //     return "Google Chrome";
// // // // // //   } else {
// // // // // //     return "Internet Explorer";
// // // // // //   }
// // // // // // }
// // // // // // //===18===
// // // // // // Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// // // // // // function cardHide(card) {
// // // // // //   let num = card.slice(0, -4);
// // // // // //   let smth = "*".repeat(num.length);

// // // // // //   return `${smth}${card.slice(-4)}`;
// // // // // // }
// // // // // // console.log(cardHide("1234123456785678"));
// // // // // // function spelling(str) {
// // // // // //   let res = [];
// // // // // //   for (let i = 1; i <= str.length; i++) {
// // // // // //     res.push(str.slice(0, i));
// // // // // //   }
// // // // // //   return res;
// // // // // // }
// // // // // // console.log(spelling("jkkake"));
// // // // // //===17===
// // // // // // Write a regular expression that matches a string if and only if it is a valid zip code.
// // // // // // Zipcodes must be 5 digits long exactly and only contain numbers.
// // // // // // Not allowed: non-numeric characters or whitespaces.
// // // // // // This challenge is designed to use Regex only.

// // // // // // let x = /^\d{5}$/;
// // // // // // /* Write your regular expression here */

// // // // // //===16===
// // // // // // Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// // // // // // isPrefix should return true if it begins with the prefix argument.
// // // // // // isSuffix should return true if it ends with the suffix argument.
// // // // // // Otherwise return false.

// // // // // // function isPrefix(word, prefix) {
// // // // // //   let res = prefix.slice(0, -1);

// // // // // //   return word.includes(res);
// // // // // // }

// // // // // // function isSuffix(word, suffix) {
// // // // // //   let res = suffix.slice(1);

// // // // // //   return word.includes(res);
// // // // // // }

// // // // // // console.log(isPrefix("automation", "auto-"));
// // // // // // console.log(isSuffix("arachnophobia", "-phobia"));
// // // // // //===15===
// // // // // // function num_of_digits(num) {
// // // // // //   let string = Math.abs(num);
// // // // // //   console.log(+Math.log10(string).toFixed() + 1);
// // // // // // }
// // // // // // console.log(num_of_digits(2));
// // // // // // //===14===
// // // // // // // Create a function to count the number of 1s in a 2D array.
// // // // // // function countOnes(matrix) {
// // // // // //   console.log(matrix.flat(1).filter((val) => val === 1).length);
// // // // // // }

// // // // // // console.log(
// // // // // //   countOnes([
// // // // // //     [1, 0, 1],
// // // // // //     [0, 0, 0],
// // // // // //     [0, 0, 1],
// // // // // //     [1, 0, 1],
// // // // // //   ])
// // // // // // );
// // // // // //===13===
// // // // // // function addNums(nums) {
// // // // // //   return nums
// // // // // //     .split(", ")
// // // // // //     .map((val) => parseInt(val))
// // // // // //     .reduce((prev, cur) => prev + cur);
// // // // // // }
// // // // // // console.log(addNums("2, 5, 1, 8, 4"));
// // // // // //===12===
// // // // // // Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.

// // // // // // function spotlightSum(n) {
// // // // // //   return n * 9;
// // // // // // }
// // // // // // console.log(spotlightSum(18));

// // // // // //===11===
// // // // // // Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.
// // // // // // function getDecimalPlaces(num) {
// // // // // //   let str = num.indexOf(".");
// // // // // //   let length = num.length - 1;
// // // // // //   return str === -1 ? 0 : length - str;
// // // // // // }

// // // // // // console.log(getDecimalPlaces("322"));
// // // // // //===10===
// // // // // // Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
// // // // // // function highLow(str) {
// // // // // //   let res = str.split(" ").map((val) => parseInt(val));

// // // // // //   if (res.length <= 1) {
// // // // // //     return [res[0], res[0]];
// // // // // //   } else {
// // // // // //     return [`${Math.max(...res)} ${Math.min(...res)}`];
// // // // // //   }
// // // // // // }

// // // // // // console.log(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
// // // // // // //===9===
// // // // // // You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.
// // // // // // function minutesToSeconds(time) {
// // // // // //   let res = time.split(":");
// // // // // //   return res.reduce((acc, time) => acc * 60 + +time);
// // // // // //   console.log(res);
// // // // // // }

// // // // // // console.log(minutesToSeconds("01:00"));
// // // // // //===8===
// // // // // // Write a function that returns the number of users in a chatroom based on the following rules:

// // // // // // If there is no one, return "no one online".
// // // // // // If there is 1 person, return "user1 online".
// // // // // // If there are 2 people, return "user1 and user2 online".
// // // // // // If there are n>2 people, return the first two names and add "and n-2 more online".

// // // // // // function chatroomStatus(users) {
// // // // // //   if (users.length < 1) {
// // // // // //     return "no one online";
// // // // // //   }
// // // // // //   if (users.length === 1) {
// // // // // //     let arr = users.join("");
// // // // // //     return `${arr} online`;
// // // // // //   }
// // // // // //   if (users.length === 2) {
// // // // // //     let arr = users.join(" and ");
// // // // // //     return `${arr} online`;
// // // // // //   } else {
// // // // // //     let arr = users.slice(0, 2).join(", ");
// // // // // //     return `${arr} and ${users.length - 2} more online`;
// // // // // //   }

// // // // // //   // return users.join(" and ");
// // // // // // }

// // // // // // console.log(chatroomStatus(["becky325", "asdsad", "sasad"]));
// // // // // //===7===
// // // // // // Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.
// // // // // // function isJS(path) {
// // // // // //   let regex = /(jsx|season) |(js|season)/g;
// // // // // //   return regex.test(path);
// // // // // // }
// // // // // // console.log(isJS("/users/user.jsx"));
// // // // // //===6===
// // // // // // A value is omnipresent if it exists in every subarray inside the main array.
// // // // // // function isOmnipresent(arr, val) {
// // // // // //   return arr.every((value) => value.includes(val));
// // // // // // }
// // // // // // console.log(
// // // // // //   isOmnipresent(
// // // // // //     [
// // // // // //       [1, 1],
// // // // // //       [1, 3],
// // // // // //       [5, 1],
// // // // // //       [6, 1],
// // // // // //     ],
// // // // // //     3
// // // // // //   )
// // // // // // );
// // // // // // === 5 ===
// // // // // // Given an array and an integer n, return the sum of the first n numbers in the array.

// // // // // // function sliceSum(arr, n) {
// // // // // //   return n === 0 ? 0 : arr.slice(0, n).reduce((prev, cur) => prev + cur);
// // // // // // }

// // // // // // sliceSum([1, 3, 2], 2);

// // // // // // // === 5 ===
// // // // // // Create a function to convert an array of percentages to their decimal equivalents.
// // // // // // function convertToDecimal(perc) {
// // // // // //   return perc.map((val) => parseFloat(val) / 100);
// // // // // // }

// // // // // // console.log(convertToDecimal(["1%", "2%", "3%"]));

// // // // // // // === 4 ===
// // // // // // Create a function that takes a string str and performs simple encoding as per the following method:

// // // // // // Replace all single occurrence characters with [
// // // // // // Replace all characters with two or more occurrences with ]
// // // // // // Return the final string after modification.
// // // // // // function simpleEncoder(str) {
// // // // // //   str = str.toLowerCase().split("");
// // // // // //   return str
// // // // // //     .map((el, i) => (str.indexOf(el) == str.lastIndexOf(el) ? "[" : "]"))
// // // // // //     .join("");
// // // // // // }
// // // // // // console.log(simpleEncoder("Muubashirr"));

// // // // // // // === 3 ===
// // // // // // // Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
// // // // // // function inkLevels(inks) {
// // // // // //   let array = Object.values(inks);
// // // // // //   return Math.min(...array);
// // // // // // }

// // // // // // console.log(
// // // // // //   inkLevels({
// // // // // //     cyan: 23,
// // // // // //     magenta: 12,
// // // // // //     yellow: 10,
// // // // // //   })
// // // // // // );

// // // // // // === 2 ===
// // // // // // Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// // // // // // function convertBinary(str) {
// // // // // //   let newString = str.toLowerCase().replace(/[a-m]/g, "0");
// // // // // //   return newString.replace(/[n-z]/g, "1");
// // // // // // }

// // // // // // console.log(convertBinary("housE"));

// // // // // // === 1 ===
// // // // // // Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.
// // // // // // function firstPlace(road) {
// // // // // //   if (road.length == 0) {
// // // // // //     return "No road available";
// // // // // //   }

// // // // // //   let regex = /[a-z]|[A-Z]/g;
// // // // // //   let res = road.match(regex);
// // // // // //   console.log(res);
// // // // // //   if (res == null) {
// // // // // //     return "No car available";
// // // // // //   } else {
// // // // // //     return res.slice(-1)[0];
// // // // // //   }
// // // // // // }
// // // // // // console.log(firstPlace("====="));
