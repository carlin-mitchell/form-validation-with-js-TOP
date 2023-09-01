// COMPONENT IMPORTS
import { Div, Input, Label, Span } from "../../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import {
  handlePasswordInput,
  passwordRegexString,
} from "./passwords-validation";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = uuidv4();
export const passwordInputId = `password-input-${componentUuid}`;

const PasswordInput = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "form-control" + " " + otherClasses },
    // add child elements to the array below
    [
      Label({
        for: `${passwordInputId}`,
        innerHTML: `Create your password ${
          Span({
            className: "required-marker",
            innerText: "*",
          }).outerHTML
        }`,
      }),
      Input({
        id: `${passwordInputId}`,
        type: "password",
        required: true,
        pattern: passwordRegexString,
        oninput() {
          handlePasswordInput();
        },
      }),
      Div({ className: "error" }),
    ]
  );
  return parentElement;
};

export default PasswordInput;
