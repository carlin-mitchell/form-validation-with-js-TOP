// COMPONENT IMPORTS
import { generateTestContentArr } from "../../utils";
import Element from "../Element";
import Assignment from "../FormAssignment/Assignment";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "p-2";
  const main = Element(
    "main",
    {
      id: "main-section",
      className: "" + " " + otherClasses,
    },
    // add child elements to the array below
    [Assignment()]
  );
  return main;
};

export default MainSection;
