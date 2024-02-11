/*1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).*/

/*let number = '';
for (let i = 20; i <= 30; i=i+0.5) {
    number += i + ' ';
}
console.log(number.trim());*/

/*2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.*/

/*for(let i = 10; i < 110; i+= 10) {
    console.log(i, i * 27);
}*/

/*3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.*/

/*function squareOfN(N) {
    for (let i = 1; i <=100; i++) {
        let numberSquare = i * i;
        if (numberSquare <= N) {
            console.log(numberSquare);
        }
    }
}

console.log(squareOfN(300));*/

/*4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).*/

/*function simpleOrCompNumb(number) {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return "Складне число!";
            }
        }
        return "Просте число!";
    } else {
        return "Число має бути більше 1!";
    }
}

console.log(simpleOrCompNumb(2));
console.log(simpleOrCompNumb(9));*/

/*5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).*/

/*function degreeOfThree(number) {
    while (number % 3 == 0) {
        number /= 3;
    }
    return number == 1;
}

console.log(degreeOfThree(243));
console.log(degreeOfThree(325));*/