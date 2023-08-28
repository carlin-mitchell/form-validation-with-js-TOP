// COMPONENT IMPORTS
import { Div, P, Textarea, Label } from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ShortMessageInput = () => {
  const otherClasses = "";
  const parentElement = P(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [
      Div({}, [
        Label({ for: "t3", innerText: "Leave a short message" }),
        Textarea({ id: "t3", name: "msg", maxLength: "140", rows: "5" }),
      ]),
    ]
  );
  return parentElement;
};

export default ShortMessageInput;
