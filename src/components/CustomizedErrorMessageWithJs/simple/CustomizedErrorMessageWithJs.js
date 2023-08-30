// COMPONENT IMPORTS
import {
  Form,
  Div,
  H2,
  Label,
  Input,
  Button,
} from "../../_basic-elements/basic-elements";

// LOGIC IMPORTS
import { customizeEmailValidationTypeMessage } from "./validation-logic";

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CustomizedErrorMessage = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "customized-error-with-js-simple" + " " + otherClasses },
    // add child elements to the array below
    [
      H2({ innerText: "Customized Error Message with JS - simple" }),
      Form({}, [
        Div({}, [
          Label({
            for: "mail",
            innerText: "I would like you to provide me with an email address:",
          }),
          Input({
            type: "email",
            id: "mail",
            name: "mail",
            oninput() {
              customizeEmailValidationTypeMessage();
            },
          }),
        ]),
        Button({ innerText: "Submit" }),
      ]),
    ]
  );
  return parentElement;
};

export default CustomizedErrorMessage;
