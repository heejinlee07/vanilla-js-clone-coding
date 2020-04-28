const title = document.querySelector('#title');

const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = '#7f8c8d';

//아래 init함수가 있으므로 첫 번째 조건은 참
function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener('click', handleClick);
}

init();

function handleOffline() {
  console.log('lalala');
}

function handleOnline() {
  console.log('welcome back');
}

window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);
