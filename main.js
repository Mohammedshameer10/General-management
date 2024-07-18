window.addEventListener('load', function() {
    // Check if the user is logged in
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
        window.location.href = 'login.html'; // Redirect to login page if not logged in
    } else {
        const username = sessionStorage.getItem('username');
        document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
    }

    // Add event listener to the logout button
    document.getElementById('logout-button').addEventListener('click', function() {
        sessionStorage.removeItem('loggedIn'); // Clear login status
        sessionStorage.removeItem('username'); // Clear stored username
        window.location.href = 'login.html'; // Redirect to login page
    });
});