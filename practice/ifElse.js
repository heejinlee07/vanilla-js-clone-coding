if ('10' === 10) {
  console.log('hi');
} else if ('10' === '10') {
  console.log('lalala');
} else {
  console.log('ho');
}

//prompt는 아주 오래된 것. 지금은 쓰지 않음.
const age = prompt('how old are you?');

if (age >= 18 && age < 21) {
  console.log('you can drink but you should not');
} else if (age > 21) {
  console.log('go ahed');
} else {
  console.log('too young');
}
