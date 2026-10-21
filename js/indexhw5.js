// Задание 1.1
function getReturnNum (a){;
return a**2;
};
let result1 = getReturnNum(4);
console.log(result1);



// Задание 1.2
function getSum(a, b){
    return a + b ;
}
let result2 = getSum(2, 5);
console.log(result2);


// Задание 1.3
function getOperation(a, b, c = 1){
    return (a - b) / c
}
let result3 = getOperation(6, 3, 2)
console.log(result3);



// Задание 1.4
let a = 3
function getWeekDay(a){
    let day = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресение'
    }
    return (a >= 1 && a <= 7) ? day[a] : 'Введите день недели'
}
let result4 = getWeekDay(4)
console.log(result4);


// Quest 2.1
function getNumEqua (a, b){
     return a === b
}
let result5 =  getNumEqua(2, 3)
console.log(result5);


// Quest 2.2
function getSumGreater(a, b){
  return a + b > 10  
}
let result6 = getSumGreater(6, 5)
console.log(result6)



// Quest 2.3
function getNegative(a){
    return a < 0
}
let result7 = getNegative(-3)
console.log(result7);


// Quest 2.4
function isNumberInRang(a){
    if (a > 0 && a < 10){
        return 1 === 1
    }
    else {return 1 === 0}
}
let result8 = isNumberInRang(11)
console.log(result8);



// Quest 2.5
function isEven(a){
    return a % 2 === 0 
}
let result9 = isEven(3)
console.log(result9);


// Quest 3.1
function getDigitsSum(a){
 let sum = 0
 let str = String(a)
 for (let i = 0; i < str.length; i++)
    sum += Number(str[i])
return sum
}
let result10 = getDigitsSum(554)
console.log(result10);


// Quest 3.2
function getDigitsSum(b) {
  let sum = 0;
  const str = String(b);
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}

const yearsWithSum13 = [];

for (let year = 1; year <= 2020; year++) {
  if (getDigitsSum(year) === 13) {
    yearsWithSum13.push(year);
  }
}
console.log(yearsWithSum13);



// Quest 3.3
function getDigitsSum(c) {
  let sum = 0;
  const str = String(c);
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}

function getDigitalRoot(num) {
  if (num < 0 ) {
    console.log('Ожидается неотрицательное целое число');
  }

  let current = num;         
  while (current > 9) {       
    current = getDigitsSum(current);
  }
  return current;             
}

const result13 = getDigitalRoot(4266426);
console.log(result13);



// Quest 4.1
let isPalindrome = (str) => {
  let reversedStr = str.split('').slice().reverse().join('');
  return str === reversedStr;
};

console.log(isPalindrome('алла')); 