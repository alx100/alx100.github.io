let counter = 0;
function fib(n, memo) {
  counter++;
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

// => O(n)

const memo = {};
fib(5, memo);
console.log(counter);
console.log(memo);
counter = 0;

fib(6, {});
console.log(counter);
counter = 0;

fib(20, {});
console.log(counter);
counter = 0;

fib(30, {});
console.log(counter);
counter = 0;