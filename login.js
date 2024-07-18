document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if entered credentials match stored credentials
    if (username === storedUsername && password === storedPassword) {
        sessionStorage.setItem('loggedIn', true); // Store login status
        sessionStorage.setItem('username', username); // Store username in session
        window.location.href = 'main.html'; // Redirect to main dashboard
    } else {
        alert('Invalid username or password');
    }
});