function caesarCipher(str, num) {
  num = num % 26;
  console.log(num);
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  }

  return newString;
}

// caesarCipher('Zoo Keeper', 2);  //Bqq Mqqrgt
// caesarCipher('Big Car', -16);  //Lsq Mkb
// caesarCipher('Javascript', -900);  //Tkfkcmbszd