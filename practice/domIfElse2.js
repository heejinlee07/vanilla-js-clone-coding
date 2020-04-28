const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

/**
 * 혹은 이렇게 쓰거나
 * if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
 */

//NOTE:toggle를 쓰면 위에 했던 모든 것을 요약하는 것과 같다.
//class가 거기 있는지 체크해서 있으면 add 없으면 remove
/*
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
*/

function init() {
  title.addEventListener('click', handleClick);
}

init();
