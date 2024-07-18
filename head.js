function includeHTML() {
    const includeElements = document.querySelectorAll('[data-include]');
    includeElements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => el.innerHTML = data)
            .catch(error => console.log('Error loading HTML:', error));
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout');
    
    // Assuming you have a function logoutUser() that handles logout logic
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Call your logout function or redirect to logout page
        // Example: logoutUser();
        alert('Logged out successfully');
        // Redirect to logout page if needed
        window.location.href = 'login.html';
    });
});

