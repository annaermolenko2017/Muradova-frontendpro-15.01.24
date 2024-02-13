let body = document.body;
let table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    for (let j = 1; j <= 10; j++) {
        let element = row.insertCell();

        let number = (i - 1) * 10 + j;
        element.textContent = number;
    }
}

body.appendChild(table);