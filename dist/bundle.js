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
    { className: "" + " " + otherClasses },
    // add child elements to the array below
    [h2, (0,_basic_elements_basic_elements__WEBPACK_IMPORTED_MODULE_0__.Form)({}, [(0,_DriversLicenseInput__WEBPACK_IMPORTED_MODULE_1__["default"])()])]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullHtmlExample);


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
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   Span: () => (/* binding */ Span),
/* harmony export */   Strong: () => (/* binding */ Strong),
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

const Footer = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("footer", props ? { ...props } : {}, children ? [...children] : []);

const Form = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("form", props ? { ...props } : {}, children ? [...children] : []);

const Fieldset = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("fieldset", props ? { ...props } : {}, children ? [...children] : []);

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

const Li = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("li", props ? { ...props } : {}, children ? [...children] : []);

const Label = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("label", props ? { ...props } : {}, children ? [...children] : []);

const Legend = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("legend", props ? { ...props } : {}, children ? [...children] : []);

const Main = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("main", props ? { ...props } : {}, children ? [...children] : []);

const Ol = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("ol", props ? { ...props } : {}, children ? [...children] : []);

const P = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("p", props ? { ...props } : {}, children ? [...children] : []);

const Strong = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("strong", props ? { ...props } : {}, children ? [...children] : []);

const Span = (props, children) =>
  (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("span", props ? { ...props } : {}, children ? [...children] : []);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7Ozs7OztVQzlDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDc0I7QUFDa0I7O0FBRXJFLDBCQUEwQix1RUFBTzs7QUFFakMsa0ZBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29uc3RyYWluaW5nVmFsdWVzL0NvbnN0cmFpbmluZ1ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvQ29weXJpZ2h0Q29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9EeW5hbWljRm9vdGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9JY29uc0V4cG5hbmF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9UT1BMaW5rQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Z1bGxIdG1sVmFsaWRhdGlvbkV4YW1wbGUvRHJpdmVyc0xpY2Vuc2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Z1bGxIdG1sVmFsaWRhdGlvbkV4YW1wbGUvRnVsbEh0bWxWYWxpZGF0aW9uRXhhbXBsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL1NpbXBsZVN0YXJ0L1NpbXBsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxDb250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxUaXRsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ljb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvdWkvdWktcGFnZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCwgQnV0dG9uIH0gZnJvbSBcIi4uL19iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ29uc3RyYWluaW5nVmFsdWVzID0gKCkgPT4ge1xuICBjb25zdCBzaGFyZWRDbGFzc2VzID0gXCJtci0xXCI7XG5cbiAgY29uc3QgaDIgPSBFbGVtZW50KFwiaDJcIiwgeyBpbm5lclRleHQ6IFwiQ29uc3RyYWluaW5nIFZhbHVlc1wiIH0pO1xuXG4gIGNvbnN0IGZydWl0SW5wdXQgPSBEaXYoeyBjbGFzc05hbWU6IFwiZGlzcGxheS1pLWJcIiB9LCBbXG4gICAgTGFiZWwoe1xuICAgICAgZm9yOiBcImNob29zZVwiLFxuICAgICAgaW5uZXJUZXh0OiBcIldvdWxkIHlvdSBwcmVmZXIgYSBiYW5uYW5hIG9yIGNoZXJyeT9cIixcbiAgICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgICB9KSxcbiAgICBJbnB1dCh7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGlkOiBcImNob29zZVwiLFxuICAgICAgbmFtZTogXCJpLWxpa2VcIixcbiAgICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluTGVuZ3RoOiA2LFxuICAgICAgbWF4TGVuZ3RoOiA2LFxuICAgIH0pLFxuICBdKTtcblxuICBjb25zdCBudW1GcnVpdElucHV0ID0gRGl2KHsgY2xhc3NOYW1lOiBcImRpc3BsYXktaS1iXCIgfSwgW1xuICAgIExhYmVsKHtcbiAgICAgIGZvcjogXCJudW1iZXJcIixcbiAgICAgIGlubmVyVGV4dDogXCJIb3cgbWFueSB3b3VsZCB5b3UgbGlrZT9cIixcbiAgICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgICB9KSxcbiAgICBJbnB1dCh7XG4gICAgICBjbGFzc05hbWU6IHNoYXJlZENsYXNzZXMsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgaWQ6IFwibnVtYmVyXCIsXG4gICAgICBuYW1lOiBcImFtb3VudFwiLFxuICAgICAgdmFsdWU6IFwiMVwiLFxuICAgICAgbWluOiBcIjFcIixcbiAgICAgIG1heDogXCIxMFwiLFxuICAgIH0pLFxuICBdKTtcblxuICBjb25zdCBidXR0b24gPSBEaXYoeyBjbGFzc05hbWU6IFwiZGlzcGxheS1pLWJcIiB9LCBbXG4gICAgQnV0dG9uKHtcbiAgICAgIGlubmVyVGV4dDogXCJTdWJtaXRcIixcbiAgICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgICB9KSxcbiAgXSk7XG5cbiAgLy8gY29uc3QgZGl2ID0gRWxlbWVudChcImRpdlwiLCB7fSwgW2xhYmVsLCBpbnB1dCwgYnV0dG9uXSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJtYi0zXCI7XG4gIGNvbnN0IGZvcm0gPSBFbGVtZW50KFxuICAgIFwiZm9ybVwiLFxuICAgIHsgY2xhc3NOYW1lOiBcInNpbXBsZS1mb3JtXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbaDIsIGZydWl0SW5wdXQsIG51bUZydWl0SW5wdXQsIGJ1dHRvbl1cbiAgKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25zdHJhaW5pbmdWYWx1ZXM7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBEeW5hbWljRm9vdGVyIGZyb20gXCIuLi9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbiBmcm9tIFwiLi4vTWFpblNlY3Rpb24vTWFpblNlY3Rpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwiY29udGVudFwiIH0sIFtcbiAgICBIZWFkZXIoKSxcbiAgICBNYWluU2VjdGlvbigpLFxuICAgIER5bmFtaWNGb290ZXIoKSxcbiAgXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuaW1wb3J0IHsgZ2l0aHViSW5mbyB9IGZyb20gXCIuLi8uLi9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZ1wiO1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuLy8gVEVNUExBVEUgVkFSSUFCTEVTXG5jb25zdCBkeW5hbWljWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuY29uc3QgQ29weXJpZ2h0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBnaXRodWJMaW5rID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvXCIgKyBnaXRodWJJbmZvLnJlcG9OYW1lLFxuICAgIH0sXG4gICAgW0ljb24oXCJpY29uLWdpdGh1Yi1jYXRcIildXG4gICk7XG5cbiAgY29uc3QgY29weXJpZ2h0SW5mbyA9IEVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtaW5mbyBkaXNwbGF5LWktYlwiLFxuICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke2R5bmFtaWNZZWFyfWAsXG4gIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IGNvbnRhaW5lciA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtY29udGFpbmVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbY29weXJpZ2h0SW5mbywgZ2l0aHViTGlua11cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IENvcHlyaWdodENvbnRhaW5lciBmcm9tIFwiLi9Db3B5cmlnaHRDb250YWluZXJcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUT1BDb250YWluZXIgZnJvbSBcIi4vVE9QTGlua0NvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRHluYW1pY0Zvb3RlciA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlXCI7XG4gIGNvbnN0IGZvb3RlciA9IEVsZW1lbnQoXG4gICAgXCJmb290ZXJcIixcbiAgICB7XG4gICAgICBpZDogXCJmb290ZXJcIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgW0NvcHlyaWdodENvbnRhaW5lcigpLCBUT1BDb250YWluZXIoKSwgQXR0cmlidXRpb25zQ29udGFpbmVyKCldXG4gICk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljRm9vdGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxcIjtcbmltcG9ydCBOb25FeHBhbmRhYmxlUGFuZWwgZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsXCI7XG5cbmltcG9ydCBJY29uc0V4cGxhbmF0aW9uIGZyb20gXCIuL0ljb25zRXhwbmFuYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImF0dHJpYnV0aW9ucy1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgIHRpdGxlOiBcIlNpdGUgQXR0cmlidXRpb25zXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkljb25zXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICBOb25FeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdpdGh1YlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ29zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uKFwiaWNvbi1naXRodWItY2F0XCIpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIG90aGVyIEljb25zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uc0V4cGxhbmF0aW9uKCldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbnNDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb25zRXhwbGFuYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGlua3NjYXBlTGluayA9IEVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vaW5rc2NhcGUub3JnL1wiLFxuICAgIGlubmVyVGV4dDogXCJJbmtzY2FwZVwiLFxuICB9KTtcbiAgY29uc3QgaWNvTW9vbkxpbmsgPSBFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL2ljb21vb24uaW8vXCIsXG4gICAgaW5uZXJUZXh0OiBcIkljb01vb25cIixcbiAgfSk7XG5cbiAgY29uc3QgZGl2ID0gRWxlbWVudChcImRpdlwiLCB7XG4gICAgaW5uZXJIVE1MOiBgQWxsIG90aGVyIGljb25zIHdlcmUgY3JlYXRlZCBieSBtZSB1c2luZyAke2lua3NjYXBlTGluay5vdXRlckhUTUx9IGFuZCBjb252ZXJ0aW5nIHRoZW0gdG8gYSBmb250IHdpdGggJHtpY29Nb29uTGluay5vdXRlckhUTUx9YCxcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJpY29ucy1leHBsYW5hdGlvblwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsIGlubmVySFRNTDogYGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2Rpdl1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uc0V4cGxhbmF0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBUT1BDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcExpbmsgPSBFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b3AtY29udGFpbmVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBCeTpcIixcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbdG9wTGlua11cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRPUENvbnRhaW5lcjtcbiIsIi8qKlxuICogVGhpcyBGdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhIGRvbSBlbGVtZW50IHdpdGggaXRzIGluaXRpYWwgYXR0cmlidXRlcyBhbmQgY2hpbGQgZWxlbWVudHMgZGVmaW5lZCBieSBhIHBhc3NlZC1pbiBvYmplY3QgYW5kIGFycmF5IG9mIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVN0ciB0aGUgdGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgcmV0dXJuZWQgeW91IHdvdWxkIHVzZSBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KClcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc09iaiAob3B0aW9uYWwpIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbml0aWFsIHByb3BlcnRpZXMvYXR0cmlidXRlcyB5b3Ugd2FudCB0aGUgZWxlbWVudCB0byBoYXZlXG4gKiBAcGFyYW0ge2FycmF5fSBjaGlsZEFyciAob3B0aW9uYWwpIGFuIG9mIGVsZW1lbnQgb2JqZWN0cyB0byBiZSBhcHBlbmRlZCBhcyBjaGlsZHJlbiB0byB0aGlzIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY3JlYXRlZCBpbiBtZW1vcnlcbiAqL1xuY29uc3QgRWxlbWVudCA9ICh0eXBlU3RyLCBwcm9wc09iaiwgY2hpbGRBcnIgPSBudWxsKSA9PiB7XG4gIGlmIChjaGlsZEFyciAmJiAhQXJyYXkuaXNBcnJheShjaGlsZEFycikpIHtcbiAgICBjaGlsZEFyciA9IFtjaGlsZEFycl07XG4gIH1cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVTdHIpLFxuICAgIHByb3BzT2JqXG4gICk7XG5cbiAgaWYgKGNoaWxkQXJyKSB7XG4gICAgY2hpbGRBcnIuZm9yRWFjaCgoY2hpbGQpID0+IHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQge1xuICBQLFxuICBGaWVsZHNldCxcbiAgU3BhbixcbiAgTGVnZW5kLFxuICBMYWJlbCxcbiAgSW5wdXQsXG59IGZyb20gXCIuLi9fYmFzaWMtZWxlbWVudHMvYmFzaWMtZWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IERyaXZlcnNMaWNlbnNlSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGZpZWxkc2V0ID0gRmllbGRzZXQoe30sIFtcbiAgICBMZWdlbmQoe1xuICAgICAgaW5uZXJIVE1MOiBgRG8geW91IGhhdmUgYSBkcml2ZXIncyBsaWNlbnNlPyAke1xuICAgICAgICBTcGFuKHsgYXJpYUxhYmVsOiBcInJlcXVpcmVkXCIsIGlubmVyVGV4dDogXCIqXCIgfSkub3V0ZXJIVE1MXG4gICAgICB9YCxcbiAgICB9KSxcbiAgICBMYWJlbCh7IGZvcjogXCJyMVwiLCBpbm5lclRleHQ6IFwiWWVzXCIgfSksXG4gICAgSW5wdXQoe1xuICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBuYW1lOiBcImRyaXZlclwiLFxuICAgICAgaWQ6IFwicjFcIixcbiAgICAgIHZhbHVlOiBcInllc1wiLFxuICAgIH0pLFxuICAgIExhYmVsKHsgZm9yOiBcInIyXCIsIGlubmVyVGV4dDogXCJOb1wiIH0pLFxuICAgIElucHV0KHtcbiAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbmFtZTogXCJkcml2ZXJcIixcbiAgICAgIGlkOiBcInIyXCIsXG4gICAgICB2YWx1ZTogXCJub1wiLFxuICAgIH0pLFxuICBdKTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gUChcbiAgICB7IGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtmaWVsZHNldF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcml2ZXJzTGljZW5zZUlucHV0O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgRmllbGRzZXQsIEZvcm0sIEgyLCBQIH0gZnJvbSBcIi4uL19iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50c1wiO1xuaW1wb3J0IERyaXZlcnNMaWNlbnNlSW5wdXQgZnJvbSBcIi4vRHJpdmVyc0xpY2Vuc2VJbnB1dFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRnVsbEh0bWxFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBoMiA9IEgyKHsgaW5uZXJUZXh0OiBcIkZ1bGwgSFRNTCBWYWxpZGF0aW9uIEV4YW1wbGVcIiB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2gyLCBGb3JtKHt9LCBbRHJpdmVyc0xpY2Vuc2VJbnB1dCgpXSldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnVsbEh0bWxFeGFtcGxlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGgxID0gRWxlbWVudChcImgxXCIsIHsgaW5uZXJUZXh0OiBcIkZvcm0gVmFsaWRhdGlvbiBXaXRoIEpTXCIgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlIHAtMlwiO1xuICBjb25zdCBoZWFkZXIgPSBFbGVtZW50KFxuICAgIFwiaGVhZGVyXCIsXG4gICAge1xuICAgICAgaWQ6IFwiaGVhZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IFwiaGVhZGVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIFtoMV1cbiAgKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBnZW5lcmF0ZVRlc3RDb250ZW50QXJyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG5pbXBvcnQgU2ltcGxlRm9ybSBmcm9tIFwiLi4vU2ltcGxlU3RhcnQvU2ltcGxlXCI7XG5pbXBvcnQgQ29uc3RyYWluaW5nVmFsdWVzIGZyb20gXCIuLi9Db25zdHJhaW5pbmdWYWx1ZXMvQ29uc3RyYWluaW5nVmFsdWVzXCI7XG5pbXBvcnQgRnVsbEh0bWxFeGFtcGxlIGZyb20gXCIuLi9GdWxsSHRtbFZhbGlkYXRpb25FeGFtcGxlL0Z1bGxIdG1sVmFsaWRhdGlvbkV4YW1wbGVcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcInAtMVwiO1xuICBjb25zdCBtYWluID0gRWxlbWVudChcbiAgICBcIm1haW5cIixcbiAgICB7XG4gICAgICBpZDogXCJtYWluLXNlY3Rpb25cIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtTaW1wbGVGb3JtKCksIENvbnN0cmFpbmluZ1ZhbHVlcygpLCBGdWxsSHRtbEV4YW1wbGUoKV1cbiAgKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2VjdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgU2ltcGxlRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgc2hhcmVkQ2xhc3NlcyA9IFwibXItMVwiO1xuXG4gIGNvbnN0IGgyID0gRWxlbWVudChcImgyXCIsIHsgaW5uZXJUZXh0OiBcIlNpbXBsZSBTdGFydFwiIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gRWxlbWVudChcImxhYmVsXCIsIHtcbiAgICBmb3I6IFwiY2hvb3NlXCIsXG4gICAgaW5uZXJUZXh0OiBcIldvdWxkIHlvdSBwcmVmZXIgYSBiYW5uYW5hIG9yIGNoZXJyeT9cIixcbiAgICBjbGFzc05hbWU6IHNoYXJlZENsYXNzZXMsXG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0ID0gRWxlbWVudChcImlucHV0XCIsIHtcbiAgICBpZDogXCJjaG9vc2VcIixcbiAgICBuYW1lOiBcImktbGlrZVwiLFxuICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBwYXR0ZXJuOiBcIltCYl1hbmFuYXxbQ2NdaGVycnlcIixcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uID0gRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgaW5uZXJUZXh0OiBcIlN1Ym1pdFwiLFxuICAgIGNsYXNzTmFtZTogc2hhcmVkQ2xhc3NlcyxcbiAgfSk7XG5cbiAgY29uc3QgZGl2ID0gRWxlbWVudChcImRpdlwiLCB7fSwgW2xhYmVsLCBpbnB1dCwgYnV0dG9uXSk7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwibWItM1wiO1xuICBjb25zdCBmb3JtID0gRWxlbWVudChcbiAgICBcImZvcm1cIixcbiAgICB7IGNsYXNzTmFtZTogXCJzaW1wbGUtZm9ybVwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2gyLCBkaXZdXG4gICk7XG4gIHJldHVybiBmb3JtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlRm9ybTtcbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBBID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhcnRpY2xlXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJvZHlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJ1dHRvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGl2XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb290ZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb3JtXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkc2V0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZpZWxkc2V0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgxXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgzID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgzXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoZWFkZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSHIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaHJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEltZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbWdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW5wdXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGFiZWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGVnZW5kID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxlZ2VuZFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm1haW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT2wgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib2xcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgUCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJwXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFN0cm9uZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzdHJvbmdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3BhbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzcGFuXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsVGl0bGUgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsVGl0bGVcIjtcbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxDb250ZW50IGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbENvbnRlbnRcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gdXVpZHY0KCk7XG4gIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFuZWwgPSBFbGVtZW50KFxuICAgIFwiYVwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWxcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbFRpdGxlKHsgdGl0bGUsIGNvbXBvbmVudElkIH0pLFxuICAgICAgRXhwYW5kYWJsZVBhbmVsQ29udGVudCh7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IEV4cGFuZGFibGVQYW5lbENvbnRhaW5lciBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxcIjtcbmltcG9ydCBOb25FeHBhbmRhYmxlUGFuZWxDb250YWluZXIgZnJvbSBcIi4vTm9uRXhwYW5kYWJsZVBhbmVsXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRlbnRcIiB9LCBbLi4uY2hpbGRyZW5dKTtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWAsXG4gICAgICBjbGFzc05hbWU6IFwiZXhwYW5kYWJsZS1wYW5lbC1jb250ZW50XCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbY29udGVudF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi8uLi9FbGVtZW50XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuZnVuY3Rpb24gdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKSB7XG4gIGNvbnN0IGV4cGFuc2lvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBjb25zdCB0b2dnbGVFeHBhbnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgZXhwYW5zaW9uQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbFRpdGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvbXBvbmVudElkIH0gPSBwcm9wcztcblxuICBjb25zdCBleHBhbmRCdXR0b24gPSBFbGVtZW50KFxuICAgIFwiYnV0dG9uXCIsXG4gICAge1xuICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YCxcbiAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgW0ljb24oXCJpY29uLXVwLWRvd25cIildXG4gICk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgdGl0bGVEaXYgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IFwiZXhwYW5kYWJsZS1wYW5lbC10aXRsZVwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICBbXG4gICAgICBFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImRpc3BsYXktaS1iXCIsXG4gICAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZXhwYW5kQnV0dG9uLFxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gdGl0bGVEaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxUaXRsZTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTm9uRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBocmVmLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG5cbiAgY29uc3QgcGFuZWwgPSBFbGVtZW50KFxuICAgIFwiYVwiLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7b3RoZXJDbGFzc2VzfSBub24tZXhwYW5kYWJsZS1wYW5lbCAke1xuICAgICAgICBocmVmID8gXCJpcy1saW5rXCIgOiBcIlwiXG4gICAgICB9YCxcbiAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgWy4uLmNoaWxkcmVuXVxuICApO1xuICBpZiAoaHJlZikge1xuICAgIHBhbmVsLmhyZWYgPSBocmVmO1xuICB9XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vbkV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbiA9IChpY29uQ2xhc3MpID0+IHtcbiAgY29uc3QgaWNvbiA9IEVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBgaWNvbiAke2ljb25DbGFzc30gZGlzcGxheS1pLWJgIH0pO1xuICByZXR1cm4gaWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJleHBvcnQgY29uc3QgZ2l0aHViSW5mbyA9IHtcbiAgcmVwb05hbWU6IFwiZm9ybS12YWxpZGF0aW9uLXdpdGgtanMtVE9QXCIsXG59O1xuIiwiaW1wb3J0IHsgYXBwbHlXaW5kb3dMaXN0ZW5lcnMgfSBmcm9tIFwiLi91aS1wYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUluaXRpYWxTdGF0ZSgpIHtcbiAgYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKTtcbiAgLy8gY2xpY2tDYXJvdXNlbFBsYXkoKTtcbn1cbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICB4czogMCxcbiAgc206IDQ4MCxcbiAgbWQ6IDcyMCxcbiAgbGc6IDk2MCxcbiAgeGw6IDEyMDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKSB7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9cbiAgfSk7XG59XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL0VsZW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlQW5kQWRkRWxsaXBzZSA9IChzdHJpbmcsIG51bUNoYXJzVG9LZWVwKSA9PiB7XG4gIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbnVtQ2hhcnNUb0tlZXApLnRyaW1FbmQoKSArIFwiLi4uXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gc2V0dXAgYSB0aW1lclxuICBsZXQgdGltZW91dDtcblxuICAvLyByZXR1cm4gYSBmdW5jdGlvbiB0byBydW4gZGVib3VuY2VkXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy9zZXR1cCBhcmdzXG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIHRpbWVyIGNhbmNlbCBpdFxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZW91dCk7XG4gICAgfVxuXG4gICAgLy8gc2V0dXAgdGhlIG5ldyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgIHRpbWVvdXQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXN0Q29udGVudEFycihudW1DaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkobnVtQ2hpbGRyZW4pXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChlbGVtKSA9PlxuICAgICAgRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1iIG1iLTFcIixcbiAgICAgICAgaW5uZXJUZXh0OlxuICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3IsIHVsbGFtIGFkLCBtYXhpbWUgZW5pbSBzZXF1aSBzdW50IHF1byBmYWNpbGlzIGlsbG8gZXZlbmlldCBsYXVkYW50aXVtIHF1YWUgcmVwZWxsZW5kdXMgZG9sb3J1bSBvbW5pcyBtaW5pbWEgZHVjaW11cyBhcmNoaXRlY3RvISBCZWF0YWUsIHZlbCBhc3N1bWVuZGEuXCIsXG4gICAgICB9KVxuICAgICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50XCI7XG5pbXBvcnQgeyBhcHBseUluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL3BhZ2UtbG9naWMvdWkvdWktaW5pdGlhbC1zdGF0ZVwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG5cbmFwcGx5SW5pdGlhbFN0YXRlKCk7XG5cbi8vIGRlYnVnZ2luZ1xuY29uc3QgZGVidWdnaW5nID0gdHJ1ZTtcbmlmIChkZWJ1Z2dpbmcpIHtcbiAgLy9cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==