function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2].filter((item, index, array) => {
    const arrayCopy = [...array];
    arrayCopy.splice(index, 1);
    return arrayCopy.indexOf(item) > -1 ? null : item;
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
