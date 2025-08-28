let x = 10.656;
//toFixed()
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(5));

//toPrecision()
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));

// paserInt()
console.log(parseInt("-10")); // 결과값 : -10
console.log(parseInt("-12.33")); // 결과값 : -12
console.log(parseInt("10")); // 결과값 : 10
console.log(parseInt("12.33")); // 결과값 : 12.33
console.log(parseInt("10 20 30")); // 결과값 : 10
console.log(parseInt("10 years")); // 결과값 : 10
console.log(parseInt("years 10")); // 결과값 : NaN
