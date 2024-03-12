function searchPost() {
    const postIdInput = document.getElementById('postIdInput');
    const postContainer = document.getElementById('postContainer');
    const commentsBtn = document.getElementById('commentsBtn');
    const commentsContainer = document.getElementById('commentsContainer');

    postContainer.innerHTML = '';
    commentsBtn.style.display = 'none';
    commentsContainer.innerHTML = '';

    const postId = postIdInput.value;

    if (postId < 1 || postId > 100 || isNaN(postId)) {
        alert('Введіть коректний ID поста від 1 до 100.');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            postContainer.innerHTML = `
            <h2>Пост №${post.id}</h2>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;

            commentsBtn.style.display = 'block';
        })
        .catch(error => {
            console.error('Помилка при запиті поста:', error);
            alert('Виникла помилка при запиті поста.');
        });
}
function getComments() {
    const postIdInput = document.getElementById('postIdInput');
    const commentsContainer = document.getElementById('commentsContainer');
    const postId = postIdInput.value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            commentsContainer.innerHTML = '<h3>Коментарі:</h3>';
            comments.forEach(comment => {
                commentsContainer.innerHTML += `
              <p><strong>${comment.name}</strong>: ${comment.body}</p>
            `;
            });
        })
        .catch(error => {
            console.error('Помилка при запиті коментарів:', error);
            alert('Виникла помилка при запиті коментарів.');
        });
}