const idInput = document.getElementById("user-id");
const pwInput = document.getElementById("user-pw");
const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");

let users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
  const inputId = idInput.value.trim();
  const inputPw = pwInput.value.trim();

  if (inputId == "" || inputPw == "") {
    alert("아이디 혹은 패스워드를 입력해주세요.");
    return;
  }

  const user = {
    username: inputId,
    password: inputPw,
  };
  idInput.value = "";
  pwInput.value = "";

  users.push(user);
  alert("회원가입 성공!\n로그인 페이지로 이동합니다.");
  saveUsers();
  window.location.replace("./signin.html");
}

signUpBtn.addEventListener("click", signUp);
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
