//array
//데이터를 저장, 리스트 같은 것.

const monday = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';

console.log(monday, tue, wed, thu, fri);

//위와 같이 필요한 데이터를 나열할 수 있지만 비효율적.
//array는 여러 string을 하나로 묶는 것이니 이를 사용한다.

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
console.log(daysOfWeek);

//object: 각 value에 이름을 줄 수 있다는 점이 array와 다른 점.

const nicoInfo = {
  name: 'nico',
  age: 33,
  gender: 'male',
  isHandsome: true,
  favMovies: ['along the gods', 'LOTR', 'Oldboy'],
  favFood: [
    {
      name: 'kimchi',
      fatty: false,
    },
    {
      name: 'cheese burger',
      fatty: true,
    },
  ],
};
console.log(nicoInfo);
console.log(nicoInfo.gender);
nicoInfo.gender = 'female';
console.log(nicoInfo.gender);

/**
 * NOTE: 데이터를 정렬하는 방법
 * array: DB에서 가져온 리스트 데이터일 경우 사용
 * object: 데이터를 합쳐서 만들어야 한다면, 예를 들어
 * 많은 사람들을 array로 만든다면 사용. object를 array 안에 넣을 수 있다.
 * (array를 object에 넣는 것도 가능.)
 */
