function sum(x, y) {
  let sum = x + y;
  return sum;
}

console.log(sum(10, 20));
console.log(sum("안녕", "하세요."));

let result = sum(11, 22);
console.log(result);
let result2 = sum(result, 33);
console.log(result2);
