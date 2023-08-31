import { emailInputId } from "./EmailInput/EmailInput";
import {
  getCountryInput,
  showCountryError,
  countryIsValid,
} from "./CountryInput/country-input-validation";

export function getEmailInput() {
  return document.getElementById(emailInputId);
}
export function getEmailInputError() {
  return document.querySelector(`#${emailInputId} + .error`);
}

// export function getCountryInput() {
//   return document.querySelector(".assignment .country-input");
// }

// export function getCountryInputError() {
//   return document.querySelector(".assignment .country-input + .error");
// }

export function handleEmailInput() {
  const email = getEmailInput();
  const error = getEmailInputError();

  if (email.validity.valid) {
    clearError(error);
  } else {
    showEmailError();
  }
}

export function handleFormSubmit(event) {
  const email = getEmailInput();
  const emailIsValid = email.validity.valid;

  if (!emailIsValid) {
    showEmailError();
    event.preventDefault();
  }
  if (!countryIsValid()) {
    showCountryError();
    event.preventDefault();
  }
}

function showEmailError() {
  const email = getEmailInput();
  const error = getEmailInputError();
  let errorMessage = "Please enter a valid email address.";

  if (email.validity.valueMissing) {
    errorMessage = "This form must be submitted with an email address.";
  }

  error.innerText = errorMessage;
  error.className = "error active";
}

export function clearError(errorElement) {
  errorElement.innerText = "";
  errorElement.className = "error";
}
