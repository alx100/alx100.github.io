let re;
// Literal Characters
// re = /hello/;
// re = /hello/i;

// Metacharacter Symbols
re = /^h/i;          // ^ -> Must start with
re = /world$/i;      // $ -> Must ends with
re = /h.llo/i;       // . -> Matches any ONE character
re = /h*llo/i;       // * -> Matches any char 0 or more time
re = /gre?a?y/i;     // ? -> E or A or Nothing - is optional char
re = /gre?a?y\?/i;   // \ -> Escape character 

// Brackets []  - Character Sets
re = /gr[ae]y/i;      // [ae] -> Must be an A or E 
re = /[GF]ray/i;      // [GF] -> Must be an G or F 
re = /[^GF]ray/i;     // [^GF] -> Match anything exept a G or F 
re = /[A-Z]ray/;      // [A-Z] -> Match any uppercase letter
re = /[a-z]ray/;      // [a-z] -> Match any lowercase letter
re = /[A-Za-z]ray/;   // [A-Za-z] -> Match any letter
re = /[0-9]ray/;      // [0-9] -> Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;    // Must occur range {2-4} amount of times
re = /Hel{2,}o/i;     // Must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/; // Match 3x3x3x

// Shorthand Character Classess
re = /\w/;      // Word character -> any letter,number or _
re = /\w+/;     // + -> one or more
re = /\W/;      // Any NON-word character
re = /\d/;      // Match any digit
re = /\D/;      // Any NON-digit character
re = /\s/;      // Match whitespace character
re = /\S/;      // Any NON-whitespace character
re = /Hell\b/i; // \b -> word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = 'xy';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);