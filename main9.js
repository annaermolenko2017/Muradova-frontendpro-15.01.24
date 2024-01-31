//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

let array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, el) {
    if(arr.indexOf(el) !== -1) {
        arr.splice(arr.indexOf(el), 1);
    } else {
        console.log('Not found!')
    }
}

removeElement(array,5);

console.log(array);

/*Інший приклад:
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = array1.filter(function (element) {
    return element !== 5;
});

console.log(array2);*/

/*Інший приклад:
let arrayX = [1, 2, 3, 4, 5, 6, 7];
let arrayY = [];

for (let i = 0; i < arrayX.length; i++) {
    if (arrayX[i] !== 5) {
        arrayY.push(arrayX[i]);
    }
}

console.log(arrayY);*/