document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store username and password in localStorage (for demo purposes)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! Please login.');
    window.location.href = 'login.html'; // Redirect to login page
});