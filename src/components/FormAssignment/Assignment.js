// COMPONENT IMPORTS
import { Div, Form, Span } from "../_elements/Elements";
import CountryInput from "./CourtnyInput/CountryInput";
import EmailInput from "./EmailInput/EmailInput";
import { handleFormSubmit } from "./validation";
import SubmitButton from "./SubmitButton";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Assignment = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "assignment" + " " + otherClasses },
    // add child elements to the array below
    [
      Form(
        {
          noValidate: true,
          onsubmit(event) {
            handleFormSubmit(event);
          },
        },
        [
          EmailInput(),
          CountryInput(),
          SubmitButton(),
          Div({
            innerHTML: `${
              Span({ className: "required-marker", innerText: "*" }).outerHTML
            } indicates a required field`,
          }),
        ]
      ),
    ]
  );
  return parentElement;
};

export default Assignment;
