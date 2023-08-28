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

  const h2 = Element("h2", { innerText: "Simple Start" });

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
    pattern: "[Bb]anana|[Cc]herry",
  });

  const button = Element("button", {
    innerText: "Submit",
    className: sharedClasses,
  });

  const div = Element("div", {}, [label, input, button]);
  const otherClasses = "mb-3";
  const form = Element(
    "form",
    { className: "simple-form" + " " + otherClasses },
    // add child elements to the array below
    [h2, div]
  );
  return form;
};

export default SimpleForm;
