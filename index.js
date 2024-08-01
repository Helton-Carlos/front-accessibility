// Import stylesheets
import './index.css';

document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    let isValid = true;

    const emailHelp = document.getElementById('emailHelp');
    const passwordHelp = document.getElementById('passwordHelp');
    emailHelp.textContent = '';
    passwordHelp.textContent = '';

    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      emailHelp.textContent = 'Por favor, insira um e-mail válido.';
      emailHelp.classList.remove('visually-hidden');
      email.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      email.setAttribute('aria-invalid', 'false');
    }

    const password = document.getElementById('password');
    if (password.value.length < 8) {
      passwordHelp.textContent = 'A senha deve ter pelo menos 8 caracteres.';
      passwordHelp.classList.remove('visually-hidden');
      password.setAttribute('aria-invalid', 'true');
      isValid = false;
    } else {
      password.setAttribute('aria-invalid', 'false');
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
