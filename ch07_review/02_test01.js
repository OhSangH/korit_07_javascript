const idInput = document.getElementById("user-id");
const pwInput = document.getElementById("user-pw");
const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");

let users = JSON.parse(localStorage.getItem("users")) || [];

function signIn() {
  const inputId = idInput.value.trim();
  const inputPw = pwInput.value.trim();
  const idIndex = users.findIndex((user) => user.id === inputId);
  if (idIndex !== -1) {
    if (users[idIndex].pw === inputPw) {
      alert("로그인 성공입니다.");
    } else {
      alert("잘못된 패스워드입니다.");
    }
  } else {
    alert("잘못된 아이디입니다.");
  }
}

signInBtn.addEventListener("click", signIn);
// signUpBtn.addEventListener("click", signUP);
idInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    signIn();
  }
});

pwInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    signIn();
  }
});

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}
