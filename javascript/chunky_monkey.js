// Chunky Monkey
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and
// returns them as a two-dimensional array.

function chunkArrayInGroups(letters = [], size = 0) {
  const chunks = [];
  const lettersArray = [...letters];
  
  while (true) {
    if (lettersArray.length) {
      chunks.push(lettersArray.splice(0, size));
    } else {
      break;
    }
  }

  return chunks;
}

const tests = [
  {
    param1: ["a", "b", "c", "d"],
    param2: 2,
  },
  {
    param1: [0, 1, 2, 3, 4, 5],
    param2: 3,
  },
  {
    param1: [0, 1, 2, 3, 4, 5],
    param2: 2,
  },
  {
    param1: [0, 1, 2, 3, 4, 5],
    param2: 4,
  },
];

for (const test of tests) {
  const response = chunkArrayInGroups(test.param1, test.param2);
  console.log(`param1: ${test.param1}`);
  console.log(`param2: ${test.param2}`);

  console.log(response);
  console.log(Array(30).join("-"));
}
