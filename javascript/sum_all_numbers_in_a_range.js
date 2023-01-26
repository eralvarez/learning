// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  const orderedArray = arr.sort((a, b) => (a > b ? 1 : -1));
  let arraySum = orderedArray.reduce((prev, next) => prev + next, 0);

  for (let x = orderedArray[0] + 1; x < orderedArray[1]; x++) {
    arraySum += x;
  }

  return arraySum;
}

console.log(sumAll([1, 200]));
