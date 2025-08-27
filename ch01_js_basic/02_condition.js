/*
  7세 이하 - 0원
  8 ~ 13세 - 450원
  14 ~ 19 - 720원
  20 이상 - 1200원
  70 이상 - 0원
*/

let age = 12;
let busFare = 0;

if (age < 7) {
  busFare = 0;
} else if (age <= 13) {
  busFare = 450;
} else if (age <= 19) {
  busFare = 720;
} else if (aeg < 70) {
  busFare = 1200;
}

console.log(age + " 살의 버스 요금은 " + busFare + "원 입니다.");
