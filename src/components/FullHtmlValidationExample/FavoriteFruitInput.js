// COMPONENT IMPORTS
import {
  P,
  Datalist,
  Option,
  Input,
  Div,
  Span,
  Label,
} from "../_basic-elements/basic-elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const FavoriteFruitInput = () => {
  const input = Input({
    type: "text",
    id: "t1",
    name: "fruit",
    required: true,
    pattern: "[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range",
  });
  input.setAttribute("list", "l1");

  const favoriteFruitInput = Div({}, [
    Label({
      for: "t1",
      innerHTML: `What's your favorite fruit? ${
        Span({ ariaLabel: "required", innerText: "*" }).outerHTML
      }`,
    }),
    input,
    Datalist({ id: "l1" }, [
      Option({ innerText: "Banana" }),
      Option({ innerText: "Cherry" }),
      Option({ innerText: "Apple" }),
      Option({ innerText: "Strawberry" }),
      Option({ innerText: "Lemon" }),
      Option({ innerText: "Orange" }),
    ]),
  ]);

  const otherClasses = "";
  const parentElement = P(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [favoriteFruitInput]
  );
  return parentElement;
};

export default FavoriteFruitInput;
