// COMPONENT IMPORTS
import { P, Label, Input, Div } from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const EmailInput = () => {
  const otherClasses = "";
  const parentElement = P(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [
      Div({}, [
        Label({ for: "t2", innerText: "What's your email address?" }),
        Input({ type: "email", id: "t2", name: "email" }),
      ]),
    ]
  );
  return parentElement;
};

export default EmailInput;
