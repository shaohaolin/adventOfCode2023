const fs = require("fs");
const filename = process.argv[2];
const file = fs.readFileSync(filename).toString("utf8");
console.log("filename:", filename);

// Data structure: [[1, 2], [3, 8], [1, 2, 3, 4, 5], [7]];

const numbers = [];
let result = 0;

// Find all numbers in each line and push them into numbers array
file.split("\n").map((line) => {
  const numbersInEachLine = [];
  line.split("").map((char) => {
    if (isNumber(char)) {
      numbersInEachLine.push(parseInt(char, 10));
    }
  });
  numbers.push(numbersInEachLine);
});

// Calculate the result
numbers.map((numbersInEachLine) => {
  // If there is no number in the line, skip it
  if (numbersInEachLine.length === 0) {
    return;
  }
  const firstNumber = numbersInEachLine.shift();
  const lastNumber = numbersInEachLine.pop();

  const sum = firstNumber * 10 + (lastNumber ?? firstNumber);
  result += sum;
});

console.log(result);

function isNumber(char) {
  return !isNaN(Number(char));
}
