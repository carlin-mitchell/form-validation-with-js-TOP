// COMPONENT IMPORTS
import Element from "../../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const IconsExplanation = () => {
  const inkscapeLink = Element("a", {
    href: "https://inkscape.org/",
    innerText: "Inkscape",
  });
  const icoMoonLink = Element("a", {
    href: "https://icomoon.io/",
    innerText: "IcoMoon",
  });

  const div = Element("div", {
    innerHTML: `All other icons were created by me using ${inkscapeLink.outerHTML} and converting them to a font with ${icoMoonLink.outerHTML}`,
  });

  const otherClasses = "";
  const parentElement = Element(
    "div",
    { className: "icons-explanation" + " " + otherClasses, innerHTML: `` },
    // add child elements to the array below
    [div]
  );
  return parentElement;
};

export default IconsExplanation;
