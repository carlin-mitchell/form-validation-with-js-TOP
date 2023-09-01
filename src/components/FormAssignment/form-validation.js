import {
  showCountryError,
  countryIsValid,
} from "./CountryInput/country-input-validation";

import {
  showEmailError,
  emailIsValid,
} from "./EmailInput/email-input-validation";

import {
  showZipCodeError,
  zipCodeIsValid,
} from "./Input/zip-code-input-validation";
import {
  confirmPasswordIsValid,
  passwordIsValid,
  showConfirmPasswordError,
  showPasswordError,
} from "./PasswordInputs/passwords-validation";

function getForm() {}

function allInputsValid(form) {
  const inputs = [
    ...document.querySelectorAll("input"),
    ...document.querySelectorAll("select"),
  ];

  for (let i = 0; i < inputs.length; i++) {
    const inputValidity = inputs[i].validity.valid;
    if (!inputValidity) {
      return false;
    }
  }
  return true;
}

export function handleFormSubmit(event) {
  if (allInputsValid()) {
    event.preventDefault();
    console.log("SUBMITTED!");
    return;
  } else {
    event.preventDefault();
    if (!emailIsValid()) {
      showEmailError();
    }
    if (!countryIsValid()) {
      showCountryError();
    }
    if (!zipCodeIsValid()) {
      showZipCodeError();
    }
    if (!passwordIsValid()) {
      showPasswordError();
    }

    if (!confirmPasswordIsValid()) {
      showConfirmPasswordError();
    }
  }
}

export function clearError(errorElement) {
  errorElement.innerText = "";
  errorElement.className = "error";
}
