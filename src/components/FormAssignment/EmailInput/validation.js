import { emailInputId } from "./EmailInput";

export function getEmailInput() {
  return document.getElementById(emailInputId);
}
export function getEmailInputError() {
  return document.querySelector(`#${emailInputId} + .error`);
}

export function handleEmailInput() {
  const email = getEmailInput();
  const emailError = getEmailInputError();

  if (email.validity.valid) {
    emailError.innerText = "";
    emailError.className = "error";
  } else {
    showError();
  }
}

function showError() {
  const email = getEmailInput();
  const emailError = getEmailInputError();
  let errorMessage = "Please enter a valid email address.";

  if (email.validity.valueMissing) {
    errorMessage = "This form must be submitted with an email address.";
  }

  emailError.innerText = errorMessage;
  emailError.className = "error active";
}
