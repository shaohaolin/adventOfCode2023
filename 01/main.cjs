const fs = require("fs");
const filename = process.argv[2];
const file = fs.readFileSync(filename).toString("utf8");
console.log("filename:", filename);

// Data structure: [[1, 2], [3, 8], [1, 2, 3, 4, 5], [7]];

function isNumber(char) {
  return !isNaN(Number(char));
}

function extractNumbersFromString(string) {
  const numbers = [];
  string.split("").map((char) => {
    if (isNumber(char)) {
      numbers.push(parseInt(char, 10));
    }
  });
  return numbers;
}

// Calculate the result
function calculateResult(numbers) {
  let result = 0;

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

  return result;
}

// Find all numbers in each line and push them into numbers array
const numbers = file.split("\n").map((line) => extractNumbersFromString(line));
const result = calculateResult(numbers);
console.log("result:", result);
