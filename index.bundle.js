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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Bloodlust\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: \"Redcap\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n    --color-header: #ffbc0c;\n    --color-header-logo-text: #f54235;\n    --color-header-logo-text-hover: #bf1c1d;\n    --color-main: red;\n    --color-footer: blue;\n    --font-main: \"Bloodlust\";\n    --font-main-alt: \"Redcap\";\n\n}\n\nbody {\n    background-color: var(--color-header);\n\n    font-family: var(--font-main);\n    color: var(--color-header-logo-text);\n    font-size: 2rem;\n\n    margin: 0;\n    padding: 0;\n\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n}\n\na {\n    text-decoration: none;\n    color: var(--color-header-logo-text);\n}\n\na:hover {\n    color: var(--color-header-logo-text-hover);\n}\n\nimg {\n    border-radius: 1rem;\n}\n\n#content {\n    min-height: 100vh;\n    width: min(100vw, 1080px);\n\n    padding: 0 1rem;\n\n    display: grid;\n    grid-template-rows: 5rem 1fr 4rem;\n}\n\nheader {\n    color: var(--color-header-logo-text);\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader .logo {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nheader .logo .logo-img img {\n    height: 3rem;\n}\n\nheader .logo .logo-text {\n\n    font-size: 3rem;\n}\n\nheader .menu {\n    font-size: 2rem;\n\n    display: flex;\n    gap: 1rem;\n}\n\n#main {\n    margin: 1rem 0;\n}\n\n#main.main-display, \n#main.contact-display,\n#main.attribution-display {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .main-img {\n    max-width: 100%;\n}\n\n#main .alt-font {\n    font-family: var(--font-main-alt);\n    font-size: 1.5rem;\n}\n\n#main.menu-display {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: stretch;\n    gap: 1rem;\n}\n\n#main .menu-item {\n    padding: 1rem;\n\n    border-color: var(--color-header-logo-text);\n    border-radius: 1rem;\n    border-style: solid;\n    border-width: 0.5rem;\n\n    max-width: calc((1080px - 7rem) / 2) ;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .menu-item .alt-font {\n    font-size: 1.25rem;\n\n    width: 100%;\n}\n\n#main .menu-item img {\n    max-width: 100%;\n}\n\n#main .main-attribution-img {\n    max-width: 450px;\n}\n\n#main .attribution a {\n    font-size: 1.75rem;\n}\n\nfooter {\n    color: var(--color-header-logo-text);\n    font-size: 1.5rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\nfooter a {\n    display: grid;\n    place-content: center;\n}\n\nfooter img {\n    height: 1.2rem;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,4CAAiD;AACrD;;AAEA;IACI,qBAAqB;IACrB,4CAAiC;AACrC;;AAEA;IACI,uBAAuB;IACvB,iCAAiC;IACjC,uCAAuC;IACvC,iBAAiB;IACjB,oBAAoB;IACpB,wBAAwB;IACxB,yBAAyB;;AAE7B;;AAEA;IACI,qCAAqC;;IAErC,6BAA6B;IAC7B,oCAAoC;IACpC,eAAe;;IAEf,SAAS;IACT,UAAU;;IAEV,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;;IAEzB,eAAe;;IAEf,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,oCAAoC;;IAEpC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;;;;IAII,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,aAAa;;IAEb,2CAA2C;IAC3C,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;;IAEpB,qCAAqC;;IAErC,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;;IAElB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["@font-face {\n    font-family: \"Bloodlust\";\n    src: url(\"/src/fonts/BloodlustExpanded-Ao5m.ttf\");\n}\n\n@font-face {\n    font-family: \"Redcap\";\n    src: url(\"/src/fonts/Redcap.ttf\");\n}\n\n:root {\n    --color-header: #ffbc0c;\n    --color-header-logo-text: #f54235;\n    --color-header-logo-text-hover: #bf1c1d;\n    --color-main: red;\n    --color-footer: blue;\n    --font-main: \"Bloodlust\";\n    --font-main-alt: \"Redcap\";\n\n}\n\nbody {\n    background-color: var(--color-header);\n\n    font-family: var(--font-main);\n    color: var(--color-header-logo-text);\n    font-size: 2rem;\n\n    margin: 0;\n    padding: 0;\n\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n}\n\na {\n    text-decoration: none;\n    color: var(--color-header-logo-text);\n}\n\na:hover {\n    color: var(--color-header-logo-text-hover);\n}\n\nimg {\n    border-radius: 1rem;\n}\n\n#content {\n    min-height: 100vh;\n    width: min(100vw, 1080px);\n\n    padding: 0 1rem;\n\n    display: grid;\n    grid-template-rows: 5rem 1fr 4rem;\n}\n\nheader {\n    color: var(--color-header-logo-text);\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader .logo {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\nheader .logo .logo-img img {\n    height: 3rem;\n}\n\nheader .logo .logo-text {\n\n    font-size: 3rem;\n}\n\nheader .menu {\n    font-size: 2rem;\n\n    display: flex;\n    gap: 1rem;\n}\n\n#main {\n    margin: 1rem 0;\n}\n\n#main.main-display, \n#main.contact-display,\n#main.attribution-display {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .main-img {\n    max-width: 100%;\n}\n\n#main .alt-font {\n    font-family: var(--font-main-alt);\n    font-size: 1.5rem;\n}\n\n#main.menu-display {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: stretch;\n    gap: 1rem;\n}\n\n#main .menu-item {\n    padding: 1rem;\n\n    border-color: var(--color-header-logo-text);\n    border-radius: 1rem;\n    border-style: solid;\n    border-width: 0.5rem;\n\n    max-width: calc((1080px - 7rem) / 2) ;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n#main .menu-item .alt-font {\n    font-size: 1.25rem;\n\n    width: 100%;\n}\n\n#main .menu-item img {\n    max-width: 100%;\n}\n\n#main .main-attribution-img {\n    max-width: 450px;\n}\n\n#main .attribution a {\n    font-size: 1.75rem;\n}\n\nfooter {\n    color: var(--color-header-logo-text);\n    font-size: 1.5rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\nfooter a {\n    display: grid;\n    place-content: center;\n}\n\nfooter img {\n    height: 1.2rem;\n}\n\n\n"],"sourceRoot":""}]);
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
    menuItemImg1.src = "../src/images/brisket.jpg";
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
    menuItemImg2.src = "../src/images/pork_ribs.jpg";
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
    menuItemImg3.src = "../src/images/pulled_pork.jpg";
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
    menuItemImg4.src = "../src/images/breakfast_sausage.jpg";
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
    menuItemImg5.src = "../src/images/beef_short_ribs.jpg";
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
    menuItemImg6.src = "../src/images/smoked_turkey_breasts.jpg";
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
    menuItemImg7.src = "../src/images/chicken_wings.jpg";
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
    menuItemImg8.src = "../src/images/fwerigh.jpeg";
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

/***/ "./src/images/butchering.png":
/*!***********************************!*\
  !*** ./src/images/butchering.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb7f1a71a15ab95ab3b8.png";

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

/***/ "./src/images/rodney_scott.jpg":
/*!*************************************!*\
  !*** ./src/images/rodney_scott.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad19956d49d168bdd979.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMscUtBQXdEO0FBQ3BHLDRDQUE0QyxxSUFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsaUNBQWlDLDJEQUEyRCxHQUFHLGdCQUFnQiw4QkFBOEIsMkRBQTJELEdBQUcsV0FBVyw4QkFBOEIsd0NBQXdDLDhDQUE4Qyx3QkFBd0IsMkJBQTJCLGlDQUFpQyxrQ0FBa0MsS0FBSyxVQUFVLDRDQUE0QyxzQ0FBc0MsMkNBQTJDLHNCQUFzQixrQkFBa0IsaUJBQWlCLHFCQUFxQixrQkFBa0Isc0JBQXNCLDhCQUE4QixHQUFHLE9BQU8sNEJBQTRCLDJDQUEyQyxHQUFHLGFBQWEsaURBQWlELEdBQUcsU0FBUywwQkFBMEIsR0FBRyxjQUFjLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLHNCQUFzQix3Q0FBd0MsR0FBRyxZQUFZLDJDQUEyQywwQkFBMEIscUNBQXFDLDBCQUEwQixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsa0JBQWtCLHNCQUFzQixzQkFBc0IsZ0JBQWdCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyw2RUFBNkUsc0JBQXNCLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQix3Q0FBd0Msd0JBQXdCLEdBQUcsd0JBQXdCLG9CQUFvQixzQkFBc0IsOEJBQThCLDJCQUEyQixnQkFBZ0IsR0FBRyxzQkFBc0Isb0JBQW9CLG9EQUFvRCwwQkFBMEIsMEJBQTBCLDJCQUEyQiw4Q0FBOEMsc0JBQXNCLDZCQUE2QixxQ0FBcUMsMEJBQTBCLGdCQUFnQixHQUFHLGdDQUFnQyx5QkFBeUIsb0JBQW9CLEdBQUcsMEJBQTBCLHNCQUFzQixHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRywwQkFBMEIseUJBQXlCLEdBQUcsWUFBWSwyQ0FBMkMsd0JBQXdCLHNCQUFzQiwwQkFBMEIsOEJBQThCLGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLDRCQUE0QixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxhQUFhLHFGQUFxRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLHNDQUFzQyxpQ0FBaUMsMERBQTBELEdBQUcsZ0JBQWdCLDhCQUE4QiwwQ0FBMEMsR0FBRyxXQUFXLDhCQUE4Qix3Q0FBd0MsOENBQThDLHdCQUF3QiwyQkFBMkIsaUNBQWlDLGtDQUFrQyxLQUFLLFVBQVUsNENBQTRDLHNDQUFzQywyQ0FBMkMsc0JBQXNCLGtCQUFrQixpQkFBaUIscUJBQXFCLGtCQUFrQixzQkFBc0IsOEJBQThCLEdBQUcsT0FBTyw0QkFBNEIsMkNBQTJDLEdBQUcsYUFBYSxpREFBaUQsR0FBRyxTQUFTLDBCQUEwQixHQUFHLGNBQWMsd0JBQXdCLGdDQUFnQyx3QkFBd0Isc0JBQXNCLHdDQUF3QyxHQUFHLFlBQVksMkNBQTJDLDBCQUEwQixxQ0FBcUMsMEJBQTBCLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxrQkFBa0Isc0JBQXNCLHNCQUFzQixnQkFBZ0IsR0FBRyxXQUFXLHFCQUFxQixHQUFHLDZFQUE2RSxzQkFBc0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcscUJBQXFCLHdDQUF3Qyx3QkFBd0IsR0FBRyx3QkFBd0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsMkJBQTJCLGdCQUFnQixHQUFHLHNCQUFzQixvQkFBb0Isb0RBQW9ELDBCQUEwQiwwQkFBMEIsMkJBQTJCLDhDQUE4QyxzQkFBc0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsZ0JBQWdCLEdBQUcsZ0NBQWdDLHlCQUF5QixvQkFBb0IsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLDBCQUEwQix5QkFBeUIsR0FBRyxZQUFZLDJDQUEyQyx3QkFBd0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLEdBQUcsY0FBYyxvQkFBb0IsNEJBQTRCLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLHlCQUF5QjtBQUMvL047QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscURBQVk7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0U2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0I2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQVE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFNQUFxTTtBQUNyTTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDaUI7QUFDRTtBQUNnQztBQUMzQjtBQUNPO0FBQ1U7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQUk7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyREFBaUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyREFBaUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpRUFBb0I7O0FBRS9ELElBQUksdUVBQXdCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFNO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJFQUF5Qjs7QUFFckUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYXR0cmlidXRpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9CbG9vZGx1c3RFeHBhbmRlZC1BbzVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvUmVkY2FwLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCbG9vZGx1c3RcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJlZGNhcFxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLWhlYWRlcjogI2ZmYmMwYztcXG4gICAgLS1jb2xvci1oZWFkZXItbG9nby10ZXh0OiAjZjU0MjM1O1xcbiAgICAtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQtaG92ZXI6ICNiZjFjMWQ7XFxuICAgIC0tY29sb3ItbWFpbjogcmVkO1xcbiAgICAtLWNvbG9yLWZvb3RlcjogYmx1ZTtcXG4gICAgLS1mb250LW1haW46IFxcXCJCbG9vZGx1c3RcXFwiO1xcbiAgICAtLWZvbnQtbWFpbi1hbHQ6IFxcXCJSZWRjYXBcXFwiO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dC1ob3Zlcik7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDEwODBweCk7XFxuXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmciA0cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIC5sb2dvLWltZyBpbWcge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbmhlYWRlciAubG9nbyAubG9nby10ZXh0IHtcXG5cXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5oZWFkZXIgLm1lbnUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI21haW4ubWFpbi1kaXNwbGF5LCBcXG4jbWFpbi5jb250YWN0LWRpc3BsYXksXFxuI21haW4uYXR0cmlidXRpb24tZGlzcGxheSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLm1haW4taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAuYWx0LWZvbnQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluLWFsdCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbWFpbi5tZW51LWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWVudS1pdGVtIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVyZW07XFxuXFxuICAgIG1heC13aWR0aDogY2FsYygoMTA4MHB4IC0gN3JlbSkgLyAyKSA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWVudS1pdGVtIC5hbHQtZm9udCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIC5tZW51LWl0ZW0gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAubWFpbi1hdHRyaWJ1dGlvbi1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4jbWFpbiAuYXR0cmlidXRpb24gYSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBaUM7QUFDckM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0kscUNBQXFDOztJQUVyQyw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGVBQWU7O0lBRWYsU0FBUztJQUNULFVBQVU7O0lBRVYsWUFBWTtJQUNaLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCOztJQUV6QixlQUFlOztJQUVmLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7O0lBSUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTs7SUFFYiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7O0lBRXBCLHFDQUFxQzs7SUFFckMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJsb29kbHVzdFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL0Jsb29kbHVzdEV4cGFuZGVkLUFvNW0udHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJlZGNhcFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL1JlZGNhcC50dGZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLWhlYWRlcjogI2ZmYmMwYztcXG4gICAgLS1jb2xvci1oZWFkZXItbG9nby10ZXh0OiAjZjU0MjM1O1xcbiAgICAtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQtaG92ZXI6ICNiZjFjMWQ7XFxuICAgIC0tY29sb3ItbWFpbjogcmVkO1xcbiAgICAtLWNvbG9yLWZvb3RlcjogYmx1ZTtcXG4gICAgLS1mb250LW1haW46IFxcXCJCbG9vZGx1c3RcXFwiO1xcbiAgICAtLWZvbnQtbWFpbi1hbHQ6IFxcXCJSZWRjYXBcXFwiO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbWFpbik7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dC1ob3Zlcik7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDEwODBweCk7XFxuXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmciA0cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIC5sb2dvLWltZyBpbWcge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbmhlYWRlciAubG9nbyAubG9nby10ZXh0IHtcXG5cXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5oZWFkZXIgLm1lbnUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI21haW4ubWFpbi1kaXNwbGF5LCBcXG4jbWFpbi5jb250YWN0LWRpc3BsYXksXFxuI21haW4uYXR0cmlidXRpb24tZGlzcGxheSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLm1haW4taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAuYWx0LWZvbnQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluLWFsdCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbWFpbi5tZW51LWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWVudS1pdGVtIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVyZW07XFxuXFxuICAgIG1heC13aWR0aDogY2FsYygoMTA4MHB4IC0gN3JlbSkgLyAyKSA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWVudS1pdGVtIC5hbHQtZm9udCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIC5tZW51LWl0ZW0gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAubWFpbi1hdHRyaWJ1dGlvbi1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4jbWFpbiAuYXR0cmlidXRpb24gYSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJvZG5leV9zY290dCBmcm9tIFwiLi9pbWFnZXMvcm9kbmV5X3Njb3R0LmpwZ1wiO1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGlvbnNDb250ZW50TG9hZGVyKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgbWFpbkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvbi1kaXNwbGF5XCIpO1xuXG4gICAgLy8gTWFpbiBhdHRyaWJ1dGlvbiBpbWFnZVxuICAgIGNvbnN0IG1haW5BdHRyaWJ1dGlvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWFpbkF0dHJpYnV0aW9uSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluLWF0dHJpYnV0aW9uLWltZ1wiKTtcbiAgICBtYWluQXR0cmlidXRpb25JbWcuc3JjID0gcm9kbmV5X3Njb3R0O1xuICAgIG1haW5BdHRyaWJ1dGlvbkltZy5hbHQgPSBcIkNoZWYgUm9kbmV5IFNjb3R0IEJCUWluZ1wiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbkF0dHJpYnV0aW9uSW1nKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXYwLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjAuaW5uZXJIVE1MID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5hbC5jb20vYnVzaW5lc3MvMjAyMC8wNC9yb2RuZXktc2NvdHQtbGl0dGxlLWRvbmtleS10by1vcGVuLWhvbWV3b29kLWxvY2F0aW9ucy1pbi0yMDIxLmh0bWxcIj5BdHRyaWJ1dGlvbiBwaG90byBDaGVmIFJvZG5leSBTY290dCBieSBBSTwvYT4nO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYwKTtcbiAgICBcbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MS5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXYxLmlubmVySFRNTCA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYnV0Y2hlci1zaG9wXCI+TG9nbyBjcmVhdGVkIGJ5IFNtYXNoaWNvbnMgLSBGbGF0aWNvbjwvYT4nO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYxKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXYyLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjIuaW5uZXJIVE1MID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JvbGx5d29vZGJicS5jb20vXCI+TWFpbiBwaG90byBieSBSb2xseXdvb2QgQkJRPC9hPic7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkRpdjIpO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjMuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2My5pbm5lckhUTUwgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cuc3RpbGVzc3dpdGNoYmJxLmNvbS9hYm91dFwiPk1haW4gdGV4dCBpbnNwaXJlZCBieSBTdGlsZXMgU3dpdGNoIEJCUTwvYT4nO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYzKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXY0LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjQuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLWJlZWYtYnJpc2tldC13aXRoLXRleGFzLXJ1YlwiPkJyaXNrZXQgcmVjaXBlIGJ5IE9rbGFob21hIEpvZSdzPC9hPmA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkRpdjQpO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXY1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjUuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2NS5pbm5lckhUTUwgPSBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rbGFob21ham9lcy5jb20vcmVjaXBlcy9zbW9rZWQtcG9yay1yaWJzXCI+UG9yayByaWJzIHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY1KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXY2LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjYuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLXNyaXJhY2hhLXB1bGxlZC1wb3JrLXNhbmR3aWNoXCI+UHVsbGVkIHBvcmsgcmVjaXBlIGJ5IE9rbGFob21hIEpvZSdzPC9hPmA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkRpdjYpO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXY3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjcuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2Ny5pbm5lckhUTUwgPSBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rbGFob21ham9lcy5jb20vcmVjaXBlcy9zbW9rZWQtYnJlYWtmYXN0LXNhdXNhZ2VcIj5TbW9rZWQgc2F1c2FnZSByZWNpcGUgYnkgT2tsYWhvbWEgSm9lJ3M8L2E+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2Nyk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2OC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXY4LmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cub2tsYWhvbWFqb2VzLmNvbS9yZWNpcGVzL3Ntb2tlZC1iZWVmLXNob3J0LXJpYnNcIj5CZWVmIHNob3J0IHJpYnMgcmVjaXBlIGJ5IE9rbGFob21hIEpvZSdzPC9hPmA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkRpdjgpO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXY5PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2OS5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXY5LmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cub2tsYWhvbWFqb2VzLmNvbS9yZWNpcGVzL3Ntb2tlZC10dXJrZXktYnJlYXN0c1wiPlNtb2tlZCB0dXJrZXkgYnJlYXN0IHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY5KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2MTA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXYxMC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXYxMC5pbm5lckhUTUwgPSBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rbGFob21ham9lcy5jb20vcmVjaXBlcy9zbW9rZWQtY2hpY2tlbi13aW5nc1wiPlNtb2tlZCBjaGlja2VuIHdpbmdzIHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYxMCk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjExPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MTEuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MTEuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy50YXN0ZW9mYmVpcnV0LmNvbS9zdHVmZmVkLXNoZWVwLWludGVzdGluZXMtZmF3YXJlZ2gvXCI+TGUgTTIzbGEyIGluc3BpcmVkIGJ5IGZhd2FyZWdoIC0gVGFzdGUgb2YgQmVpcnV0PC9hPmA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkRpdjExKTtcblxufTtcblxuZXhwb3J0IHthdHRyaWJ1dGlvbnNDb250ZW50TG9hZGVyfSIsImltcG9ydCBsb2NhdGlvbiBmcm9tIFwiLi9pbWFnZXMvbG9jYXRpb24ucG5nXCI7XG5cbmZ1bmN0aW9uIGNvbnRhY3RDb250ZW50TG9hZGVyKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgbWFpbkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRpc3BsYXlcIik7XG5cbiAgICBjb25zdCBtZW51SXRlbURpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtRGl2MS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXYxKTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UaXRsZTEudGV4dENvbnRlbnQgPSBcIlRPIENPTlRBQ1QgT1IgVklTSVQgTEUgTUUzTEEyXCI7XG4gICAgbWVudUl0ZW1EaXYxLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUxKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQwLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQwLnRleHRDb250ZW50ID0gXCJFTUFJTDogZWF0QGxlbWUzbGEyLmNvbVwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQwKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQxLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQxLnRleHRDb250ZW50ID0gXCJQSE9ORTogNDE2IDU1NSA2Njc3XCI7XG4gICAgbWVudUl0ZW1EaXYxLmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDEpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDIuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDIudGV4dENvbnRlbnQgPSBcIkFERFJFU1M6IDY5OSBTdCBDbGFpciBBdmUgVywgVG9yb250bywgT04gTTZDIDFCMlwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQyKTtcbiAgICBjb25zdCBtZW51SXRlbUltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1lbnVJdGVtSW1nMS5zcmMgPSBsb2NhdGlvbjtcbiAgICBtZW51SXRlbUltZzEuYWx0ID0gXCJNYXAgTG9jYXRpb25cIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcxKTtcbiAgICBcbn07XG5cbmV4cG9ydCB7Y29udGFjdENvbnRlbnRMb2FkZXJ9IiwiaW1wb3J0IGJicV9kaXNoIGZyb20gXCIuL2ltYWdlcy9iYnFfZGlzaC5qcGdcIjtcblxuZnVuY3Rpb24gbWFpbkNvbnRlbnRMb2FkZXIoKSB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbiAgICBtYWluRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiXCIpO1xuICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tZGlzcGxheVwiKTtcblxuICAgIC8vIE1haW4gaW1hZ2VcbiAgICBjb25zdCBtYWluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtYWluSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluLWltZ1wiKTtcbiAgICBtYWluSW1nLnNyYyA9IGJicV9kaXNoO1xuICAgIG1haW5JbWcuYWx0ID0gXCJNYWluIEltYWdlXCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluSW1nKTtcblxuICAgIC8vIFdlbGNvbWUgZGl2XG4gICAgY29uc3QgbWFpbldlbGNvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5XZWxjb21lRGl2LnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIExlIE1lM2xhMiBSZXN0YXVyYW50XCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluV2VsY29tZURpdik7XG5cbiAgICAvLyBUZXh0IGRpdiAxXG4gICAgY29uc3QgbWFpblRleHREaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluVGV4dERpdjEuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1haW5UZXh0RGl2MS50ZXh0Q29udGVudCA9IFwiTGUgTWUzbGEyIEJCUSBSZXN0YXVyYW50LCBuYW1lZCBhZnRlciB0aGUgaGlzdG9yaWMgUy5MLkNoaSBza2V0Y2ggTGUgTWUzbGEyLCBNZXRuLCBpcyBhbHNvIG5hbWVzYWtlIG9mIHRoZSBlcGljIG1haW4gZGlzaC4gVGhlIGluc3BpcmF0aW9uIGZvciBMZSBNZTNsYTIgaXMgZGVyaXZlZCBmcm9tIHRoZSBUZXhhcyBCQlEgTGVnZW5kcy4gTGUgTWUzbGEyIHBsYXlzIHRyaWJ1dGUgdG8gdGhlc2UgVGV4YXMg4oCcZ3JlYXRz4oCdIGJ5IGFzc2VtYmxpbmcgYSBwYXNzaW9uYXRlIHRlYW0gd2l0aCBkZWNhZGVzIG9mIGluZHVzdHJ5IGV4cGVyaWVuY2UuIExlIE1lM2xhMiBpcyBmb2N1c2VkIG9uIHNldHRpbmcgdGhlIGJhciBoaWdoIHdpdGggdGhlIOKAnG5vIGNvcm5lcnMgY3V04oCdIG1ldGhvZHMgb2YgcHJlcGFyYXRpb24gYW5kIHNlbGVjdGlvbiBvZiBxdWFsaXR5IHByb2R1Y3QuXCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluVGV4dERpdjEpO1xuXG4gICAgLy8gVGV4dCBkaXYgMlxuICAgIGNvbnN0IG1haW5UZXh0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblRleHREaXYyLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtYWluVGV4dERpdjIudGV4dENvbnRlbnQgPSBcIkxlIE1lM2xhMiwgc2V0IGluIHRoZSBoaXN0b3JpYyBhcnQgZGVjbyAxOTUwcyBTdG9yaXVtIFNob3BwaW5nIENlbnRlciwgaXMgZGVzaWduZWQgdG8gaG9zdCBhIG5vc3RhbGdpYyBhdG1vc3BoZXJlIHRoYXQgdHJhbnNjZW5kcyBiYWNrIHRvIHRoZSBvbGQgbmVpZ2hib3Job29kIHN0eWxlIGVhdGVyeSB3aGljaCBjb21iaW5lcyBleGNlcHRpb25hbCBUZXhhcyBCQlEsIGdyZWF0IGF0bW9zcGhlcmUsIGFuZCBjb2xkIFRleGFzIGNyYWZ0IGJyZXdzLiBGVU4gRkFDVDogVGhlIFN0b3JpdW0gU2hvcHBpbmcgQ2VudGVyLCBvbmUgb2YgdGhlIOKAnG9sZGVzdOKAnSBzaG9wcGluZyBjZW50ZXJzIGluIGNlbnRyYWwgTWV0biwgd2FzIGFsc28gdGhlIGZpbG0gcHJvZHVjdGlvbiBodWIgZm9yIHRoZSBsYXRlIDE5OTBzIGZpbG0g4oCcUy5MLiBGaWxt4oCdIHN0YXJyaW5nIE5haW0gSGFsYXdpLiBMZSBNZTNsYTIgbGVhc2Ugc3BhY2UgaXMgdGhlIGZhbWVkIOKAnFBhcmFkaXNl4oCdIG9yaWdpbnMgaGFsbCBmaWxtZWQgaW4gdGhlIG1vdmllLiBUaGUgTGUgTWUzbGEyIGNyZXcgaXMgZXhjaXRlZCBhYm91dCBicmVhdGhpbmcgbmV3IGxpZmUgaW50byBhIGhpc3RvcmljIHBhcnQgb2YgY2VudHJhbCBNZXRuIGFuZCByZXZpdGFsaXppbmcgdGhlIGNvbW11bml0eSB0aGF0IHN1cnJvdW5kcyB0aGVtLlwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpblRleHREaXYyKTtcbn07XG5cbmZ1bmN0aW9uIG1haW5Db250ZW50SW5pdGlhbExvYWRlcigpIHtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBNYWluIGRpdiBlbGVtZW50XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIG1haW5Db250ZW50TG9hZGVyKCk7XG5cbn07XG5cbmV4cG9ydCB7bWFpbkNvbnRlbnRMb2FkZXIsIG1haW5Db250ZW50SW5pdGlhbExvYWRlcn0iLCJmdW5jdGlvbiBtZW51Q29udGVudExvYWRlcigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1kaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2MSk7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGUxLnRleHRDb250ZW50ID0gXCJTTU9LRUQgQkVFRiBCUklTS0VUXCI7XG4gICAgbWVudUl0ZW1EaXYxLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUxKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQxLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQxLnRleHRDb250ZW50ID0gXCJQYXByaWthIGFuZCBjYXllbm5lIHBvd2RlciBnaXZlIHRoaXMgdGVuZGVyIFNtb2tlZCBCZWVmIEJyaXNrZXQgd2l0aCBhIFRleGFzIFJ1YiBpdHMgc2lnbmF0dXJlIGZsYXZvci4gV2hlbiB0aGUgc3VuIGdvZXMgZG93biwgY2hvdyBkb3duIG9uIHNvbWUgbWVsdC1pbi15b3VyLW1vdXRoIGJyaXNrZXQgdGhhdOKAmXMgd2VsbCB3b3J0aCB0aGUgd2FpdC4gQmVlZiBicmlza2V0IGlzIG9uZSBvZiB0aGUgbmluZSBiZWVmIHByaW1hbCBjdXRzIHdoaWNoIGluY2x1ZGVzIHRoZSBzdXBlcmZpY2lhbCBhbmQgZGVlcCBwZWN0b3JhbHMuIFRvIHRlbmRlcml6ZSBhbGwgb2YgdGhhdCBjb25uZWN0aXZlIHRpc3N1ZSwgYmVlZiBicmlza2V0IG5lZWRzIHRvIGNvb2sgbG93IGFuZCBzbG93IGZvciBhIGxvbmcgdGltZS5cIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0MSk7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzEuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2JyaXNrZXQuanBnXCI7XG4gICAgbWVudUl0ZW1JbWcxLmFsdCA9IFwiQnJpc2tldFwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbUltZzEpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2Mik7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGUyLnRleHRDb250ZW50ID0gXCJTTU9LRUQgUE9SSyBSSUJTXCI7XG4gICAgbWVudUl0ZW1EaXYyLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUyKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQyLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQyLnRleHRDb250ZW50ID0gYFRoZXNlIFNtb2tlZCBQb3JrIFJpYnMgYXJlIG9va2VkIGxvdyBhbmQgc2xvdyBmb3Igc29tZSBvZiB0aGUganVpY2llc3QsIHRhc3RpZXN0IGJhYnkgYmFjayByaWJzIHlvdeKAmXZlIGV2ZXIgZWF0ZW4uIFJ1YmJlZCwgc2F1Y2VkIGFuZCBzbW9rZWQsIHRoaXMgcmVjaXBlIGZvciBzbW9raW5nIHJpYnMgZGVsaXZlcnMgdGVuZGVyIGFuZCBkZWxpY2lvdXMgc21va2VkIHJpYnMgc3RyYWlnaHQgdG8geW91ciBzbW9rZXIuIFdoZW4gYnV5aW5nIHJpYnMsIGxvb2sgZm9yIGEgZnVsbCByYWNrIHdpdGggZXZlbiB0aGlja25lc3MgdGhyb3VnaG91dC4gSXQgd29u4oCZdCBjb29rIGV2ZW5seSBpZiB0aGUgcmFjayBpcyB0aGluIG9uIG9uZSBzaWRlIGFuZCB0aGljayBvbiB0aGUgb3RoZXIuYDtcbiAgICBtZW51SXRlbURpdjIuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Mik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzIuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3Bvcmtfcmlicy5qcGdcIjtcbiAgICBtZW51SXRlbUltZzIuYWx0ID0gXCJQb3JrIFJpYnNcIjtcbiAgICBtZW51SXRlbURpdjIuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcyKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXYzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjMpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlMy50ZXh0Q29udGVudCA9IFwiU01PS0VEIFNSSVJBQ0hBIFBVTExFRCBQT1JLXCI7XG4gICAgbWVudUl0ZW1EaXYzLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUzKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQzLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQzLnRleHRDb250ZW50ID0gYElmIHlvdSBwcmVmZXIgcG9yayB0aGF0IGhhcyBhIGxpdHRsZSBleHRyYSBiaXRlIHRvIGl0LCB5b3XigJlyZSBnb25uYSBsb3ZlIHRoaXMgU21va2VkIFNyaXJhY2hhIFB1bGxlZCBQb3JrIFNhbmR3aWNoLiBIb21lbWFkZSBzcmlyYWNoYSBiYXJiZWN1ZSBzYXVjZSBtYWtlcyB0aGUgc2hyZWRkZWQgbWVhdCBmcm9tIHRoZSBwb3JrIHNob3VsZGVyIHRhbmd5LXN3ZWV0IHdpdGggYSBraWNrIG9mIGdhcmxpYyBmb3IgaXJyZXNpc3RpYmxlIGJvbGQsIHNtb2t5IGFuZCBzcGljeSBmbGF2b3IuIFNyaXJhY2hhIGlzIGEgVGhhaSBob3Qgc2F1Y2UgbWFkZSB3aXRoIGNoaWxpIHBlcHBlcnMsIHN1Z2FyLCBnYXJsaWMsIGRpc3RpbGxlZCB2aW5lZ2FyIGFuZCBzYWx0LiBJdOKAmXMgbmFtZWQgYWZ0ZXIgdGhlIGNpdHkgaW4gd2hpY2ggaXQgd2FzIGZpcnN0IG1hZGUgb3ZlciA4MCB5ZWFycyBhZ28sIFNpIFJhY2hhLCBhbiBlYXN0ZXJuIGNpdHkgb24gdGhlIGNvYXN0IG9mIFRoYWlsYW5kLmA7XG4gICAgbWVudUl0ZW1EaXYzLmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDMpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWczLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9wdWxsZWRfcG9yay5qcGdcIjtcbiAgICBtZW51SXRlbUltZzMuYWx0ID0gXCJQdWxsZWQgUG9ya1wiO1xuICAgIG1lbnVJdGVtRGl2My5hcHBlbmRDaGlsZChtZW51SXRlbUltZzMpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2NCk7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGU0LnRleHRDb250ZW50ID0gXCJTTU9LRUQgU0FVU0FHRVwiO1xuICAgIG1lbnVJdGVtRGl2NC5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlNCk7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0NC5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0NC50ZXh0Q29udGVudCA9IGBUaGlzIFNtb2tlZCBCcmVha2Zhc3QgU2F1c2FnZSByZWNpcGUgY29tYmluZXMgZ3JvdW5kIHBvcmsgd2l0aCBtYXBsZSBzeXJ1cCBhbmQgaG90ICYgc2F2b3J5IHNwaWNlcyB0byBtYWtlIHNhdXNhZ2UgbGlua3Mgb3IgcGF0dGllcyBvbiBhIHBlbGxldCBncmlsbC4gV2hlbiB5b3UgbWFrZSBzYXVzYWdlIGZyb20gc2NyYXRjaCwgaXQgdGFzdGVzIGJldHRlciwgYW5kIHlvdSBrbm93IGV4YWN0bHkgd2hhdOKAmXMgaW4gaXQuIFlvdSBqdXN0IGNhbuKAmXQgYmVhdCB0aGUgcXVhbGl0eSBhbmQgZmxhdm9yIG9mIGhvbWVtYWRlIHNhdXNhZ2UsIGVzcGVjaWFsbHkgd2hlbiBpdOKAmXMgaW5mdXNlZCB3aXRoIGFwcGxlIHdvb2QtZmlyZWQgZmxhdm9yLiBBYm91dCB0aGUgQ3V0OiBHcm91bmQgcG9yayBpcyB1c3VhbGx5IG1hZGUgZnJvbSBwb3JrIHNob3VsZGVyIGFuZCBzb21ldGltZXMgaW5jbHVkZXMgdHJpbW1lZCBlbmRzIG9mIHRoZSBsb2luLiBJdCB1c3VhbGx5IGNvbnRhaW5zIGFib3V0IDE1IHBlcmNlbnQgZmF0LmA7XG4gICAgbWVudUl0ZW1EaXY0LmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDQpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWc0LnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9icmVha2Zhc3Rfc2F1c2FnZS5qcGdcIjtcbiAgICBtZW51SXRlbUltZzQuYWx0ID0gXCJTbW9rZWQgQnJlYWtmYXN0IFNhdXNhZ2VcIjtcbiAgICBtZW51SXRlbURpdjQuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc0KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXY1LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjUpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlNS50ZXh0Q29udGVudCA9IFwiQkVFRiBTSE9SVCBSSUJTXCI7XG4gICAgbWVudUl0ZW1EaXY1LmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGU1KTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQ1LmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQ1LnRleHRDb250ZW50ID0gYFRoZXJl4oCZcyBub3RoaW5nIHF1aXRlIGxpa2UgU21va2VkIEJlZWYgU2hvcnQgUmlicyBzZWFzb25lZCB3aXRoIExvdWlzaWFuYSBob3Qgc2F1Y2UuIEl04oCZcyBhIHdvbmRlcmZ1bGx5IHByaW1hbCBkaXNoIGFuZCBvbmUgb2YgdGhlIGVhc2llc3QgbWVhdHMgdG8gc21va2UuIFNob3J0IHJpYnMgYXJlIGxvYWRlZCB3aXRoIG1lYXQgYW5kIGN1dCBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHN0ZWVy4oCZcyByaWJzIGFib3ZlIHRoZSBzaG9ydCBwbGF0ZS4gQW5kIGJlc3Qgb2YgYWxsLCB5b3XigJlyZSBsb29raW5nIGF0IGEgcmVsYXhpbmcgYWxsLWRheSBzbW9rZSB0byB0dXJuIHRoZXNlIHJpYnMgaW50byBhIHRlbmRlciwgdGFzdHkgbWVhbC5gO1xuICAgIG1lbnVJdGVtRGl2NS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQ1KTtcbiAgICBjb25zdCBtZW51SXRlbUltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1lbnVJdGVtSW1nNS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvYmVlZl9zaG9ydF9yaWJzLmpwZ1wiO1xuICAgIG1lbnVJdGVtSW1nNS5hbHQgPSBcIkJlZWYgU2hvcnQgUmlic1wiO1xuICAgIG1lbnVJdGVtRGl2NS5hcHBlbmRDaGlsZChtZW51SXRlbUltZzUpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXY2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2Nik7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGU2LnRleHRDb250ZW50ID0gXCJTTU9LRUQgVFVSS0VZIEJSRUFTVFNcIjtcbiAgICBtZW51SXRlbURpdjYuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZTYpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDYuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDYudGV4dENvbnRlbnQgPSBgQSBob2xpZGF5IGNsYXNzaWMgYW55dGltZSBvZiB0aGUgeWVhciEgQSB3aG9sZSBib25lbGVzcyBicmluZWQgYW5kIHNtb2tlZCB0dXJrZXkgYnJlYXN0IGFuZCBsYWdlciBncmF2eSBtYWRlIHdpdGggdGhlIGRyaXBwaW5ncywgd2l0aCBhIGNsYXNzaWMgc3R1ZmZpbmcgYW5kIGJvdHRsZSBvZiBDYXJib27igJlzIFNvdXRoIENhcm9saW5hIE11c3RhcmQgU2F1Y2UuYDtcbiAgICBtZW51SXRlbURpdjYuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Nik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWc2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzYuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3Ntb2tlZF90dXJrZXlfYnJlYXN0cy5qcGdcIjtcbiAgICBtZW51SXRlbUltZzYuYWx0ID0gXCJTbW9rZWQgVHVya2V5IEJyZWFzdHNcIjtcbiAgICBtZW51SXRlbURpdjYuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc2KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXY3LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjcpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGU3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlNy50ZXh0Q29udGVudCA9IFwiU01PS0VEIENISUNLRU4gV0lOR1NcIjtcbiAgICBtZW51SXRlbURpdjcuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZTcpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDcuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDcudGV4dENvbnRlbnQgPSBgQSBkcnkgcnViIHdpdGggcGFwcmlrYSwgY2hpbGkgcG93ZGVyIGFuZCBicm93biBzdWdhciBnaXZlcyB0aGVzZSBTbW9rZWQgQ2hpY2tlbiBXaW5ncyBhIHN3ZWV0IGFuZCBzcGljeSBzdGFydC4gU2xvdyBzbW9raW5nIG1ha2VzIHRoZW0gdGVuZGVyIG9uIHRoZSBpbnNpZGUsIGNyaXNweSBvbiB0aGUgb3V0c2lkZSBhbmQgbG9hZGVkIHdpdGggd29vZC1maXJlZCBmbGF2b3IuIEFuZCB0aGUgc3dlZXQgYW5kIHRhbmd5IEhvbmV5IEJyb3duIEJlZXIgQkJRIFNhdWNlIGJyaW5ncyBpdCBob21lIHdpdGggYSBsaXR0bGUgYWRkZWQgY2hpbGkgcG93ZGVyIGZvciBnb29kIG1lYXN1cmUuIFdlIG1hZGUgdGhpcyByZWNpcGUgb24gdGhlIEhpZ2hsYW5kIE9mZnNldCBTbW9rZXIsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgb24geW91ciBzbW9rZXIuYDtcbiAgICBtZW51SXRlbURpdjcuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Nyk7XG4gICAgY29uc3QgbWVudUl0ZW1JbWc3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2NoaWNrZW5fd2luZ3MuanBnXCI7XG4gICAgbWVudUl0ZW1JbWc3LmFsdCA9IFwiU21va2VkIENoaWNrZW4gV2luZ3NcIjtcbiAgICBtZW51SXRlbURpdjcuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc3KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXY4LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjgpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGU4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlOC50ZXh0Q29udGVudCA9IFwiTEUgTUUzTEEyIEZXRVJJR0hcIjtcbiAgICBtZW51SXRlbURpdjguYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZTgpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDguY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDgudGV4dENvbnRlbnQgPSBgQSBtZWRpdGVycmFuZWFuIGN1bHR1cmUgdGhhdCBtYWlubHkgcmVsaWVzIG9uIHdob2xlLWdyYWlucyBhbmQgdmVnZXRhYmxlcyBpcyBnb2luZyB0byB0YWtlIGZ1bGwgYWR2YW50YWdlIG9mIHRoZSBzcGVjaWFsICBkYXkgd2hlbiBhIGxhbWIgaXMgYXZhaWxhYmxlIHRvIGZlYXN0IG9uOyB0aHVzbHksIGV2ZXJ5IHBhcnQgb2YgdGhlIGFuaW1hbCBpcyBjb29rZWQgaW4gb25lIHdheSBvciBhbm90aGVyIGFuZCBpbnRlc3RpbmVzIGFyZSBubyBleGNlcHRpb24uIEhlcmUsIHRoZXkgYXJlIHRob3JvdWdobHkgY2xlYW5lZCB3aXRoIGxlbW9uLCBjb2Fyc2Ugc2FsdCBhbmQgdmluZWdhciBhbmQgc3R1ZmZlZCB3aXRoIG1pbmNlZCBtZWF0LCByaWNlIGFuZCBzcGljZXMuIFRoaXMgaXMgYW4gZXhxdWlzaXRlIGRpc2ggYW5kIG9uZSBvZiB0aGUgbW9zdCB0cmFkaXRpb25hbCBpbiBMZWJhbmVzZSBjdWlzaW5lYDtcbiAgICBtZW51SXRlbURpdjguYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0OCk7XG4gICAgY29uc3QgbWVudUl0ZW1JbWc4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzguc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2Z3ZXJpZ2guanBlZ1wiO1xuICAgIG1lbnVJdGVtSW1nOC5hbHQgPSBcIkZhd2FyZWdoXCI7XG4gICAgbWVudUl0ZW1EaXY4LmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nOCk7XG5cbn07XG5cbmV4cG9ydCB7bWVudUNvbnRlbnRMb2FkZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9pbWFnZXMvYnV0Y2hlcmluZy5wbmdcIjtcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yl9sb2dvLnBuZ1wiXG5pbXBvcnQgeyBtYWluQ29udGVudExvYWRlciwgbWFpbkNvbnRlbnRJbml0aWFsTG9hZGVyIH0gZnJvbSBcIi4uL3NyYy9tYWluLmpzXCI7XG5pbXBvcnQgeyBtZW51Q29udGVudExvYWRlciB9IGZyb20gXCIuLi9zcmMvbWVudS5qc1wiXG5pbXBvcnQgeyBjb250YWN0Q29udGVudExvYWRlciB9IGZyb20gXCIuLi9zcmMvY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgYXR0cmlidXRpb25zQ29udGVudExvYWRlciB9IGZyb20gXCIuLi9zcmMvYXR0cmlidXRpb25zLmpzXCI7XG5cbmNvbnN0IGluZGV4UGFnZUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IFwiTGUgTWUzbGEyXCJcblxuICAgIC8vIENvbnRlbnQgZGl2IGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gYWxsIHRoZSBwYWdlIGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4gICAgLy8gSGVhZGVyIGVsZW1lbnRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIExvZ28gZGl2XG4gICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgICAvLyBMb2dvIGltZyBkaXZcbiAgICBjb25zdCBsb2dvSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvSW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvLWltZ1wiKTtcbiAgICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ29JbWdEaXYpO1xuXG4gICAgLy8gTG9nbyBpbWdcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XG4gICAgbG9nb0ltZy5hbHQgPSBcIkxlIE1lM2xhMiBMb2dvXCI7XG4gICAgbG9nb0ltZ0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuICAgIC8vIExvZ28gdGV4dCBkaXZcbiAgICBjb25zdCBsb2dvVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb1RleHREaXYuY2xhc3NMaXN0LmFkZChcImxvZ28tdGV4dFwiKTtcbiAgICBsb2dvVGV4dERpdi50ZXh0Q29udGVudCA9IFwiTEUgTUUzTEEyXCJcbiAgICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ29UZXh0RGl2KTtcblxuICAgIC8vIE1lbnUgZGl2XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgICAvLyBNZW51IEhvbWUgYVxuICAgIGNvbnN0IG1lbnVIb21lQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG1lbnVIb21lQS5jbGFzc0xpc3QuYWRkKFwibWVudS1ob21lXCIpO1xuICAgIG1lbnVIb21lQS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICAgIG1lbnVIb21lQS5ocmVmID0gXCJqYXZhc2NyaXB0Om51bGxcIjtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVIb21lQSk7XG4gICAgbWVudUhvbWVBLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYWluQ29udGVudExvYWRlcilcblxuICAgIC8vIE1lbnUgTWVudSBhXG4gICAgY29uc3QgbWVudU1lbnVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbWVudU1lbnVBLmNsYXNzTGlzdC5hZGQoXCJtZW51LW1lbnVcIik7XG4gICAgbWVudU1lbnVBLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgbWVudU1lbnVBLmhyZWYgPSBcImphdmFzY3JpcHQ6bnVsbFwiO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudU1lbnVBKTtcbiAgICBtZW51TWVudUEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVDb250ZW50TG9hZGVyKVxuXG4gICAgLy8gTWVudSBDb250YWN0IGFcbiAgICBjb25zdCBtZW51Q29udGFjdEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51Q29udGFjdEEuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFjdFwiKTtcbiAgICBtZW51Q29udGFjdEEudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcbiAgICBtZW51Q29udGFjdEEuaHJlZiA9IFwiamF2YXNjcmlwdDpudWxsXCI7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51Q29udGFjdEEpO1xuICAgIG1lbnVDb250YWN0QS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdENvbnRlbnRMb2FkZXIpXG5cbiAgICBtYWluQ29udGVudEluaXRpYWxMb2FkZXIoKTtcblxuICAgIC8vIEZvb3RlciBlbGVtZW50XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAvLyBGb290ZXIgdGV4dCBlbGVtZW50XG4gICAgY29uc3QgZm9vdGVyVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyVGV4dERpdi50ZXh0Q29udGVudCA9IFwiVEhFIE9ESU4gUFJPSkVDVCAtIEpPRU1BVFRBUlwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0RGl2KTtcblxuICAgIC8vIEZvb3RlciBhIGVsZW1lbnRcbiAgICBjb25zdCBmb290ZXJBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZm9vdGVyQS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vam9lbWF0dGFyXCI7XG4gICAgZm9vdGVyQS50YXJnZXQgPSBcIl9ibGFua1wiXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckEpO1xuXG4gICAgLy8gRm9vdGVyIGltZyBlbGVtZW50XG4gICAgY29uc3QgZm9vdGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb290ZXJJbWcuc3JjID0gZ2l0aHViO1xuICAgIGZvb3RlckEuYXBwZW5kQ2hpbGQoZm9vdGVySW1nKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uc0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhdHRyaWJ1dGlvbnNBLnRleHRDb250ZW50ID0gXCJBVFRSSUJVVElPTlNcIjtcbiAgICBhdHRyaWJ1dGlvbnNBLmhyZWYgPSBcImphdmFzY3JpcHQ6bnVsbFwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbnNBKTtcbiAgICBhdHRyaWJ1dGlvbnNBLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRyaWJ1dGlvbnNDb250ZW50TG9hZGVyKVxuXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9