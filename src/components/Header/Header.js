// COMPONENT IMPORTS
import Element from "../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Header = () => {
  const h1 = Element("h1", { innerText: "This is the header" });

  const otherClasses = "bg-gray-dark-3 text-white p-2";
  const header = Element(
    "header",
    {
      id: "header",
      className: "header" + " " + otherClasses,
    },
    [h1]
  );
  return header;
};

export default Header;
