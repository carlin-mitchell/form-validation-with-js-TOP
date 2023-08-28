// COMPONENT IMPORTS
import {
  P,
  Fieldset,
  Span,
  Legend,
  Label,
  Input,
} from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const DriversLicenseInput = () => {
  const fieldset = Fieldset({}, [
    Legend({
      innerHTML: `Do you have a driver's license? ${
        Span({ ariaLabel: "required", innerText: "*" }).outerHTML
      }`,
    }),
    Label({ for: "r1", innerText: "Yes" }),
    Input({
      type: "radio",
      required: true,
      name: "driver",
      id: "r1",
      value: "yes",
    }),
    Label({ for: "r2", innerText: "No" }),
    Input({
      type: "radio",
      required: true,
      name: "driver",
      id: "r2",
      value: "no",
    }),
  ]);

  const otherClasses = "";
  const parentElement = P(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [fieldset]
  );
  return parentElement;
};

export default DriversLicenseInput;
