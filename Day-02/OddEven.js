// write a function that tells if a given number is even our odd

// const CheckIfEvenOdd = (num) => {
//   const remainder = num % 2;
//   if (remainder === 0) {
//     console.log("This is a Even Number!");
//   } else {
//     console.log("This is a Odd Number!");
//   }
// };

// CheckIfEvenOdd(2);

const CheckIfEvenOdd2 = (num) => {
  return num % 2 === 0
    ? console.log("This is a Even Number!")
    : console.log("This is a Odd Number!");
};

CheckIfEvenOdd2(3);
