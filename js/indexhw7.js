// Quest 1.1
// null Так как мы привязали через bind новую функцию и дали ей значение null




// Quest 1.2
// Код выведет "Вася"
// Так как мы мы уже привязали значение Вася, вторую привязку проигнорирует


// Quest 1.3
// 5
// так как функция не потеряла свое свйоство sayHi.test = 5


// Quest 2.1
// Внутри функции askPassword вызываем обычные функции ok и fail без контекста
// function askPassword(ok, fail) {
// let password = prompt("Password?", "");
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: "Вася",
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(() => user.loginOk(), () => user.loginFail());



// Quest 2.2

// askPassword(() => user.login(true), () => user.login(false));


// Quest 2.3
// const elem = { value: "Привет" };
// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }
// func = func.bind(elem);
// func("Иванов", "Иван"); 
// func("Петров", "Петр"); 


// Quest 3.1
// function createTimer(start, end) {
//   let value = start; 
//   return function () {
//     if (value < end) return;
//     console.log(value);
//     if (value === end) {
//       console.log("Таймер завершил работу");
//     }
//     value--;
//   };
// }
// const tick = createTimer(3, 0);


// Quest 4.3
function makeVolume(height) {
  return function(length, width) {
    return height * length * width;
  };
}

const volumeHeight10 = makeVolume(10);

console.log(volumeHeight10(2, 3)); 
console.log(volumeHeight10(4, 5)); 