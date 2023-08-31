import { emailInputId } from "./EmailInput/EmailInput";

export function getEmailInput() {
  return document.getElementById(emailInputId);
}

export function handleEmailInput() {
  console.log(getEmailInput());
}
