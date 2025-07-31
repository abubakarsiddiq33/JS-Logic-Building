//  Write a function that calculates and print the area of a rectangle given its length and width?

function calculateArea(length, width) {
  // Check this value and answer only positive number
  if (length <= 0) {
    throw new Error("Length should be positive number");
  }
  if (width <= 0) {
    throw new RangeError("Width should be positive number");
  }
//   Rectangle Formula
  const area = length * width;
  console.log("Area of rectangle is", area);
}
calculateArea(70, 90);
calculateArea(500, 900);
// calculateArea(-2, 90);
// calculateArea(2, 0);
