// COMPONENT IMPORTS
import Element from "../Element";
import Icon from "../_custom-components/Icon";

// LOGIC IMPORTS
import { githubInfo } from "../../page-logic/data/data-page-config";

// COMPONENT METHODS
// function someMethod() {
//   //
// }

// TEMPLATE VARIABLES
const dynamicYear = new Date().getFullYear();

const CopyrightContainer = () => {
  const githubLink = Element(
    "a",
    {
      href: "https://github.com/carlin-mitchell/" + githubInfo.repoName,
    },
    [Icon("icon-github-cat")]
  );

  const copyrightInfo = Element("div", {
    className: "copyright-info display-i-b",
    innerText: `© Carlin Mitchell ${dynamicYear}`,
  });

  const otherClasses = "";
  const container = Element(
    "div",
    { className: "copyright-container" + " " + otherClasses },
    // add child elements to the array below
    [copyrightInfo, githubLink]
  );
  return container;
};

export default CopyrightContainer;
