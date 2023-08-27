// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const TOPContainer = () => {
  const topLink = Element("a", {
    href: "https://www.theodinproject.com/",
    className: "top-link",
    innerText: "The Odin Project",
  });

  const otherClasses = "";
  const container = Element(
    "div",
    {
      className: "top-container" + " " + otherClasses,
      innerText: "Inspired By:",
    },
    // add child elements to the array below
    [topLink]
  );
  return container;
};

export default TOPContainer;
