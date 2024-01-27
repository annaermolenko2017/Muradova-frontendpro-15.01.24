//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//Наприклад:

let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(4, 1)

console.log(array);

//Інший приклад:

let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = array1.filter(function (element) {
    return element !== 5;
});

console.log(array2);

//Інший приклад:

let arrayX = [1, 2, 3, 4, 5, 6, 7];
let arrayY = [];

for (let i = 0; i < arrayX.length; i++) {
    if (arrayX[i] !== 5) {
        arrayY.push(arrayX[i]);
    }
}

console.log(arrayY);