// aletr()
// alert("이것은 alter창입니다.");

// confirm()
// confirm("정말 삭제하시겠습니까?");

//
// prompt("삭제하신다면 delete my page를 입력하세요.");

// open()
// open("https://www.naver.com")

// setTimeout()
let myExec;

function myFunction() {
  myExec = setTimeout(function () {
    console.log("5초 후 실행");
  }, 5000);
}
function myStopFuntion() {
  console.log("취소합니다.");
  clearTimeout(myExec);
}

myFunction();
