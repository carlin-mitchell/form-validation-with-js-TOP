import { clearError } from "../form-validation";
import { zipCodeInputId } from "./ZipCodeInput";

export function getZipCodeInput() {
  return document.getElementById(zipCodeInputId);
}
export function getZipCodeInputError() {
  return document.querySelector(`#${zipCodeInputId} + .error`);
}

export function zipCodeIsValid() {
  return getZipCodeInput().validity.valid;
}

export function handleZipCodeInput() {
  if (zipCodeIsValid()) {
    clearError(getZipCodeInputError());
  } else {
    showZipCodeError();
  }
}

export function showZipCodeError() {
  const zipCode = getZipCodeInput();
  const error = getZipCodeInputError();
  let errorMessage = "Enter a valid zip code format. (55555 or 55555-4444)";

  if (zipCode.validity.valueMissing) {
    errorMessage = "You must enter a valid zip code to continue.";
  } else {
  }

  error.innerText = errorMessage;
  error.className = "error active";
}
