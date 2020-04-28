//DOM
//const title = document.getElementById('title');
/*
const title = document.querySelector('#title');
console.log(title);
title.innerHTML = 'hi! from JS';
title.style.color = 'red';
document.title = 'i own you now';

//이벤트: 웹사이트에서 발생하는 것들

function handleResize(event) {
  console.log(event);
  console.log('i have been resized');
}

//여기서 event는 js에서 온 것.
//이벤트를 다룰 함수를 만들 때 마다 js는 자동적으로
//함수를 객체에 붙인다.

window.addEventListener('resize', handleResize);
*/
function handleClick() {
  title.style.color = 'red';
}
/**
 * NOTE:
 * handleResize() <- 이렇게 쓰면 지금 당창 호출하라는 뜻.
 * handleResize <- 그냥 쓰면 필요한 시점에 함수를 호출하라는 것.
 * (윈도우 사이즈가 변경될 때 handleResize를 호출)
 */

title.addEventListener('click', handleClick);
