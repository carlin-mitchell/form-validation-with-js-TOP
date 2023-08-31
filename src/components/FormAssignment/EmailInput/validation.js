import { emailInputId } from "./EmailInput";

export function getEmailInput() {
  return document.getElementById(emailInputId);
}
export function getEmailInputError() {
  return document.querySelector(`#${emailInputId} + .error`);
}

export function handleEmailInput() {
  const email = getEmailInput();
  const error = getEmailInputError();

  if (email.validity.valid) {
    clearError(error);
  } else {
    showError();
  }
}

export function handleFormSubmit(event) {
  const email = getEmailInput();
  const error = getEmailInputError();
  const isValid = email.validity.valid;

  if (!isValid) {
    showError();
    event.preventDefault();
  }
}

function showError() {
  const email = getEmailInput();
  const error = getEmailInputError();
  let errorMessage = "Please enter a valid email address.";

  if (email.validity.valueMissing) {
    errorMessage = "This form must be submitted with an email address.";
  }

  error.innerText = errorMessage;
  error.className = "error active";
}

function clearError(errorElement) {
  errorElement.innerText = "";
  errorElement.className = "error";
}
