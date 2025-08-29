if (typeof Storage !== "undefined") {
  localStorage.setItem("title", "review : 파이팅");
  /*
    .setItem()라는 메서드가 있고, 거기에 2개의 argument를 집어 넣습니다.
    두 번째 매개변수인 value값의 경우, 원래 string 자료형이라 있는 그대로.
  */

  // 집어넣을 데이터 예시 - JS배열인데, 내부 element가 객체 -> string으로 변환 과정 필요
  const users = [
    {
      id: "1",
      name: "김일",
    },
    {
      id: 2,
      name: "김이",
    },
  ];

  localStorage.setItem("users", JSON.stringify(users));
}

// localStorage 내에 있는 데이터를 조회
if (Storage !== "undefined") {
  console.log(localStorage.getItem("title"));
  console.log(localStorage.getItem("users"));
  // 위 같이 사용하면 string이라 js객체로 복구할려면 아래로 쓰면 된다.
  console.log(JSON.parse(localStorage.getItem("users")));

  // 하지만 너무 길다 하면
  const usersFromLocal = JSON.parse(localStorage.getItem("users"));
  console.log(usersFromLocal[0].name);
}

// 삭제 예시
localStorage.removeItem("title");
