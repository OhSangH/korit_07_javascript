// DOM 요소 가져오기 위한 변수 선언 및 초기화
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// 처음 페이지에 들어갔을 때 localStorage를 참조해서 기존 todo 데이터가 있다면 가지고 와야 한다.
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Todo 리스트를 불러오는 과정이 필요
function renderTodos() {
  // 기존 todo list를 초기화 -> 추가 했을 때 누적 안되게
  todoList.innerHTML = "";

  // todos 배열을 반복 돌려서 목록을 생성
  todos.forEach((todo, index) => {
    // todos의 반복을 돌때 나다 li 태그 생성
    const li = document.createElement("li");
    // li 태그에 클래스 지정
    li.className = "todo-item";
    if (todo.completed) {
      li.classList.add("completed");
    }

    // 체크 박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    // 텍스트 내용 생성
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times";

    // 요소들을 li변수에 추가
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);

    // 그리고 이 li는 <ul>태그에 추가
    todoList.appendChild(li);

    // 이벤트리스너 추가
    // 체크박스 변경 이벤트
    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked;
      // 완료상태
      li.classList.toggle("completed", checkbox.checked);
      saveTodos();
    });
    // 삭제 버튼 클릭 이벤트
    deleteBtn.addEventListener("click", () => {
      // 삭제할 항목의 텍스트를 이용해서 배열 대에서 정확한 인덱스를 찾아낼 겁니다.
      // 보통은 index로 내용을 확인하지만 계속 삭제를 하면 index 넘버가 바뀌겠죠.
      // 그래서 input에 입력했던 내용을 근거로 index를 역으로 찾아낼 예정입니다.
      const itemText = span.textContent;
      // 배열 내에서의 내용과 span 태그 내에서의 내용이 같은 index를 뽑아내서 itemIndex 변수에 저장
      const itemIndex = todos.findIndex((item) => item.text === itemText);

      if (itemIndex !== -1) {
        todos.splice(itemIndex, 1);
        li.remove();
        saveTodos();
      }
    });
  });
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("내용을 입력하세요");
    return;
  }

  // input 창에 내용이 있다면 내용일 들어갈 JS 객체 선언
  const newTodo = {
    text: todoText,
    completed: false,
  };

  // todos에 todo 추가
  todos.push(newTodo);

  // 추가한 이후 input 태그 내의 내용 제거
  todoInput.value = "";

  renderTodos();
  saveTodos();
}

// '추가' 버튼 클릭 이벤트
addBtn.addEventListener("click", addTodo);

// 엔터 키 입력 이벤트
todoInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTodo(); // input태그에 Enter 키 입력을 감지하면 addTodo(); 함수 추가
  }
});

// 새로고침 했을 때 renderTool() 호출
window.onload = renderTodos();
