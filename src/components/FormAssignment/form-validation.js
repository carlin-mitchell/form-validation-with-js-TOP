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

export function handleFormSubmit(event) {
  if (!emailIsValid()) {
    showEmailError();
    event.preventDefault();
  }
  if (!countryIsValid()) {
    showCountryError();
    event.preventDefault();
  }

  if (!zipCodeIsValid()) {
    showZipCodeError();
    event.preventDefault;
  }
}

export function clearError(errorElement) {
  errorElement.innerText = "";
  errorElement.className = "error";
}
