function promptArrayLength() {
    return parseInt(prompt("Введіть довжину масиву:"));
}

function promptArrayElement(index) {
    return parseInt(prompt(`Введіть елемент масиву №${index + 1}:`));
}

function displayArray(message, arr) {
    document.write(`<p>${message}: ${arr.join(", ")}</p>`);
}

const length = promptArrayLength();
const array = Array.from({ length }, (_, i) => promptArrayElement(i));

displayArray("Вихідний масив", array);

array.sort((a, b) => a - b);
displayArray("Відсортований масив", array);

array.splice(1, 3);
displayArray("Масив після видалення елементів з 2 по 4", array);