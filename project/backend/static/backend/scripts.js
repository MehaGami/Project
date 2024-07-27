function fetchMessage() {
    fetch('/api/message/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').innerText = data.message;
        })
        .catch(error => console.error('Error fetching message:', error));
}
function removeMessage() {
    fetch('/api/remove/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').innerText = data.message;
        })
        .catch(error => console.error('Error fetching message:', error));
}