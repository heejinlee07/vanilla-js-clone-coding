const toDoForm = document.querySelector('.js-todoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-todoList');

const TODOS_LS = 'toDos';

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerHTML = 'X';
  const span = document.createElement('span');
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  console.log(toDoList);
  toDoList.appendChild(li);
}

//appendChild는 뭔가를 아버지인 father element 안에 넣는 것.

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
