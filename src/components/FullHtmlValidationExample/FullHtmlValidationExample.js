// COMPONENT IMPORTS
import { Div, Fieldset, Form, H2, P } from "../_basic-elements/basic-elements";
import DriversLicenseInput from "./DriversLicenseInput";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const FullHtmlExample = () => {
  const h2 = H2({ innerText: "Full HTML Validation Example" });

  const otherClasses = "";
  const parentElement = Div(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [h2, Form({}, [DriversLicenseInput()])]
  );
  return parentElement;
};

export default FullHtmlExample;
