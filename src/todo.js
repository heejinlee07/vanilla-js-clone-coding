const toDoForm = document.querySelector('.js-todoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-todoList');

const TODOS_LS = 'todos';

/*
EXAMPLE:
filter는 함수가 true를 return하는 아이템들이 있는 새로운 배열을 만든다
function filterFn(todo){
  return todo.id === 1
}
const cleanTodos = todos.filter(filterFn)
이렇게 하면 array안에 있는 모든 todos를 통해서 true인 것만 return한다.
즉 todo.id === 1인 경우만 return
*/

// 할일 목록을 저장. 할일 항목이 많아질 수 있으므로 array여야 한다.
// 해야할 일을 생성하면 바로 이 빈 배열에 추가된다.
let todos = [];

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanTodos = todos.filter(function (todo) {
    console.log(todo.id, li.id);
    return todo.id !== parseInt(li.id);
  });
  todos = cleanTodos;
  saveTodos();
}

// 로컬 스토리지에도 todos를 저장해야한다.
function saveTodos() {
  // 이렇게 하면 로컬스토리지에는 [objct Object]이런 식으로 value가 저장됨.
  // 로컬 스토리지에는 js의 데이터를 저장할 수 없기 때문. 오직 string만 저장 가능.
  // 따라서 JSON.stringify 사용 : js object를 string로 바꿔준다.
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = todos.length + 1;

  delBtn.innerHTML = 'X';
  delBtn.addEventListener('click', deleteTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  // console.log(toDoList);
  toDoList.appendChild(li);

  const todoObj = {
    text: text,
    id: newId,
  };

  todos.push(todoObj);
  saveTodos();
}

// appendChild는 뭔가를 아버지인 father element 안에 넣는 것.

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadTodos() {
  const loadTodos = localStorage.getItem(TODOS_LS);
  if (loadTodos !== null) {
    console.log(loadTodos);
    const parsedTodos = JSON.parse(loadTodos);
    console.log(parsedTodos);
    // todo를 가져온 뒤 js object로 변환한다.
    // forEach: array에 담겨있는 것들 각각에 한번씩 함수를 실행시킨다.
    // 각각에 대해 paintTodo 함수가 실행된다.
    parsedTodos.forEach(function (todo) {
      paintToDo(todo.text);
    });
  }
}

function init() {
  loadTodos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
