let num1 = +prompt('Введіть перше число!');
let num2 = +prompt('Введіть друге число!');
let sign = prompt('Введіть одну з цих операцій: + - * /');


switch (sign) {
    case '+':
        console.log(`${+num1 + sign +num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${+num1 + sign +num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${+num1 + sign +num2} = ${num1 * num2}`);
        break;
    case '/':
        if(num2 === 0) {
            console.log('Ділення на нуль неможливе!');
        } else {
            console.log(`${+num1 + sign +num2} = ${num1 / num2}`);
        }
        break;
    default :
        console.log('Ви ввели не знак!!!');
}