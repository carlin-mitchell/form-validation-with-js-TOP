export function customizeEmailValidationTypeMessage() {
  const emailInput = document.querySelector(
    ".customized-error-with-js-simple #mail"
  );
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("I am expecting an email address DAVE!");
  } else emailInput.setCustomValidity("");
}
