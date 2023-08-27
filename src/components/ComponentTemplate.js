// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Component = () => {
  const otherClasses = "";
  const parentElement = Element(
    "div",
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default Component;
