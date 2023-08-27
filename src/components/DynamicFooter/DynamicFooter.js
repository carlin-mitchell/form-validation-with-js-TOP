// COMPONENT IMPORTS
import Element from "../Element";
import CopyrightContainer from "./CopyrightContainer";
import AttributionsContainer from "./SiteAttributions/AttributionsContainer";
import TOPContainer from "./TOPLinkContainer";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const DynamicFooter = () => {
  const otherClasses = "bg-gray-dark-3 text-white";
  const footer = Element(
    "footer",
    {
      id: "footer",
      className: "" + " " + otherClasses,
    },
    [CopyrightContainer(), TOPContainer(), AttributionsContainer()]
  );
  return footer;
};

export default DynamicFooter;
