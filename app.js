
document.getElementById('registerForm').addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();


    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; //

    let isValid = true;
    let messages = [];


    if (username.trim() === '') {
        messages.push('Username is required.');
        isValid = false;
    }


    if (email.trim() === '') {
        messages.push('Email is required.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        messages.push('Invalid email format.');
        isValid = false;
    }

    if (password.trim() === '') {
        messages.push('Password is required.');
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        messages.push('Password must be at least 8 characters long, and include one uppercase letter, one lowercase letter, and one number.');
        isValid = false;
    }


    if (confirmPassword.trim() === '') {
        messages.push('Confirm Password is required.');
        isValid = false;
    } else if (password !== confirmPassword) {
        messages.push('Passwords do not match.');
        isValid = false;
    }


    if (!isValid) {
        alert(messages.join('\n'));
    } else {
        alert('Registration successful!');
        document.getElementById('registerForm').submit();
    }
}



























