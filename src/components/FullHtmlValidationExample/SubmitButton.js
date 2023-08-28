// COMPONENT IMPORTS
import { Button, P } from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Component = () => {
  const otherClasses = "";
  const parentElement = P(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [Button({ innerText: "Submit" })]
  );
  return parentElement;
};

export default Component;
