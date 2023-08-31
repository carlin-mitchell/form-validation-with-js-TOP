import { clearError } from "../form-validation";
import { emailInputId } from "./EmailInput";
export function getEmailInput() {
  return document.getElementById(emailInputId);
}
export function getEmailInputError() {
  return document.querySelector(`#${emailInputId} + .error`);
}

export function emailIsValid() {
  return getEmailInput().validity.valid;
}

export function handleEmailInput() {
  if (emailIsValid()) {
    clearError(getEmailInputError());
  } else {
    showEmailError();
  }
}

export function showEmailError() {
  const email = getEmailInput();
  const error = getEmailInputError();
  let errorMessage = "Please enter a valid email address.";

  if (email.validity.valueMissing) {
    errorMessage = "This form must be submitted with an email address.";
  }

  error.innerText = errorMessage;
  error.className = "error active";
}
