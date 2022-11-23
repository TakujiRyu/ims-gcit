function validate() {
    // var email = document.getElementById('email').value
    // var password = document.getElementById('password').value

    // if(email == 'admin@gmail.com' && password == 'user') {
    //     alert('Login Successful')
    //     return false
    // } else {
    //     alert('Login Failed')
    // }

    isValid = true;
    if(document.getElementById("email").value == ""){
    isValid = false;
    document.getElementById("emailValidationError").classList.remove("hide");
    }else{
    isValid = true;
    if(document.getElementById("emailValidationError").classList.contains("hide"));
    document.getElementById("emailValidationError").classList.add("hide");
    }
    return isValid;
}

// const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
// const confirmPasswordEl = document.querySelector('#confirm-password');
// const form = document.querySelector('#signup');

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent the form from submitting

    // validate fields
    let isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();
    let isFormValid = isEmailValid && isPasswordValid;
    // submit to the server if the form is valid
    if (isFormValid) {
    }
});

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.')
    } else {
    showSuccess(emailEl);
    valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
    showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
    showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character');
    } else {
    showSuccess(passwordEl);
    valid = true;
    }
    return valid;
};

const isPasswordSecure = (password) => {
    const re = new
    RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};