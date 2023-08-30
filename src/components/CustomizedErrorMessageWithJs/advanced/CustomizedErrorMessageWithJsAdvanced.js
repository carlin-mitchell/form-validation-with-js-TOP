// COMPONENT IMPORTS
import {
  Form,
  Div,
  H2,
  Label,
  Input,
  Button,
  Span,
  P,
} from "../../_basic-elements/basic-elements";
import { inputListener } from "./validation-logic";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CustomizedErrorAdvanced = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "customized-error-with-js-advanced" + " " + otherClasses },
    // add child elements to the array below
    [
      H2({ innerText: "Customized Error Message with JS - advanced" }),
      Form({ noValidate: true }, [
        P({}, [
          Label({ for: "mail" }, [
            Span({ innerText: "Please enter an email address:" }),
            Input({
              type: "email",
              id: "mail2",
              name: "mail2",
              required: true,
              minLength: "8",
              oninput() {
                inputListener();
              },
            }),
            Span({ className: "error", ariaLive: "polite" }),
          ]),
        ]),
        Button({ innerText: "Submit" }),
      ]),
    ]
  );
  return parentElement;
};

export default CustomizedErrorAdvanced;
