const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', e => {
    e.preventDefault();
    if (checkInput()) {
        // Show success message
        alert("Register Successfully");
    }
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username Cannot Be Blank');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email Cannot Be Blank');
        isValid = false;
    } else if (!isEmail(emailValue)) {
        setError(email, 'Not a valid Email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password Cannot Be Blank');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (cpasswordValue === '') {
        setError(cpassword, 'Password Cannot Be Blank');
        isValid = false;
    } else if (passwordValue !== cpasswordValue) {
        setError(cpassword, 'Passwords Do Not Match');
        isValid = false;
    } else {
        setSuccess(cpassword);
    }

    return isValid;
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
