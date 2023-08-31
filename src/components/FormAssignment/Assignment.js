// COMPONENT IMPORTS
import { Div, Form } from "../_elements/Elements";
import EmailInput from "./EmailInput/EmailInput";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Assignment = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "assignment" + " " + otherClasses },
    // add child elements to the array below
    [Form({}, [EmailInput()])]
  );
  return parentElement;
};

export default Assignment;
