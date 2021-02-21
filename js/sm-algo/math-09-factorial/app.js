function fact(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

// O(n)

console.log(fact(3)); // 3 * 2 * 1 => 6
console.log(fact(4)); // 4 * 3 * 2 * 1 => 24
console.log(fact(5)); // 5 * 4 * 3 * 2 * 1 => 120