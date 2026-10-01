// Задание 1
console.log('Hello World'); 



//Задание 2
let age = 28;   
const nameWeapon = 'Автомат Калашникова';
let bool = true;
let bag = null;
let userName;

//Задание 3
console.log(`${age}, ${nameWeapon}, ${bool}, ${bag}, ${userName}`); 




//задание 4
console.log(typeof(age), typeof(nameWeapon), typeof(bool), typeof(bag), typeof(userName)); 

console.log(typeof age, typeof nameWeapon, typeof bool, typeof bag, typeof userName);
//потому что typeof оператор




//Задание 5
//const nameWeapon = 'M4A1' SyntaxError: Identifier 'nameWeapon' has already been declared



//Задание 6
const iUser = {
    name: 'Vlad',
    age: 28
}
//iUser.name = 'Oleg';
//console.log(iUser.name) // Сработало

//iUser = {
    //name: 'Oleg',
    //age: 55}
//console.log(iUser.name) TypeError: Assignment to constant variable. Не получилось, потому что мы пытаемся переприсвоить const новое значение





//Задание 7 
//let enemy = {
   /// name: 'Vlad',
    //age: 28
//};
//enemy.name = 'Oleg'
//console.log(user.name) Получилось

//enemy = {
   //  name: 'Oleg',
     // age: 55
 // };
//  console.log(enemy.name) Получилось, потому что не const, а let



//Задание 8
var enemy = {
    name: 'Vlad',
    age: 28
};
// enemy.name = 'Oleg'
// console.log(enemy.name) Получилось

//enemy = {
    //  name: 'Oleg',
    //  age: 55
//   };
//  console.log(enemy.name)// при использовании var, чаще могут быть ошибки ,так как var не блочная и видна по всей области
