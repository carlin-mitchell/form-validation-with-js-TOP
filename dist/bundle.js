/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/components/ConstrainingValues/ConstrainingValues.js":
/*!*****************************************************************!*\
  !*** ./src/components/ConstrainingValues/ConstrainingValues.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ConstrainingValues = () => {
  const sharedClasses = "mr-1";

  const h2 = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", { innerText: "Constraining Values" });

  const fruitInput = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Div)({ className: "display-i-b" }, [
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Label)({
      for: "choose",
      innerText: "Would you prefer a bannana or cherry?",
      className: sharedClasses,
    }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Input)({
      type: "text",
      id: "choose",
      name: "i-like",
      className: sharedClasses,
      required: true,
      minLength: 6,
      maxLength: 6,
    }),
  ]);

  const numFruitInput = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Div)({ className: "display-i-b" }, [
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Label)({
      for: "number",
      innerText: "How many would you like?",
      className: sharedClasses,
    }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Input)({
      className: sharedClasses,
      type: "number",
      id: "number",
      name: "amount",
      value: "1",
      min: "1",
      max: "10",
    }),
  ]);

  const button = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Div)({ className: "display-i-b" }, [
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_1__.Button)({
      innerText: "Submit",
      className: sharedClasses,
    }),
  ]);

  // const div = Element("div", {}, [label, input, button]);

  const otherClasses = "mb-3";
  const form = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "form",
    { className: "simple-form" + " " + otherClasses },
    // add child elements to the array below
    [h2, fruitInput, numFruitInput, button]
  );
  return form;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConstrainingValues);


/***/ }),

/***/ "./src/components/Content/Content.js":
/*!*******************************************!*\
  !*** ./src/components/Content/Content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DynamicFooter/DynamicFooter */ "./src/components/DynamicFooter/DynamicFooter.js");
/* harmony import */ var _MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainSection/MainSection */ "./src/components/MainSection/MainSection.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "content" }, [
    (0,_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    (0,_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    (0,_DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  ]);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ "./src/components/DynamicFooter/CopyrightContainer.js":
/*!************************************************************!*\
  !*** ./src/components/DynamicFooter/CopyrightContainer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
/* harmony import */ var _custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_custom-components/Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-logic/data/data-page-config */ "./src/page-logic/data/data-page-config.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS


// COMPONENT METHODS
// function someMethod() {
//   //
// }

// TEMPLATE VARIABLES
const dynamicYear = new Date().getFullYear();

const CopyrightContainer = () => {
  const githubLink = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "a",
    {
      href: "https://github.com/carlin-mitchell/" + _page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__.githubInfo.repoName,
    },
    [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")]
  );

  const copyrightInfo = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "copyright-info display-i-b",
    innerText: `© Carlin Mitchell ${dynamicYear}`,
  });

  const otherClasses = "";
  const container = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    { className: "copyright-container" + " " + otherClasses },
    // add child elements to the array below
    [copyrightInfo, githubLink]
  );
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyrightContainer);


/***/ }),

/***/ "./src/components/DynamicFooter/DynamicFooter.js":
/*!*******************************************************!*\
  !*** ./src/components/DynamicFooter/DynamicFooter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
/* harmony import */ var _CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CopyrightContainer */ "./src/components/DynamicFooter/CopyrightContainer.js");
/* harmony import */ var _SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteAttributions/AttributionsContainer */ "./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js");
/* harmony import */ var _TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TOPLinkContainer */ "./src/components/DynamicFooter/TOPLinkContainer.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const DynamicFooter = () => {
  const otherClasses = "bg-gray-dark-3 text-white";
  const footer = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "footer",
    {
      id: "footer",
      className: "" + " " + otherClasses,
    },
    [(0,_CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__["default"])()]
  );
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFooter);


/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js":
/*!********************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/components/Element.js");
/* harmony import */ var _custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_custom-components/Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_custom-components/ExpandablePanel/ExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js");
/* harmony import */ var _custom_components_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_custom-components/ExpandablePanel/NonExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js");
/* harmony import */ var _IconsExpnanation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconsExpnanation */ "./src/components/DynamicFooter/SiteAttributions/IconsExpnanation.js");
// COMPONENT IMPORTS








// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const AttributionsContainer = () => {
  const otherClasses = "";
  const container = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    { className: "attributions-container" + " " + otherClasses },
    // add child elements to the array below
    [
      (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
        title: "Site Attributions",
        children: [
          (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
            title: "Icons",
            children: [
              (0,_custom_components_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_3__["default"])({
                title: "Github",
                href: "https://github.com/logos",
                children: [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")],
              }),
              (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
                title: "All other Icons",
                children: [(0,_IconsExpnanation__WEBPACK_IMPORTED_MODULE_4__["default"])()],
              }),
            ],
          }),
        ],
      }),
    ]
  );
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributionsContainer);


/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/IconsExpnanation.js":
/*!***************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/IconsExpnanation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const IconsExplanation = () => {
  const inkscapeLink = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
    href: "https://inkscape.org/",
    innerText: "Inkscape",
  });
  const icoMoonLink = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
    href: "https://icomoon.io/",
    innerText: "IcoMoon",
  });

  const div = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    innerHTML: `All other icons were created by me using ${inkscapeLink.outerHTML} and converting them to a font with ${icoMoonLink.outerHTML}`,
  });

  const otherClasses = "";
  const parentElement = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    { className: "icons-explanation" + " " + otherClasses, innerHTML: `` },
    // add child elements to the array below
    [div]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconsExplanation);


/***/ }),

/***/ "./src/components/DynamicFooter/TOPLinkContainer.js":
/*!**********************************************************!*\
  !*** ./src/components/DynamicFooter/TOPLinkContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const TOPContainer = () => {
  const topLink = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
    href: "https://www.theodinproject.com/",
    className: "top-link",
    innerText: "The Odin Project",
  });

  const otherClasses = "";
  const container = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    {
      className: "top-container" + " " + otherClasses,
      innerText: "Inspired By:",
    },
    // add child elements to the array below
    [topLink]
  );
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOPContainer);


/***/ }),

/***/ "./src/components/Element.js":
/*!***********************************!*\
  !*** ./src/components/Element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This Function allows you to create a dom element with its initial attributes and child elements defined by a passed-in object and array of child elements
 * @param {string} typeStr the tag name of the element to be returned you would use in document.createElement()
 * @param {object} propsObj (optional) an object containing the initial properties/attributes you want the element to have
 * @param {array} childArr (optional) an of element objects to be appended as children to this element
 * @returns {Element} the a reference to the element created in memory
 */
const Element = (typeStr, propsObj, childArr = null) => {
  let list;
  if ("list" in propsObj) {
    list = propsObj.list;
    delete propsObj.list;
  }

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

  if (list) {
    parentElement.setAttribute("list", list);
  }

  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);


/***/ }),

/***/ "./src/components/FullHtmlValidationExample/DriversLicenseInput.js":
/*!*************************************************************************!*\
  !*** ./src/components/FullHtmlValidationExample/DriversLicenseInput.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const DriversLicenseInput = () => {
  const fieldset = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Fieldset)({}, [
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Legend)({
      innerHTML: `Do you have a driver's license? ${
        (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Span)({ ariaLabel: "required", innerText: "*" }).outerHTML
      }`,
    }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Label)({ for: "r1", innerText: "Yes" }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
      type: "radio",
      required: true,
      name: "driver",
      id: "r1",
      value: "yes",
    }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Label)({ for: "r2", innerText: "No" }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
      type: "radio",
      required: true,
      name: "driver",
      id: "r2",
      value: "no",
    }),
  ]);

  const otherClasses = "";
  const parentElement = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.P)(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [fieldset]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DriversLicenseInput);


/***/ }),

/***/ "./src/components/FullHtmlValidationExample/EmailInput.js":
/*!****************************************************************!*\
  !*** ./src/components/FullHtmlValidationExample/EmailInput.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const EmailInput = () => {
  const otherClasses = "";
  const parentElement = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.P)(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Div)({}, [
        (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Label)({ for: "t2", innerText: "What's your email address?" }),
        (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Input)({ type: "email", id: "t2", name: "email" }),
      ]),
    ]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailInput);


/***/ }),

/***/ "./src/components/FullHtmlValidationExample/FavoriteFruitInput.js":
/*!************************************************************************!*\
  !*** ./src/components/FullHtmlValidationExample/FavoriteFruitInput.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const FavoriteFruitInput = () => {
  const favoriteFruitInput = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Div)({}, [
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
      for: "t1",
      innerHTML: `What's your favorite fruit? ${
        (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Span)({ ariaLabel: "required", innerText: "*" }).outerHTML
      }`,
    }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
      list: "l1",
      type: "text",
      id: "t1",
      name: "fruit",
      required: true,
      pattern: "[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range",
    }),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Datalist)({ id: "l1" }, [
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Option)({ innerText: "Banana" }),
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Option)({ innerText: "Cherry" }),
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Option)({ innerText: "Apple" }),
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Option)({ innerText: "Strawberry" }),
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Option)({ innerText: "Lemon" }),
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Option)({ innerText: "Orange" }),
    ]),
  ]);

  const otherClasses = "";
  const parentElement = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.P)(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [favoriteFruitInput]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteFruitInput);


/***/ }),

/***/ "./src/components/FullHtmlValidationExample/FullHtmlValidationExample.js":
/*!*******************************************************************************!*\
  !*** ./src/components/FullHtmlValidationExample/FullHtmlValidationExample.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
/* harmony import */ var _DriversLicenseInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DriversLicenseInput */ "./src/components/FullHtmlValidationExample/DriversLicenseInput.js");
/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailInput */ "./src/components/FullHtmlValidationExample/EmailInput.js");
/* harmony import */ var _FavoriteFruitInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavoriteFruitInput */ "./src/components/FullHtmlValidationExample/FavoriteFruitInput.js");
/* harmony import */ var _HowOldAreYou__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HowOldAreYou */ "./src/components/FullHtmlValidationExample/HowOldAreYou.js");
/* harmony import */ var _ShortMessageInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShortMessageInput */ "./src/components/FullHtmlValidationExample/ShortMessageInput.js");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmitButton */ "./src/components/FullHtmlValidationExample/SubmitButton.js");
// COMPONENT IMPORTS








// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const FullHtmlExample = () => {
  const h2 = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.H2)({ innerText: "Full HTML Validation Example" });

  const otherClasses = "";
  const parentElement = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Div)(
    { className: "full-validation-example" + " " + otherClasses },
    // add child elements to the array below
    [
      h2,
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Form)({}, [
        (0,_DriversLicenseInput__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        (0,_HowOldAreYou__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        (0,_FavoriteFruitInput__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        (0,_EmailInput__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        (0,_ShortMessageInput__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        (0,_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      ]),
    ]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullHtmlExample);


/***/ }),

/***/ "./src/components/FullHtmlValidationExample/HowOldAreYou.js":
/*!******************************************************************!*\
  !*** ./src/components/FullHtmlValidationExample/HowOldAreYou.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const HowOldAreYouInput = () => {
  const ageInput = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Div)({}, [
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Label)({ for: "n1", innerText: "How old are you?" }, []),
    (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
      type: "number",
      min: "12",
      max: "120",
      step: "1",
      id: "n1",
      name: "age",
      pattern: "d+",
    }),
  ]);

  const otherClasses = "";
  const parentElement = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.P)(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [ageInput]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowOldAreYouInput);


/***/ }),

/***/ "./src/components/FullHtmlValidationExample/ShortMessageInput.js":
/*!***********************************************************************!*\
  !*** ./src/components/FullHtmlValidationExample/ShortMessageInput.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ShortMessageInput = () => {
  const otherClasses = "";
  const parentElement = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.P)(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [
      (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Div)({}, [
        (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Label)({ for: "t3", innerText: "Leave a short message" }),
        (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Textarea)({ id: "t3", name: "msg", maxLength: "140", rows: "5" }),
      ]),
    ]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortMessageInput);


/***/ }),

/***/ "./src/components/FullHtmlValidationExample/SubmitButton.js":
/*!******************************************************************!*\
  !*** ./src/components/FullHtmlValidationExample/SubmitButton.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_basic-elements/basic-elements */ "./src/components/_basic-elements/basic-elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Component = () => {
  const otherClasses = "";
  const parentElement = (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.P)(
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [(0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Button)({ innerText: "Submit" })]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Header = () => {
  const h1 = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", { innerText: "Form Validation With JS" });

  const otherClasses = "bg-gray-dark-3 text-white p-2";
  const header = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "header",
    {
      id: "header",
      className: "header" + " " + otherClasses,
    },
    [h1]
  );
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/components/MainSection/MainSection.js":
/*!***************************************************!*\
  !*** ./src/components/MainSection/MainSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
/* harmony import */ var _SimpleStart_Simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleStart/Simple */ "./src/components/SimpleStart/Simple.js");
/* harmony import */ var _ConstrainingValues_ConstrainingValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ConstrainingValues/ConstrainingValues */ "./src/components/ConstrainingValues/ConstrainingValues.js");
/* harmony import */ var _FullHtmlValidationExample_FullHtmlValidationExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FullHtmlValidationExample/FullHtmlValidationExample */ "./src/components/FullHtmlValidationExample/FullHtmlValidationExample.js");
// COMPONENT IMPORTS







// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "p-1";
  const main = (0,_Element__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "main",
    {
      id: "main-section",
      className: "" + " " + otherClasses,
    },
    // add child elements to the array below
    [(0,_SimpleStart_Simple__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_ConstrainingValues_ConstrainingValues__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_FullHtmlValidationExample_FullHtmlValidationExample__WEBPACK_IMPORTED_MODULE_4__["default"])()]
  );
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainSection);


/***/ }),

/***/ "./src/components/SimpleStart/Simple.js":
/*!**********************************************!*\
  !*** ./src/components/SimpleStart/Simple.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const SimpleForm = () => {
  const sharedClasses = "mr-1";

  const h2 = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", { innerText: "Simple Start" });

  const label = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("label", {
    for: "choose",
    innerText: "Would you prefer a bannana or cherry?",
    className: sharedClasses,
  });

  const input = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
    id: "choose",
    name: "i-like",
    className: sharedClasses,
    required: true,
    pattern: "[Bb]anana|[Cc]herry",
  });

  const button = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("button", {
    innerText: "Submit",
    className: sharedClasses,
  });

  const div = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {}, [label, input, button]);
  const otherClasses = "mb-3";
  const form = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "form",
    { className: "simple-form" + " " + otherClasses },
    // add child elements to the array below
    [h2, div]
  );
  return form;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleForm);


/***/ }),

/***/ "./src/components/_basic-elements/basic-elements.js":
/*!**********************************************************!*\
  !*** ./src/components/_basic-elements/basic-elements.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   Article: () => (/* binding */ Article),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   Body: () => (/* binding */ Body),
/* harmony export */   Br: () => (/* binding */ Br),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Datalist: () => (/* binding */ Datalist),
/* harmony export */   Div: () => (/* binding */ Div),
/* harmony export */   Fieldset: () => (/* binding */ Fieldset),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   H1: () => (/* binding */ H1),
/* harmony export */   H2: () => (/* binding */ H2),
/* harmony export */   H3: () => (/* binding */ H3),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Hr: () => (/* binding */ Hr),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   Img: () => (/* binding */ Img),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Legend: () => (/* binding */ Legend),
/* harmony export */   Li: () => (/* binding */ Li),
/* harmony export */   Main: () => (/* binding */ Main),
/* harmony export */   Ol: () => (/* binding */ Ol),
/* harmony export */   Option: () => (/* binding */ Option),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   Span: () => (/* binding */ Span),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Textarea: () => (/* binding */ Textarea),
/* harmony export */   Ul: () => (/* binding */ Ul)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");


const A = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("a", props ? { ...props } : {}, children ? [...children] : []);

const Article = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("article", props ? { ...props } : {}, children ? [...children] : []);

const B = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("b", props ? { ...props } : {}, children ? [...children] : []);

const Body = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("body", props ? { ...props } : {}, children ? [...children] : []);

const Button = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("button", props ? { ...props } : {}, children ? [...children] : []);

const Br = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("br", props ? { ...props } : {}, children ? [...children] : []);

const Div = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", props ? { ...props } : {}, children ? [...children] : []);

const Datalist = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("datalist", props ? { ...props } : {}, children ? [...children] : []);

const Fieldset = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("fieldset", props ? { ...props } : {}, children ? [...children] : []);

const Footer = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("footer", props ? { ...props } : {}, children ? [...children] : []);

const Form = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("form", props ? { ...props } : {}, children ? [...children] : []);

const H1 = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", props ? { ...props } : {}, children ? [...children] : []);

const H2 = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", props ? { ...props } : {}, children ? [...children] : []);

const H3 = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", props ? { ...props } : {}, children ? [...children] : []);

const Header = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("header", props ? { ...props } : {}, children ? [...children] : []);

const Hr = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("hr", props ? { ...props } : {}, children ? [...children] : []);

const I = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("i", props ? { ...props } : {}, children ? [...children] : []);

const Img = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("img", props ? { ...props } : {}, children ? [...children] : []);

const Input = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("input", props ? { ...props } : {}, children ? [...children] : []);

const Label = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("label", props ? { ...props } : {}, children ? [...children] : []);

const Legend = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("legend", props ? { ...props } : {}, children ? [...children] : []);

const Li = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("li", props ? { ...props } : {}, children ? [...children] : []);

const Main = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("main", props ? { ...props } : {}, children ? [...children] : []);

const Ol = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("ol", props ? { ...props } : {}, children ? [...children] : []);

const Option = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("option", props ? { ...props } : {}, children ? [...children] : []);

const P = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("p", props ? { ...props } : {}, children ? [...children] : []);

const Strong = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("strong", props ? { ...props } : {}, children ? [...children] : []);

const Span = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("span", props ? { ...props } : {}, children ? [...children] : []);

const Textarea = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("textarea", props ? { ...props } : {}, children ? [...children] : []);

const Ul = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", props ? { ...props } : {}, children ? [...children] : []);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js":
/*!******************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/components/Element.js");
/* harmony import */ var _ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandablePanelTitle */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js");
/* harmony import */ var _ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandablePanelContent */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// COMPONENT IMPORTS







// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanel = (props) => {
  console.log(props);
  const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const { title, children } = props;
  const otherClasses = "";
  const panel = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "a",
    { className: "expandable-panel" + " " + otherClasses },
    // add child elements to the array below
    [
      (0,_ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__["default"])({ title, componentId }),
      (0,_ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__["default"])({ children, componentId }),
    ]
  );
  return panel;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanel);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js":
/*!*************************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/components/Element.js");
/* harmony import */ var _ExpandablePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js");
/* harmony import */ var _NonExpandablePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NonExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (props) => {
  let { children, componentId } = props;
  children = children ? children : [];

  const content = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: "content" }, [...children]);
  const otherClasses = "";
  const parentElement = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    {
      id: `expandable-content-${componentId}`,
      className: "expandable-panel-content" + " " + otherClasses,
    },
    // add child elements to the array below
    [content]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanelContent);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js":
/*!***********************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/components/Element.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
function toggleExpansion(componentId) {
  const expansionContent = document.getElementById(
    `expandable-content-${componentId}`
  );
  const toggleExpansionButton = document.getElementById(
    `expandable-content-button-${componentId}`
  );
  expansionContent.classList.toggle("expanded");
  toggleExpansionButton.classList.toggle("expanded");
}

const ExpandablePanelTitle = (props) => {
  const { title, componentId } = props;

  const expandButton = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "button",
    {
      id: `expandable-content-button-${componentId}`,
      onclick() {
        toggleExpansion(componentId);
      },
    },
    [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down")]
  );

  const otherClasses = "";
  const titleDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    { className: "expandable-panel-title" + " " + otherClasses },
    [
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        className: "display-i-b",
        innerText: title,
        onclick() {
          toggleExpansion(componentId);
        },
      }),
      expandButton,
    ]
  );

  return titleDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanelTitle);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js":
/*!*********************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NonExpandablePanel = (props) => {
  let { title, href, children } = props;
  children = children ? children : [];

  const otherClasses = "";

  const panel = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "a",
    {
      className: `${otherClasses} non-expandable-panel ${
        href ? "is-link" : ""
      }`,
      innerText: title,
    },
    // add child elements to the array below
    [...children]
  );
  if (href) {
    panel.href = href;
  }
  return panel;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NonExpandablePanel);


/***/ }),

/***/ "./src/components/_custom-components/Icon.js":
/*!***************************************************!*\
  !*** ./src/components/_custom-components/Icon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Icon = (iconClass) => {
  const icon = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("i", { className: `icon ${iconClass} display-i-b` });
  return icon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ "./src/page-logic/data/data-page-config.js":
/*!*************************************************!*\
  !*** ./src/page-logic/data/data-page-config.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   githubInfo: () => (/* binding */ githubInfo)
/* harmony export */ });
const githubInfo = {
  repoName: "form-validation-with-js-TOP",
};


/***/ }),

/***/ "./src/page-logic/ui/ui-initial-state.js":
/*!***********************************************!*\
  !*** ./src/page-logic/ui/ui-initial-state.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyInitialState: () => (/* binding */ applyInitialState)
/* harmony export */ });
/* harmony import */ var _ui_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-page */ "./src/page-logic/ui/ui-page.js");


function applyInitialState() {
  (0,_ui_page__WEBPACK_IMPORTED_MODULE_0__.applyWindowListeners)();
  // clickCarouselPlay();
}


/***/ }),

/***/ "./src/page-logic/ui/ui-page.js":
/*!**************************************!*\
  !*** ./src/page-logic/ui/ui-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyWindowListeners: () => (/* binding */ applyWindowListeners)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


const breakPoints = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200,
};

function applyWindowListeners() {
  window.onresize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (e) {
    //
  });
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   generateTestContentArr: () => (/* binding */ generateTestContentArr),
/* harmony export */   truncateAndAddEllipse: () => (/* binding */ truncateAndAddEllipse)
/* harmony export */ });
/* harmony import */ var _components_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Element */ "./src/components/Element.js");


const truncateAndAddEllipse = (string, numCharsToKeep) => {
  return string.slice(0, numCharsToKeep).trimEnd() + "...";
};

const debounce = function (fn) {
  // setup a timer
  let timeout;

  // return a function to run debounced
  return function () {
    //setup args

    let context = this;
    let args = arguments;

    // if there is a timer cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args);
    });
  };
};

function capitalize(string) {
  if (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  return string;
}

function generateTestContentArr(numChildren) {
  return Array(numChildren)
    .fill(0)
    .map((elem) =>
      (0,_components_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("p", {
        className: "display-b mb-1",
        innerText:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ullam ad, maxime enim sequi sunt quo facilis illo eveniet laudantium quae repellendus dolorum omnis minima ducimus architecto! Beatae, vel assumenda.",
      })
    );
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Content/Content */ "./src/components/Content/Content.js");
/* harmony import */ var _page_logic_ui_ui_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-logic/ui/ui-initial-state */ "./src/page-logic/ui/ui-initial-state.js");




document.body.appendChild((0,_components_Content_Content__WEBPACK_IMPORTED_MODULE_1__["default"])());

(0,_page_logic_ui_ui_initial_state__WEBPACK_IMPORTED_MODULE_2__.applyInitialState)();

// debugging
const debugging = true;
if (debugging) {
  //
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ3NCO0FBQ2tCOztBQUVyRSwwQkFBMEIsdUVBQU87O0FBRWpDLGtGQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbnN0cmFpbmluZ1ZhbHVlcy9Db25zdHJhaW5pbmdWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0NvcHlyaWdodENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvSWNvbnNFeHBuYW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvVE9QTGlua0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9GdWxsSHRtbFZhbGlkYXRpb25FeGFtcGxlL0RyaXZlcnNMaWNlbnNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9GdWxsSHRtbFZhbGlkYXRpb25FeGFtcGxlL0VtYWlsSW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9GdWxsSHRtbFZhbGlkYXRpb25FeGFtcGxlL0Zhdm9yaXRlRnJ1aXRJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Z1bGxIdG1sVmFsaWRhdGlvbkV4YW1wbGUvRnVsbEh0bWxWYWxpZGF0aW9uRXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Z1bGxIdG1sVmFsaWRhdGlvbkV4YW1wbGUvSG93T2xkQXJlWW91LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRnVsbEh0bWxWYWxpZGF0aW9uRXhhbXBsZS9TaG9ydE1lc3NhZ2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Z1bGxIdG1sVmFsaWRhdGlvbkV4YW1wbGUvU3VibWl0QnV0dG9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL01haW5TZWN0aW9uL01haW5TZWN0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvU2ltcGxlU3RhcnQvU2ltcGxlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2Jhc2ljLWVsZW1lbnRzL2Jhc2ljLWVsZW1lbnRzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFRpdGxlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1wYWdlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5cbmltcG9ydCB7IERpdiwgSW5wdXQsIExhYmVsLCBCdXR0b24gfSBmcm9tIFwiLi4vX2Jhc2ljLWVsZW1lbnRzL2Jhc2ljLWVsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDb25zdHJhaW5pbmdWYWx1ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHNoYXJlZENsYXNzZXMgPSBcIm1yLTFcIjtcblxuICBjb25zdCBoMiA9IEVsZW1lbnQoXCJoMlwiLCB7IGlubmVyVGV4dDogXCJDb25zdHJhaW5pbmcgVmFsdWVzXCIgfSk7XG5cbiAgY29uc3QgZnJ1aXRJbnB1dCA9IERpdih7IGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiIH0sIFtcbiAgICBMYWJlbCh7XG4gICAgICBmb3I6IFwiY2hvb3NlXCIsXG4gICAgICBpbm5lclRleHQ6IFwiV291bGQgeW91IHByZWZlciBhIGJhbm5hbmEgb3IgY2hlcnJ5P1wiLFxuICAgICAgY2xhc3NOYW1lOiBzaGFyZWRDbGFzc2VzLFxuICAgIH0pLFxuICAgIElucHV0KHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgaWQ6IFwiY2hvb3NlXCIsXG4gICAgICBuYW1lOiBcImktbGlrZVwiLFxuICAgICAgY2xhc3NOYW1lOiBzaGFyZWRDbGFzc2VzLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDYsXG4gICAgICBtYXhMZW5ndGg6IDYsXG4gICAgfSksXG4gIF0pO1xuXG4gIGNvbnN0IG51bUZydWl0SW5wdXQgPSBEaXYoeyBjbGFzc05hbWU6IFwiZGlzcGxheS1pLWJcIiB9LCBbXG4gICAgTGFiZWwoe1xuICAgICAgZm9yOiBcIm51bWJlclwiLFxuICAgICAgaW5uZXJUZXh0OiBcIkhvdyBtYW55IHdvdWxkIHlvdSBsaWtlP1wiLFxuICAgICAgY2xhc3NOYW1lOiBzaGFyZWRDbGFzc2VzLFxuICAgIH0pLFxuICAgIElucHV0KHtcbiAgICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBpZDogXCJudW1iZXJcIixcbiAgICAgIG5hbWU6IFwiYW1vdW50XCIsXG4gICAgICB2YWx1ZTogXCIxXCIsXG4gICAgICBtaW46IFwiMVwiLFxuICAgICAgbWF4OiBcIjEwXCIsXG4gICAgfSksXG4gIF0pO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IERpdih7IGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiIH0sIFtcbiAgICBCdXR0b24oe1xuICAgICAgaW5uZXJUZXh0OiBcIlN1Ym1pdFwiLFxuICAgICAgY2xhc3NOYW1lOiBzaGFyZWRDbGFzc2VzLFxuICAgIH0pLFxuICBdKTtcblxuICAvLyBjb25zdCBkaXYgPSBFbGVtZW50KFwiZGl2XCIsIHt9LCBbbGFiZWwsIGlucHV0LCBidXR0b25dKTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIm1iLTNcIjtcbiAgY29uc3QgZm9ybSA9IEVsZW1lbnQoXG4gICAgXCJmb3JtXCIsXG4gICAgeyBjbGFzc05hbWU6IFwic2ltcGxlLWZvcm1cIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtoMiwgZnJ1aXRJbnB1dCwgbnVtRnJ1aXRJbnB1dCwgYnV0dG9uXVxuICApO1xuICByZXR1cm4gZm9ybTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN0cmFpbmluZ1ZhbHVlcztcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IER5bmFtaWNGb290ZXIgZnJvbSBcIi4uL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3RlclwiO1xuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuLi9NYWluU2VjdGlvbi9NYWluU2VjdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJjb250ZW50XCIgfSwgW1xuICAgIEhlYWRlcigpLFxuICAgIE1haW5TZWN0aW9uKCksXG4gICAgRHluYW1pY0Zvb3RlcigpLFxuICBdKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5pbXBvcnQgeyBnaXRodWJJbmZvIH0gZnJvbSBcIi4uLy4uL3BhZ2UtbG9naWMvZGF0YS9kYXRhLXBhZ2UtY29uZmlnXCI7XG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG4vLyBURU1QTEFURSBWQVJJQUJMRVNcbmNvbnN0IGR5bmFtaWNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBDb3B5cmlnaHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBFbGVtZW50KFxuICAgIFwiYVwiLFxuICAgIHtcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC9cIiArIGdpdGh1YkluZm8ucmVwb05hbWUsXG4gICAgfSxcbiAgICBbSWNvbihcImljb24tZ2l0aHViLWNhdFwiKV1cbiAgKTtcblxuICBjb25zdCBjb3B5cmlnaHRJbmZvID0gRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1pbmZvIGRpc3BsYXktaS1iXCIsXG4gICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7ZHluYW1pY1llYXJ9YCxcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtjb3B5cmlnaHRJbmZvLCBnaXRodWJMaW5rXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weXJpZ2h0Q29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgQ29weXJpZ2h0Q29udGFpbmVyIGZyb20gXCIuL0NvcHlyaWdodENvbnRhaW5lclwiO1xuaW1wb3J0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IFRPUENvbnRhaW5lciBmcm9tIFwiLi9UT1BMaW5rQ29udGFpbmVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBEeW5hbWljRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcImJnLWdyYXktZGFyay0zIHRleHQtd2hpdGVcIjtcbiAgY29uc3QgZm9vdGVyID0gRWxlbWVudChcbiAgICBcImZvb3RlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImZvb3RlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbQ29weXJpZ2h0Q29udGFpbmVyKCksIFRPUENvbnRhaW5lcigpLCBBdHRyaWJ1dGlvbnNDb250YWluZXIoKV1cbiAgKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGb290ZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFwiO1xuaW1wb3J0IE5vbkV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuaW1wb3J0IEljb25zRXhwbGFuYXRpb24gZnJvbSBcIi4vSWNvbnNFeHBuYW5hdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQXR0cmlidXRpb25zQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IFwiYXR0cmlidXRpb25zLWNvbnRhaW5lclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgdGl0bGU6IFwiU2l0ZSBBdHRyaWJ1dGlvbnNcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiSWNvbnNcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIE5vbkV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nb3NcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb24oXCJpY29uLWdpdGh1Yi1jYXRcIildLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgb3RoZXIgSWNvbnNcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb25zRXhwbGFuYXRpb24oKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0aW9uc0NvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbnNFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaW5rc2NhcGVMaW5rID0gRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9pbmtzY2FwZS5vcmcvXCIsXG4gICAgaW5uZXJUZXh0OiBcIklua3NjYXBlXCIsXG4gIH0pO1xuICBjb25zdCBpY29Nb29uTGluayA9IEVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vaWNvbW9vbi5pby9cIixcbiAgICBpbm5lclRleHQ6IFwiSWNvTW9vblwiLFxuICB9KTtcblxuICBjb25zdCBkaXYgPSBFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpbm5lckhUTUw6IGBBbGwgb3RoZXIgaWNvbnMgd2VyZSBjcmVhdGVkIGJ5IG1lIHVzaW5nICR7aW5rc2NhcGVMaW5rLm91dGVySFRNTH0gYW5kIGNvbnZlcnRpbmcgdGhlbSB0byBhIGZvbnQgd2l0aCAke2ljb01vb25MaW5rLm91dGVySFRNTH1gLFxuICB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImljb25zLWV4cGxhbmF0aW9uXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcywgaW5uZXJIVE1MOiBgYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbZGl2XVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zRXhwbGFuYXRpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnRcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IFRPUENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgdG9wTGluayA9IEVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgICBjbGFzc05hbWU6IFwidG9wLWxpbmtcIixcbiAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcInRvcC1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIEJ5OlwiLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFt0b3BMaW5rXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVE9QQ29udGFpbmVyO1xuIiwiLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgZG9tIGVsZW1lbnQgd2l0aCBpdHMgaW5pdGlhbCBhdHRyaWJ1dGVzIGFuZCBjaGlsZCBlbGVtZW50cyBkZWZpbmVkIGJ5IGEgcGFzc2VkLWluIG9iamVjdCBhbmQgYXJyYXkgb2YgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlU3RyIHRoZSB0YWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSByZXR1cm5lZCB5b3Ugd291bGQgdXNlIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoKVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzT2JqIChvcHRpb25hbCkgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgcHJvcGVydGllcy9hdHRyaWJ1dGVzIHlvdSB3YW50IHRoZSBlbGVtZW50IHRvIGhhdmVcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkQXJyIChvcHRpb25hbCkgYW4gb2YgZWxlbWVudCBvYmplY3RzIHRvIGJlIGFwcGVuZGVkIGFzIGNoaWxkcmVuIHRvIHRoaXMgZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjcmVhdGVkIGluIG1lbW9yeVxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudCA9ICh0eXBlU3RyLCBwcm9wc09iaiwgY2hpbGRBcnIgPSBudWxsKSA9PiB7XG4gIGxldCBsaXN0O1xuICBpZiAoXCJsaXN0XCIgaW4gcHJvcHNPYmopIHtcbiAgICBsaXN0ID0gcHJvcHNPYmoubGlzdDtcbiAgICBkZWxldGUgcHJvcHNPYmoubGlzdDtcbiAgfVxuXG4gIGlmIChjaGlsZEFyciAmJiAhQXJyYXkuaXNBcnJheShjaGlsZEFycikpIHtcbiAgICBjaGlsZEFyciA9IFtjaGlsZEFycl07XG4gIH1cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVTdHIpLFxuICAgIHByb3BzT2JqXG4gICk7XG5cbiAgaWYgKGNoaWxkQXJyKSB7XG4gICAgY2hpbGRBcnIuZm9yRWFjaCgoY2hpbGQpID0+IHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgfVxuXG4gIGlmIChsaXN0KSB7XG4gICAgcGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIGxpc3QpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7XG4gIFAsXG4gIEZpZWxkc2V0LFxuICBTcGFuLFxuICBMZWdlbmQsXG4gIExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSBcIi4uL19iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRHJpdmVyc0xpY2Vuc2VJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgZmllbGRzZXQgPSBGaWVsZHNldCh7fSwgW1xuICAgIExlZ2VuZCh7XG4gICAgICBpbm5lckhUTUw6IGBEbyB5b3UgaGF2ZSBhIGRyaXZlcidzIGxpY2Vuc2U/ICR7XG4gICAgICAgIFNwYW4oeyBhcmlhTGFiZWw6IFwicmVxdWlyZWRcIiwgaW5uZXJUZXh0OiBcIipcIiB9KS5vdXRlckhUTUxcbiAgICAgIH1gLFxuICAgIH0pLFxuICAgIExhYmVsKHsgZm9yOiBcInIxXCIsIGlubmVyVGV4dDogXCJZZXNcIiB9KSxcbiAgICBJbnB1dCh7XG4gICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG5hbWU6IFwiZHJpdmVyXCIsXG4gICAgICBpZDogXCJyMVwiLFxuICAgICAgdmFsdWU6IFwieWVzXCIsXG4gICAgfSksXG4gICAgTGFiZWwoeyBmb3I6IFwicjJcIiwgaW5uZXJUZXh0OiBcIk5vXCIgfSksXG4gICAgSW5wdXQoe1xuICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBuYW1lOiBcImRyaXZlclwiLFxuICAgICAgaWQ6IFwicjJcIixcbiAgICAgIHZhbHVlOiBcIm5vXCIsXG4gICAgfSksXG4gIF0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBQKFxuICAgIHsgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2ZpZWxkc2V0XVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyaXZlcnNMaWNlbnNlSW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgUCwgTGFiZWwsIElucHV0LCBEaXYgfSBmcm9tIFwiLi4vX2Jhc2ljLWVsZW1lbnRzL2Jhc2ljLWVsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFbWFpbElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gUChcbiAgICB7IGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7fSwgW1xuICAgICAgICBMYWJlbCh7IGZvcjogXCJ0MlwiLCBpbm5lclRleHQ6IFwiV2hhdCdzIHlvdXIgZW1haWwgYWRkcmVzcz9cIiB9KSxcbiAgICAgICAgSW5wdXQoeyB0eXBlOiBcImVtYWlsXCIsIGlkOiBcInQyXCIsIG5hbWU6IFwiZW1haWxcIiB9KSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbElucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7XG4gIFAsXG4gIERhdGFsaXN0LFxuICBPcHRpb24sXG4gIElucHV0LFxuICBEaXYsXG4gIFNwYW4sXG4gIExhYmVsLFxufSBmcm9tIFwiLi4vX2Jhc2ljLWVsZW1lbnRzL2Jhc2ljLWVsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBGYXZvcml0ZUZydWl0SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGZhdm9yaXRlRnJ1aXRJbnB1dCA9IERpdih7fSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogXCJ0MVwiLFxuICAgICAgaW5uZXJIVE1MOiBgV2hhdCdzIHlvdXIgZmF2b3JpdGUgZnJ1aXQ/ICR7XG4gICAgICAgIFNwYW4oeyBhcmlhTGFiZWw6IFwicmVxdWlyZWRcIiwgaW5uZXJUZXh0OiBcIipcIiB9KS5vdXRlckhUTUxcbiAgICAgIH1gLFxuICAgIH0pLFxuICAgIElucHV0KHtcbiAgICAgIGxpc3Q6IFwibDFcIixcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgaWQ6IFwidDFcIixcbiAgICAgIG5hbWU6IFwiZnJ1aXRcIixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgcGF0dGVybjogXCJbQmJdYW5hbmF8W0NjXWhlcnJ5fFtBYV1wcGxlfFtTc110cmF3YmVycnl8W0xsXWVtb258W09vXXJhbmdlXCIsXG4gICAgfSksXG4gICAgRGF0YWxpc3QoeyBpZDogXCJsMVwiIH0sIFtcbiAgICAgIE9wdGlvbih7IGlubmVyVGV4dDogXCJCYW5hbmFcIiB9KSxcbiAgICAgIE9wdGlvbih7IGlubmVyVGV4dDogXCJDaGVycnlcIiB9KSxcbiAgICAgIE9wdGlvbih7IGlubmVyVGV4dDogXCJBcHBsZVwiIH0pLFxuICAgICAgT3B0aW9uKHsgaW5uZXJUZXh0OiBcIlN0cmF3YmVycnlcIiB9KSxcbiAgICAgIE9wdGlvbih7IGlubmVyVGV4dDogXCJMZW1vblwiIH0pLFxuICAgICAgT3B0aW9uKHsgaW5uZXJUZXh0OiBcIk9yYW5nZVwiIH0pLFxuICAgIF0pLFxuICBdKTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gUChcbiAgICB7IGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtmYXZvcml0ZUZydWl0SW5wdXRdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVGcnVpdElucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgRmllbGRzZXQsIEZvcm0sIEgyLCBQIH0gZnJvbSBcIi4uL19iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50c1wiO1xuaW1wb3J0IERyaXZlcnNMaWNlbnNlSW5wdXQgZnJvbSBcIi4vRHJpdmVyc0xpY2Vuc2VJbnB1dFwiO1xuaW1wb3J0IEVtYWlsSW5wdXQgZnJvbSBcIi4vRW1haWxJbnB1dFwiO1xuaW1wb3J0IEZhdm9yaXRlRnJ1aXRJbnB1dCBmcm9tIFwiLi9GYXZvcml0ZUZydWl0SW5wdXRcIjtcbmltcG9ydCBIb3dPbGRBcmVZb3VJbnB1dCBmcm9tIFwiLi9Ib3dPbGRBcmVZb3VcIjtcbmltcG9ydCBTaG9ydE1lc3NhZ2VJbnB1dCBmcm9tIFwiLi9TaG9ydE1lc3NhZ2VJbnB1dFwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9TdWJtaXRCdXR0b25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEZ1bGxIdG1sRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgaDIgPSBIMih7IGlubmVyVGV4dDogXCJGdWxsIEhUTUwgVmFsaWRhdGlvbiBFeGFtcGxlXCIgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmdWxsLXZhbGlkYXRpb24tZXhhbXBsZVwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgaDIsXG4gICAgICBGb3JtKHt9LCBbXG4gICAgICAgIERyaXZlcnNMaWNlbnNlSW5wdXQoKSxcbiAgICAgICAgSG93T2xkQXJlWW91SW5wdXQoKSxcbiAgICAgICAgRmF2b3JpdGVGcnVpdElucHV0KCksXG4gICAgICAgIEVtYWlsSW5wdXQoKSxcbiAgICAgICAgU2hvcnRNZXNzYWdlSW5wdXQoKSxcbiAgICAgICAgU3VibWl0QnV0dG9uKCksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnVsbEh0bWxFeGFtcGxlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IFAsIERpdiwgTGFiZWwsIElucHV0IH0gZnJvbSBcIi4uL19iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSG93T2xkQXJlWW91SW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGFnZUlucHV0ID0gRGl2KHt9LCBbXG4gICAgTGFiZWwoeyBmb3I6IFwibjFcIiwgaW5uZXJUZXh0OiBcIkhvdyBvbGQgYXJlIHlvdT9cIiB9LCBbXSksXG4gICAgSW5wdXQoe1xuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIG1pbjogXCIxMlwiLFxuICAgICAgbWF4OiBcIjEyMFwiLFxuICAgICAgc3RlcDogXCIxXCIsXG4gICAgICBpZDogXCJuMVwiLFxuICAgICAgbmFtZTogXCJhZ2VcIixcbiAgICAgIHBhdHRlcm46IFwiZCtcIixcbiAgICB9KSxcbiAgXSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFAoXG4gICAgeyBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbYWdlSW5wdXRdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG93T2xkQXJlWW91SW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBQLCBUZXh0YXJlYSwgTGFiZWwgfSBmcm9tIFwiLi4vX2Jhc2ljLWVsZW1lbnRzL2Jhc2ljLWVsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBTaG9ydE1lc3NhZ2VJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFAoXG4gICAgeyBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoe30sIFtcbiAgICAgICAgTGFiZWwoeyBmb3I6IFwidDNcIiwgaW5uZXJUZXh0OiBcIkxlYXZlIGEgc2hvcnQgbWVzc2FnZVwiIH0pLFxuICAgICAgICBUZXh0YXJlYSh7IGlkOiBcInQzXCIsIG5hbWU6IFwibXNnXCIsIG1heExlbmd0aDogXCIxNDBcIiwgcm93czogXCI1XCIgfSksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcnRNZXNzYWdlSW5wdXQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQnV0dG9uLCBQIH0gZnJvbSBcIi4uL19iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gUChcbiAgICB7IGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtCdXR0b24oeyBpbm5lclRleHQ6IFwiU3VibWl0XCIgfSldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGgxID0gRWxlbWVudChcImgxXCIsIHsgaW5uZXJUZXh0OiBcIkZvcm0gVmFsaWRhdGlvbiBXaXRoIEpTXCIgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlIHAtMlwiO1xuICBjb25zdCBoZWFkZXIgPSBFbGVtZW50KFxuICAgIFwiaGVhZGVyXCIsXG4gICAge1xuICAgICAgaWQ6IFwiaGVhZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IFwiaGVhZGVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIFtoMV1cbiAgKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBnZW5lcmF0ZVRlc3RDb250ZW50QXJyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG5pbXBvcnQgU2ltcGxlRm9ybSBmcm9tIFwiLi4vU2ltcGxlU3RhcnQvU2ltcGxlXCI7XG5pbXBvcnQgQ29uc3RyYWluaW5nVmFsdWVzIGZyb20gXCIuLi9Db25zdHJhaW5pbmdWYWx1ZXMvQ29uc3RyYWluaW5nVmFsdWVzXCI7XG5pbXBvcnQgRnVsbEh0bWxFeGFtcGxlIGZyb20gXCIuLi9GdWxsSHRtbFZhbGlkYXRpb25FeGFtcGxlL0Z1bGxIdG1sVmFsaWRhdGlvbkV4YW1wbGVcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcInAtMVwiO1xuICBjb25zdCBtYWluID0gRWxlbWVudChcbiAgICBcIm1haW5cIixcbiAgICB7XG4gICAgICBpZDogXCJtYWluLXNlY3Rpb25cIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtTaW1wbGVGb3JtKCksIENvbnN0cmFpbmluZ1ZhbHVlcygpLCBGdWxsSHRtbEV4YW1wbGUoKV1cbiAgKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2VjdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgU2ltcGxlRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgc2hhcmVkQ2xhc3NlcyA9IFwibXItMVwiO1xuXG4gIGNvbnN0IGgyID0gRWxlbWVudChcImgyXCIsIHsgaW5uZXJUZXh0OiBcIlNpbXBsZSBTdGFydFwiIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gRWxlbWVudChcImxhYmVsXCIsIHtcbiAgICBmb3I6IFwiY2hvb3NlXCIsXG4gICAgaW5uZXJUZXh0OiBcIldvdWxkIHlvdSBwcmVmZXIgYSBiYW5uYW5hIG9yIGNoZXJyeT9cIixcbiAgICBjbGFzc05hbWU6IHNoYXJlZENsYXNzZXMsXG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0ID0gRWxlbWVudChcImlucHV0XCIsIHtcbiAgICBpZDogXCJjaG9vc2VcIixcbiAgICBuYW1lOiBcImktbGlrZVwiLFxuICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBwYXR0ZXJuOiBcIltCYl1hbmFuYXxbQ2NdaGVycnlcIixcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uID0gRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgaW5uZXJUZXh0OiBcIlN1Ym1pdFwiLFxuICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgfSk7XG5cbiAgY29uc3QgZGl2ID0gRWxlbWVudChcImRpdlwiLCB7fSwgW2xhYmVsLCBpbnB1dCwgYnV0dG9uXSk7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwibWItM1wiO1xuICBjb25zdCBmb3JtID0gRWxlbWVudChcbiAgICBcImZvcm1cIixcbiAgICB7IGNsYXNzTmFtZTogXCJzaW1wbGUtZm9ybVwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2gyLCBkaXZdXG4gICk7XG4gIHJldHVybiBmb3JtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlRm9ybTtcbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBBID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhcnRpY2xlXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJvZHlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJ1dHRvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGl2XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERhdGFsaXN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRhdGFsaXN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkc2V0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZpZWxkc2V0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb290ZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb3JtXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgxXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgzID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgzXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoZWFkZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSHIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaHJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEltZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbWdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW5wdXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGFiZWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGVnZW5kID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxlZ2VuZFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMaSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm1haW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT2wgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib2xcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9wdGlvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBQID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInBcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3Ryb25nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInN0cm9uZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNwYW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwidGV4dGFyZWFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgVWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwidWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5cbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxUaXRsZSBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxUaXRsZVwiO1xuaW1wb3J0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsQ29udGVudFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgY29tcG9uZW50SWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYW5lbCA9IEVsZW1lbnQoXG4gICAgXCJhXCIsXG4gICAgeyBjbGFzc05hbWU6IFwiZXhwYW5kYWJsZS1wYW5lbFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsVGl0bGUoeyB0aXRsZSwgY29tcG9uZW50SWQgfSksXG4gICAgICBFeHBhbmRhYmxlUGFuZWxDb250ZW50KHsgY2hpbGRyZW4sIGNvbXBvbmVudElkIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGFpbmVyIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFwiO1xuaW1wb3J0IE5vbkV4cGFuZGFibGVQYW5lbENvbnRhaW5lciBmcm9tIFwiLi9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgY2hpbGRyZW4sIGNvbXBvbmVudElkIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGVudFwiIH0sIFsuLi5jaGlsZHJlbl0pO1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YCxcbiAgICAgIGNsYXNzTmFtZTogXCJleHBhbmRhYmxlLXBhbmVsLWNvbnRlbnRcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtjb250ZW50XVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5mdW5jdGlvbiB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpIHtcbiAgY29uc3QgZXhwYW5zaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGNvbnN0IHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBleHBhbnNpb25Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IEVsZW1lbnQoXG4gICAgXCJidXR0b25cIixcbiAgICB7XG4gICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gLFxuICAgICAgb25jbGljaygpIHtcbiAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbSWNvbihcImljb24tdXAtZG93blwiKV1cbiAgKTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCB0aXRsZURpdiA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJleHBhbmRhYmxlLXBhbmVsLXRpdGxlXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIFtcbiAgICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1pLWJcIixcbiAgICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBleHBhbmRCdXR0b24sXG4gICAgXVxuICApO1xuXG4gIHJldHVybiB0aXRsZURpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbFRpdGxlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBOb25FeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgdGl0bGUsIGhyZWYsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcblxuICBjb25zdCBwYW5lbCA9IEVsZW1lbnQoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgJHtvdGhlckNsYXNzZXN9IG5vbi1leHBhbmRhYmxlLXBhbmVsICR7XG4gICAgICAgIGhyZWYgPyBcImlzLWxpbmtcIiA6IFwiXCJcbiAgICAgIH1gLFxuICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbLi4uY2hpbGRyZW5dXG4gICk7XG4gIGlmIChocmVmKSB7XG4gICAgcGFuZWwuaHJlZiA9IGhyZWY7XG4gIH1cbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9uRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uID0gKGljb25DbGFzcykgPT4ge1xuICBjb25zdCBpY29uID0gRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IGBpY29uICR7aWNvbkNsYXNzfSBkaXNwbGF5LWktYmAgfSk7XG4gIHJldHVybiBpY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImV4cG9ydCBjb25zdCBnaXRodWJJbmZvID0ge1xuICByZXBvTmFtZTogXCJmb3JtLXZhbGlkYXRpb24td2l0aC1qcy1UT1BcIixcbn07XG4iLCJpbXBvcnQgeyBhcHBseVdpbmRvd0xpc3RlbmVycyB9IGZyb20gXCIuL3VpLXBhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SW5pdGlhbFN0YXRlKCkge1xuICBhcHBseVdpbmRvd0xpc3RlbmVycygpO1xuICAvLyBjbGlja0Nhcm91c2VsUGxheSgpO1xufVxuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgYnJlYWtQb2ludHMgPSB7XG4gIHhzOiAwLFxuICBzbTogNDgwLFxuICBtZDogNzIwLFxuICBsZzogOTYwLFxuICB4bDogMTIwMCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVdpbmRvd0xpc3RlbmVycygpIHtcbiAgd2luZG93Lm9ucmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAvL1xuICB9KTtcbn1cbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVBbmRBZGRFbGxpcHNlID0gKHN0cmluZywgbnVtQ2hhcnNUb0tlZXApID0+IHtcbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBudW1DaGFyc1RvS2VlcCkudHJpbUVuZCgpICsgXCIuLi5cIjtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBzZXR1cCBhIHRpbWVyXG4gIGxldCB0aW1lb3V0O1xuXG4gIC8vIHJldHVybiBhIGZ1bmN0aW9uIHRvIHJ1biBkZWJvdW5jZWRcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvL3NldHVwIGFyZ3NcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgdGltZXIgY2FuY2VsIGl0XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyBzZXR1cCB0aGUgbmV3IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgdGltZW91dCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgaWYgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RDb250ZW50QXJyKG51bUNoaWxkcmVuKSB7XG4gIHJldHVybiBBcnJheShudW1DaGlsZHJlbilcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKGVsZW0pID0+XG4gICAgICBFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWIgbWItMVwiLFxuICAgICAgICBpbm5lclRleHQ6XG4gICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvciwgdWxsYW0gYWQsIG1heGltZSBlbmltIHNlcXVpIHN1bnQgcXVvIGZhY2lsaXMgaWxsbyBldmVuaWV0IGxhdWRhbnRpdW0gcXVhZSByZXBlbGxlbmR1cyBkb2xvcnVtIG9tbmlzIG1pbmltYSBkdWNpbXVzIGFyY2hpdGVjdG8hIEJlYXRhZSwgdmVsIGFzc3VtZW5kYS5cIixcbiAgICAgIH0pXG4gICAgKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnRcIjtcbmltcG9ydCB7IGFwcGx5SW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4vcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuYXBwbHlJbml0aWFsU3RhdGUoKTtcblxuLy8gZGVidWdnaW5nXG5jb25zdCBkZWJ1Z2dpbmcgPSB0cnVlO1xuaWYgKGRlYnVnZ2luZykge1xuICAvL1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9