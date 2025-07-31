// Write a function that finds and print the smallest number among three given number

function SmallestOfThree(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else if (c < a && c < b) {
    return c;
  }
  return a;
}
// console.log("SmallestOfThree(10,35,1)",SmallestOfThree(10,35,1))
// console.log("SmallestOfThree(0,35,1)",SmallestOfThree(0,35,1))
// console.log("SmallestOfThree(-0,-35,1)", SmallestOfThree(-0, -35, 1));
// console.log("SmallestOfThree(3,3,3)", SmallestOfThree(3, 3, 3));
// console.log("SmallestOfThree(3,3,0)", SmallestOfThree(3, 3, 0));

// ...........................................

function SmallestOfThree2(a, b, c) {
  let smallestNum = a;
  
  if (b < smallestNum) {
    smallestNum = b;
    
  } else if (c < smallestNum) {
    smallestNum = c;
  }
  return smallestNum
}

// console.log("SmallestOfThree2(10,35,1)",SmallestOfThree2(10,35,1))
// console.log("SmallestOfThree2(0,35,1)",SmallestOfThree2(0,35,1))
// console.log("SmallestOfThree2(-0,-35,1)", SmallestOfThree2(-0, -35, 1));
// console.log("SmallestOfThree2(3,3,3)", SmallestOfThree2(3, 3, 3));
// console.log("SmallestOfThree2(3,3,0)", SmallestOfThree2(3, 3, 0));