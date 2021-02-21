function fib(n) { // n = 3
  // [1, 1, 2, 3, 5, 8]
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// Loop-based solution: O(n)
// O(n^2)

console.log(fib(4));
console.log(fib(37));