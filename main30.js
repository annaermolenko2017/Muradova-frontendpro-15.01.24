function generateList(array) {
    let list = document.createElement('ul');

    array.forEach(function (element) {
        let listItem = document.createElement('li');
        if (Array.isArray(element)) {
            listItem.appendChild(generateList(element));
        } else {
            listItem.textContent = element;
        }
        list.appendChild(listItem);
    });

    return list;
}

let array = [1, 2, [3, 4, [4.1, 4.2, 4.3], 5], 6];
let result = generateList(array);
document.body.appendChild(result);