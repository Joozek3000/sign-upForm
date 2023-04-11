document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    validatePassword();
  });

function validatePassword() {
  var password = document.getElementById('password').value;
  var regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  if (!regex.test(password)) {
    alert(
      'Password must have at least 8 characters, one capital letter, one number, and one special character.'
    );
    return false;
  }
  return true;
}

document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    if (validatePassword()) {
      // Submit the form
    }
  });

function validateForm() {
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('confirm-password').value;
  var regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  var passwordField = document.getElementById('password');
  var confirmField = document.getElementById('confirm-password');
  var valid = true;

  if (!regex.test(password)) {
    document.querySelector('.password-error').style.display = 'block';
    passwordField.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    valid = false;
  } else {
    document.querySelector('.password-error').style.display = 'none';
    passwordField.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
  }

  if (confirm_password !== password) {
    document.querySelector('.confirm-password-error').style.display = 'block';
    confirmField.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    valid = false;
  } else {
    document.querySelector('.confirm-password-error').style.display = 'none';
    confirmField.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
  }

  return valid;
}

var passwordField = document.getElementById('password');
var confirmField = document.getElementById('confirm-password');

passwordField.addEventListener('input', function () {
  validateForm();
});

confirmField.addEventListener('input', function () {
  validateForm();
});

document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });
