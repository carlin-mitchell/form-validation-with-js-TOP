// COMPONENT IMPORTS
import Element from "../../Element";

import ExpandablePanelTitle from "./ExpandablePanelTitle";
import ExpandablePanelContent from "./ExpandablePanelContent";

import { v4 as uuidv4 } from "uuid";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanel = (props) => {
  console.log(props);
  const componentId = uuidv4();
  const { title, children } = props;
  const otherClasses = "";
  const panel = Element(
    "a",
    { className: "expandable-panel" + " " + otherClasses },
    // add child elements to the array below
    [
      ExpandablePanelTitle({ title, componentId }),
      ExpandablePanelContent({ children, componentId }),
    ]
  );
  return panel;
};

export default ExpandablePanel;
