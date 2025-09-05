// Write a function that finds and print the smallest number among three given numbers?

// First Option
// const smallestNumOfThree = (a, b, c) => {
//   if (a < b) {
//     return `Smallest Number ${a}`;
//   } else if (b < c) {
//     return `Smallest Number ${b}`;
//   } else {
//     return `Smallest Number ${c}`;
//   }
// };

// console.log(smallestNumOfThree(9,3,4))

// Second Option
// const smallestNumOfThree2 = (a, b, c) => {
//   if (a < b && a < c) {
//     return `Smallest Number ${a}`;
//   } else if (b < a && b < c) {
//     return `Smallest Number ${b}`;
//   } else if (c < a && c < b) {
//     return `Smallest Number ${b}`;
//   }
//   return a;
// };

// console.log(smallestNumOfThree2(9, 3, 4));

// Third Option
// const smallestNumOfThree3 = (a, b, c) => {
//   let smallestNumber = a;
//   if (b < smallestNumber) {
//     smallestNumber = b;
//   } else if (c < smallestNumber) {
//     smallestNumber = c;
//   }
//   return smallestNumber;
// };

// console.log(smallestNumOfThree3(-1, 1, 4));
