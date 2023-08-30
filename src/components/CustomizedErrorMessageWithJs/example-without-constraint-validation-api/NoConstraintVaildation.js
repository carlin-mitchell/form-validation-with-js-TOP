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

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NoConstraintValidationApi = () => {
  const otherClasses = "";
  const parentElement = Div(
    { className: "no-constraint-api" + " " + otherClasses },
    // add child elements to the array below
    [
      H2({ innerText: "Without Constraint Validation API" }),
      Form({}, [
        P({}, [
          Label({ for: "mail3" }, [
            Span({ innerText: "Please enter an email address" }),
            Input({ type: "text", id: "mail3", name: "mail" }),
            Span({ className: "error", ariaLive: "polite" }),
          ]),
        ]),
        Button({ innerText: "Submit" }),
      ]),
    ]
  );
  return parentElement;
};

export default NoConstraintValidationApi;