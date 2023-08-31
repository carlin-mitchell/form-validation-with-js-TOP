// COMPONENT IMPORTS
import { Div, Input, Label, Span } from "../../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import { handleEmailInput } from "../validation";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = uuidv4();
export const emailInputId = `email-input-${componentUuid}`;

const EmailInput = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "form-control" + " " + otherClasses },
    // add child elements to the array below
    [
      Label({
        for: `${emailInputId}`,
        innerHTML: `Please enter an email address ${
          Span({
            className: "required-marker",
            innerText: "*",
          }).outerHTML
        }`,
      }),
      Input({
        id: `${emailInputId}`,
        type: "email",
        required: true,
        oninput() {
          handleEmailInput();
        },
      }),
      Div({ className: "error" }),
    ]
  );
  return parentElement;
};

export default EmailInput;
