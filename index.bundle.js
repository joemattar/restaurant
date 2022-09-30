/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/BloodlustExpanded-Ao5m.ttf */ "./src/fonts/BloodlustExpanded-Ao5m.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/Redcap.ttf */ "./src/fonts/Redcap.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Bloodlust\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: \"Redcap\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --color-header: #ffbc0c;\n    --color-header-logo-text: #f54235;\n    --color-header-logo-text-hover: #bf1c1d;\n    --color-main: red;\n    --color-footer: blue;\n    --font-main: \"Bloodlust\";\n    --font-main-alt: \"Redcap\";\n\n}\n\nbody {\n    background-color: var(--color-header);\n\n    font-family: var(--font-main);\n    color: var(--color-header-logo-text);\n    font-size: 2rem;\n\n    margin: 0;\n    padding: 0;\n\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n}\n\na {\n    text-decoration: none;\n    color: var(--color-header-logo-text);\n}\n\na:hover {\n    color: var(--color-header-logo-text-hover);\n}\n\nimg {\n    border-radius: 1rem;\n}\n\n#content {\n    min-height: 100vh;\n    width: min(100vw, 1080px);\n\n    padding: 0 1rem;\n\n    display: grid;\n    grid-template-rows: 5rem 1fr 4rem;\n}\n\nheader {\n    color: var(--color-header-logo-text);\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader .logo {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nheader .logo .logo-img img {\n    height: 3rem;\n}\n\nheader .logo .logo-text {\n\n    font-size: 2.5rem;\n}\n\nheader .menu {\n    font-size: 2rem;\n\n    display: flex;\n    gap: 1rem;\n}\n\n#main {\n    margin: 1rem 0;\n}\n\n#main.main-display, \n#main.contact-display,\n#main.attribution-display {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .main-img {\n    max-width: 100%;\n}\n\n#main .alt-font {\n    font-family: var(--font-main-alt);\n    font-size: 1.5rem;\n}\n\n#main.menu-display {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: stretch;\n    gap: 1rem;\n}\n\n#main .menu-item {\n    padding: 1rem;\n\n    border-color: var(--color-header-logo-text);\n    border-radius: 1rem;\n    border-style: solid;\n    border-width: 0.5rem;\n\n    max-width: calc((1080px - 7rem) / 2) ;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .menu-item .alt-font {\n    font-size: 1.25rem;\n\n    width: 100%;\n}\n\n#main .menu-item img {\n    max-width: 100%;\n}\n\n#main .main-attribution-img {\n    max-width: 450px;\n}\n\n#main .attribution a {\n    font-size: 1.75rem;\n}\n\nfooter {\n    color: var(--color-header-logo-text);\n    font-size: 1.5rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\nfooter a {\n    display: grid;\n    place-content: center;\n}\n\nfooter img {\n    height: 1.2rem;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,4CAAiD;AACrD;;AAEA;IACI,qBAAqB;IACrB,4CAAiC;AACrC;;AAEA;IACI,uBAAuB;IACvB,iCAAiC;IACjC,uCAAuC;IACvC,iBAAiB;IACjB,oBAAoB;IACpB,wBAAwB;IACxB,yBAAyB;;AAE7B;;AAEA;IACI,qCAAqC;;IAErC,6BAA6B;IAC7B,oCAAoC;IACpC,eAAe;;IAEf,SAAS;IACT,UAAU;;IAEV,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;;IAEzB,eAAe;;IAEf,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,oCAAoC;;IAEpC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;;;;IAII,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,aAAa;;IAEb,2CAA2C;IAC3C,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;;IAEpB,qCAAqC;;IAErC,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;;IAElB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["@font-face {\n    font-family: \"Bloodlust\";\n    src: url(\"/src/fonts/BloodlustExpanded-Ao5m.ttf\");\n}\n\n@font-face {\n    font-family: \"Redcap\";\n    src: url(\"/src/fonts/Redcap.ttf\");\n}\n\n:root {\n    --color-header: #ffbc0c;\n    --color-header-logo-text: #f54235;\n    --color-header-logo-text-hover: #bf1c1d;\n    --color-main: red;\n    --color-footer: blue;\n    --font-main: \"Bloodlust\";\n    --font-main-alt: \"Redcap\";\n\n}\n\nbody {\n    background-color: var(--color-header);\n\n    font-family: var(--font-main);\n    color: var(--color-header-logo-text);\n    font-size: 2rem;\n\n    margin: 0;\n    padding: 0;\n\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n}\n\na {\n    text-decoration: none;\n    color: var(--color-header-logo-text);\n}\n\na:hover {\n    color: var(--color-header-logo-text-hover);\n}\n\nimg {\n    border-radius: 1rem;\n}\n\n#content {\n    min-height: 100vh;\n    width: min(100vw, 1080px);\n\n    padding: 0 1rem;\n\n    display: grid;\n    grid-template-rows: 5rem 1fr 4rem;\n}\n\nheader {\n    color: var(--color-header-logo-text);\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader .logo {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nheader .logo .logo-img img {\n    height: 3rem;\n}\n\nheader .logo .logo-text {\n\n    font-size: 2.5rem;\n}\n\nheader .menu {\n    font-size: 2rem;\n\n    display: flex;\n    gap: 1rem;\n}\n\n#main {\n    margin: 1rem 0;\n}\n\n#main.main-display, \n#main.contact-display,\n#main.attribution-display {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .main-img {\n    max-width: 100%;\n}\n\n#main .alt-font {\n    font-family: var(--font-main-alt);\n    font-size: 1.5rem;\n}\n\n#main.menu-display {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: stretch;\n    gap: 1rem;\n}\n\n#main .menu-item {\n    padding: 1rem;\n\n    border-color: var(--color-header-logo-text);\n    border-radius: 1rem;\n    border-style: solid;\n    border-width: 0.5rem;\n\n    max-width: calc((1080px - 7rem) / 2) ;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .menu-item .alt-font {\n    font-size: 1.25rem;\n\n    width: 100%;\n}\n\n#main .menu-item img {\n    max-width: 100%;\n}\n\n#main .main-attribution-img {\n    max-width: 450px;\n}\n\n#main .attribution a {\n    font-size: 1.75rem;\n}\n\nfooter {\n    color: var(--color-header-logo-text);\n    font-size: 1.5rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\nfooter a {\n    display: grid;\n    place-content: center;\n}\n\nfooter img {\n    height: 1.2rem;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/attributions.js":
/*!*****************************!*\
  !*** ./src/attributions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributionsContentLoader": () => (/* binding */ attributionsContentLoader)
/* harmony export */ });
/* harmony import */ var _images_rodney_scott_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/rodney_scott.jpg */ "./src/images/rodney_scott.jpg");


function attributionsContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("attribution-display");

    // Main attribution image
    const mainAttributionImg = document.createElement("img");
    mainAttributionImg.classList.add("main-attribution-img");
    mainAttributionImg.src = _images_rodney_scott_jpg__WEBPACK_IMPORTED_MODULE_0__;
    mainAttributionImg.alt = "Chef Rodney Scott BBQing";
    mainDiv.appendChild(mainAttributionImg);

    const attributionDiv0 = document.createElement("div");
    attributionDiv0.classList.add("attribution");
    attributionDiv0.innerHTML = '<a target="_blank" href="https://www.al.com/business/2020/04/rodney-scott-little-donkey-to-open-homewood-locations-in-2021.html">Attribution photo Chef Rodney Scott by AI</a>';
    mainDiv.appendChild(attributionDiv0);
    
    const attributionDiv1 = document.createElement("div");
    attributionDiv1.classList.add("attribution");
    attributionDiv1.innerHTML = '<a target="_blank" href="https://www.flaticon.com/free-icons/butcher-shop">Logo created by Smashicons - Flaticon</a>';
    mainDiv.appendChild(attributionDiv1);

    const attributionDiv2 = document.createElement("div");
    attributionDiv2.classList.add("attribution");
    attributionDiv2.innerHTML = '<a target="_blank" href="https://rollywoodbbq.com/">Main photo by Rollywood BBQ</a>';
    mainDiv.appendChild(attributionDiv2);

    const attributionDiv3 = document.createElement("div");
    attributionDiv3.classList.add("attribution");
    attributionDiv3.innerHTML = '<a target="_blank" href="http://www.stilesswitchbbq.com/about">Main text inspired by Stiles Switch BBQ</a>';
    mainDiv.appendChild(attributionDiv3);

    const attributionDiv4 = document.createElement("div");
    attributionDiv4.classList.add("attribution");
    attributionDiv4.innerHTML = `<a target="_blank" href="https://www.oklahomajoes.com/recipes/smoked-beef-brisket-with-texas-rub">Brisket recipe by Oklahoma Joe's</a>`;
    mainDiv.appendChild(attributionDiv4);

    const attributionDiv5 = document.createElement("div");
    attributionDiv5.classList.add("attribution");
    attributionDiv5.innerHTML = `<a target="_blank" href="https://www.oklahomajoes.com/recipes/smoked-pork-ribs">Pork ribs recipe by Oklahoma Joe's</a>`;
    mainDiv.appendChild(attributionDiv5);

    const attributionDiv6 = document.createElement("div");
    attributionDiv6.classList.add("attribution");
    attributionDiv6.innerHTML = `<a target="_blank" href="https://www.oklahomajoes.com/recipes/smoked-sriracha-pulled-pork-sandwich">Pulled pork recipe by Oklahoma Joe's</a>`;
    mainDiv.appendChild(attributionDiv6);

    const attributionDiv7 = document.createElement("div");
    attributionDiv7.classList.add("attribution");
    attributionDiv7.innerHTML = `<a target="_blank" href="https://www.oklahomajoes.com/recipes/smoked-breakfast-sausage">Smoked sausage recipe by Oklahoma Joe's</a>`;
    mainDiv.appendChild(attributionDiv7);

    const attributionDiv8 = document.createElement("div");
    attributionDiv8.classList.add("attribution");
    attributionDiv8.innerHTML = `<a target="_blank" href="https://www.oklahomajoes.com/recipes/smoked-beef-short-ribs">Beef short ribs recipe by Oklahoma Joe's</a>`;
    mainDiv.appendChild(attributionDiv8);

    const attributionDiv9= document.createElement("div");
    attributionDiv9.classList.add("attribution");
    attributionDiv9.innerHTML = `<a target="_blank" href="https://www.oklahomajoes.com/recipes/smoked-turkey-breasts">Smoked turkey breast recipe by Oklahoma Joe's</a>`;
    mainDiv.appendChild(attributionDiv9);

    const attributionDiv10= document.createElement("div");
    attributionDiv10.classList.add("attribution");
    attributionDiv10.innerHTML = `<a target="_blank" href="https://www.oklahomajoes.com/recipes/smoked-chicken-wings">Smoked chicken wings recipe by Oklahoma Joe's</a>`;
    mainDiv.appendChild(attributionDiv10);

    const attributionDiv11= document.createElement("div");
    attributionDiv11.classList.add("attribution");
    attributionDiv11.innerHTML = `<a target="_blank" href="https://www.tasteofbeirut.com/stuffed-sheep-intestines-fawaregh/">Le M23la2 inspired by fawaregh - Taste of Beirut</a>`;
    mainDiv.appendChild(attributionDiv11);

};



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactContentLoader": () => (/* binding */ contactContentLoader)
/* harmony export */ });
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/location.png */ "./src/images/location.png");


function contactContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("contact-display");

    const menuItemDiv1 = document.createElement("div");
    menuItemDiv1.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv1);
    const menuItemTitle1 = document.createElement("div");
    menuItemTitle1.textContent = "TO CONTACT OR VISIT LE ME3LA2";
    menuItemDiv1.appendChild(menuItemTitle1);
    const menuItemText0 = document.createElement("div");
    menuItemText0.classList.add("alt-font");
    menuItemText0.textContent = "EMAIL: eat@leme3la2.com";
    menuItemDiv1.appendChild(menuItemText0);
    const menuItemText1 = document.createElement("div");
    menuItemText1.classList.add("alt-font");
    menuItemText1.textContent = "PHONE: 416 555 6677";
    menuItemDiv1.appendChild(menuItemText1);
    const menuItemText2 = document.createElement("div");
    menuItemText2.classList.add("alt-font");
    menuItemText2.textContent = "ADDRESS: 699 St Clair Ave W, Toronto, ON M6C 1B2";
    menuItemDiv1.appendChild(menuItemText2);
    const menuItemImg1 = document.createElement("img");
    menuItemImg1.src = _images_location_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItemImg1.alt = "Map Location";
    menuItemDiv1.appendChild(menuItemImg1);
    
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContentInitialLoader": () => (/* binding */ mainContentInitialLoader),
/* harmony export */   "mainContentLoader": () => (/* binding */ mainContentLoader)
/* harmony export */ });
/* harmony import */ var _images_bbq_dish_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bbq_dish.jpg */ "./src/images/bbq_dish.jpg");


function mainContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("main-display");

    // Main image
    const mainImg = document.createElement("img");
    mainImg.classList.add("main-img");
    mainImg.src = _images_bbq_dish_jpg__WEBPACK_IMPORTED_MODULE_0__;
    mainImg.alt = "Main Image";
    mainDiv.appendChild(mainImg);

    // Welcome div
    const mainWelcomeDiv = document.createElement("div");
    mainWelcomeDiv.textContent = "Welcome to Le Me3la2 Restaurant";
    mainDiv.appendChild(mainWelcomeDiv);

    // Text div 1
    const mainTextDiv1 = document.createElement("div");
    mainTextDiv1.classList.add("alt-font");
    mainTextDiv1.textContent = "Le Me3la2 BBQ Restaurant, named after the historic S.L.Chi sketch Le Me3la2, Metn, is also namesake of the epic main dish. The inspiration for Le Me3la2 is derived from the Texas BBQ Legends. Le Me3la2 plays tribute to these Texas “greats” by assembling a passionate team with decades of industry experience. Le Me3la2 is focused on setting the bar high with the “no corners cut” methods of preparation and selection of quality product.";
    mainDiv.appendChild(mainTextDiv1);

    // Text div 2
    const mainTextDiv2 = document.createElement("div");
    mainTextDiv2.classList.add("alt-font");
    mainTextDiv2.textContent = "Le Me3la2, set in the historic art deco 1950s Storium Shopping Center, is designed to host a nostalgic atmosphere that transcends back to the old neighborhood style eatery which combines exceptional Texas BBQ, great atmosphere, and cold Texas craft brews. FUN FACT: The Storium Shopping Center, one of the “oldest” shopping centers in central Metn, was also the film production hub for the late 1990s film “S.L. Film” starring Naim Halawi. Le Me3la2 lease space is the famed “Paradise” origins hall filmed in the movie. The Le Me3la2 crew is excited about breathing new life into a historic part of central Metn and revitalizing the community that surrounds them.";
    mainDiv.appendChild(mainTextDiv2);
};

function mainContentInitialLoader() {

    const contentDiv = document.querySelector("#content");

    // Main div element
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");
    contentDiv.appendChild(mainDiv);

    mainContentLoader();

};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuContentLoader": () => (/* binding */ menuContentLoader)
/* harmony export */ });
/* harmony import */ var _images_brisket_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/brisket.jpg */ "./src/images/brisket.jpg");
/* harmony import */ var _images_pork_ribs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pork_ribs.jpg */ "./src/images/pork_ribs.jpg");
/* harmony import */ var _images_pulled_pork_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pulled_pork.jpg */ "./src/images/pulled_pork.jpg");
/* harmony import */ var _images_breakfast_sausage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/breakfast_sausage.jpg */ "./src/images/breakfast_sausage.jpg");
/* harmony import */ var _images_beef_short_ribs_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/beef_short_ribs.jpg */ "./src/images/beef_short_ribs.jpg");
/* harmony import */ var _images_smoked_turkey_breasts_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/smoked_turkey_breasts.jpg */ "./src/images/smoked_turkey_breasts.jpg");
/* harmony import */ var _images_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/chicken_wings.jpg */ "./src/images/chicken_wings.jpg");
/* harmony import */ var _images_fwerigh_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/fwerigh.jpeg */ "./src/images/fwerigh.jpeg");










function menuContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("menu-display");

    const menuItemDiv1 = document.createElement("div");
    menuItemDiv1.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv1);
    const menuItemTitle1 = document.createElement("div");
    menuItemTitle1.textContent = "SMOKED BEEF BRISKET";
    menuItemDiv1.appendChild(menuItemTitle1);
    const menuItemText1 = document.createElement("div");
    menuItemText1.classList.add("alt-font");
    menuItemText1.textContent = "Paprika and cayenne powder give this tender Smoked Beef Brisket with a Texas Rub its signature flavor. When the sun goes down, chow down on some melt-in-your-mouth brisket that’s well worth the wait. Beef brisket is one of the nine beef primal cuts which includes the superficial and deep pectorals. To tenderize all of that connective tissue, beef brisket needs to cook low and slow for a long time.";
    menuItemDiv1.appendChild(menuItemText1);
    const menuItemImg1 = document.createElement("img");
    menuItemImg1.src = _images_brisket_jpg__WEBPACK_IMPORTED_MODULE_0__;
    menuItemImg1.alt = "Brisket";
    menuItemDiv1.appendChild(menuItemImg1);

    const menuItemDiv2 = document.createElement("div");
    menuItemDiv2.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv2);
    const menuItemTitle2 = document.createElement("div");
    menuItemTitle2.textContent = "SMOKED PORK RIBS";
    menuItemDiv2.appendChild(menuItemTitle2);
    const menuItemText2 = document.createElement("div");
    menuItemText2.classList.add("alt-font");
    menuItemText2.textContent = `These Smoked Pork Ribs are ooked low and slow for some of the juiciest, tastiest baby back ribs you’ve ever eaten. Rubbed, sauced and smoked, this recipe for smoking ribs delivers tender and delicious smoked ribs straight to your smoker. When buying ribs, look for a full rack with even thickness throughout. It won’t cook evenly if the rack is thin on one side and thick on the other.`;
    menuItemDiv2.appendChild(menuItemText2);
    const menuItemImg2 = document.createElement("img");
    menuItemImg2.src = _images_pork_ribs_jpg__WEBPACK_IMPORTED_MODULE_1__;
    menuItemImg2.alt = "Pork Ribs";
    menuItemDiv2.appendChild(menuItemImg2);

    const menuItemDiv3 = document.createElement("div");
    menuItemDiv3.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv3);
    const menuItemTitle3 = document.createElement("div");
    menuItemTitle3.textContent = "SMOKED SRIRACHA PULLED PORK";
    menuItemDiv3.appendChild(menuItemTitle3);
    const menuItemText3 = document.createElement("div");
    menuItemText3.classList.add("alt-font");
    menuItemText3.textContent = `If you prefer pork that has a little extra bite to it, you’re gonna love this Smoked Sriracha Pulled Pork Sandwich. Homemade sriracha barbecue sauce makes the shredded meat from the pork shoulder tangy-sweet with a kick of garlic for irresistible bold, smoky and spicy flavor. Sriracha is a Thai hot sauce made with chili peppers, sugar, garlic, distilled vinegar and salt. It’s named after the city in which it was first made over 80 years ago, Si Racha, an eastern city on the coast of Thailand.`;
    menuItemDiv3.appendChild(menuItemText3);
    const menuItemImg3 = document.createElement("img");
    menuItemImg3.src = _images_pulled_pork_jpg__WEBPACK_IMPORTED_MODULE_2__;
    menuItemImg3.alt = "Pulled Pork";
    menuItemDiv3.appendChild(menuItemImg3);

    const menuItemDiv4 = document.createElement("div");
    menuItemDiv4.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv4);
    const menuItemTitle4 = document.createElement("div");
    menuItemTitle4.textContent = "SMOKED SAUSAGE";
    menuItemDiv4.appendChild(menuItemTitle4);
    const menuItemText4 = document.createElement("div");
    menuItemText4.classList.add("alt-font");
    menuItemText4.textContent = `This Smoked Breakfast Sausage recipe combines ground pork with maple syrup and hot & savory spices to make sausage links or patties on a pellet grill. When you make sausage from scratch, it tastes better, and you know exactly what’s in it. You just can’t beat the quality and flavor of homemade sausage, especially when it’s infused with apple wood-fired flavor. About the Cut: Ground pork is usually made from pork shoulder and sometimes includes trimmed ends of the loin. It usually contains about 15 percent fat.`;
    menuItemDiv4.appendChild(menuItemText4);
    const menuItemImg4 = document.createElement("img");
    menuItemImg4.src = _images_breakfast_sausage_jpg__WEBPACK_IMPORTED_MODULE_3__;
    menuItemImg4.alt = "Smoked Breakfast Sausage";
    menuItemDiv4.appendChild(menuItemImg4);

    const menuItemDiv5 = document.createElement("div");
    menuItemDiv5.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv5);
    const menuItemTitle5 = document.createElement("div");
    menuItemTitle5.textContent = "BEEF SHORT RIBS";
    menuItemDiv5.appendChild(menuItemTitle5);
    const menuItemText5 = document.createElement("div");
    menuItemText5.classList.add("alt-font");
    menuItemText5.textContent = `There’s nothing quite like Smoked Beef Short Ribs seasoned with Louisiana hot sauce. It’s a wonderfully primal dish and one of the easiest meats to smoke. Short ribs are loaded with meat and cut from the bottom of the steer’s ribs above the short plate. And best of all, you’re looking at a relaxing all-day smoke to turn these ribs into a tender, tasty meal.`;
    menuItemDiv5.appendChild(menuItemText5);
    const menuItemImg5 = document.createElement("img");
    menuItemImg5.src = _images_beef_short_ribs_jpg__WEBPACK_IMPORTED_MODULE_4__;
    menuItemImg5.alt = "Beef Short Ribs";
    menuItemDiv5.appendChild(menuItemImg5);

    const menuItemDiv6 = document.createElement("div");
    menuItemDiv6.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv6);
    const menuItemTitle6 = document.createElement("div");
    menuItemTitle6.textContent = "SMOKED TURKEY BREASTS";
    menuItemDiv6.appendChild(menuItemTitle6);
    const menuItemText6 = document.createElement("div");
    menuItemText6.classList.add("alt-font");
    menuItemText6.textContent = `A holiday classic anytime of the year! A whole boneless brined and smoked turkey breast and lager gravy made with the drippings, with a classic stuffing and bottle of Carbon’s South Carolina Mustard Sauce.`;
    menuItemDiv6.appendChild(menuItemText6);
    const menuItemImg6 = document.createElement("img");
    menuItemImg6.src = _images_smoked_turkey_breasts_jpg__WEBPACK_IMPORTED_MODULE_5__;
    menuItemImg6.alt = "Smoked Turkey Breasts";
    menuItemDiv6.appendChild(menuItemImg6);

    const menuItemDiv7 = document.createElement("div");
    menuItemDiv7.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv7);
    const menuItemTitle7 = document.createElement("div");
    menuItemTitle7.textContent = "SMOKED CHICKEN WINGS";
    menuItemDiv7.appendChild(menuItemTitle7);
    const menuItemText7 = document.createElement("div");
    menuItemText7.classList.add("alt-font");
    menuItemText7.textContent = `A dry rub with paprika, chili powder and brown sugar gives these Smoked Chicken Wings a sweet and spicy start. Slow smoking makes them tender on the inside, crispy on the outside and loaded with wood-fired flavor. And the sweet and tangy Honey Brown Beer BBQ Sauce brings it home with a little added chili powder for good measure. We made this recipe on the Highland Offset Smoker, but you can make it on your smoker.`;
    menuItemDiv7.appendChild(menuItemText7);
    const menuItemImg7 = document.createElement("img");
    menuItemImg7.src = _images_chicken_wings_jpg__WEBPACK_IMPORTED_MODULE_6__;
    menuItemImg7.alt = "Smoked Chicken Wings";
    menuItemDiv7.appendChild(menuItemImg7);

    const menuItemDiv8 = document.createElement("div");
    menuItemDiv8.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv8);
    const menuItemTitle8 = document.createElement("div");
    menuItemTitle8.textContent = "LE ME3LA2 FWERIGH";
    menuItemDiv8.appendChild(menuItemTitle8);
    const menuItemText8 = document.createElement("div");
    menuItemText8.classList.add("alt-font");
    menuItemText8.textContent = `A mediterranean culture that mainly relies on whole-grains and vegetables is going to take full advantage of the special  day when a lamb is available to feast on; thusly, every part of the animal is cooked in one way or another and intestines are no exception. Here, they are thoroughly cleaned with lemon, coarse salt and vinegar and stuffed with minced meat, rice and spices. This is an exquisite dish and one of the most traditional in Lebanese cuisine`;
    menuItemDiv8.appendChild(menuItemText8);
    const menuItemImg8 = document.createElement("img");
    menuItemImg8.src = _images_fwerigh_jpeg__WEBPACK_IMPORTED_MODULE_7__;
    menuItemImg8.alt = "Fawaregh";
    menuItemDiv8.appendChild(menuItemImg8);

};



/***/ }),

/***/ "./src/fonts/BloodlustExpanded-Ao5m.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/BloodlustExpanded-Ao5m.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bee2a65c163fc725fc3.ttf";

/***/ }),

/***/ "./src/fonts/Redcap.ttf":
/*!******************************!*\
  !*** ./src/fonts/Redcap.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9155f3ab8499ea206f3e.ttf";

/***/ }),

/***/ "./src/images/bbq_dish.jpg":
/*!*********************************!*\
  !*** ./src/images/bbq_dish.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1222d682013af9474bf7.jpg";

/***/ }),

/***/ "./src/images/beef_short_ribs.jpg":
/*!****************************************!*\
  !*** ./src/images/beef_short_ribs.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b7a7648f9c2489496df.jpg";

/***/ }),

/***/ "./src/images/breakfast_sausage.jpg":
/*!******************************************!*\
  !*** ./src/images/breakfast_sausage.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169ad7a8321203de6835.jpg";

/***/ }),

/***/ "./src/images/brisket.jpg":
/*!********************************!*\
  !*** ./src/images/brisket.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9a16ecb4e3c7bfca9b1.jpg";

/***/ }),

/***/ "./src/images/butchering.png":
/*!***********************************!*\
  !*** ./src/images/butchering.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb7f1a71a15ab95ab3b8.png";

/***/ }),

/***/ "./src/images/chicken_wings.jpg":
/*!**************************************!*\
  !*** ./src/images/chicken_wings.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9783b7f059b833fa8340.jpg";

/***/ }),

/***/ "./src/images/fwerigh.jpeg":
/*!*********************************!*\
  !*** ./src/images/fwerigh.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9acbece8235cd0dc7e81.jpeg";

/***/ }),

/***/ "./src/images/github_logo.png":
/*!************************************!*\
  !*** ./src/images/github_logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ae5af2eb8f5a195706.png";

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e9b2ceb325a3ee82611.png";

/***/ }),

/***/ "./src/images/pork_ribs.jpg":
/*!**********************************!*\
  !*** ./src/images/pork_ribs.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c40e006e5127da20dfc.jpg";

/***/ }),

/***/ "./src/images/pulled_pork.jpg":
/*!************************************!*\
  !*** ./src/images/pulled_pork.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ef4006edd1f02be1bfa.jpg";

/***/ }),

/***/ "./src/images/rodney_scott.jpg":
/*!*************************************!*\
  !*** ./src/images/rodney_scott.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad19956d49d168bdd979.jpg";

/***/ }),

/***/ "./src/images/smoked_turkey_breasts.jpg":
/*!**********************************************!*\
  !*** ./src/images/smoked_turkey_breasts.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0880f6c0053c112f4753.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _images_butchering_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/butchering.png */ "./src/images/butchering.png");
/* harmony import */ var _images_github_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/github_logo.png */ "./src/images/github_logo.png");
/* harmony import */ var _src_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/main.js */ "./src/main.js");
/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/menu.js */ "./src/menu.js");
/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/contact.js */ "./src/contact.js");
/* harmony import */ var _src_attributions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/attributions.js */ "./src/attributions.js");








const indexPageLoader = (function() {
    document.title = "Le Me3la2"

    // Content div element that will contain all the page content
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "content");
    document.body.appendChild(contentDiv);

    // Header element
    const header = document.createElement("header");
    contentDiv.appendChild(header);

    // Logo div
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    header.appendChild(logoDiv);

    // Logo img div
    const logoImgDiv = document.createElement("div");
    logoImgDiv.classList.add("logo-img");
    logoDiv.appendChild(logoImgDiv);

    // Logo img
    const logoImg = document.createElement("img");
    logoImg.src = _images_butchering_png__WEBPACK_IMPORTED_MODULE_1__;
    logoImg.alt = "Le Me3la2 Logo";
    logoImgDiv.appendChild(logoImg);

    // Logo text div
    const logoTextDiv = document.createElement("div");
    logoTextDiv.classList.add("logo-text");
    logoTextDiv.textContent = "LE ME3LA2"
    logoDiv.appendChild(logoTextDiv);

    // Menu div
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    header.appendChild(menuDiv);

    // Menu Home a
    const menuHomeA = document.createElement("a");
    menuHomeA.classList.add("menu-home");
    menuHomeA.textContent = "HOME";
    menuHomeA.href = "javascript:null";
    menuDiv.appendChild(menuHomeA);
    menuHomeA.addEventListener("click", _src_main_js__WEBPACK_IMPORTED_MODULE_3__.mainContentLoader)

    // Menu Menu a
    const menuMenuA = document.createElement("a");
    menuMenuA.classList.add("menu-menu");
    menuMenuA.textContent = "MENU";
    menuMenuA.href = "javascript:null";
    menuDiv.appendChild(menuMenuA);
    menuMenuA.addEventListener("click", _src_menu_js__WEBPACK_IMPORTED_MODULE_4__.menuContentLoader)

    // Menu Contact a
    const menuContactA = document.createElement("a");
    menuContactA.classList.add("menu-contact");
    menuContactA.textContent = "CONTACT";
    menuContactA.href = "javascript:null";
    menuDiv.appendChild(menuContactA);
    menuContactA.addEventListener("click", _src_contact_js__WEBPACK_IMPORTED_MODULE_5__.contactContentLoader)

    ;(0,_src_main_js__WEBPACK_IMPORTED_MODULE_3__.mainContentInitialLoader)();

    // Footer element
    const footer = document.createElement("footer");
    contentDiv.appendChild(footer);

    // Footer text element
    const footerTextDiv = document.createElement("div");
    footerTextDiv.textContent = "THE ODIN PROJECT - JOEMATTAR";
    footer.appendChild(footerTextDiv);

    // Footer a element
    const footerA = document.createElement("a");
    footerA.href = "https://github.com/joemattar";
    footerA.target = "_blank"
    footer.appendChild(footerA);

    // Footer img element
    const footerImg = document.createElement("img");
    footerImg.src = _images_github_logo_png__WEBPACK_IMPORTED_MODULE_2__;
    footerA.appendChild(footerImg);

    const attributionsA = document.createElement("a");
    attributionsA.textContent = "ATTRIBUTIONS";
    attributionsA.href = "javascript:null";
    footer.appendChild(attributionsA);
    attributionsA.addEventListener("click", _src_attributions_js__WEBPACK_IMPORTED_MODULE_6__.attributionsContentLoader)

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ2lCO0FBQ0U7QUFDZ0M7QUFDM0I7QUFDTztBQUNVOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFJO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkRBQWlCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkRBQWlCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUVBQW9COztBQUUvRCxJQUFJLHVFQUF3Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvREFBTTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyRUFBeUI7O0FBRXJFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2F0dHJpYnV0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvQmxvb2RsdXN0RXhwYW5kZWQtQW81bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL1JlZGNhcC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxvb2RsdXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSZWRjYXBcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci1oZWFkZXI6ICNmZmJjMGM7XFxuICAgIC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dDogI2Y1NDIzNTtcXG4gICAgLS1jb2xvci1oZWFkZXItbG9nby10ZXh0LWhvdmVyOiAjYmYxYzFkO1xcbiAgICAtLWNvbG9yLW1haW46IHJlZDtcXG4gICAgLS1jb2xvci1mb290ZXI6IGJsdWU7XFxuICAgIC0tZm9udC1tYWluOiBcXFwiQmxvb2RsdXN0XFxcIjtcXG4gICAgLS1mb250LW1haW4tYWx0OiBcXFwiUmVkY2FwXFxcIjtcXG5cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlcik7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQtaG92ZXIpO1xcbn1cXG5cXG5pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAxMDgwcHgpO1xcblxcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnIgNHJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmhlYWRlciAubG9nbyAubG9nby1pbWcgaW1nIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28gLmxvZ28tdGV4dCB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oZWFkZXIgLm1lbnUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI21haW4ubWFpbi1kaXNwbGF5LCBcXG4jbWFpbi5jb250YWN0LWRpc3BsYXksXFxuI21haW4uYXR0cmlidXRpb24tZGlzcGxheSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLm1haW4taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAuYWx0LWZvbnQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluLWFsdCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbWFpbi5tZW51LWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWVudS1pdGVtIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVyZW07XFxuXFxuICAgIG1heC13aWR0aDogY2FsYygoMTA4MHB4IC0gN3JlbSkgLyAyKSA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWVudS1pdGVtIC5hbHQtZm9udCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIC5tZW51LWl0ZW0gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAubWFpbi1hdHRyaWJ1dGlvbi1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4jbWFpbiAuYXR0cmlidXRpb24gYSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBaUM7QUFDckM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0kscUNBQXFDOztJQUVyQyw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGVBQWU7O0lBRWYsU0FBUztJQUNULFVBQVU7O0lBRVYsWUFBWTtJQUNaLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCOztJQUV6QixlQUFlOztJQUVmLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhOztJQUViLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjs7SUFFcEIscUNBQXFDOztJQUVyQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxvb2RsdXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvQmxvb2RsdXN0RXhwYW5kZWQtQW81bS50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmVkY2FwXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvUmVkY2FwLnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItaGVhZGVyOiAjZmZiYzBjO1xcbiAgICAtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQ6ICNmNTQyMzU7XFxuICAgIC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dC1ob3ZlcjogI2JmMWMxZDtcXG4gICAgLS1jb2xvci1tYWluOiByZWQ7XFxuICAgIC0tY29sb3ItZm9vdGVyOiBibHVlO1xcbiAgICAtLWZvbnQtbWFpbjogXFxcIkJsb29kbHVzdFxcXCI7XFxuICAgIC0tZm9udC1tYWluLWFsdDogXFxcIlJlZGNhcFxcXCI7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0LWhvdmVyKTtcXG59XFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMTA4MHB4KTtcXG5cXG4gICAgcGFkZGluZzogMCAxcmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyIDRyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28gLmxvZ28taW1nIGltZyB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIC5sb2dvLXRleHQge1xcblxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaGVhZGVyIC5tZW51IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluIHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbiNtYWluLm1haW4tZGlzcGxheSwgXFxuI21haW4uY29udGFjdC1kaXNwbGF5LFxcbiNtYWluLmF0dHJpYnV0aW9uLWRpc3BsYXkge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluIC5tYWluLWltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuI21haW4gLmFsdC1mb250IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbi1hbHQpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI21haW4ubWVudS1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLm1lbnUtaXRlbSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMC41cmVtO1xcblxcbiAgICBtYXgtd2lkdGg6IGNhbGMoKDEwODBweCAtIDdyZW0pIC8gMikgO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLm1lbnUtaXRlbSAuYWx0LWZvbnQge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAubWVudS1pdGVtIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuI21haW4gLm1haW4tYXR0cmlidXRpb24taW1nIHtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuXFxuI21haW4gLmF0dHJpYnV0aW9uIGEge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByb2RuZXlfc2NvdHQgZnJvbSBcIi4vaW1hZ2VzL3JvZG5leV9zY290dC5qcGdcIjtcblxuZnVuY3Rpb24gYXR0cmlidXRpb25zQ29udGVudExvYWRlcigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb24tZGlzcGxheVwiKTtcblxuICAgIC8vIE1haW4gYXR0cmlidXRpb24gaW1hZ2VcbiAgICBjb25zdCBtYWluQXR0cmlidXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1haW5BdHRyaWJ1dGlvbkltZy5jbGFzc0xpc3QuYWRkKFwibWFpbi1hdHRyaWJ1dGlvbi1pbWdcIik7XG4gICAgbWFpbkF0dHJpYnV0aW9uSW1nLnNyYyA9IHJvZG5leV9zY290dDtcbiAgICBtYWluQXR0cmlidXRpb25JbWcuYWx0ID0gXCJDaGVmIFJvZG5leSBTY290dCBCQlFpbmdcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5BdHRyaWJ1dGlvbkltZyk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXYwLmlubmVySFRNTCA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuYWwuY29tL2J1c2luZXNzLzIwMjAvMDQvcm9kbmV5LXNjb3R0LWxpdHRsZS1kb25rZXktdG8tb3Blbi1ob21ld29vZC1sb2NhdGlvbnMtaW4tMjAyMS5odG1sXCI+QXR0cmlidXRpb24gcGhvdG8gQ2hlZiBSb2RuZXkgU2NvdHQgYnkgQUk8L2E+JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2MCk7XG4gICAgXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjEuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MS5pbm5lckhUTUwgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2J1dGNoZXItc2hvcFwiPkxvZ28gY3JlYXRlZCBieSBTbWFzaGljb25zIC0gRmxhdGljb248L2E+JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2MSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2Mi5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXYyLmlubmVySFRNTCA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9yb2xseXdvb2RiYnEuY29tL1wiPk1haW4gcGhvdG8gYnkgUm9sbHl3b29kIEJCUTwvYT4nO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYyKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXYzLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjMuaW5uZXJIVE1MID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LnN0aWxlc3N3aXRjaGJicS5jb20vYWJvdXRcIj5NYWluIHRleHQgaW5zcGlyZWQgYnkgU3RpbGVzIFN3aXRjaCBCQlE8L2E+JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2Myk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2NC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXY0LmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cub2tsYWhvbWFqb2VzLmNvbS9yZWNpcGVzL3Ntb2tlZC1iZWVmLWJyaXNrZXQtd2l0aC10ZXhhcy1ydWJcIj5Ccmlza2V0IHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY0KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXY1LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjUuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLXBvcmstcmlic1wiPlBvcmsgcmlicyByZWNpcGUgYnkgT2tsYWhvbWEgSm9lJ3M8L2E+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2NSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2Ni5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXY2LmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cub2tsYWhvbWFqb2VzLmNvbS9yZWNpcGVzL3Ntb2tlZC1zcmlyYWNoYS1wdWxsZWQtcG9yay1zYW5kd2ljaFwiPlB1bGxlZCBwb3JrIHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY2KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXY3LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjcuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLWJyZWFrZmFzdC1zYXVzYWdlXCI+U21va2VkIHNhdXNhZ2UgcmVjaXBlIGJ5IE9rbGFob21hIEpvZSdzPC9hPmA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkRpdjcpO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXY4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjguY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2OC5pbm5lckhUTUwgPSBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rbGFob21ham9lcy5jb20vcmVjaXBlcy9zbW9rZWQtYmVlZi1zaG9ydC1yaWJzXCI+QmVlZiBzaG9ydCByaWJzIHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY4KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2OT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjkuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2OS5pbm5lckhUTUwgPSBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rbGFob21ham9lcy5jb20vcmVjaXBlcy9zbW9rZWQtdHVya2V5LWJyZWFzdHNcIj5TbW9rZWQgdHVya2V5IGJyZWFzdCByZWNpcGUgYnkgT2tsYWhvbWEgSm9lJ3M8L2E+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2OSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjEwPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MTAuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MTAuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLWNoaWNrZW4td2luZ3NcIj5TbW9rZWQgY2hpY2tlbiB3aW5ncyByZWNpcGUgYnkgT2tsYWhvbWEgSm9lJ3M8L2E+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2MTApO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXYxMT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjExLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjExLmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cudGFzdGVvZmJlaXJ1dC5jb20vc3R1ZmZlZC1zaGVlcC1pbnRlc3RpbmVzLWZhd2FyZWdoL1wiPkxlIE0yM2xhMiBpbnNwaXJlZCBieSBmYXdhcmVnaCAtIFRhc3RlIG9mIEJlaXJ1dDwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYxMSk7XG5cbn07XG5cbmV4cG9ydCB7YXR0cmlidXRpb25zQ29udGVudExvYWRlcn0iLCJpbXBvcnQgbG9jYXRpb24gZnJvbSBcIi4vaW1hZ2VzL2xvY2F0aW9uLnBuZ1wiO1xuXG5mdW5jdGlvbiBjb250YWN0Q29udGVudExvYWRlcigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2MSk7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGUxLnRleHRDb250ZW50ID0gXCJUTyBDT05UQUNUIE9SIFZJU0lUIExFIE1FM0xBMlwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlMSk7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0MC5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0MC50ZXh0Q29udGVudCA9IFwiRU1BSUw6IGVhdEBsZW1lM2xhMi5jb21cIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0MCk7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0MS5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0MS50ZXh0Q29udGVudCA9IFwiUEhPTkU6IDQxNiA1NTUgNjY3N1wiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQxKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQyLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQyLnRleHRDb250ZW50ID0gXCJBRERSRVNTOiA2OTkgU3QgQ2xhaXIgQXZlIFcsIFRvcm9udG8sIE9OIE02QyAxQjJcIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Mik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzEuc3JjID0gbG9jYXRpb247XG4gICAgbWVudUl0ZW1JbWcxLmFsdCA9IFwiTWFwIExvY2F0aW9uXCI7XG4gICAgbWVudUl0ZW1EaXYxLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nMSk7XG4gICAgXG59O1xuXG5leHBvcnQge2NvbnRhY3RDb250ZW50TG9hZGVyfSIsImltcG9ydCBiYnFfZGlzaCBmcm9tIFwiLi9pbWFnZXMvYmJxX2Rpc2guanBnXCI7XG5cbmZ1bmN0aW9uIG1haW5Db250ZW50TG9hZGVyKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgbWFpbkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWRpc3BsYXlcIik7XG5cbiAgICAvLyBNYWluIGltYWdlXG4gICAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWFpbkltZy5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbWdcIik7XG4gICAgbWFpbkltZy5zcmMgPSBiYnFfZGlzaDtcbiAgICBtYWluSW1nLmFsdCA9IFwiTWFpbiBJbWFnZVwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbkltZyk7XG5cbiAgICAvLyBXZWxjb21lIGRpdlxuICAgIGNvbnN0IG1haW5XZWxjb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluV2VsY29tZURpdi50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBMZSBNZTNsYTIgUmVzdGF1cmFudFwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbldlbGNvbWVEaXYpO1xuXG4gICAgLy8gVGV4dCBkaXYgMVxuICAgIGNvbnN0IG1haW5UZXh0RGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblRleHREaXYxLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtYWluVGV4dERpdjEudGV4dENvbnRlbnQgPSBcIkxlIE1lM2xhMiBCQlEgUmVzdGF1cmFudCwgbmFtZWQgYWZ0ZXIgdGhlIGhpc3RvcmljIFMuTC5DaGkgc2tldGNoIExlIE1lM2xhMiwgTWV0biwgaXMgYWxzbyBuYW1lc2FrZSBvZiB0aGUgZXBpYyBtYWluIGRpc2guIFRoZSBpbnNwaXJhdGlvbiBmb3IgTGUgTWUzbGEyIGlzIGRlcml2ZWQgZnJvbSB0aGUgVGV4YXMgQkJRIExlZ2VuZHMuIExlIE1lM2xhMiBwbGF5cyB0cmlidXRlIHRvIHRoZXNlIFRleGFzIOKAnGdyZWF0c+KAnSBieSBhc3NlbWJsaW5nIGEgcGFzc2lvbmF0ZSB0ZWFtIHdpdGggZGVjYWRlcyBvZiBpbmR1c3RyeSBleHBlcmllbmNlLiBMZSBNZTNsYTIgaXMgZm9jdXNlZCBvbiBzZXR0aW5nIHRoZSBiYXIgaGlnaCB3aXRoIHRoZSDigJxubyBjb3JuZXJzIGN1dOKAnSBtZXRob2RzIG9mIHByZXBhcmF0aW9uIGFuZCBzZWxlY3Rpb24gb2YgcXVhbGl0eSBwcm9kdWN0LlwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpblRleHREaXYxKTtcblxuICAgIC8vIFRleHQgZGl2IDJcbiAgICBjb25zdCBtYWluVGV4dERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5UZXh0RGl2Mi5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWFpblRleHREaXYyLnRleHRDb250ZW50ID0gXCJMZSBNZTNsYTIsIHNldCBpbiB0aGUgaGlzdG9yaWMgYXJ0IGRlY28gMTk1MHMgU3Rvcml1bSBTaG9wcGluZyBDZW50ZXIsIGlzIGRlc2lnbmVkIHRvIGhvc3QgYSBub3N0YWxnaWMgYXRtb3NwaGVyZSB0aGF0IHRyYW5zY2VuZHMgYmFjayB0byB0aGUgb2xkIG5laWdoYm9yaG9vZCBzdHlsZSBlYXRlcnkgd2hpY2ggY29tYmluZXMgZXhjZXB0aW9uYWwgVGV4YXMgQkJRLCBncmVhdCBhdG1vc3BoZXJlLCBhbmQgY29sZCBUZXhhcyBjcmFmdCBicmV3cy4gRlVOIEZBQ1Q6IFRoZSBTdG9yaXVtIFNob3BwaW5nIENlbnRlciwgb25lIG9mIHRoZSDigJxvbGRlc3TigJ0gc2hvcHBpbmcgY2VudGVycyBpbiBjZW50cmFsIE1ldG4sIHdhcyBhbHNvIHRoZSBmaWxtIHByb2R1Y3Rpb24gaHViIGZvciB0aGUgbGF0ZSAxOTkwcyBmaWxtIOKAnFMuTC4gRmlsbeKAnSBzdGFycmluZyBOYWltIEhhbGF3aS4gTGUgTWUzbGEyIGxlYXNlIHNwYWNlIGlzIHRoZSBmYW1lZCDigJxQYXJhZGlzZeKAnSBvcmlnaW5zIGhhbGwgZmlsbWVkIGluIHRoZSBtb3ZpZS4gVGhlIExlIE1lM2xhMiBjcmV3IGlzIGV4Y2l0ZWQgYWJvdXQgYnJlYXRoaW5nIG5ldyBsaWZlIGludG8gYSBoaXN0b3JpYyBwYXJ0IG9mIGNlbnRyYWwgTWV0biBhbmQgcmV2aXRhbGl6aW5nIHRoZSBjb21tdW5pdHkgdGhhdCBzdXJyb3VuZHMgdGhlbS5cIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5UZXh0RGl2Mik7XG59O1xuXG5mdW5jdGlvbiBtYWluQ29udGVudEluaXRpYWxMb2FkZXIoKSB7XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy8gTWFpbiBkaXYgZWxlbWVudFxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBtYWluQ29udGVudExvYWRlcigpO1xuXG59O1xuXG5leHBvcnQge21haW5Db250ZW50TG9hZGVyLCBtYWluQ29udGVudEluaXRpYWxMb2FkZXJ9IiwiaW1wb3J0IGJyaXNrZXQgZnJvbSBcIi4vaW1hZ2VzL2JyaXNrZXQuanBnXCI7XG5pbXBvcnQgcG9ya19yaWJzIGZyb20gXCIuL2ltYWdlcy9wb3JrX3JpYnMuanBnXCI7XG5pbXBvcnQgcHVsbGVkX3BvcmsgZnJvbSBcIi4vaW1hZ2VzL3B1bGxlZF9wb3JrLmpwZ1wiO1xuaW1wb3J0IHNhdXNhZ2UgZnJvbSBcIi4vaW1hZ2VzL2JyZWFrZmFzdF9zYXVzYWdlLmpwZ1wiO1xuaW1wb3J0IGJlZWZfcmlicyBmcm9tIFwiLi9pbWFnZXMvYmVlZl9zaG9ydF9yaWJzLmpwZ1wiO1xuaW1wb3J0IHR1cmtleSBmcm9tIFwiLi9pbWFnZXMvc21va2VkX3R1cmtleV9icmVhc3RzLmpwZ1wiO1xuaW1wb3J0IHdpbmdzIGZyb20gXCIuL2ltYWdlcy9jaGlja2VuX3dpbmdzLmpwZ1wiO1xuaW1wb3J0IGZ3ZXJpZ2ggZnJvbSBcIi4vaW1hZ2VzL2Z3ZXJpZ2guanBlZ1wiO1xuXG5cbmZ1bmN0aW9uIG1lbnVDb250ZW50TG9hZGVyKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgbWFpbkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWRpc3BsYXlcIik7XG5cbiAgICBjb25zdCBtZW51SXRlbURpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtRGl2MS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXYxKTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UaXRsZTEudGV4dENvbnRlbnQgPSBcIlNNT0tFRCBCRUVGIEJSSVNLRVRcIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZTEpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDEuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDEudGV4dENvbnRlbnQgPSBcIlBhcHJpa2EgYW5kIGNheWVubmUgcG93ZGVyIGdpdmUgdGhpcyB0ZW5kZXIgU21va2VkIEJlZWYgQnJpc2tldCB3aXRoIGEgVGV4YXMgUnViIGl0cyBzaWduYXR1cmUgZmxhdm9yLiBXaGVuIHRoZSBzdW4gZ29lcyBkb3duLCBjaG93IGRvd24gb24gc29tZSBtZWx0LWluLXlvdXItbW91dGggYnJpc2tldCB0aGF04oCZcyB3ZWxsIHdvcnRoIHRoZSB3YWl0LiBCZWVmIGJyaXNrZXQgaXMgb25lIG9mIHRoZSBuaW5lIGJlZWYgcHJpbWFsIGN1dHMgd2hpY2ggaW5jbHVkZXMgdGhlIHN1cGVyZmljaWFsIGFuZCBkZWVwIHBlY3RvcmFscy4gVG8gdGVuZGVyaXplIGFsbCBvZiB0aGF0IGNvbm5lY3RpdmUgdGlzc3VlLCBiZWVmIGJyaXNrZXQgbmVlZHMgdG8gY29vayBsb3cgYW5kIHNsb3cgZm9yIGEgbG9uZyB0aW1lLlwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQxKTtcbiAgICBjb25zdCBtZW51SXRlbUltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1lbnVJdGVtSW1nMS5zcmMgPSBicmlza2V0O1xuICAgIG1lbnVJdGVtSW1nMS5hbHQgPSBcIkJyaXNrZXRcIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcxKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXYyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjIpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlMi50ZXh0Q29udGVudCA9IFwiU01PS0VEIFBPUksgUklCU1wiO1xuICAgIG1lbnVJdGVtRGl2Mi5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlMik7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0Mi5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0Mi50ZXh0Q29udGVudCA9IGBUaGVzZSBTbW9rZWQgUG9yayBSaWJzIGFyZSBvb2tlZCBsb3cgYW5kIHNsb3cgZm9yIHNvbWUgb2YgdGhlIGp1aWNpZXN0LCB0YXN0aWVzdCBiYWJ5IGJhY2sgcmlicyB5b3XigJl2ZSBldmVyIGVhdGVuLiBSdWJiZWQsIHNhdWNlZCBhbmQgc21va2VkLCB0aGlzIHJlY2lwZSBmb3Igc21va2luZyByaWJzIGRlbGl2ZXJzIHRlbmRlciBhbmQgZGVsaWNpb3VzIHNtb2tlZCByaWJzIHN0cmFpZ2h0IHRvIHlvdXIgc21va2VyLiBXaGVuIGJ1eWluZyByaWJzLCBsb29rIGZvciBhIGZ1bGwgcmFjayB3aXRoIGV2ZW4gdGhpY2tuZXNzIHRocm91Z2hvdXQuIEl0IHdvbuKAmXQgY29vayBldmVubHkgaWYgdGhlIHJhY2sgaXMgdGhpbiBvbiBvbmUgc2lkZSBhbmQgdGhpY2sgb24gdGhlIG90aGVyLmA7XG4gICAgbWVudUl0ZW1EaXYyLmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDIpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWcyLnNyYyA9IHBvcmtfcmlicztcbiAgICBtZW51SXRlbUltZzIuYWx0ID0gXCJQb3JrIFJpYnNcIjtcbiAgICBtZW51SXRlbURpdjIuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcyKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXYzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjMpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlMy50ZXh0Q29udGVudCA9IFwiU01PS0VEIFNSSVJBQ0hBIFBVTExFRCBQT1JLXCI7XG4gICAgbWVudUl0ZW1EaXYzLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUzKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQzLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQzLnRleHRDb250ZW50ID0gYElmIHlvdSBwcmVmZXIgcG9yayB0aGF0IGhhcyBhIGxpdHRsZSBleHRyYSBiaXRlIHRvIGl0LCB5b3XigJlyZSBnb25uYSBsb3ZlIHRoaXMgU21va2VkIFNyaXJhY2hhIFB1bGxlZCBQb3JrIFNhbmR3aWNoLiBIb21lbWFkZSBzcmlyYWNoYSBiYXJiZWN1ZSBzYXVjZSBtYWtlcyB0aGUgc2hyZWRkZWQgbWVhdCBmcm9tIHRoZSBwb3JrIHNob3VsZGVyIHRhbmd5LXN3ZWV0IHdpdGggYSBraWNrIG9mIGdhcmxpYyBmb3IgaXJyZXNpc3RpYmxlIGJvbGQsIHNtb2t5IGFuZCBzcGljeSBmbGF2b3IuIFNyaXJhY2hhIGlzIGEgVGhhaSBob3Qgc2F1Y2UgbWFkZSB3aXRoIGNoaWxpIHBlcHBlcnMsIHN1Z2FyLCBnYXJsaWMsIGRpc3RpbGxlZCB2aW5lZ2FyIGFuZCBzYWx0LiBJdOKAmXMgbmFtZWQgYWZ0ZXIgdGhlIGNpdHkgaW4gd2hpY2ggaXQgd2FzIGZpcnN0IG1hZGUgb3ZlciA4MCB5ZWFycyBhZ28sIFNpIFJhY2hhLCBhbiBlYXN0ZXJuIGNpdHkgb24gdGhlIGNvYXN0IG9mIFRoYWlsYW5kLmA7XG4gICAgbWVudUl0ZW1EaXYzLmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDMpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWczLnNyYyA9IHB1bGxlZF9wb3JrO1xuICAgIG1lbnVJdGVtSW1nMy5hbHQgPSBcIlB1bGxlZCBQb3JrXCI7XG4gICAgbWVudUl0ZW1EaXYzLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nMyk7XG5cbiAgICBjb25zdCBtZW51SXRlbURpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtRGl2NC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXY0KTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UaXRsZTQudGV4dENvbnRlbnQgPSBcIlNNT0tFRCBTQVVTQUdFXCI7XG4gICAgbWVudUl0ZW1EaXY0LmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGU0KTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQ0LmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQ0LnRleHRDb250ZW50ID0gYFRoaXMgU21va2VkIEJyZWFrZmFzdCBTYXVzYWdlIHJlY2lwZSBjb21iaW5lcyBncm91bmQgcG9yayB3aXRoIG1hcGxlIHN5cnVwIGFuZCBob3QgJiBzYXZvcnkgc3BpY2VzIHRvIG1ha2Ugc2F1c2FnZSBsaW5rcyBvciBwYXR0aWVzIG9uIGEgcGVsbGV0IGdyaWxsLiBXaGVuIHlvdSBtYWtlIHNhdXNhZ2UgZnJvbSBzY3JhdGNoLCBpdCB0YXN0ZXMgYmV0dGVyLCBhbmQgeW91IGtub3cgZXhhY3RseSB3aGF04oCZcyBpbiBpdC4gWW91IGp1c3QgY2Fu4oCZdCBiZWF0IHRoZSBxdWFsaXR5IGFuZCBmbGF2b3Igb2YgaG9tZW1hZGUgc2F1c2FnZSwgZXNwZWNpYWxseSB3aGVuIGl04oCZcyBpbmZ1c2VkIHdpdGggYXBwbGUgd29vZC1maXJlZCBmbGF2b3IuIEFib3V0IHRoZSBDdXQ6IEdyb3VuZCBwb3JrIGlzIHVzdWFsbHkgbWFkZSBmcm9tIHBvcmsgc2hvdWxkZXIgYW5kIHNvbWV0aW1lcyBpbmNsdWRlcyB0cmltbWVkIGVuZHMgb2YgdGhlIGxvaW4uIEl0IHVzdWFsbHkgY29udGFpbnMgYWJvdXQgMTUgcGVyY2VudCBmYXQuYDtcbiAgICBtZW51SXRlbURpdjQuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0NCk7XG4gICAgY29uc3QgbWVudUl0ZW1JbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzQuc3JjID0gc2F1c2FnZTtcbiAgICBtZW51SXRlbUltZzQuYWx0ID0gXCJTbW9rZWQgQnJlYWtmYXN0IFNhdXNhZ2VcIjtcbiAgICBtZW51SXRlbURpdjQuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc0KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXY1LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjUpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlNS50ZXh0Q29udGVudCA9IFwiQkVFRiBTSE9SVCBSSUJTXCI7XG4gICAgbWVudUl0ZW1EaXY1LmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGU1KTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQ1LmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQ1LnRleHRDb250ZW50ID0gYFRoZXJl4oCZcyBub3RoaW5nIHF1aXRlIGxpa2UgU21va2VkIEJlZWYgU2hvcnQgUmlicyBzZWFzb25lZCB3aXRoIExvdWlzaWFuYSBob3Qgc2F1Y2UuIEl04oCZcyBhIHdvbmRlcmZ1bGx5IHByaW1hbCBkaXNoIGFuZCBvbmUgb2YgdGhlIGVhc2llc3QgbWVhdHMgdG8gc21va2UuIFNob3J0IHJpYnMgYXJlIGxvYWRlZCB3aXRoIG1lYXQgYW5kIGN1dCBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHN0ZWVy4oCZcyByaWJzIGFib3ZlIHRoZSBzaG9ydCBwbGF0ZS4gQW5kIGJlc3Qgb2YgYWxsLCB5b3XigJlyZSBsb29raW5nIGF0IGEgcmVsYXhpbmcgYWxsLWRheSBzbW9rZSB0byB0dXJuIHRoZXNlIHJpYnMgaW50byBhIHRlbmRlciwgdGFzdHkgbWVhbC5gO1xuICAgIG1lbnVJdGVtRGl2NS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQ1KTtcbiAgICBjb25zdCBtZW51SXRlbUltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1lbnVJdGVtSW1nNS5zcmMgPSBiZWVmX3JpYnM7XG4gICAgbWVudUl0ZW1JbWc1LmFsdCA9IFwiQmVlZiBTaG9ydCBSaWJzXCI7XG4gICAgbWVudUl0ZW1EaXY1LmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nNSk7XG5cbiAgICBjb25zdCBtZW51SXRlbURpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtRGl2Ni5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXY2KTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UaXRsZTYudGV4dENvbnRlbnQgPSBcIlNNT0tFRCBUVVJLRVkgQlJFQVNUU1wiO1xuICAgIG1lbnVJdGVtRGl2Ni5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlNik7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0Ni5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0Ni50ZXh0Q29udGVudCA9IGBBIGhvbGlkYXkgY2xhc3NpYyBhbnl0aW1lIG9mIHRoZSB5ZWFyISBBIHdob2xlIGJvbmVsZXNzIGJyaW5lZCBhbmQgc21va2VkIHR1cmtleSBicmVhc3QgYW5kIGxhZ2VyIGdyYXZ5IG1hZGUgd2l0aCB0aGUgZHJpcHBpbmdzLCB3aXRoIGEgY2xhc3NpYyBzdHVmZmluZyBhbmQgYm90dGxlIG9mIENhcmJvbuKAmXMgU291dGggQ2Fyb2xpbmEgTXVzdGFyZCBTYXVjZS5gO1xuICAgIG1lbnVJdGVtRGl2Ni5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQ2KTtcbiAgICBjb25zdCBtZW51SXRlbUltZzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1lbnVJdGVtSW1nNi5zcmMgPSB0dXJrZXk7XG4gICAgbWVudUl0ZW1JbWc2LmFsdCA9IFwiU21va2VkIFR1cmtleSBCcmVhc3RzXCI7XG4gICAgbWVudUl0ZW1EaXY2LmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nNik7XG5cbiAgICBjb25zdCBtZW51SXRlbURpdjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtRGl2Ny5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXY3KTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UaXRsZTcudGV4dENvbnRlbnQgPSBcIlNNT0tFRCBDSElDS0VOIFdJTkdTXCI7XG4gICAgbWVudUl0ZW1EaXY3LmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGU3KTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQ3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQ3LmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQ3LnRleHRDb250ZW50ID0gYEEgZHJ5IHJ1YiB3aXRoIHBhcHJpa2EsIGNoaWxpIHBvd2RlciBhbmQgYnJvd24gc3VnYXIgZ2l2ZXMgdGhlc2UgU21va2VkIENoaWNrZW4gV2luZ3MgYSBzd2VldCBhbmQgc3BpY3kgc3RhcnQuIFNsb3cgc21va2luZyBtYWtlcyB0aGVtIHRlbmRlciBvbiB0aGUgaW5zaWRlLCBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIGxvYWRlZCB3aXRoIHdvb2QtZmlyZWQgZmxhdm9yLiBBbmQgdGhlIHN3ZWV0IGFuZCB0YW5neSBIb25leSBCcm93biBCZWVyIEJCUSBTYXVjZSBicmluZ3MgaXQgaG9tZSB3aXRoIGEgbGl0dGxlIGFkZGVkIGNoaWxpIHBvd2RlciBmb3IgZ29vZCBtZWFzdXJlLiBXZSBtYWRlIHRoaXMgcmVjaXBlIG9uIHRoZSBIaWdobGFuZCBPZmZzZXQgU21va2VyLCBidXQgeW91IGNhbiBtYWtlIGl0IG9uIHlvdXIgc21va2VyLmA7XG4gICAgbWVudUl0ZW1EaXY3LmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDcpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWc3LnNyYyA9IHdpbmdzO1xuICAgIG1lbnVJdGVtSW1nNy5hbHQgPSBcIlNtb2tlZCBDaGlja2VuIFdpbmdzXCI7XG4gICAgbWVudUl0ZW1EaXY3LmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nNyk7XG5cbiAgICBjb25zdCBtZW51SXRlbURpdjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtRGl2OC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXY4KTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UaXRsZTgudGV4dENvbnRlbnQgPSBcIkxFIE1FM0xBMiBGV0VSSUdIXCI7XG4gICAgbWVudUl0ZW1EaXY4LmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGU4KTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQ4LmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQ4LnRleHRDb250ZW50ID0gYEEgbWVkaXRlcnJhbmVhbiBjdWx0dXJlIHRoYXQgbWFpbmx5IHJlbGllcyBvbiB3aG9sZS1ncmFpbnMgYW5kIHZlZ2V0YWJsZXMgaXMgZ29pbmcgdG8gdGFrZSBmdWxsIGFkdmFudGFnZSBvZiB0aGUgc3BlY2lhbCAgZGF5IHdoZW4gYSBsYW1iIGlzIGF2YWlsYWJsZSB0byBmZWFzdCBvbjsgdGh1c2x5LCBldmVyeSBwYXJ0IG9mIHRoZSBhbmltYWwgaXMgY29va2VkIGluIG9uZSB3YXkgb3IgYW5vdGhlciBhbmQgaW50ZXN0aW5lcyBhcmUgbm8gZXhjZXB0aW9uLiBIZXJlLCB0aGV5IGFyZSB0aG9yb3VnaGx5IGNsZWFuZWQgd2l0aCBsZW1vbiwgY29hcnNlIHNhbHQgYW5kIHZpbmVnYXIgYW5kIHN0dWZmZWQgd2l0aCBtaW5jZWQgbWVhdCwgcmljZSBhbmQgc3BpY2VzLiBUaGlzIGlzIGFuIGV4cXVpc2l0ZSBkaXNoIGFuZCBvbmUgb2YgdGhlIG1vc3QgdHJhZGl0aW9uYWwgaW4gTGViYW5lc2UgY3Vpc2luZWA7XG4gICAgbWVudUl0ZW1EaXY4LmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDgpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWc4LnNyYyA9IGZ3ZXJpZ2g7XG4gICAgbWVudUl0ZW1JbWc4LmFsdCA9IFwiRmF3YXJlZ2hcIjtcbiAgICBtZW51SXRlbURpdjguYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc4KTtcblxufTtcblxuZXhwb3J0IHttZW51Q29udGVudExvYWRlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuL2ltYWdlcy9idXRjaGVyaW5nLnBuZ1wiO1xuaW1wb3J0IGdpdGh1YiBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViX2xvZ28ucG5nXCJcbmltcG9ydCB7IG1haW5Db250ZW50TG9hZGVyLCBtYWluQ29udGVudEluaXRpYWxMb2FkZXIgfSBmcm9tIFwiLi4vc3JjL21haW4uanNcIjtcbmltcG9ydCB7IG1lbnVDb250ZW50TG9hZGVyIH0gZnJvbSBcIi4uL3NyYy9tZW51LmpzXCJcbmltcG9ydCB7IGNvbnRhY3RDb250ZW50TG9hZGVyIH0gZnJvbSBcIi4uL3NyYy9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBhdHRyaWJ1dGlvbnNDb250ZW50TG9hZGVyIH0gZnJvbSBcIi4uL3NyYy9hdHRyaWJ1dGlvbnMuanNcIjtcblxuY29uc3QgaW5kZXhQYWdlTG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnRpdGxlID0gXCJMZSBNZTNsYTJcIlxuXG4gICAgLy8gQ29udGVudCBkaXYgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiBhbGwgdGhlIHBhZ2UgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG5cbiAgICAvLyBIZWFkZXIgZWxlbWVudFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gTG9nbyBkaXZcbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvRGl2KTtcblxuICAgIC8vIExvZ28gaW1nIGRpdlxuICAgIGNvbnN0IGxvZ29JbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29JbWdEaXYuY2xhc3NMaXN0LmFkZChcImxvZ28taW1nXCIpO1xuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb0ltZ0Rpdik7XG5cbiAgICAvLyBMb2dvIGltZ1xuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ29JbWcuc3JjID0gbG9nbztcbiAgICBsb2dvSW1nLmFsdCA9IFwiTGUgTWUzbGEyIExvZ29cIjtcbiAgICBsb2dvSW1nRGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuXG4gICAgLy8gTG9nbyB0ZXh0IGRpdlxuICAgIGNvbnN0IGxvZ29UZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwibG9nby10ZXh0XCIpO1xuICAgIGxvZ29UZXh0RGl2LnRleHRDb250ZW50ID0gXCJMRSBNRTNMQTJcIlxuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb1RleHREaXYpO1xuXG4gICAgLy8gTWVudSBkaXZcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICAgIC8vIE1lbnUgSG9tZSBhXG4gICAgY29uc3QgbWVudUhvbWVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbWVudUhvbWVBLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhvbWVcIik7XG4gICAgbWVudUhvbWVBLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gICAgbWVudUhvbWVBLmhyZWYgPSBcImphdmFzY3JpcHQ6bnVsbFwiO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUhvbWVBKTtcbiAgICBtZW51SG9tZUEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1haW5Db250ZW50TG9hZGVyKVxuXG4gICAgLy8gTWVudSBNZW51IGFcbiAgICBjb25zdCBtZW51TWVudUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51TWVudUEuY2xhc3NMaXN0LmFkZChcIm1lbnUtbWVudVwiKTtcbiAgICBtZW51TWVudUEudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBtZW51TWVudUEuaHJlZiA9IFwiamF2YXNjcmlwdDpudWxsXCI7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51TWVudUEpO1xuICAgIG1lbnVNZW51QS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudUNvbnRlbnRMb2FkZXIpXG5cbiAgICAvLyBNZW51IENvbnRhY3QgYVxuICAgIGNvbnN0IG1lbnVDb250YWN0QSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG1lbnVDb250YWN0QS5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWN0XCIpO1xuICAgIG1lbnVDb250YWN0QS50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuICAgIG1lbnVDb250YWN0QS5ocmVmID0gXCJqYXZhc2NyaXB0Om51bGxcIjtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVDb250YWN0QSk7XG4gICAgbWVudUNvbnRhY3RBLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0Q29udGVudExvYWRlcilcblxuICAgIG1haW5Db250ZW50SW5pdGlhbExvYWRlcigpO1xuXG4gICAgLy8gRm9vdGVyIGVsZW1lbnRcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIC8vIEZvb3RlciB0ZXh0IGVsZW1lbnRcbiAgICBjb25zdCBmb290ZXJUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJUZXh0RGl2LnRleHRDb250ZW50ID0gXCJUSEUgT0RJTiBQUk9KRUNUIC0gSk9FTUFUVEFSXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHREaXYpO1xuXG4gICAgLy8gRm9vdGVyIGEgZWxlbWVudFxuICAgIGNvbnN0IGZvb3RlckEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBmb290ZXJBLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2VtYXR0YXJcIjtcbiAgICBmb290ZXJBLnRhcmdldCA9IFwiX2JsYW5rXCJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQSk7XG5cbiAgICAvLyBGb290ZXIgaW1nIGVsZW1lbnRcbiAgICBjb25zdCBmb290ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvb3RlckltZy5zcmMgPSBnaXRodWI7XG4gICAgZm9vdGVyQS5hcHBlbmRDaGlsZChmb290ZXJJbWcpO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25zQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGF0dHJpYnV0aW9uc0EudGV4dENvbnRlbnQgPSBcIkFUVFJJQlVUSU9OU1wiO1xuICAgIGF0dHJpYnV0aW9uc0EuaHJlZiA9IFwiamF2YXNjcmlwdDpudWxsXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uc0EpO1xuICAgIGF0dHJpYnV0aW9uc0EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dHJpYnV0aW9uc0NvbnRlbnRMb2FkZXIpXG5cbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=