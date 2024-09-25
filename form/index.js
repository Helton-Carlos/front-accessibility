document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', (event) => {
    let valid = true;

    clearErrors();

    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Por favor, insira um e-mail válido.");
      valid = false;
    }

    if (passwordInput.value.length < 8) {
      showError(passwordInput, "A senha deve ter pelo menos 8 caracteres.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }

  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((msg) => msg.remove());
  }
});
