const nicoInfo = {
  name: 'nico',
  age: 33,
  gender: 'male',
  isHandsome: true,
};
console.log(nicoInfo.favFood);

//함수 외부에 있는 데이터를 함수 내부에 전달
function sayHello(potato) {
  console.log('hello!', potato);
}

sayHello('heejin');

function sayHello2(name, age) {
  console.log('hello!', name, 'you have', age, 'years of age.');
}

sayHello2('heejin', 15);

//템플릿 리터럴
function sayHello3(name, age) {
  console.log(`hello ${name} you are ${age} years old`);
}

sayHello3('heejin', 15);

function sayHello4(name, age) {
  console.log(`hello ${name} you are ${age} years old`);
}

//여기서 선언한 greeHeejin 변수는 sayHello4 함수의 리턴 값과 같다.
const greetHeejin = sayHello4('heejin', 14);
console.log(greetHeejin);

//이 상태에서는 undefined.
//return이 명시적으로 존재해야 원하는 값이 출력됨.

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(5, 5);
console.log(plus);

const calculatorAll = {
  plus: function (x, y) {
    return x + y;
  },
  minus: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  division: function (x, y) {
    return x / y;
  },
  power: function (x, y) {
    return x ** y;
  },
};

const calculatorResult = {
  plus: calculatorAll.plus(5, 5),
  minus: calculatorAll.minus(5, 5),
  multiply: calculatorAll.multiply(5, 5),
  division: calculatorAll.division(5, 5),
  power: calculatorAll.power(5, 5),
};

console.log(calculatorResult);
