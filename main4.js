let num1 = +prompt('Введіть число 2!');
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
}
