// COMPONENT IMPORTS
import { generateTestContentArr } from "../../utils";
import Element from "../Element";

import SimpleForm from "../SimpleStart/Simple";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "p-1";
  const main = Element(
    "main",
    {
      id: "main-section",
      className: "" + " " + otherClasses,
    },
    // add child elements to the array below
    [SimpleForm()]
  );
  return main;
};

export default MainSection;
