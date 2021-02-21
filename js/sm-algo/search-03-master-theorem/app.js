function findElement(sortedArr, element, offset) {
  // O(1)
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (element === sortedArr[middleIndex]) {
    return middleIndex + offset;
  }

  if (sortedArr[middleIndex] < element) {
    startIndex = middleIndex + 1;
    offset = offset + middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }
  // O(1)
  return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset);
}

// a = 1
// b = 2
// O(n^logb a) => O(n^log2 1) => O(n^0) => O(1)
// Overall algorithm time complexity:
// O(n^logb a * log n) => O(1 * log n) => O(log n)

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 100, 0));
