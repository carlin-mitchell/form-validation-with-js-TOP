export function getForm() {
  return document.querySelector(".no-constraint-api form");
}

export function getEmailInput() {
  return document.querySelector(".no-constraint-api #mail3");
}

export function getEmailError() {
  return document.querySelector(".no-constraint-api #mail3 + span.error");
}

const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function loadEventHandler() {
  const email = getEmailInput();

  const isValid = email.value.length === 0 || emailRegEx.test(email.value);
  email.className = isValid ? "valid" : "invalid";
}

export function inputEventHandler() {
  const email = getEmailInput();
  const error = getEmailError();

  const isValid = email.value.length === 0 || emailRegEx.test(email.value);

  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
}

export function handleSubmit(e) {
  console.log("submitted");
  e.preventDefault();
  const email = getEmailInput();
  const error = getEmailError();
  const isValid = email.value.length === 0 || emailRegEx.test(email.value);

  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect a valid email.";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
}
