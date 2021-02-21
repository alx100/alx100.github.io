function findElement(arr, element, comparatorFn) {
  let index = 0;
  for (const item of arr) {
    if (
      typeof element === 'object' &&
      element !== null &&
      comparatorFn(element, item)
    ) {
      return index;
    }
    if (item === element) {
      return index;
    }
    index++;
  }
}

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));
console.log(findElement(arr, 33));

const objects = [
  { name: 'Max', age: 31 },
  { name: 'Manu', age: 32 },
];

console.log(
  findElement(objects, { name: 'Manu', age: 32 }, function (el, it) {
    return el.name === it.name;
  })
);
