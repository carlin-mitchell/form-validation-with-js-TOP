import { clearError } from "../form-validation";

export function getCountryInput() {
  return document.querySelector(".assignment .country-input");
}

export function getCountryInputError() {
  return document.querySelector(".assignment .country-input + .error");
}

export function countryIsValid() {
  return getCountryInput().validity.valid;
}

export function handleCountryInput() {
  const country = getCountryInput();
  const error = getCountryInputError();

  if (country.validity.valid) {
    clearError(error);
  }
}

export function showCountryError() {
  const error = getCountryInputError();
  let errorMessage = "Please select an option from the list.";
  error.innerText = errorMessage;
  error.className = "error active";
}
