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
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

/**
 * NOTE:
 * setInterval(실행할 함수, 그 함수를 실행하고 싶은 시간(간격))
 * setInterval(fn, 1000)
 * function sayHi() {
  console.log('say hi');
}

setInterval(sayHi, 3000);
*
*/

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
