// Задані дані
const smiles = [
    { smile: '🥰', votes: 0 },
    { smile: '😀', votes: 0 },
    { smile: '🙂', votes: 0 },
    { smile: '😐', votes: 0 },
    { smile: '😒', votes: 0 }
];

// Функція для виведення смайликів та лічильників
function showVotingOptions(options) {
    const votingRow = document.getElementById('votingRow');
    votingRow.innerHTML = ''; // Очищення даних перед оновленням

    options.forEach((option, index) => {
        const smilesDiv = document.createElement('div');
        smilesDiv.innerHTML = `<span class="smiles" onclick="vote(${index})">${option.smile}</span>`;
        votingRow.appendChild(smilesDiv);

        const countsDiv = document.createElement('div');
        countsDiv.textContent = option.votes;
        votingRow.appendChild(countsDiv);
    });
}

// Функція зміни лічильника під час голосування
function vote(index) {
    smiles[index].votes++;
    showVotingOptions(smiles);
}

// Ініціалізація програми
showVotingOptions(smiles);

// Приклад додавання нового варіанта відповіді
function addNewOption(smile) {
    const newOption = { smile, votes: 0 };
    smiles.push(newOption);
    showVotingOptions(smiles);
}

// Використання функції для додавання нового варіанта
addNewOption('👋');