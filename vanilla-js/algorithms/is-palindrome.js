function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArray = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArray.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

isPalindrome("Madam I'm Adam");