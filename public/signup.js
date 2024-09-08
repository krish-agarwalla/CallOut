// Handle Sign Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        document.getElementById('signupError').innerText = 'Passwords do not match!';
        return;
    }

    // Store user data (can be integrated with backend in future)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.username === newUsername);

    if (userExists) {
        document.getElementById('signupError').innerText = 'Username already exists. Please choose another one.';
    } else {
        users.push({ username: newUsername, email, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Redirecting to Sign In page...');
        window.location.href = 'index.html';  // Redirect to Sign-In page
    }
});
