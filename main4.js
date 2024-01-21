//Друга версія
let number1 = +prompt('Введіть цифру 2!');
let number2 = +prompt('Введіть цифру 2!');

//Алертом виводиться по черзі
// alert(`${number1} + ${number2} = ${number1 + number2}`);
// alert(`${number1} - ${number2} = ${number1 - number2}`);
// alert(`${number1} * ${number2} = ${number1 * number2}`);
// alert(`${number1} / ${number2} = ${number1 / number2}`);

//У консолі видно всі результати разом
console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);


//Перша версія
/*let num1 = +prompt('Введіть число 2!');
let num2 = +prompt('Введіть число 2!');
let sign = prompt('Введіть одну з цих операцій: + - * /');


switch (sign) {
    case '+':
        alert(`${+num1 + sign +num2} = ${num1 + num2}`);
        break;
    case '-':
        alert(`${+num1 + sign +num2} = ${num1 - num2}`);
        break;
    case '*':
        alert(`${+num1 + sign +num2} = ${num1 * num2}`);
        break;
    case '/':
        alert(`${+num1 + sign +num2} = ${num1 / num2}`);
        break;
    default :
        alert('Ви ввели не знак!!!');
}*/
