function clearTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
}

function addRowToTable(post) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
        <td>${post.userId}</td>
    `;
    tableBody.appendChild(row);
}

function showAllPosts() {
    clearTable();
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => addRowToTable(post));
        })
        .catch(error => console.error('Error:', error));
}


function searchPostById(id) {
    clearTable();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            addRowToTable(post);
        })
        .catch(error => console.error('Error:', error));
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showAll').addEventListener('click', showAllPosts);

    document.getElementById('searchById').addEventListener('click', () => {
        const postId = document.getElementById('postId').value;
        if (postId) {
            searchPostById(postId);
        } else {
            alert('Por favor ingrese un ID de post');
        }
    });

    showAllPosts();
});