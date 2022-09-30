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
function attributionsContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("attribution-display");

    // Main attribution image
    const mainAttributionImg = document.createElement("img");
    mainAttributionImg.classList.add("main-attribution-img");
    mainAttributionImg.src = "../src/images/rodney_scott.jpg";
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
    menuItemImg1.src = "../src/images/location.png";
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
function mainContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("main-display");

    // Main image
    const mainImg = document.createElement("img");
    mainImg.classList.add("main-img");
    mainImg.src = "../src/images/bbq-dish.jpg";
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
/* harmony import */ var _src_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/main.js */ "./src/main.js");
/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/menu.js */ "./src/menu.js");
/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/contact.js */ "./src/contact.js");
/* harmony import */ var _src_attributions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/attributions.js */ "./src/attributions.js");






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
    logoImg.src = "../src/images/butchering.png";
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
    menuHomeA.addEventListener("click", _src_main_js__WEBPACK_IMPORTED_MODULE_1__.mainContentLoader)

    // Menu Menu a
    const menuMenuA = document.createElement("a");
    menuMenuA.classList.add("menu-menu");
    menuMenuA.textContent = "MENU";
    menuMenuA.href = "javascript:null";
    menuDiv.appendChild(menuMenuA);
    menuMenuA.addEventListener("click", _src_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuContentLoader)

    // Menu Contact a
    const menuContactA = document.createElement("a");
    menuContactA.classList.add("menu-contact");
    menuContactA.textContent = "CONTACT";
    menuContactA.href = "javascript:null";
    menuDiv.appendChild(menuContactA);
    menuContactA.addEventListener("click", _src_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactContentLoader)

    ;(0,_src_main_js__WEBPACK_IMPORTED_MODULE_1__.mainContentInitialLoader)();

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
    footerImg.src = "../src/images/github_logo.png";
    footerA.appendChild(footerImg);

    const attributionsA = document.createElement("a");
    attributionsA.textContent = "ATTRIBUTIONS";
    attributionsA.href = "javascript:null";
    footer.appendChild(attributionsA);
    attributionsA.addEventListener("click", _src_attributions_js__WEBPACK_IMPORTED_MODULE_4__.attributionsContentLoader)

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFNQUFxTTtBQUNyTTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNtRDtBQUMzQjtBQUNPO0FBQ1U7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkRBQWlCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkRBQWlCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUVBQW9COztBQUUvRCxJQUFJLHVFQUF3Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkVBQXlCOztBQUVyRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hdHRyaWJ1dGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL0Jsb29kbHVzdEV4cGFuZGVkLUFvNW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9SZWRjYXAudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJsb29kbHVzdFxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmVkY2FwXFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItaGVhZGVyOiAjZmZiYzBjO1xcbiAgICAtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQ6ICNmNTQyMzU7XFxuICAgIC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dC1ob3ZlcjogI2JmMWMxZDtcXG4gICAgLS1jb2xvci1tYWluOiByZWQ7XFxuICAgIC0tY29sb3ItZm9vdGVyOiBibHVlO1xcbiAgICAtLWZvbnQtbWFpbjogXFxcIkJsb29kbHVzdFxcXCI7XFxuICAgIC0tZm9udC1tYWluLWFsdDogXFxcIlJlZGNhcFxcXCI7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0LWhvdmVyKTtcXG59XFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMTA4MHB4KTtcXG5cXG4gICAgcGFkZGluZzogMCAxcmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyIDRyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28gLmxvZ28taW1nIGltZyB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIC5sb2dvLXRleHQge1xcblxcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmhlYWRlciAubWVudSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4jbWFpbi5tYWluLWRpc3BsYXksIFxcbiNtYWluLmNvbnRhY3QtZGlzcGxheSxcXG4jbWFpbi5hdHRyaWJ1dGlvbi1kaXNwbGF5IHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWFpbi1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIC5hbHQtZm9udCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4tYWx0KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNtYWluLm1lbnUtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluIC5tZW51LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuNXJlbTtcXG5cXG4gICAgbWF4LXdpZHRoOiBjYWxjKCgxMDgwcHggLSA3cmVtKSAvIDIpIDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluIC5tZW51LWl0ZW0gLmFsdC1mb250IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21haW4gLm1lbnUtaXRlbSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIC5tYWluLWF0dHJpYnV0aW9uLWltZyB7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbiNtYWluIC5hdHRyaWJ1dGlvbiBhIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQWlEO0FBQ3JEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxxQ0FBcUM7O0lBRXJDLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsZUFBZTs7SUFFZixTQUFTO0lBQ1QsVUFBVTs7SUFFVixZQUFZO0lBQ1osV0FBVzs7SUFFWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7O0lBRXpCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG9DQUFvQzs7SUFFcEMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhOztJQUViLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjs7SUFFcEIscUNBQXFDOztJQUVyQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxvb2RsdXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvQmxvb2RsdXN0RXhwYW5kZWQtQW81bS50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmVkY2FwXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvUmVkY2FwLnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItaGVhZGVyOiAjZmZiYzBjO1xcbiAgICAtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQ6ICNmNTQyMzU7XFxuICAgIC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dC1ob3ZlcjogI2JmMWMxZDtcXG4gICAgLS1jb2xvci1tYWluOiByZWQ7XFxuICAgIC0tY29sb3ItZm9vdGVyOiBibHVlO1xcbiAgICAtLWZvbnQtbWFpbjogXFxcIkJsb29kbHVzdFxcXCI7XFxuICAgIC0tZm9udC1tYWluLWFsdDogXFxcIlJlZGNhcFxcXCI7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXIpO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0LWhvdmVyKTtcXG59XFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMTA4MHB4KTtcXG5cXG4gICAgcGFkZGluZzogMCAxcmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyIDRyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oZWFkZXItbG9nby10ZXh0KTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28gLmxvZ28taW1nIGltZyB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIC5sb2dvLXRleHQge1xcblxcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmhlYWRlciAubWVudSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4jbWFpbi5tYWluLWRpc3BsYXksIFxcbiNtYWluLmNvbnRhY3QtZGlzcGxheSxcXG4jbWFpbi5hdHRyaWJ1dGlvbi1kaXNwbGF5IHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAubWFpbi1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIC5hbHQtZm9udCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4tYWx0KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNtYWluLm1lbnUtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluIC5tZW51LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWhlYWRlci1sb2dvLXRleHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuNXJlbTtcXG5cXG4gICAgbWF4LXdpZHRoOiBjYWxjKCgxMDgwcHggLSA3cmVtKSAvIDIpIDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluIC5tZW51LWl0ZW0gLmFsdC1mb250IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21haW4gLm1lbnUtaXRlbSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbiNtYWluIC5tYWluLWF0dHJpYnV0aW9uLWltZyB7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbiNtYWluIC5hdHRyaWJ1dGlvbiBhIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGVhZGVyLWxvZ28tdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhdHRyaWJ1dGlvbnNDb250ZW50TG9hZGVyKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgbWFpbkRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvbi1kaXNwbGF5XCIpO1xuXG4gICAgLy8gTWFpbiBhdHRyaWJ1dGlvbiBpbWFnZVxuICAgIGNvbnN0IG1haW5BdHRyaWJ1dGlvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWFpbkF0dHJpYnV0aW9uSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluLWF0dHJpYnV0aW9uLWltZ1wiKTtcbiAgICBtYWluQXR0cmlidXRpb25JbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JvZG5leV9zY290dC5qcGdcIjtcbiAgICBtYWluQXR0cmlidXRpb25JbWcuYWx0ID0gXCJDaGVmIFJvZG5leSBTY290dCBCQlFpbmdcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5BdHRyaWJ1dGlvbkltZyk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXYwLmlubmVySFRNTCA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuYWwuY29tL2J1c2luZXNzLzIwMjAvMDQvcm9kbmV5LXNjb3R0LWxpdHRsZS1kb25rZXktdG8tb3Blbi1ob21ld29vZC1sb2NhdGlvbnMtaW4tMjAyMS5odG1sXCI+QXR0cmlidXRpb24gcGhvdG8gQ2hlZiBSb2RuZXkgU2NvdHQgYnkgQUk8L2E+JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2MCk7XG4gICAgXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjEuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MS5pbm5lckhUTUwgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2J1dGNoZXItc2hvcFwiPkxvZ28gY3JlYXRlZCBieSBTbWFzaGljb25zIC0gRmxhdGljb248L2E+JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2MSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2Mi5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXYyLmlubmVySFRNTCA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9yb2xseXdvb2RiYnEuY29tL1wiPk1haW4gcGhvdG8gYnkgUm9sbHl3b29kIEJCUTwvYT4nO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYyKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXYzLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjMuaW5uZXJIVE1MID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LnN0aWxlc3N3aXRjaGJicS5jb20vYWJvdXRcIj5NYWluIHRleHQgaW5zcGlyZWQgYnkgU3RpbGVzIFN3aXRjaCBCQlE8L2E+JztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2Myk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2NC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXY0LmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cub2tsYWhvbWFqb2VzLmNvbS9yZWNpcGVzL3Ntb2tlZC1iZWVmLWJyaXNrZXQtd2l0aC10ZXhhcy1ydWJcIj5Ccmlza2V0IHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY0KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXY1LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjUuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLXBvcmstcmlic1wiPlBvcmsgcmlicyByZWNpcGUgYnkgT2tsYWhvbWEgSm9lJ3M8L2E+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2NSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2Ni5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XG4gICAgYXR0cmlidXRpb25EaXY2LmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cub2tsYWhvbWFqb2VzLmNvbS9yZWNpcGVzL3Ntb2tlZC1zcmlyYWNoYS1wdWxsZWQtcG9yay1zYW5kd2ljaFwiPlB1bGxlZCBwb3JrIHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY2KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXR0cmlidXRpb25EaXY3LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjcuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLWJyZWFrZmFzdC1zYXVzYWdlXCI+U21va2VkIHNhdXNhZ2UgcmVjaXBlIGJ5IE9rbGFob21hIEpvZSdzPC9hPmA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkRpdjcpO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXY4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjguY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2OC5pbm5lckhUTUwgPSBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rbGFob21ham9lcy5jb20vcmVjaXBlcy9zbW9rZWQtYmVlZi1zaG9ydC1yaWJzXCI+QmVlZiBzaG9ydCByaWJzIHJlY2lwZSBieSBPa2xhaG9tYSBKb2UnczwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXY4KTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uRGl2OT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjkuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2OS5pbm5lckhUTUwgPSBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9rbGFob21ham9lcy5jb20vcmVjaXBlcy9zbW9rZWQtdHVya2V5LWJyZWFzdHNcIj5TbW9rZWQgdHVya2V5IGJyZWFzdCByZWNpcGUgYnkgT2tsYWhvbWEgSm9lJ3M8L2E+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2OSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbkRpdjEwPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MTAuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xuICAgIGF0dHJpYnV0aW9uRGl2MTAuaW5uZXJIVE1MID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5va2xhaG9tYWpvZXMuY29tL3JlY2lwZXMvc21va2VkLWNoaWNrZW4td2luZ3NcIj5TbW9rZWQgY2hpY2tlbiB3aW5ncyByZWNpcGUgYnkgT2tsYWhvbWEgSm9lJ3M8L2E+YDtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uRGl2MTApO1xuXG4gICAgY29uc3QgYXR0cmlidXRpb25EaXYxMT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjExLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcbiAgICBhdHRyaWJ1dGlvbkRpdjExLmlubmVySFRNTCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cudGFzdGVvZmJlaXJ1dC5jb20vc3R1ZmZlZC1zaGVlcC1pbnRlc3RpbmVzLWZhd2FyZWdoL1wiPkxlIE0yM2xhMiBpbnNwaXJlZCBieSBmYXdhcmVnaCAtIFRhc3RlIG9mIEJlaXJ1dDwvYT5gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25EaXYxMSk7XG5cbn07XG5cbmV4cG9ydCB7YXR0cmlidXRpb25zQ29udGVudExvYWRlcn0iLCJmdW5jdGlvbiBjb250YWN0Q29udGVudExvYWRlcigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2MSk7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGUxLnRleHRDb250ZW50ID0gXCJUTyBDT05UQUNUIE9SIFZJU0lUIExFIE1FM0xBMlwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlMSk7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0MC5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0MC50ZXh0Q29udGVudCA9IFwiRU1BSUw6IGVhdEBsZW1lM2xhMi5jb21cIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0MCk7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0MS5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0MS50ZXh0Q29udGVudCA9IFwiUEhPTkU6IDQxNiA1NTUgNjY3N1wiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQxKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQyLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQyLnRleHRDb250ZW50ID0gXCJBRERSRVNTOiA2OTkgU3QgQ2xhaXIgQXZlIFcsIFRvcm9udG8sIE9OIE02QyAxQjJcIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Mik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzEuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2xvY2F0aW9uLnBuZ1wiO1xuICAgIG1lbnVJdGVtSW1nMS5hbHQgPSBcIk1hcCBMb2NhdGlvblwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbUltZzEpO1xuICAgIFxufTtcblxuZXhwb3J0IHtjb250YWN0Q29udGVudExvYWRlcn0iLCJmdW5jdGlvbiBtYWluQ29udGVudExvYWRlcigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1kaXNwbGF5XCIpO1xuXG4gICAgLy8gTWFpbiBpbWFnZVxuICAgIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1haW5JbWcuY2xhc3NMaXN0LmFkZChcIm1haW4taW1nXCIpO1xuICAgIG1haW5JbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2JicS1kaXNoLmpwZ1wiO1xuICAgIG1haW5JbWcuYWx0ID0gXCJNYWluIEltYWdlXCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluSW1nKTtcblxuICAgIC8vIFdlbGNvbWUgZGl2XG4gICAgY29uc3QgbWFpbldlbGNvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5XZWxjb21lRGl2LnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIExlIE1lM2xhMiBSZXN0YXVyYW50XCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluV2VsY29tZURpdik7XG5cbiAgICAvLyBUZXh0IGRpdiAxXG4gICAgY29uc3QgbWFpblRleHREaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluVGV4dERpdjEuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1haW5UZXh0RGl2MS50ZXh0Q29udGVudCA9IFwiTGUgTWUzbGEyIEJCUSBSZXN0YXVyYW50LCBuYW1lZCBhZnRlciB0aGUgaGlzdG9yaWMgUy5MLkNoaSBza2V0Y2ggTGUgTWUzbGEyLCBNZXRuLCBpcyBhbHNvIG5hbWVzYWtlIG9mIHRoZSBlcGljIG1haW4gZGlzaC4gVGhlIGluc3BpcmF0aW9uIGZvciBMZSBNZTNsYTIgaXMgZGVyaXZlZCBmcm9tIHRoZSBUZXhhcyBCQlEgTGVnZW5kcy4gTGUgTWUzbGEyIHBsYXlzIHRyaWJ1dGUgdG8gdGhlc2UgVGV4YXMg4oCcZ3JlYXRz4oCdIGJ5IGFzc2VtYmxpbmcgYSBwYXNzaW9uYXRlIHRlYW0gd2l0aCBkZWNhZGVzIG9mIGluZHVzdHJ5IGV4cGVyaWVuY2UuIExlIE1lM2xhMiBpcyBmb2N1c2VkIG9uIHNldHRpbmcgdGhlIGJhciBoaWdoIHdpdGggdGhlIOKAnG5vIGNvcm5lcnMgY3V04oCdIG1ldGhvZHMgb2YgcHJlcGFyYXRpb24gYW5kIHNlbGVjdGlvbiBvZiBxdWFsaXR5IHByb2R1Y3QuXCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluVGV4dERpdjEpO1xuXG4gICAgLy8gVGV4dCBkaXYgMlxuICAgIGNvbnN0IG1haW5UZXh0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblRleHREaXYyLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtYWluVGV4dERpdjIudGV4dENvbnRlbnQgPSBcIkxlIE1lM2xhMiwgc2V0IGluIHRoZSBoaXN0b3JpYyBhcnQgZGVjbyAxOTUwcyBTdG9yaXVtIFNob3BwaW5nIENlbnRlciwgaXMgZGVzaWduZWQgdG8gaG9zdCBhIG5vc3RhbGdpYyBhdG1vc3BoZXJlIHRoYXQgdHJhbnNjZW5kcyBiYWNrIHRvIHRoZSBvbGQgbmVpZ2hib3Job29kIHN0eWxlIGVhdGVyeSB3aGljaCBjb21iaW5lcyBleGNlcHRpb25hbCBUZXhhcyBCQlEsIGdyZWF0IGF0bW9zcGhlcmUsIGFuZCBjb2xkIFRleGFzIGNyYWZ0IGJyZXdzLiBGVU4gRkFDVDogVGhlIFN0b3JpdW0gU2hvcHBpbmcgQ2VudGVyLCBvbmUgb2YgdGhlIOKAnG9sZGVzdOKAnSBzaG9wcGluZyBjZW50ZXJzIGluIGNlbnRyYWwgTWV0biwgd2FzIGFsc28gdGhlIGZpbG0gcHJvZHVjdGlvbiBodWIgZm9yIHRoZSBsYXRlIDE5OTBzIGZpbG0g4oCcUy5MLiBGaWxt4oCdIHN0YXJyaW5nIE5haW0gSGFsYXdpLiBMZSBNZTNsYTIgbGVhc2Ugc3BhY2UgaXMgdGhlIGZhbWVkIOKAnFBhcmFkaXNl4oCdIG9yaWdpbnMgaGFsbCBmaWxtZWQgaW4gdGhlIG1vdmllLiBUaGUgTGUgTWUzbGEyIGNyZXcgaXMgZXhjaXRlZCBhYm91dCBicmVhdGhpbmcgbmV3IGxpZmUgaW50byBhIGhpc3RvcmljIHBhcnQgb2YgY2VudHJhbCBNZXRuIGFuZCByZXZpdGFsaXppbmcgdGhlIGNvbW11bml0eSB0aGF0IHN1cnJvdW5kcyB0aGVtLlwiO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpblRleHREaXYyKTtcbn07XG5cbmZ1bmN0aW9uIG1haW5Db250ZW50SW5pdGlhbExvYWRlcigpIHtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBNYWluIGRpdiBlbGVtZW50XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIG1haW5Db250ZW50TG9hZGVyKCk7XG5cbn07XG5cbmV4cG9ydCB7bWFpbkNvbnRlbnRMb2FkZXIsIG1haW5Db250ZW50SW5pdGlhbExvYWRlcn0iLCJmdW5jdGlvbiBtZW51Q29udGVudExvYWRlcigpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW5EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1kaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2MSk7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGUxLnRleHRDb250ZW50ID0gXCJTTU9LRUQgQkVFRiBCUklTS0VUXCI7XG4gICAgbWVudUl0ZW1EaXYxLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUxKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQxLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQxLnRleHRDb250ZW50ID0gXCJQYXByaWthIGFuZCBjYXllbm5lIHBvd2RlciBnaXZlIHRoaXMgdGVuZGVyIFNtb2tlZCBCZWVmIEJyaXNrZXQgd2l0aCBhIFRleGFzIFJ1YiBpdHMgc2lnbmF0dXJlIGZsYXZvci4gV2hlbiB0aGUgc3VuIGdvZXMgZG93biwgY2hvdyBkb3duIG9uIHNvbWUgbWVsdC1pbi15b3VyLW1vdXRoIGJyaXNrZXQgdGhhdOKAmXMgd2VsbCB3b3J0aCB0aGUgd2FpdC4gQmVlZiBicmlza2V0IGlzIG9uZSBvZiB0aGUgbmluZSBiZWVmIHByaW1hbCBjdXRzIHdoaWNoIGluY2x1ZGVzIHRoZSBzdXBlcmZpY2lhbCBhbmQgZGVlcCBwZWN0b3JhbHMuIFRvIHRlbmRlcml6ZSBhbGwgb2YgdGhhdCBjb25uZWN0aXZlIHRpc3N1ZSwgYmVlZiBicmlza2V0IG5lZWRzIHRvIGNvb2sgbG93IGFuZCBzbG93IGZvciBhIGxvbmcgdGltZS5cIjtcbiAgICBtZW51SXRlbURpdjEuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0MSk7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzEuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2JyaXNrZXQuanBnXCI7XG4gICAgbWVudUl0ZW1JbWcxLmFsdCA9IFwiQnJpc2tldFwiO1xuICAgIG1lbnVJdGVtRGl2MS5hcHBlbmRDaGlsZChtZW51SXRlbUltZzEpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2Mik7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGUyLnRleHRDb250ZW50ID0gXCJTTU9LRUQgUE9SSyBSSUJTXCI7XG4gICAgbWVudUl0ZW1EaXYyLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUyKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQyLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQyLnRleHRDb250ZW50ID0gYFRoZXNlIFNtb2tlZCBQb3JrIFJpYnMgYXJlIG9va2VkIGxvdyBhbmQgc2xvdyBmb3Igc29tZSBvZiB0aGUganVpY2llc3QsIHRhc3RpZXN0IGJhYnkgYmFjayByaWJzIHlvdeKAmXZlIGV2ZXIgZWF0ZW4uIFJ1YmJlZCwgc2F1Y2VkIGFuZCBzbW9rZWQsIHRoaXMgcmVjaXBlIGZvciBzbW9raW5nIHJpYnMgZGVsaXZlcnMgdGVuZGVyIGFuZCBkZWxpY2lvdXMgc21va2VkIHJpYnMgc3RyYWlnaHQgdG8geW91ciBzbW9rZXIuIFdoZW4gYnV5aW5nIHJpYnMsIGxvb2sgZm9yIGEgZnVsbCByYWNrIHdpdGggZXZlbiB0aGlja25lc3MgdGhyb3VnaG91dC4gSXQgd29u4oCZdCBjb29rIGV2ZW5seSBpZiB0aGUgcmFjayBpcyB0aGluIG9uIG9uZSBzaWRlIGFuZCB0aGljayBvbiB0aGUgb3RoZXIuYDtcbiAgICBtZW51SXRlbURpdjIuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Mik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzIuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3Bvcmtfcmlicy5qcGdcIjtcbiAgICBtZW51SXRlbUltZzIuYWx0ID0gXCJQb3JrIFJpYnNcIjtcbiAgICBtZW51SXRlbURpdjIuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcyKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXYzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjMpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlMy50ZXh0Q29udGVudCA9IFwiU01PS0VEIFNSSVJBQ0hBIFBVTExFRCBQT1JLXCI7XG4gICAgbWVudUl0ZW1EaXYzLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUzKTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQzLmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQzLnRleHRDb250ZW50ID0gYElmIHlvdSBwcmVmZXIgcG9yayB0aGF0IGhhcyBhIGxpdHRsZSBleHRyYSBiaXRlIHRvIGl0LCB5b3XigJlyZSBnb25uYSBsb3ZlIHRoaXMgU21va2VkIFNyaXJhY2hhIFB1bGxlZCBQb3JrIFNhbmR3aWNoLiBIb21lbWFkZSBzcmlyYWNoYSBiYXJiZWN1ZSBzYXVjZSBtYWtlcyB0aGUgc2hyZWRkZWQgbWVhdCBmcm9tIHRoZSBwb3JrIHNob3VsZGVyIHRhbmd5LXN3ZWV0IHdpdGggYSBraWNrIG9mIGdhcmxpYyBmb3IgaXJyZXNpc3RpYmxlIGJvbGQsIHNtb2t5IGFuZCBzcGljeSBmbGF2b3IuIFNyaXJhY2hhIGlzIGEgVGhhaSBob3Qgc2F1Y2UgbWFkZSB3aXRoIGNoaWxpIHBlcHBlcnMsIHN1Z2FyLCBnYXJsaWMsIGRpc3RpbGxlZCB2aW5lZ2FyIGFuZCBzYWx0LiBJdOKAmXMgbmFtZWQgYWZ0ZXIgdGhlIGNpdHkgaW4gd2hpY2ggaXQgd2FzIGZpcnN0IG1hZGUgb3ZlciA4MCB5ZWFycyBhZ28sIFNpIFJhY2hhLCBhbiBlYXN0ZXJuIGNpdHkgb24gdGhlIGNvYXN0IG9mIFRoYWlsYW5kLmA7XG4gICAgbWVudUl0ZW1EaXYzLmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDMpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWczLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9wdWxsZWRfcG9yay5qcGdcIjtcbiAgICBtZW51SXRlbUltZzMuYWx0ID0gXCJQdWxsZWQgUG9ya1wiO1xuICAgIG1lbnVJdGVtRGl2My5hcHBlbmRDaGlsZChtZW51SXRlbUltZzMpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2NCk7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGU0LnRleHRDb250ZW50ID0gXCJTTU9LRUQgU0FVU0FHRVwiO1xuICAgIG1lbnVJdGVtRGl2NC5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlNCk7XG4gICAgY29uc3QgbWVudUl0ZW1UZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1UZXh0NC5jbGFzc0xpc3QuYWRkKFwiYWx0LWZvbnRcIik7XG4gICAgbWVudUl0ZW1UZXh0NC50ZXh0Q29udGVudCA9IGBUaGlzIFNtb2tlZCBCcmVha2Zhc3QgU2F1c2FnZSByZWNpcGUgY29tYmluZXMgZ3JvdW5kIHBvcmsgd2l0aCBtYXBsZSBzeXJ1cCBhbmQgaG90ICYgc2F2b3J5IHNwaWNlcyB0byBtYWtlIHNhdXNhZ2UgbGlua3Mgb3IgcGF0dGllcyBvbiBhIHBlbGxldCBncmlsbC4gV2hlbiB5b3UgbWFrZSBzYXVzYWdlIGZyb20gc2NyYXRjaCwgaXQgdGFzdGVzIGJldHRlciwgYW5kIHlvdSBrbm93IGV4YWN0bHkgd2hhdOKAmXMgaW4gaXQuIFlvdSBqdXN0IGNhbuKAmXQgYmVhdCB0aGUgcXVhbGl0eSBhbmQgZmxhdm9yIG9mIGhvbWVtYWRlIHNhdXNhZ2UsIGVzcGVjaWFsbHkgd2hlbiBpdOKAmXMgaW5mdXNlZCB3aXRoIGFwcGxlIHdvb2QtZmlyZWQgZmxhdm9yLiBBYm91dCB0aGUgQ3V0OiBHcm91bmQgcG9yayBpcyB1c3VhbGx5IG1hZGUgZnJvbSBwb3JrIHNob3VsZGVyIGFuZCBzb21ldGltZXMgaW5jbHVkZXMgdHJpbW1lZCBlbmRzIG9mIHRoZSBsb2luLiBJdCB1c3VhbGx5IGNvbnRhaW5zIGFib3V0IDE1IHBlcmNlbnQgZmF0LmA7XG4gICAgbWVudUl0ZW1EaXY0LmFwcGVuZENoaWxkKG1lbnVJdGVtVGV4dDQpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUl0ZW1JbWc0LnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9icmVha2Zhc3Rfc2F1c2FnZS5qcGdcIjtcbiAgICBtZW51SXRlbUltZzQuYWx0ID0gXCJTbW9rZWQgQnJlYWtmYXN0IFNhdXNhZ2VcIjtcbiAgICBtZW51SXRlbURpdjQuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc0KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXY1LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjUpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlNS50ZXh0Q29udGVudCA9IFwiQkVFRiBTSE9SVCBSSUJTXCI7XG4gICAgbWVudUl0ZW1EaXY1LmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGU1KTtcbiAgICBjb25zdCBtZW51SXRlbVRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRleHQ1LmNsYXNzTGlzdC5hZGQoXCJhbHQtZm9udFwiKTtcbiAgICBtZW51SXRlbVRleHQ1LnRleHRDb250ZW50ID0gYFRoZXJl4oCZcyBub3RoaW5nIHF1aXRlIGxpa2UgU21va2VkIEJlZWYgU2hvcnQgUmlicyBzZWFzb25lZCB3aXRoIExvdWlzaWFuYSBob3Qgc2F1Y2UuIEl04oCZcyBhIHdvbmRlcmZ1bGx5IHByaW1hbCBkaXNoIGFuZCBvbmUgb2YgdGhlIGVhc2llc3QgbWVhdHMgdG8gc21va2UuIFNob3J0IHJpYnMgYXJlIGxvYWRlZCB3aXRoIG1lYXQgYW5kIGN1dCBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHN0ZWVy4oCZcyByaWJzIGFib3ZlIHRoZSBzaG9ydCBwbGF0ZS4gQW5kIGJlc3Qgb2YgYWxsLCB5b3XigJlyZSBsb29raW5nIGF0IGEgcmVsYXhpbmcgYWxsLWRheSBzbW9rZSB0byB0dXJuIHRoZXNlIHJpYnMgaW50byBhIHRlbmRlciwgdGFzdHkgbWVhbC5gO1xuICAgIG1lbnVJdGVtRGl2NS5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQ1KTtcbiAgICBjb25zdCBtZW51SXRlbUltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG1lbnVJdGVtSW1nNS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvYmVlZl9zaG9ydF9yaWJzLmpwZ1wiO1xuICAgIG1lbnVJdGVtSW1nNS5hbHQgPSBcIkJlZWYgU2hvcnQgUmlic1wiO1xuICAgIG1lbnVJdGVtRGl2NS5hcHBlbmRDaGlsZChtZW51SXRlbUltZzUpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXY2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdjYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2Nik7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGl0bGU2LnRleHRDb250ZW50ID0gXCJTTU9LRUQgVFVSS0VZIEJSRUFTVFNcIjtcbiAgICBtZW51SXRlbURpdjYuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZTYpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDYuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDYudGV4dENvbnRlbnQgPSBgQSBob2xpZGF5IGNsYXNzaWMgYW55dGltZSBvZiB0aGUgeWVhciEgQSB3aG9sZSBib25lbGVzcyBicmluZWQgYW5kIHNtb2tlZCB0dXJrZXkgYnJlYXN0IGFuZCBsYWdlciBncmF2eSBtYWRlIHdpdGggdGhlIGRyaXBwaW5ncywgd2l0aCBhIGNsYXNzaWMgc3R1ZmZpbmcgYW5kIGJvdHRsZSBvZiBDYXJib27igJlzIFNvdXRoIENhcm9saW5hIE11c3RhcmQgU2F1Y2UuYDtcbiAgICBtZW51SXRlbURpdjYuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Nik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWc2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzYuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3Ntb2tlZF90dXJrZXlfYnJlYXN0cy5qcGdcIjtcbiAgICBtZW51SXRlbUltZzYuYWx0ID0gXCJTbW9rZWQgVHVya2V5IEJyZWFzdHNcIjtcbiAgICBtZW51SXRlbURpdjYuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc2KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXY3LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjcpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGU3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlNy50ZXh0Q29udGVudCA9IFwiU01PS0VEIENISUNLRU4gV0lOR1NcIjtcbiAgICBtZW51SXRlbURpdjcuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZTcpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDcuY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDcudGV4dENvbnRlbnQgPSBgQSBkcnkgcnViIHdpdGggcGFwcmlrYSwgY2hpbGkgcG93ZGVyIGFuZCBicm93biBzdWdhciBnaXZlcyB0aGVzZSBTbW9rZWQgQ2hpY2tlbiBXaW5ncyBhIHN3ZWV0IGFuZCBzcGljeSBzdGFydC4gU2xvdyBzbW9raW5nIG1ha2VzIHRoZW0gdGVuZGVyIG9uIHRoZSBpbnNpZGUsIGNyaXNweSBvbiB0aGUgb3V0c2lkZSBhbmQgbG9hZGVkIHdpdGggd29vZC1maXJlZCBmbGF2b3IuIEFuZCB0aGUgc3dlZXQgYW5kIHRhbmd5IEhvbmV5IEJyb3duIEJlZXIgQkJRIFNhdWNlIGJyaW5ncyBpdCBob21lIHdpdGggYSBsaXR0bGUgYWRkZWQgY2hpbGkgcG93ZGVyIGZvciBnb29kIG1lYXN1cmUuIFdlIG1hZGUgdGhpcyByZWNpcGUgb24gdGhlIEhpZ2hsYW5kIE9mZnNldCBTbW9rZXIsIGJ1dCB5b3UgY2FuIG1ha2UgaXQgb24geW91ciBzbW9rZXIuYDtcbiAgICBtZW51SXRlbURpdjcuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0Nyk7XG4gICAgY29uc3QgbWVudUl0ZW1JbWc3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2NoaWNrZW5fd2luZ3MuanBnXCI7XG4gICAgbWVudUl0ZW1JbWc3LmFsdCA9IFwiU21va2VkIENoaWNrZW4gV2luZ3NcIjtcbiAgICBtZW51SXRlbURpdjcuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWc3KTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1EaXY4LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtZW51SXRlbURpdjgpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGU4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbVRpdGxlOC50ZXh0Q29udGVudCA9IFwiTEUgTUUzTEEyIEZXRVJJR0hcIjtcbiAgICBtZW51SXRlbURpdjguYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZTgpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGV4dDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtVGV4dDguY2xhc3NMaXN0LmFkZChcImFsdC1mb250XCIpO1xuICAgIG1lbnVJdGVtVGV4dDgudGV4dENvbnRlbnQgPSBgQSBtZWRpdGVycmFuZWFuIGN1bHR1cmUgdGhhdCBtYWlubHkgcmVsaWVzIG9uIHdob2xlLWdyYWlucyBhbmQgdmVnZXRhYmxlcyBpcyBnb2luZyB0byB0YWtlIGZ1bGwgYWR2YW50YWdlIG9mIHRoZSBzcGVjaWFsICBkYXkgd2hlbiBhIGxhbWIgaXMgYXZhaWxhYmxlIHRvIGZlYXN0IG9uOyB0aHVzbHksIGV2ZXJ5IHBhcnQgb2YgdGhlIGFuaW1hbCBpcyBjb29rZWQgaW4gb25lIHdheSBvciBhbm90aGVyIGFuZCBpbnRlc3RpbmVzIGFyZSBubyBleGNlcHRpb24uIEhlcmUsIHRoZXkgYXJlIHRob3JvdWdobHkgY2xlYW5lZCB3aXRoIGxlbW9uLCBjb2Fyc2Ugc2FsdCBhbmQgdmluZWdhciBhbmQgc3R1ZmZlZCB3aXRoIG1pbmNlZCBtZWF0LCByaWNlIGFuZCBzcGljZXMuIFRoaXMgaXMgYW4gZXhxdWlzaXRlIGRpc2ggYW5kIG9uZSBvZiB0aGUgbW9zdCB0cmFkaXRpb25hbCBpbiBMZWJhbmVzZSBjdWlzaW5lYDtcbiAgICBtZW51SXRlbURpdjguYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0OCk7XG4gICAgY29uc3QgbWVudUl0ZW1JbWc4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SXRlbUltZzguc3JjID0gXCIuLi9zcmMvaW1hZ2VzL2Z3ZXJpZ2guanBlZ1wiO1xuICAgIG1lbnVJdGVtSW1nOC5hbHQgPSBcIkZhd2FyZWdoXCI7XG4gICAgbWVudUl0ZW1EaXY4LmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nOCk7XG5cbn07XG5cbmV4cG9ydCB7bWVudUNvbnRlbnRMb2FkZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBtYWluQ29udGVudExvYWRlciwgbWFpbkNvbnRlbnRJbml0aWFsTG9hZGVyIH0gZnJvbSBcIi4uL3NyYy9tYWluLmpzXCI7XG5pbXBvcnQgeyBtZW51Q29udGVudExvYWRlciB9IGZyb20gXCIuLi9zcmMvbWVudS5qc1wiXG5pbXBvcnQgeyBjb250YWN0Q29udGVudExvYWRlciB9IGZyb20gXCIuLi9zcmMvY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgYXR0cmlidXRpb25zQ29udGVudExvYWRlciB9IGZyb20gXCIuLi9zcmMvYXR0cmlidXRpb25zLmpzXCI7XG5cbmNvbnN0IGluZGV4UGFnZUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IFwiTGUgTWUzbGEyXCJcblxuICAgIC8vIENvbnRlbnQgZGl2IGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gYWxsIHRoZSBwYWdlIGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4gICAgLy8gSGVhZGVyIGVsZW1lbnRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIExvZ28gZGl2XG4gICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgICAvLyBMb2dvIGltZyBkaXZcbiAgICBjb25zdCBsb2dvSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvSW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvLWltZ1wiKTtcbiAgICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ29JbWdEaXYpO1xuXG4gICAgLy8gTG9nbyBpbWdcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvSW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9idXRjaGVyaW5nLnBuZ1wiO1xuICAgIGxvZ29JbWcuYWx0ID0gXCJMZSBNZTNsYTIgTG9nb1wiO1xuICAgIGxvZ29JbWdEaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbiAgICAvLyBMb2dvIHRleHQgZGl2XG4gICAgY29uc3QgbG9nb1RleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29UZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvLXRleHRcIik7XG4gICAgbG9nb1RleHREaXYudGV4dENvbnRlbnQgPSBcIkxFIE1FM0xBMlwiXG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvVGV4dERpdik7XG5cbiAgICAvLyBNZW51IGRpdlxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gICAgLy8gTWVudSBIb21lIGFcbiAgICBjb25zdCBtZW51SG9tZUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51SG9tZUEuY2xhc3NMaXN0LmFkZChcIm1lbnUtaG9tZVwiKTtcbiAgICBtZW51SG9tZUEudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgICBtZW51SG9tZUEuaHJlZiA9IFwiamF2YXNjcmlwdDpudWxsXCI7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51SG9tZUEpO1xuICAgIG1lbnVIb21lQS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFpbkNvbnRlbnRMb2FkZXIpXG5cbiAgICAvLyBNZW51IE1lbnUgYVxuICAgIGNvbnN0IG1lbnVNZW51QSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG1lbnVNZW51QS5jbGFzc0xpc3QuYWRkKFwibWVudS1tZW51XCIpO1xuICAgIG1lbnVNZW51QS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICAgIG1lbnVNZW51QS5ocmVmID0gXCJqYXZhc2NyaXB0Om51bGxcIjtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVNZW51QSk7XG4gICAgbWVudU1lbnVBLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51Q29udGVudExvYWRlcilcblxuICAgIC8vIE1lbnUgQ29udGFjdCBhXG4gICAgY29uc3QgbWVudUNvbnRhY3RBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbWVudUNvbnRhY3RBLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhY3RcIik7XG4gICAgbWVudUNvbnRhY3RBLnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XG4gICAgbWVudUNvbnRhY3RBLmhyZWYgPSBcImphdmFzY3JpcHQ6bnVsbFwiO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRhY3RBKTtcbiAgICBtZW51Q29udGFjdEEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RDb250ZW50TG9hZGVyKVxuXG4gICAgbWFpbkNvbnRlbnRJbml0aWFsTG9hZGVyKCk7XG5cbiAgICAvLyBGb290ZXIgZWxlbWVudFxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgLy8gRm9vdGVyIHRleHQgZWxlbWVudFxuICAgIGNvbnN0IGZvb3RlclRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlclRleHREaXYudGV4dENvbnRlbnQgPSBcIlRIRSBPRElOIFBST0pFQ1QgLSBKT0VNQVRUQVJcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dERpdik7XG5cbiAgICAvLyBGb290ZXIgYSBlbGVtZW50XG4gICAgY29uc3QgZm9vdGVyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGZvb3RlckEuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvZW1hdHRhclwiO1xuICAgIGZvb3RlckEudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJBKTtcblxuICAgIC8vIEZvb3RlciBpbWcgZWxlbWVudFxuICAgIGNvbnN0IGZvb3RlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZm9vdGVySW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9naXRodWJfbG9nby5wbmdcIjtcbiAgICBmb290ZXJBLmFwcGVuZENoaWxkKGZvb3RlckltZyk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbnNBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYXR0cmlidXRpb25zQS50ZXh0Q29udGVudCA9IFwiQVRUUklCVVRJT05TXCI7XG4gICAgYXR0cmlidXRpb25zQS5ocmVmID0gXCJqYXZhc2NyaXB0Om51bGxcIjtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25zQSk7XG4gICAgYXR0cmlidXRpb25zQS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0cmlidXRpb25zQ29udGVudExvYWRlcilcblxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==