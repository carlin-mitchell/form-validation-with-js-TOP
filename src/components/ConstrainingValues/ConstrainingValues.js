// COMPONENT IMPORTS
import Element from "../Element";

import { Div, Input, Label, Button } from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ConstrainingValues = () => {
  const sharedClasses = "mr-1";

  const h2 = Element("h2", { innerText: "Constraining Values" });

  const fruitInput = Div({ className: "display-i-b" }, [
    Label({
      for: "choose",
      innerText: "Would you prefer a bannana or cherry?",
      className: sharedClasses,
    }),
    Input({
      type: "text",
      id: "choose",
      name: "i-like",
      className: sharedClasses,
      required: true,
      minLength: 6,
      maxLength: 6,
    }),
  ]);

  const numFruitInput = Div({ className: "display-i-b" }, [
    Label({
      for: "number",
      innerText: "How many would you like?",
      className: sharedClasses,
    }),
    Input({
      className: sharedClasses,
      type: "number",
      id: "number",
      name: "amount",
      value: "1",
      min: "1",
      max: "10",
    }),
  ]);

  const button = Div({ className: "display-i-b" }, [
    Button({
      innerText: "Submit",
      className: sharedClasses,
    }),
  ]);

  // const div = Element("div", {}, [label, input, button]);

  const otherClasses = "mb-3";
  const form = Element(
    "form",
    { className: "simple-form" + " " + otherClasses },
    // add child elements to the array below
    [h2, fruitInput, numFruitInput, button]
  );
  return form;
};

export default ConstrainingValues;
