const idInput = document.getElementById("user-id");
const pwInput = document.getElementById("user-pw");
const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");

let users = JSON.parse(localStorage.getItem("users")) || [];

function signIn() {
  const inputId = idInput.value.trim();
  const inputPw = pwInput.value.trim();
  const idIndex = users.findIndex((user) => user.username === inputId);
  if (idIndex !== -1) {
    if (users[idIndex].password === inputPw) {
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  } else {
    alert("로그인 실패");
  }
}

signInBtn.addEventListener("click", signIn);
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
