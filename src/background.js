const body = document.querySelector('body');

const IMG_NUMBER = 5;

function handleImgLoad() {
  console.log('finished loading');
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber + 1}.jpg`;
  // +1을 하는 이유는 Math.random()함수가 0을 줄 수도 있기 때문.
  image.classList.add('bgImage');
  body.appendChild(image);

  //API를 사용한다면 아래의 내용이 필요하다.
  // image.addEventListener('loadend', handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

/*
NOTE:
Math.random() : 0.4783739827처럼 랜덤한 숫자를 출력
Math.floor(): 주어진 숫자와 같거나 작은 정수 중 가장 큰 수 반환
ex) Math.floor( 45.95); //  45
Math.ceil(): 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
EX) Math.ceil(.95);    // 1
*/

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
