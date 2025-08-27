// let brands = ["애플", "구글", "메타", '아마존', '삼성전자'];

// console.log(brands[0]);
// console.log(brands[1]);
// console.log(brands[2]);
// console.log(brands[3]);
// console.log(brands[4]);

// // 이상과 같은 방식을 굳이 할 필요 없으니까 반복문 써야겠죠
// // Java와 동일합니다.

// for(let i = 0 ; i < brands.length ; i++) {
//   console.log('반복문으로 출력한 ' + brands[i]);
// }

// let productList = [
//   {
//     name: "솔의눈",
//     price: 700,
//   },
//   {
//     name: "레쓰비",
//     price: 780,
//   },
//   {
//     name: "파워에이드",
//     price: 1200,
//   },
//   {
//     name: "오렌지주스",
//     price: 1400,
//   },
//   {
//     name: "제로콜라",
//     price: 800,
//   },
//   {
//     name: "맥콜",
//     price: 900,
//   },
// ];

// console.log(
//   productList[0].name +
//     "의 가격과 " +
//     productList[2].name +
//     "의 가격은 각각 " +
//     productList[0].price +
//     "원과 " +
//     productList[2].price +
//     "원으로, 그 합은 " +
//     (productList[0].price + productList[2].price) +
//     "원 입니다."
// );

// let inputCoin = 900;
// let outputList = [];

// for (let i = 0; i < productList.length; i++) {
//   if (inputCoin >= productList[i]["price"]) {
//     outputList.push(productList[i]);
//   }
// }

// console.log("살 수 있는 음료 목록 : " + outputList);

// for (let i = 0; i < outputList.length; i++) {
//   console.log(outputList[i]);
// }
// 위 실행문을 실행 시키면 알 수 있는게 일반적으로 배열을 출력하면 [object Object] 형식으로 출력된다.
// 이로인해 각 element를 알고 싶으면 반복문을 사용해야 한다.

// for (let i = 0; i < outputList.length; i++){
//   for (let j = 0; j < outputList[i]; j++){
//     console.log(outputList[i][j])
//   }
// }                  이 코드는 말이 되지않는 코드이다.
/*
  outputList의 element의 자료형은 객체이고, 객체에는 index number가 존재 하지 않으므로 이중 for문을 통해서 객체 내부의 각 property를 확인하는것이 불가능 합니다.

  그럼 마찬가지로 

*/

let person = [
  {
    fName: "일",
    lName: "김",
    age: 20,
  },
];

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 일반 for문을 추출
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

for (const num in nums) {
  console.log(num);
  console.log(typeof num);
}

for (const num of nums) {
  console.log(num);
  console.log(typeof num);
}
4;
