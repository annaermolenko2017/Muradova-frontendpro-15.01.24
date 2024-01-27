//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

/*1.Знайти суму та кількість позитивних елементів.

let count = 0;
arr.forEach(function (element) {
    if(element > 0) {
        count++;
    }
});

let newArr = arr.filter(function (el) {
     return el > 0;
 });

let sum = newArr.reduce(function (accum, currentValue) {
    return accum + currentValue;
}, 0);

console.log(sum);

console.log(count);*/

//2.Знайти мінімальний елемент масиву та його порядковий номер.

/*Перший спосіб - максимально короткий:

let minValue = Math.min.apply(null, arr);

console.log(minValue);

console.log(arr.indexOf(minValue));*/

/*Другий спосіб - з розглянутого матеріалу:

let minEl = arr[0];
arr.forEach(function (elem, index) {
    if(index > 0 ){
        if(minEl > elem){
            minEl = elem;
        }
    }
});

console.log(minEl);

console.log(arr.indexOf(minEl));*/

//3.Знайти максимальний елемент масиву та його порядковий номер.

/*Перший спосіб - максимально короткий:

let maxValue = Math.max.apply(null, arr);

console.log(maxValue);

console.log(arr.indexOf(maxValue));*/

/*Другий спосіб - з розглянутого матеріалу:

let maxEl = arr[0];

arr.forEach(function (elem, index) {
    if(index > 0 ){
        if(maxEl < elem){
            maxEl = elem;
        }
    }
});

console.log(maxEl);

console.log(arr.indexOf(maxEl));*/

/*4.Визначити кількість негативних елементів.

let count = 0;
arr.forEach(function (element) {
    if(element < 0) {
        count++;
    }
})

console.log(count);*/

/*5.Знайти кількість непарних позитивних елементів.

let count = 0;
arr.forEach(function (element) {
    if(element % 2 !==0 && element > 0) {
        count++;
    }
})

console.log(count);*/

/*6.Знайти кількість парних позитивних елементів.

let count = 0;

arr.forEach(function (element) {
    if(element % 2 ===0 && element > 0) {
        count++;
    }
})

console.log(count);*/

/*7.Знайти суму парних позитивних елементів.

let newArr = arr.filter(function (el) {
    return el % 2 ===0 && el > 0;
})

let sum = newArr.reduce(function (accum, currentValue) {
    return accum + currentValue;
}, 0);

console.log(sum);*/

/*8.Знайти суму непарних позитивних елементів.

let newArr = arr.filter(function (el) {
    return el % 2 !==0 && el > 0;
})

let sum = newArr.reduce(function (accum, currentValue) {
    return accum + currentValue;
}, 0);

console.log(sum);*/

/*9.Знайти добуток позитивних елементів.

let newArr = arr.filter(function (el) {
    return el > 0;
})

let result = newArr.reduce(function (accum, currentValue) {
    return accum * currentValue;
}, 1);

console.log(result);*/

/*10.Знайти найбільший серед елементів масиву, інші обнулити.

let maxValue = Math.max.apply(null, arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxValue) {
        arr[i] = 0;
    }
}

console.log(maxValue);

console.log(arr);*/


