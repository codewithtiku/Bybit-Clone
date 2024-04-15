// Get references to the email, password, and signup button elements
let emailInput = document.getElementById('signup-email');
let passwordInput = document.getElementById('signup-password');
let signupBtn = document.getElementById('btn-signup');

// Add input event listeners to the email and password fields
emailInput.addEventListener('input', validateSignupForm);
passwordInput.addEventListener('input', validateSignupForm);

// Initially disable the signup button
signupBtn.classList.add('disabled');

// Function to validate the signup form
function validateSignupForm() {
    let email = emailInput.value;
    let password = passwordInput.value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidEmail = emailRegex.test(email);
    let isPasswordValid = password.length >= 8;

    // Enable or disable signup button based on form validity
    if (email !== '' && password !== '' && isValidEmail && isPasswordValid) {
        signupBtn.classList.remove('disabled');
        signupBtn.addEventListener('click', SignupFunc);
        function SignupFunc(){
            localStorage.setItem(email, password);
        }
    } else {
        signupBtn.classList.add('disabled');
    }
}