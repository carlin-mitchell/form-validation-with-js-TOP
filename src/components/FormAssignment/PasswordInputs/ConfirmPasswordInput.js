// COMPONENT IMPORTS
import { Div, Input, Label, Span } from "../../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import { handleConfirmPasswordInput } from "./passwords-validation";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = uuidv4();
export const confirmPasswordInputId = `confirm-password-input-${componentUuid}`;

const ConfirmPasswordInput = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "form-control" + " " + otherClasses },
    // add child elements to the array below
    [
      Label({
        for: `${confirmPasswordInputId}`,
        innerHTML: `Confirm password ${
          Span({
            className: "required-marker",
            innerText: "*",
          }).outerHTML
        }`,
      }),
      Input({
        id: `${confirmPasswordInputId}`,
        type: "password",
        required: true,
        oninput() {
          handleConfirmPasswordInput();
        },
      }),
      Div({ className: "error" }),
    ]
  );
  return parentElement;
};

export default ConfirmPasswordInput;
