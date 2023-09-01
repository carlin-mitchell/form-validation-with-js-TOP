// COMPONENT IMPORTS
import { Div, Form, Span } from "../_elements/Elements";
import { handleFormSubmit } from "./form-validation";
import ZipCodeInput from "./Input/ZipCodeInput";
import CountryInput from "./CountryInput/CountryInput";
import EmailInput from "./EmailInput/EmailInput";
import SubmitButton from "./SubmitButton";
import PasswordInput from "./PasswordInputs/PasswordInput";
import ConfirmPasswordInput from "./PasswordInputs/ConfirmPasswordInput";
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
          ZipCodeInput(),
          PasswordInput(),
          ConfirmPasswordInput(),
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
