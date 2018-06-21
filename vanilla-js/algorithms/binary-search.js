function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  // console.log(numArray);

  
  if (middleElem === key) return true; // base case
  else if (middleElem < key && numArray.length > 1) { // recursive case 1
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  else if (middleElem > key && numArray.length > 1) { // recursive case 2
    return binarySearch(numArray.splice(0, middleIdx), key);
  }
  else return false; // case when the key is not present in array
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);