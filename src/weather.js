const weather = document.querySelector('.js-weather');

/*
NOTE:
API(application programming interface): 다른 서버로부터 손쉽게 데이터를 가져옴
데이터만 가져오는 것. 디자인이나 다른 것은 필요없다.
특정 웹사이트로부터 데이터를 얻거나 컴퓨터끼리 소통하기 위해 고안됨.
*/
const API_KEY = '114ef48f8f39eb75bad1e7b9da15a5c5';
const COORDS = 'coords';

function getWeather(lat, lng) {
  // 데이터를 얻기 위해 fetch사용
  // 데이터가 넘어 온 이후에 then사용
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//좌표를 가져오는데 성공했을 때 사용할 함수
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

//좌표를 가져오는데 실패했을 때 사용할 함수
function handleGeoError() {
  console.log('Cant access geo location');
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
