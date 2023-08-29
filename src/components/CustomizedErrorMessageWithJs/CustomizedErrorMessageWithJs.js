// COMPONENT IMPORTS
import {
  Form,
  Div,
  H2,
  Label,
  Input,
  Button,
} from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CustomizedErrorMessage = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "customized-error-with-js" + " " + otherClasses },
    // add child elements to the array below
    [
      H2({ innerText: "Customized Error Message with JS" }),
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
              if (this.validity.typeMismatch) {
                this.setCustomValidity("I am expecting an email address!");
              } else {
                this.setCustomValidity("");
              }
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
