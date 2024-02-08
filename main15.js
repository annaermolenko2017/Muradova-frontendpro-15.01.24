/*1.Дано масив з елементами різних типів.
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/
/*function averageArr() {
    let array = ['try', 4, 'second', 3, 'third', 2, 'any', 3, 'two', 1, 2, 1, 2, 1, 2, 1, 2, 'one'];
    let sum = 0;
    let count = 0;

    for(let i = 0; i < array.length; i++){

        if (!isNaN(array[i])) {
            count += 1;
            sum += array[i];
        }
    }
    return  average = sum / count;
}

let result = averageArr();
console.log(result);*/

/*2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.
Обидва числа і знак виходять від користувача.*/

/*function doMath(x, znak, y) {
    x = +prompt("Введіть перше число!");
    y = +prompt("Введіть друге число!");
    znak = prompt("Введіть знак: +, -, *, /, %, ^ !");
    let result;

    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        case "^":
            result = Math.pow(x,y);
            break;
    }
    return result;
}

let functiondoMath = doMath();
console.log(functiondoMath);*/

/*3.Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач.
Значення всіх елементів всіх масивів задає користувач.*/

/*function sandwichAdd() {
    let arr = [];
    let amount = +prompt("Введіть кількість масивів!");

    for(let i = 0; i < amount; i++) {
        arr.push([]);

        let amount2 = prompt("Введіть кількість елементів у масиві!" + (i + 1));

        for(let j = 0; j < amount2; j++) {
            let elem = prompt("Введіть значення елементів масиву!" + (j + 1));
            arr[i].push([elem]);
        }
    }
    console.log(arr);
}

let functionResult = sandwichAdd();*/

/*4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
Вихідний рядок та символи для видалення задає користувач.*/

/*function myFunction(s){

    let res='';
    for(let i = 0; i < s; i++) {
        res+=s[i];
    }
    return res;
}

let str = prompt("Введіть буд-яке слово!");
let strDel = prompt("Яку букву видалити з введеного слова?");
let result = str.replace( strDel , myFunction );
console.log(result);*/
