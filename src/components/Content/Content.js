// COMPONENT IMPORTS
import Element from "../Element";
import Header from "../Header/Header";
import DynamicFooter from "../DynamicFooter/DynamicFooter";
import MainSection from "../MainSection/MainSection";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = Element("div", { id: "content" }, [
    Header(),
    MainSection(),
    DynamicFooter(),
  ]);

  return content;
};

export default Content;
