function validateForm() {
    const inputName = document.getElementById('name').value.trim();
    const inputPassword = document.getElementById('password').value.trim();

    fetch('/api/verify/')
        .then(response => response.json())
        .then(data => {
            const validName = data.name;
            const validPassword = data.password;

            if (inputName !== validName) {
                document.getElementById('message').innerText = 'Name does not match';
                return;
            }
            if (inputPassword !== validPassword) {
                document.getElementById('message').innerText = 'Password does not match';
                return;
            }

            document.getElementById('message').innerText = 'Successfully signed in!';
            
            localStorage.setItem('username', validName);
            
            window.location.href = '/profile/';
        })
        .catch(error => {
            console.error('Error fetching message:', error);
            document.getElementById('message').innerText = 'Error verifying credentials';
        });

    return false;
}

function fetchMessage() {
    document.getElementById('message').innerText = 'Fetched message from server!';
}

function removeMessage() {
    document.getElementById('message').innerText = '';
}

function openEditProfileModal() {
    const name = localStorage.getItem('username');
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-email').value = document.getElementById('profile-email').innerText.split(': ')[1];
    document.getElementById('editProfileModal').style.display = 'block';
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'none';
}

function saveProfile() {
    const newName = document.getElementById('edit-name').value;
    const newEmail = document.getElementById('edit-email').value;

    localStorage.setItem('username', newName);
    document.getElementById('profile-name').innerText = `Name: ${newName}`;
    document.getElementById('profile-email').innerText = `Email: ${newEmail}`;

    closeEditProfileModal();
}

function logout() {
    localStorage.removeItem('username');
    window.location.href = '/';
}
