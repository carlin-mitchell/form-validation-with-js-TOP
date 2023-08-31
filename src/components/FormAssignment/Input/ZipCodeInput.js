// COMPONENT IMPORTS
import { Div, Label, Input, Span } from "../../_elements/Elements";
import { v4 as uuidv4 } from "uuid";
import { handleZipCodeInput } from "./zip-code-input-validation";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = uuidv4();
export const zipCodeInputId = `zip-code-input-${componentUuid}`;
const ZipCodeInput = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "form-control" + " " + otherClasses },
    // add child elements to the array below
    [
      Label({
        for: `${zipCodeInputId}`,
        innerHTML: `Please enter your zip code ${
          Span({
            className: "required-marker",
            innerText: "*",
          }).outerHTML
        }`,
      }),
      Input({
        type: "text",
        required: true,
        pattern: "^[0-9]{5}(?:-[0-9]{4})?$",
        id: `${zipCodeInputId}`,
        oninput() {
          handleZipCodeInput();
        },
      }),
      Div({ className: "error" }),
    ]
  );
  return parentElement;
};

export default ZipCodeInput;
