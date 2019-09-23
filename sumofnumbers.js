
const testList = [1, 2, 3, 4, 5];

function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

console.log(sumFor(testList));

function sumWhile(list) {
  let total = 0;
  let num = 0;
  while (num < list.length) {
    total += list[num];
    num++;
  }
  return total;
}

console.log(sumWhile(testList));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list.pop() + sumRecursion(list);
}
const newList = [5, 4, 3, 2, 1];
console.log(sumRecursion(testList));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(newList));
