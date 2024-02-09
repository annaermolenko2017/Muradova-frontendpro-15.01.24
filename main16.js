const div = document.querySelector('.myDiv')
document.querySelector('#myInput').addEventListener('focus', () => {
    div.style.display = 'block';
    console.log("focus");
});

document.querySelector('#myInput').addEventListener('blur', () => {
    console.log("unfocus");
    div.style.display = 'none';
});