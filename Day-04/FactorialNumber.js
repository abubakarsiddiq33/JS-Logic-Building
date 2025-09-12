// Write a Function that calculate factorial of a given number?

const factorialNum = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result
};
console.log("4!", factorialNum(4)) //24
console.log("3!", factorialNum(3)) //6
