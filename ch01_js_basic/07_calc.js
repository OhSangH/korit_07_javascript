/*
  조건 문 활용하여, 숫자 두개와 사칙연산 기호를 하나 매개변수로 받아 그에 맞는 계산을 하는 계산기 함수를 정의
*/

let calc = function (x, y, operator) {
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "/") {
    return x / y;
  } else if (operator === "*") {
    return x * y;
  }
};

let plusResult = calc(5, 7, "+");
console.log(plusResult);

let minusResult = calc(10, 3, "-");
console.log(minusResult);

let timeResult = calc(203, 3459, "*");
console.log(timeResult);

let divineResult = calc(5943, 21, "/");
console.log(divineResult);
