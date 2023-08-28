/**
 * This Function allows you to create a dom element with its initial attributes and child elements defined by a passed-in object and array of child elements
 * @param {string} typeStr the tag name of the element to be returned you would use in document.createElement()
 * @param {object} propsObj (optional) an object containing the initial properties/attributes you want the element to have
 * @param {array} childArr (optional) an of element objects to be appended as children to this element
 * @returns {Element} the a reference to the element created in memory
 */
export const Element = (typeStr, propsObj, childArr = null) => {
  let setAttributeProperties = ["list"];
  let properties = [];
  setAttributeProperties.forEach((property) => {
    if (property in propsObj) {
      const value = propsObj[property];
      properties.push({ name: property, value: value });
      delete propsObj[property];
    }
  });

  if (childArr && !Array.isArray(childArr)) {
    childArr = [childArr];
  }

  const parentElement = Object.assign(
    document.createElement(typeStr),
    propsObj
  );

  if (childArr) {
    childArr.forEach((child) => parentElement.appendChild(child));
  }

  if (properties.length) {
    properties.forEach((property) => {
      parentElement.setAttribute(property.name, property.value);
    });
  }

  return parentElement;
};

export default Element;
