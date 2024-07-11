const form = document.querySelector('.footer__form');
const formInputs = document.querySelectorAll('.footer__form input, .footer__form textarea');

function checkInputs(event) {
  event.preventDefault();
  let isValid = true;

  formInputs.forEach((input) => {
    const inputWrapper = input.closest('.input__wrapper');
    const errorIcon = inputWrapper.querySelector('.error__icon');
    const errorMsg = inputWrapper.querySelector('.error__msg');

    input.style.borderBottom = "1px solid transparent"; 
    errorIcon.style.display = "none";
    errorMsg.style.display = "none";
    errorMsg.textContent = "";

    if(input.validity.valueMissing) {
      errorIcon.style.display = "flex";
      errorMsg.style.display = "block";
      errorMsg.textContent = "Can't be empty";
      input.style.borderBottom = "1px solid #FF6F5B";
      isValid = false;
    } else {
      errorIcon.style.display = "none";
      errorMsg.style.display = "none";

      if (input.id === 'name') {
        const name = input.value.trim();
        const regexName = /^[A-Za-zÀ-ú\s]+$/;
        
        if (!regexName.test(name)) {
          errorIcon.style.display = "flex";
          errorMsg.style.display = "block";
          errorMsg.textContent = "Sorry, invalid format here";
          input.style.borderBottom = "1px solid #FF6F5B";
          isValid = false;
        }
        else {
          input.style.borderBottom = "1px solid #4EE1A0";
        }
      }
    }

    if (input.id === 'email') {
      if (input.validity.valueMissing) {
        input.style.borderBottom = "1px solid #ccc"; // Resetando a borda para o estado inicial
        errorIcon.style.display = "flex";
        errorMsg.style.display = "block";
        errorMsg.textContent = "Can't be empty";
        input.style.borderBottom = "1px solid #FF6F5B";
        isValid = false;
      } else if (input.validity.typeMismatch) {
        input.style.borderBottom = "1px solid #FF6F5B";
        errorIcon.style.display = "flex";
        errorMsg.style.display = "block";
        errorMsg.textContent = "Sorry, invalid format here";
        isValid = false;
      } else {
        input.style.borderBottom = "1px solid #4EE1A0"; // Borda verde para valor válido
      }
    }
  })

  if (isValid) {
    form.submit();
  }

}


form.addEventListener('submit', checkInputs)
