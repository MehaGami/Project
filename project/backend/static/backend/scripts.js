function validateForm() {

    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const validName = "vasil";
    const validPassword = "123321";
    
    if (name !== validName) {
        document.getElementById('message').innerText = 'Name does not match';
        return false;
    }
    if (password !== validPassword) {
        document.getElementById('message').innerText = 'Password does not match';
        return false;
    }

    document.getElementById('message').innerText = 'Successfully signed in!';
    return true;
}

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