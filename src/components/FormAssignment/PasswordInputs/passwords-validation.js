import { clearError } from "../form-validation";
import { confirmPasswordInputId } from "./ConfirmPasswordInput";
import { passwordInputId } from "./PasswordInput";

export const passwordRegexString =
  "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$";

const passwordRegex = new RegExp(passwordRegexString);

// ########################### PASSWORD INPUT ##############################
export function getPasswordInput() {
  return document.getElementById(passwordInputId);
}

export function getPasswordInputError() {
  return document.querySelector(`#${passwordInputId} + .error`);
}

export function passwordIsValid() {
  return getPasswordInput().validity.valid;
}

export function getPasswordInputValue() {
  return getPasswordInput().value;
}

export function handlePasswordInput() {
  if (passwordIsValid()) {
    clearError(getPasswordInputError());
  } else {
    showPasswordError();
  }
}

export function showPasswordError() {
  const password = getPasswordInput();
  const error = getPasswordInputError();
  let errorMessage =
    "Valid passwords are at lease 12 characters long and contain at lease one uppercase letter and one lowercase letter.";

  if (password.validity.valueMissing) {
    errorMessage = "You must enter a password to continue.";
  }

  error.innerText = errorMessage;
  error.className = "error active";
}

// ######################## CONFIRM PASSWORD INPUT ###########################
export function getConfirmPasswordInput() {
  return document.getElementById(confirmPasswordInputId);
}

export function getConfirmPasswordInputError() {
  return document.querySelector(`#${confirmPasswordInputId} + .error`);
}
export function getConfirmPasswordInputValue() {
  return getConfirmPasswordInput().value;
}

export function confirmPasswordIsValid() {
  return getConfirmPasswordInput().validity.valid;
}

export function handleConfirmPasswordInput() {
  const input = getConfirmPasswordInput();
  if (getPasswordInputValue() === getConfirmPasswordInputValue()) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("invalid");
  }

  if (input.validity.valid) {
    clearError(getConfirmPasswordInputError());
  } else {
    showConfirmPasswordError();
  }
}

export function showConfirmPasswordError() {
  const password = getConfirmPasswordInput();
  const error = getConfirmPasswordInputError();
  let errorMessage = "Passwords do not match.";

  if (password.validity.valueMissing) {
    errorMessage = "You must confirm your password to continue.";
  }

  error.innerText = errorMessage;
  error.className = "error active";
}
