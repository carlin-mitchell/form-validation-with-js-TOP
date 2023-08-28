// COMPONENT IMPORTS
import { Div } from "./_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Component = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default Component;
