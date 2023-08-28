// COMPONENT IMPORTS
import { P, Div, Label, Input } from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const HowOldAreYouInput = () => {
  const ageInput = Div({}, [
    Label({ for: "n1", innerText: "How old are you?" }, []),
    Input({
      type: "number",
      min: "12",
      max: "120",
      step: "1",
      id: "n1",
      name: "age",
      pattern: "d+",
    }),
  ]);

  const otherClasses = "";
  const parentElement = P(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [ageInput]
  );
  return parentElement;
};

export default HowOldAreYouInput;
