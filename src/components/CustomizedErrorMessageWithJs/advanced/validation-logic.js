function getForm() {
  return document.querySelector(".customized-error-with-js-advanced form");
}

function getEmailInput() {
  return document.querySelector(".customized-error-with-js-advanced #mail2");
}

function getEmailError() {
  return document.querySelector(
    ".customized-error-with-js-advanced #mail2 + span.error"
  );
}

function showError() {
  const email = getEmailInput();
  const emailError = getEmailError();

  if (!email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters you entered ${email.value.length}.`;
  }
  emailError.className = "error active";
}

export function inputListener() {
  const email = getEmailInput();
  const emailError = getEmailError();

  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
}

export function submitListener(e) {
  const email = getEmailInput();

  if (!email.validity.valid) {
    showError();
  } else {
    e.preventDefault();
    console.log("submitted");
  }
}
