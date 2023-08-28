// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const SimpleForm = () => {
  const sharedClasses = "mr-1";

  const label = Element("label", {
    for: "choose",
    innerText: "Would you prefer a bannana or cherry?",
    className: sharedClasses,
  });

  const input = Element("input", {
    id: "choose",
    name: "i-like",
    className: sharedClasses,
    required: true,
  });

  const button = Element("button", {
    innerText: "Submit",
    className: sharedClasses,
  });

  const otherClasses = "";
  const form = Element(
    "form",
    { className: "simple-form" + " " + otherClasses },
    // add child elements to the array below
    [label, input, button]
  );
  return form;
};

export default SimpleForm;
