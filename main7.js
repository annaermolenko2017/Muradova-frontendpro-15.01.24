/*1.Вивести на сторінку в один рядок через кому числа від 10 до 20.

let x = 20;
let arr = [];

for(let i = 10; i <= x; i++) {
        arr.push(i);
}

console.log(arr);*/

/*2.Вивести квадрати чисел від 10 до 20.

for(let i = 10; i <=20; i++) {
    console.log(`${i} = ${i * i}`);
}*/

/*3.Вивести таблицю множення на 7.

for(let j = 1; j <=9; j++) {
    console.log(`7 * ${j} = ${7 * j}`);
}*/

/*4.Знайти суму всіх цілих чисел від 1 до 15.

let x = 15;
let sum = 0;

for(let i = 1; i <= x; i++) {
    sum += i;
}

console.log(sum);*/

/*5.Знайти добуток усіх цілих чисел від 15 до 35.

let x = 35;
let result = 1;

for(let i = 15; i <= x; i++) {
    result *= i;
}

console.log(result);*/

/*6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let x = 500;
let sum = 0;

for(let i = 1; i <= x; i++) {
    sum += i;
}

let result = sum / x;

console.log(`${result}`);*/

/*7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

let x = 80;
let arr = [];
let sum = 0;

for(let i = 30; i <= x; i++) {
    if(i % 2 === 0) {
        arr.push(i);
    }
}
for(let j = 0; j < arr.length; j++) {
    sum += arr[j];
}

console.log(sum);*/

/*8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let x = 200;
let arr = [];

for(let i = 100; i <= x; i++) {
    if(i % 3 === 0) {
        arr.push(i);
    }
}

console.log(arr);*/

/*9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let x = 20;

for(let i = 1; i <= x; i++) {
    if(x % i === 0) {
        console.log(i);
    }
}*/

/*10.Визначити кількість його парних дільників.

let x = 20;
let counter = 0;

for(let i = 1; i <= x; i++) {
    if(x % i === 0 && i % 2 === 0) {
        counter++;
    }
}

console.log(counter);*/

/* 11.Знайти суму його парних дільників.

let x = 20;
let arr = [];
let sum = 0;

for(let i = 1; i <= x; i++) {
    if(x % i === 0 && i % 2 === 0) {
        arr.push(i);
    }
}
for(let j = 0; j < arr.length; j++) {
    sum += arr[j];
}

console.log(sum);*/

/*12.Надрукувати повну таблицю множення від 1 до 10.

for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}*/

