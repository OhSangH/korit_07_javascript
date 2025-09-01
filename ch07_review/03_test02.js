const idInput = document.getElementById("user-id");
const pwInput = document.getElementById("user-pw");
const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");

let users = JSON.parse(localStorage.getItem("users")) || [];

function signUP() {
  const inputId = idInput.value.trim();
  const inputPw = pwInput.value.trim();

  if (inputId == "" || inputPw == "") {
    alert("아이디 혹은 패스워드를 입력해주세요.");
    return;
  }

  const user = {
    id: inputId,
    pw: inputPw,
  };
  idInput.value = "";
  pwInput.value = "";

  users.push(user);
  alert("회원가입이 완료되었습니다.");
  saveUsers();
}

signUpBtn.addEventListener("click", signUP);
idInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    signUp();
  }
});

pwInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    signUp();
  }
});

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}
