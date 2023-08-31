// COMPONENT IMPORTS
import { Button } from "../_elements/Elements";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const SubmitButton = () => {
  const otherClasses = "";
  const parentElement = Button(
    { className: "" + " " + otherClasses, innerText: "Submit" },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default SubmitButton;
