// COMPONENT IMPORTS
import Element from "../../Element";
import ExpandablePanelContainer from "./ExpandablePanel";
import NonExpandablePanelContainer from "./NonExpandablePanel";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (props) => {
  let { children, componentId } = props;
  children = children ? children : [];

  const content = Element("div", { className: "content" }, [...children]);
  const otherClasses = "";
  const parentElement = Element(
    "div",
    {
      id: `expandable-content-${componentId}`,
      className: "expandable-panel-content" + " " + otherClasses,
    },
    // add child elements to the array below
    [content]
  );
  return parentElement;
};

export default ExpandablePanelContent;
