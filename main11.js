const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let key = '';

    for (let i = 0; i < length; i++) {
        let result = Math.floor(Math.random() * (characters.length + 1));
        key += characters[result];
    }
    return key;
};

const key = generateKey(16, characters);

console.log(key);