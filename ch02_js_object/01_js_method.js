let person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 20;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

/*
  해당 라인에 대한 해석을 위해서는 함수 표현식을 알아야한다.

  Js에서는 함수를 변수에 저장할 수 있다.
  그래서 객체명.함수면()으로 호출을 하게 되고 이 방식도 메서드라 볼 수 있다.
*/
console.log(person.getFullName());

let str = "일이삼사오육칠팔구 십십일";

let emptySpace = str.indexOf(" ");
console.log(emptySpace);

let lastTen = str.lastIndexOf("십");
console.log(lastTen);

let str2 = "Apple, Banana, Kiwi";
let result2 = str2.slice(7, 12); //결과값 : Banan
let result3 = str2.slice(7, 13); //결과값 : Banana
console.log(result2);
console.log(result3);

let result4 = str2.slice(7);
console.log(result4);

let result5 = str2.slice(-12);
console.log(result5);

let result6 = str2.substring(7, 13);
console.log(result6);

let result8 = str2.substr(0, 5);
console.log(result8);

let result9 = str2.substr(-12);
console.log(result9);

let stc = "부산광역시 부산진구에 오신 것을 환영합니다.";
let replaceStc = stc.replace("부산", "서울");
console.log(replaceStc);

let eStc = "Plsease visit Seoul And Seoul";
let rpdStc = eStc.replace("SEOUL", "Busan");
console.log(rpdStc);

let rpdStc2 = eStc.replace(/SEOUL/i, "Busan");
console.log(rpdStc2);

let rpdStc3 = eStc.replace(/Seoul/g, "Busan");
console.log(rpdStc3);

let txt1 = "Hello";
let txt2 = "Wolrd";
let txt3 = txt1.concat(" ", txt2);
console.log(txt3);
/*
  실무 사용 예시
  우리나라에서는 이름 성 형태나 / 성 이름 에서 공백 으로 구분하는 경우가 있다.
  이상의 경우에는 firstName / middleName / lastName으로 각각 변수에 데이터를 저장하고

  fullName 변수에 .concat()을 적용한 다음 출력하는 방법을 사용할 수 있습니다.
*/

let txtSpace = "     Hello, World!    ";
console.log(txtSpace.trim());

let charAtTxt = "I'm tired.😒";
console.log(charAtTxt.charAt(4));

let birthday = "1988-07-09";
let birthdayArray = birthday.split("-");
console.log(birthdayArray);
