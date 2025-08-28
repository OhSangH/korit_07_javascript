// Template Literals

function hello2(name) {
  console.log(`Hello ${name}. 환영합니다!`);
}

hello2("김일");

// Object Literal Syntax Extension

// 그러니까 12번 라인의 변수명과
let type = "student";
let score = {
  // 15번 라인의 [] 내의 값이 동일해야 합니다.
  [type]: "Josh",
  score: 92,
};

console.log(score.student);

/* 
  [type]으로 작성했지만 실제 property의 key값은 'student'입니다.
*/

// Spread 연산자
let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];

let arr3 = arr2.concat(arr1);
console.log(arr3);

let arr4 = [...arr2, ...arr1];
console.log(arr4);
/*
  ...arr2 과 같이 작성했을 때, arr2라는 배열 자체가 들어가는 것이 아니라, 
  배열 내부의 element들을 하나씩 가지고 온다고 생각하는 편이 좋다.

  즉, let arr4 = [...arr2,...arr1];
  은 외부에 [] 가 있는것을 봤을 때 새로 배열을 생성한 것이고,
  거기의 내부에 arr2의 element들을 순서대로 집어넣고 그 다음 arr1의
  element들을 순서대로 집어넣어서 완성 했다고 해석할 수 있습니다.
*/
function getPerson() {
  return {
    fName: "John",
    lName: "Doe",
    age: 20,
    email: "a@test.com",
    city: "New York",
    country: "USA",
  };
}

let { fName, lName } = getPerson();

console.log(fName);
console.log(lName);

let person = getPerson();
console.log(person.fName);
console.log(person.lName);

// 객체 구조분해를 쓰게 되면 필요한 key - value값만 사용 가능

function displayFullName({ fName, lName }) {
  console.log(`${fName} ${lName}`);
}
displayFullName(getPerson());

function getScores() {
  return [70, 80, 90];
}

let scores = getScores();

let x = scores[0],
  y = scores[1],
  z = scores[2];

let [x1, y1, z1] = getScores();
console.log(x1);
console.log(y1);
console.log(z1);
