const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

//사용자의 이름을 기억
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //user가 없는 경우
    askForName();
  } else {
    //user가 있는 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

/**
 * NOTE:
 * querySelctor: 찾은 것의 첫번 째 것을 가져온다.
 * querySelctorAll: 찾은 모든 것을 가져온다.
 * 클래스명에 따른 엘리먼트를 가져오는데, array로 가져옴.
 */
