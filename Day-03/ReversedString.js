// Write a function that return the reverse of a string?

// Option 01
// const reversedString = () => {
//   let str = "Yousuf";

//   for (let i = str.length ; i >= 0; i--) {
//     console.log(str[i]);
//   }
// };
// reversedString();


// Option 02
// const reversedString = (str) => {
//   if (typeof str !== "string") {
//     throw Error("Only Type of String");
//   }
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     // result = result + str[i];
//     result +=  str[i];
//   }
//   return result;
// };
// console.log(reversedString("Yousuf"));
// console.log(reversedString(5656))


// Option 03
// const reversedString = (arr) => {

//   let result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i])
//   }
//   return result;
// };
//   console.log(reversedString(["hello","yousuf"]))


// Option 04
const reversedString = (str) => {
 const isSplit = str.split('')
 const reverseArr = isSplit.reverse()
 const result = reverseArr.join('')
 console.log(result)
};
console.log(reversedString("yousuf"));
