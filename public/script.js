// Handle Sign In
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login request to the server
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        if (data.success) {
            // Hide login form and show disaster form if login is successful
            document.getElementById('authForm').style.display = 'none';
            document.getElementById('disasterForm').style.display = 'block';
        } else {
            // Show error message if login failed
            document.getElementById('errorMsg').innerText = data.message || 'Login failed. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error during login request:', error);
        document.getElementById('errorMsg').innerText = 'An error occurred. Please try again later.';
    });
});
