const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

/*
NOTE: 좀 더 깔끔하게 쓰고 싶다면 콤마로 구분하여 이렇게 적어도 된다.
const clockContainer = document.querySelector('.js-clock'),
   clockTitle = clockContainer.querySelector('h1');
*/

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
