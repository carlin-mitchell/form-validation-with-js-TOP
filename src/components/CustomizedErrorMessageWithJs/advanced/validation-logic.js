function showError() {
  const email = document.querySelector(
    ".customized-error-with-js-advanced #mail2"
  );
  if (email.validity.valueMIssing) {
    emailError.textContent = "You ";
  }
}

export function inputListener() {
  const form = document.querySelector(
    ".customized-error-with-js-advanced form"
  );
  const email = document.querySelector(
    ".customized-error-with-js-advanced #mail2"
  );
  const emailError = document.querySelector(
    ".customized-error-with-js-advanced #mail2 + span.error"
  );

  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showError();
  }
}
