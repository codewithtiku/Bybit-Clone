
    function LoginFunc() {
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;

        // Check if the email and password match what's stored in localStorage
        if (localStorage.getItem(email) === password) {
            if (email === 'harshrao@gmail.com' && password === 'harshrao') {
                localStorage.removeItem('non-vip');
                localStorage.setItem('vip', true);
            } else if (email === 'cardib013@gmail.com' && password === '12345678')
                 {
                localStorage.removeItem('non-vip');
                localStorage.setItem('vip', true);
            } else {
                localStorage.removeItem('vip');
                localStorage.setItem('non-vip', true);
            }
            window.location.href = 'afterlogin.html';
        } else {
            document.getElementById('login-error').innerHTML = `<small><p> Incorrect account information </p></small>`;
        }
    }

    let emailInput = document.getElementById('login-email');
    let passwordInput = document.getElementById('login-password');
    let loginBtn = document.getElementById('btn-login');

    // Add input event listeners to the email and password fields
    emailInput.addEventListener('input', validateLoginForm);
    passwordInput.addEventListener('input', validateLoginForm);
    loginBtn.classList.add('disabled');

    // Function to validate the login form
    function validateLoginForm() {
        let email = emailInput.value;
        let password = passwordInput.value;

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValidEmail = emailRegex.test(email);
        let isPasswordValid = password.length >= 8;

        // Enable or disable login button based on form validity
        if (email !== '' && password !== '' && isValidEmail && isPasswordValid) {
            loginBtn.classList.remove('disabled');
        } else {
            loginBtn.classList.add('disabled');
        }
    }

    loginBtn.addEventListener('click', LoginFunc);

