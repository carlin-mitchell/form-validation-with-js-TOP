// COMPONENT IMPORTS
import { Div, Input, Label } from "../../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import { handleEmailInput } from "../logic";
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
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [
      Label({
        for: `${emailInputId}`,
        innerText: "Please enter an email address",
      }),
      Input({
        id: `${emailInputId}`,
        type: "email",
        oninput() {
          handleEmailInput();
        },
      }),
    ]
  );
  return parentElement;
};

export default EmailInput;
