module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_text_webpack_plugin_4_0_0_beta_0_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_0_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_6_4_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_LatexEditor_vue_vue_type_style_index_0_id_6a7f7038_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_4_0_0_beta_0_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_0_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_6_4_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_LatexEditor_vue_vue_type_style_index_0_id_6a7f7038_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_4_0_0_beta_0_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_0_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_6_4_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_LatexEditor_vue_vue_type_style_index_0_id_6a7f7038_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_extract_text_webpack_plugin_4_0_0_beta_0_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_1_0_0_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_4_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_6_4_node_modules_vue_loader_15_4_2_vue_loader_lib_index_js_vue_loader_options_LatexEditor_vue_vue_type_style_index_0_id_6a7f7038_rel_stylesheet_2Fscss_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.4.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.4.2@vue-loader/lib??vue-loader-options!./src/component/LatexEditor.vue?vue&type=template&id=6a7f7038&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "latex-editor-container" }, [
    _c("div", {
      staticClass: "latex-editer__input",
      style: _vm.customInputStyle,
      attrs: { id: _vm.id }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        class: ["latex-editer__tool-container", _vm.showTool ? "show" : ""],
        style: _vm.customContainerStyle
      },
      [
        _vm.showBar
          ? _c("div", { staticClass: "latex-editer__tool-bar" }, [
              _c(
                "ul",
                { staticClass: "latex-editer__tabs" },
                _vm._l(_vm.mainData, function(tab) {
                  return _c(
                    "li",
                    {
                      key: tab.id,
                      class: [
                        "latex-editer__bar-btn",
                        tab.active ? "active" : ""
                      ],
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.changeTab(tab.id)
                        }
                      }
                    },
                    [_vm._v(_vm._s(tab.id))]
                  )
                })
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "latex-editer__main-wrap" },
          _vm._l(_vm.mainData, function(tab) {
            return _c(
              "div",
              {
                key: "tab" + tab.id,
                class: ["latex-editer__meta-tab", tab.active ? "active" : ""]
              },
              [
                _c(
                  "ul",
                  { staticClass: "latex-editer__meta-wrap" },
                  _vm._l(tab.metas, function(meta) {
                    return _c(
                      "li",
                      {
                        key: meta.key,
                        staticClass: "latex-editer__meta-sel",
                        style: _vm.customSelStyle,
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.metaClick(meta.value.latex)
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "latex-editer__meta-sel-inner",
                            attrs: {
                              id: _vm.id + "_" + tab.id + "_" + meta.key
                            }
                          },
                          [_vm._v(_vm._s(meta.value.icon))]
                        )
                      ]
                    )
                  })
                )
              ]
            )
          })
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/component/LatexEditor.vue?vue&type=template&id=6a7f7038&scoped=true&

// CONCATENATED MODULE: ./src/utils.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var isObject = function isObject(obj) {
  if (Object.prototype.toString.call(obj).toLowerCase() === '[object object]') {
    return true;
  }
  return false;
};

var ObjectToStr = function ObjectToStr(obj) {
  var str = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var k = _ref2[0];
      var v = _ref2[1];

      str += k + ':' + v + ';';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return str;
};

var getUniqArray = function getUniqArray(arr) {
  var res = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var v = _step2.value;

      if (!res.includes(v)) {
        res.push(v);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return res;
};


// CONCATENATED MODULE: ./src/config/data.js
/* harmony default export */ var data = ({
  toolBar: ['tab1', 'tab2'],
  formulas: {
    "fraction": { latex: "\\frac{}{}", tab: 'tab1', icon: '\\frac{□}{□}', style: {
        root: {
          'width': '33px'
        }
      } },
    "sup": { latex: "\\^{}", tab: 'tab1', icon: '□\\^{□}' },
    "sub": { latex: "\\_{}^{}", tab: 'tab1', icon: '□\\_{□}^{□}' },
    "supsub": { latex: "\\_{}", tab: 'tab1', icon: '□\\_{□}' },
    "log": { latex: "\\log_{a}b", tab: 'tab1', icon: '\\log_{a}b', style: {
        root: {
          'font-size': '30%',
          'width': '38px'
        }
      } },
    "lg": { latex: "\\lg{}", tab: 'tab1', icon: '\\lg{□}' },
    "ln": { latex: "\\ln{}", tab: 'tab1', icon: '\\ln{□}' },
    "sqrt": { latex: "\\sqrt{}", tab: 'tab1', icon: '\\sqrt{□}' },
    "nsqrt": { latex: '\\sqrt[]{}', tab: 'tab1', icon: '\\sqrt[]{}' },

    "pi": { latex: "\\pi", tab: 'tab1', icon: '\\pi' },
    "alpha": { latex: "\\alpha", tab: 'tab1', icon: '\\alpha' },
    "beta": { latex: "\\beta", tab: 'tab1', icon: '\\beta' },
    "gamma": { latex: "\\gamma", tab: 'tab1', icon: '\\gamma' },
    "delta": { latex: "\\delta", tab: 'tab1', icon: '\\delta' },
    "theta": { latex: "\\theta", tab: 'tab1', icon: '\\theta' },
    "rho": { latex: "\\rho", tab: 'tab1', icon: '\\rho' },
    "sigma": { latex: "\\sigma", tab: 'tab1', icon: '\\sigma' },
    "varphi": { latex: "\\varphi", tab: 'tab1', icon: '\\varphi' },
    "omega": { latex: "\\omega", tab: 'tab1', icon: '\\omega' },
    "Delta": { latex: "\\Delta", tab: 'tab1', icon: '\\Delta' },
    "epsilon": { latex: "\\epsilon", tab: 'tab1', icon: '\\epsilon' },
    "Omega": { latex: "\\Omega", tab: 'tab1', icon: '\\Omega' },
    "eta": { latex: "\\eta", tab: 'tab1', icon: '\\eta' },
    "lambda": { latex: "\\lambda", tab: 'tab1', icon: '\\lambda' },
    "mu": { latex: "\\mu", tab: 'tab1', icon: '\\mu' },
    "phi": { latex: '\\phi', tab: 'tab1', icon: '\\phi' },
    "xi": { latex: '\\xi', tab: 'tab1', icon: '\\xi' },
    "psi": { latex: '\\xi', tab: 'tab1', icon: '\\psi' },
    "tau": { latex: '\\xi', tab: 'tab1', icon: '\\tau' },

    "e": { latex: "e", tab: 'tab1', icon: 'e' },
    "infty": { latex: '\\infty{}', tab: 'tab1', icon: '\\infty{}' },
    "plus": { latex: '+', tab: 'tab1', icon: '+' },
    "des": { latex: '-', tab: 'tab1', icon: '-' },
    "times": { latex: '\\times', tab: 'tab1', icon: '\\times' },
    "div": { latex: '\\div', tab: 'tab1', icon: '\\div' },
    "pm": { latex: '\\pm', tab: 'tab1', icon: '\\pm' },
    "mp": { latex: '\\mp', tab: 'tab1', icon: '\\mp' },
    "percent": { latex: '\\%', tab: 'tab1', icon: '\\%' },
    "in": { latex: '\\in', tab: 'tab1', icon: '\\in' },
    "notin": { latex: '\\notin', tab: 'tab1', icon: '\\notin' },
    "ni": { latex: '\\ni', tab: 'tab1', icon: '\\ni' },
    "notni": { latex: '\\notni', tab: 'tab1', icon: '\\notni' },
    "subseteq": { latex: '\\subseteq', tab: 'tab1', icon: '\\subseteq' },
    "supseteq": { latex: '\\supseteq', tab: 'tab1', icon: '\\supseteq' },
    "supset": { latex: '\\supset', tab: 'tab1', icon: '\\supset' },
    "subset": { latex: '\\subset', tab: 'tab1', icon: '\\subset' },
    "notsubset": { latex: '\\not\\subset', tab: 'tab1', icon: '\\nsubset' },
    "subsetneqq": { latex: '\\subsetneqq', tab: 'tab1', icon: '\\subsetneqq' },
    "supsetneqq": { latex: '\\supsetneqq', tab: 'tab1', icon: '\\supsetneqq' },
    "neg": { latex: '\\neg', tab: 'tab1', icon: '\\neg' },
    "cap": { latex: '\\cap', tab: 'tab1', icon: '\\cap' },
    "cup": { latex: '\\cup', tab: 'tab1', icon: '\\cup' },
    "wedge": { latex: '\\wedge', tab: 'tab1', icon: '\\wedge' },
    "vee": { latex: '\\vee', tab: 'tab1', icon: '\\vee' },

    "eq": { latex: '=', tab: 'tab1', icon: '=' },
    "neq": { latex: '\\neq', tab: 'tab1', icon: '\\neq' },
    "le": { latex: '\\le', tab: 'tab1', icon: '\\le' },
    "ge": { latex: '\\ge', tab: 'tab1', icon: '\\ge' },
    "lt": { latex: '<', tab: 'tab1', icon: '<' },
    "gt": { latex: '>', tab: 'tab1', icon: '>' },
    "equiv": { latex: '\\equiv', tab: 'tab1', icon: '\\equiv' },
    "approx": { latex: '\\approx', tab: 'tab1', icon: '\\approx' },
    "cong": { latex: '\\cong', tab: 'tab1', icon: '\\cong' },
    "sim": { latex: '\\sim', tab: 'tab1', icon: '\\sim' },
    "dot": { latex: '\\dot{}', tab: 'tab1', icon: '\\dot{□}' },
    "degree": { latex: '\\^{\\circ}', tab: 'tab1', icon: '\\^{\\circ}' },
    "fenhao": { latex: ':', tab: 'tab1', icon: ':' },
    "emptyset": { latex: '\\emptyset', tab: 'tab1', icon: '\\emptyset' },
    "cu": { latex: 'C_U', tab: 'tab1', icon: 'C_U' },
    "c": { latex: 'C_{}', tab: 'tab1', icon: 'C_{□}' },
    "psubsup": { latex: 'P_{}^{}', tab: 'tab1', icon: 'P_{}^{}' },
    "asubsup": { latex: 'A_{}^{}', tab: 'tab1', icon: 'A_{}^{}' },
    "csubsup": { latex: 'C_{}^{}', tab: 'tab1', icon: 'C_{}^{}' },
    "overline": { latex: '\\overline{}', tab: 'tab1', icon: '\\overline{□}' },
    "cdots": { latex: '\\cdots', tab: 'tab1', icon: '\\cdots' },
    "because": { latex: '\\because', tab: 'tab1', icon: '\\because' },
    "therefore": { latex: '\\therefore', tab: 'tab1', icon: '\\therefore' },

    "Leftrightarrow": { latex: '\\Leftrightarrow', tab: 'tab1', icon: '\\Leftrightarrow' },
    "Rightarrow": { latex: '\\Rightarrow', tab: 'tab1', icon: '\\Rightarrow' },
    "Leftarrow": { latex: '\\Leftarrow', tab: 'tab1', icon: '\\Leftarrow' },
    "nRightarrow": { latex: '\\nRightarrow', tab: 'tab1', icon: '\\nRightarrow' },
    "nLeftarrow": { latex: '\\nLeftarrow', tab: 'tab1', icon: '\\nLeftarrow' },
    "nLeftrightarrow": { latex: '\\nLeftrightarrow', tab: 'tab1', icon: '\\nLeftrightarrow' },
    "leftrightharpoons": { latex: '\\leftrightharpoons', tab: 'tab1', icon: '\\leftrightharpoons' },
    "to": { latex: '\\to', tab: 'tab1', icon: '\\to' },
    "leftarrow": { latex: '\\leftarrow', tab: 'tab1', icon: '\\leftarrow' },
    "leftrightarrow": { latex: '\\leftrightarrow', tab: 'tab1', icon: '\\leftrightarrow' },

    "angle": { latex: '\\angle', tab: 'tab1', icon: '\\angle' },
    "perp": { latex: '\\perp', tab: 'tab1', icon: '\\perp' },
    "parallel": { latex: '\\parallel', tab: 'tab1', icon: '\\parallel' },
    "nparallel": { latex: '\\nparallel', tab: 'tab1', icon: '\\nparallel' },
    "triangle": { latex: '\\triangle', tab: 'tab1', icon: '\\triangle' },
    "square": { latex: '\\square', tab: 'tab1', icon: '\\square' },
    "bigodot": { latex: '\\bigodot', tab: 'tab1', icon: '\\bigodot' },
    "cdot": { latex: '\\cdot', tab: 'tab1', icon: '\\cdot' },
    "ast": { latex: '\\ast', tab: 'tab1', icon: '\\ast' },
    "otimes": { latex: '\\otimes', tab: 'tab1', icon: '\\otimes' },
    "oplus": { latex: '\\oplus', tab: 'tab1', icon: '\\oplus' },
    "forall": { latex: '\\forall', tab: 'tab1', icon: '\\forall' },
    "exists": { latex: '\\exists', tab: 'tab1', icon: '\\exists' },

    "hat": { latex: '\\hat{}', tab: 'tab1', icon: '\\hat{□}' },
    "vec": { latex: '\\vec{}', tab: 'tab1', icon: '\\vec{□}' },
    "leftrights": { latex: '\\left ( \\right )', tab: 'tab1', icon: '\\left ( □ \\right )' },
    "leftrightb": { latex: '\\left \\{ \\right \\}', tab: 'tab1', icon: '\\left \\{ □ \\right \\}' },
    "leftrightline": { latex: '\\left | \\right |', tab: 'tab1', icon: '\\left | □ \\right |' },
    "leftrightm": { latex: '\\left [ \\right ]', tab: 'tab1', icon: '\\left [ □ \\right ]' },
    "indefiniteintegral": { latex: '{}\\int_{}^{}', tab: 'tab1', icon: '{}\\int_{}^{}', style: {
        root: {
          'font-size': '30%'
        }
      } },
    "differential": { latex: "f^/(x)", tab: 'tab1', icon: "f^/(x)", style: {
        root: {
          'font-size': '30%'
        }
      } },
    "sum": { latex: '\\sum_{}^{}', tab: 'tab1', icon: '\\sum_{□}^{□}', style: {
        root: {
          'font-size': '15%'
        }
      } },
    "prod": { latex: '\\prod_{}^{}', tab: 'tab1', icon: '\\prod_{□}^{□}', style: {
        root: {
          'font-size': '15%'
        }
      } },
    "huo": { latex: '或', tab: 'tab1', icon: '或' },
    "he": { latex: '和', tab: 'tab1', icon: '和' },
    "num1": { latex: '①', tab: 'tab1', icon: '①' },
    "num2": { latex: '②', tab: 'tab1', icon: '②' },
    "num3": { latex: '③', tab: 'tab1', icon: '③' },
    "num4": { latex: '④', tab: 'tab1', icon: '④' },
    "num5": { latex: '⑤', tab: 'tab1', icon: '⑤' },
    "num6": { latex: '⑥', tab: 'tab1', icon: '⑥' },
    "num7": { latex: '⑦', tab: 'tab1', icon: '⑦' },
    "t1": { latex: 'Ⅰ', tab: 'tab1', icon: 'I' },
    "t2": { latex: 'Ⅱ', tab: 'tab1', icon: 'Ⅱ' },
    "t3": { latex: 'Ⅲ', tab: 'tab1', icon: 'Ⅲ' },
    "t4": { latex: 'Ⅳ', tab: 'tab1', icon: 'Ⅳ' },
    "t5": { latex: 'Ⅴ', tab: 'tab1', icon: 'Ⅴ' },
    "t6": { latex: 'Ⅵ', tab: 'tab1', icon: 'Ⅵ' },
    "case": { latex: '\\begin{cases}\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\end{cases}' },
    "case1": { latex: '\\begin{cases}\\\\\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\\\\\end{cases}', style: {
        root: {
          'font-size': '15%'
        }
      } },
    "case2": { latex: '\\begin{cases}\\\\\\\\\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\\\\\\\\\end{cases}', style: {
        root: {
          'font-size': '10%'
        },
        matrix: {
          'margin-top': '-5px'
        }
      } },
    "case3": { latex: '\\begin{cases}\\\\\\\\\\\\\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\\\\\\\\\\\\\end{cases}', style: {
        root: {
          'font-size': '5%'
        },
        matrix: {
          'margin-top': '-12px'
        }
      } }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib?cacheDirectory!./node_modules/_vue-loader@15.4.2@vue-loader/lib??vue-loader-options!./src/component/LatexEditor.vue?vue&type=script&lang=js&
var LatexEditorvue_type_script_lang_js_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var LatexEditorvue_type_script_lang_js_ = ({
  name: 'LatexEditor',
  data: function data() {
    return {
      mainData: [],
      showTool: false,
      showBar: false
    };
  },

  props: {
    id: {
      type: String,
      required: true
    },
    toolBar: {
      type: Array
    },
    formulas: {
      type: Object
    },
    edit: {
      type: Function
    },
    customInputStyle: {
      type: Object
    },
    customContainerStyle: {
      type: Object
    },
    customSelStyle: {
      type: Object
    }
  },
  created: function created() {
    this.initData();
  },
  mounted: function mounted() {
    this.initMathField();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeEvent();
  },

  methods: {
    initData: function initData() {
      var _this = this;

      var uniqFormulas = [];
      var formulas = this.formulas ? Object.assign({}, data.formulas, this.formulas) : data.formulas;
      var formulasArr = Object.entries(formulas);

      var _loop = function _loop(key, v) {
        var ext = uniqFormulas.find(function (item) {
          return item.key === key;
        });
        if (!ext) uniqFormulas.push({ key: key, value: v });
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = formulasArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref = _step.value;

          var _ref2 = LatexEditorvue_type_script_lang_js_slicedToArray(_ref, 2);

          var key = _ref2[0];
          var v = _ref2[1];

          _loop(key, v);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.toolBar) {
        var toolBar = this.toolBar.filter(function (bar) {
          return bar !== '';
        });

        if (toolBar && toolBar.length > 0) {
          var uniqTabs = getUniqArray(toolBar);

          uniqTabs.forEach(function (tab, index) {
            var formulas = uniqFormulas.filter(function (meta) {
              return meta.value.tab === tab;
            });
            var active = !!index;
            _this.mainData.push({
              id: tab,
              active: !active,
              metas: formulas
            });
          });
        }
      } else {
        this.showBar = false;
        this.mainData.push({
          id: 'tab1',
          active: true,
          metas: uniqFormulas
        });
      }
    },
    initMathField: function initMathField() {
      this.answerSpan = document.getElementById(this.id);
      var config = {
        handlers: {
          edit: this.edit || function (mathField) {
            console.log(mathField.latex());
          }
        }
      };
      this.MQ = MathQuill.getInterface(2);
      this.answerMathField = this.MQ.MathField(this.answerSpan, config);

      this.setMeta();
      this.bindEvent();
    },
    setMeta: function setMeta() {
      var _this2 = this;

      var mq = MathQuill.getInterface(2);

      this.mainData.forEach(function (tab) {
        tab.metas.forEach(function (meta) {
          var ref = _this2.id + '_' + tab.id + '_' + meta.key;
          var dom = document.getElementById(ref);
          var mqInstance = mq.StaticMath(dom);

          if (meta.value.style && isObject(meta.value.style)) {
            _this2.setMetaCustonStyle(meta.value.style, mqInstance.el());
          }
        });
      });
    },
    setMetaCustonStyle: function setMetaCustonStyle(style, el) {
      var innderChild = el.children;
      var innderEl = innderChild[innderChild.length - 1];

      if (style.root && isObject(style.root)) {
        el.style.cssText = ObjectToStr(style.root);
      }

      if (style.inner && isObject(style.inner)) {
        innderEl.style.cssText = ObjectToStr(style.inner);
      }

      if (style.matrix && isObject(style.matrix)) {
        var matrixChild = Array.from(innderEl.children);

        matrixChild.forEach(function (child) {
          if (child.className.indexOf('mq-matrix') !== 1) {
            child.style.cssText = ObjectToStr(style.matrix);
          }
        });
      }
    },
    bindEvent: function bindEvent() {
      this.answerSpan.addEventListener('focus', this.answerSpanFocusCallback, true);

      this.answerSpan.addEventListener('click', this.answerSpanClickCallback);

      var body = document.getElementsByTagName('body')[0];
      body.addEventListener('click', this.bodyClickCallback);
    },
    removeEvent: function removeEvent() {
      this.answerSpan.removeEventListener('focus', this.answerSpanFocusCallback, true);

      this.answerSpan.removeEventListener('click', this.answerSpanClickCallback);

      var body = document.getElementsByTagName('body')[0];
      body.removeEventListener('click', this.bodyClickCallback);
    },
    answerSpanFocusCallback: function answerSpanFocusCallback(e) {
      var _this3 = this;

      var pChildren = this.$parent.$children;
      if (pChildren.length > 1) {
        pChildren.forEach(function (vm) {
          if (vm._uid !== _this3._uid) vm.showTool = false;
        });
      }
      this.showTool = true;
    },
    answerSpanClickCallback: function answerSpanClickCallback(e) {
      e.stopPropagation();
    },
    bodyClickCallback: function bodyClickCallback(e) {
      e.stopPropagation();
      this.showTool = false;
    },
    metaClick: function metaClick(latex) {
      this.answerMathField.write(latex);
      this.answerMathField.focus();
    },
    changeTab: function changeTab(id) {
      var currentTab = this.mainData.find(function (tab) {
        return tab.active;
      });

      if (currentTab.id !== id) {
        this.mainData.forEach(function (tab, i) {
          if (tab.id === id) {
            tab.active = true;
          } else {
            if (tab.active) tab.active = false;
          }
        });
      }

      this.answerMathField.focus();
    },
    getValue: function getValue() {
      return this.answerMathField.latex();
    }
  }
});
// CONCATENATED MODULE: ./src/component/LatexEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_LatexEditorvue_type_script_lang_js_ = (LatexEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/component/LatexEditor.vue?vue&type=style&index=0&id=6a7f7038&rel=stylesheet%2Fscss&lang=scss&scoped=true&
var LatexEditorvue_type_style_index_0_id_6a7f7038_rel_stylesheet_2Fscss_lang_scss_scoped_true_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.4.2@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/component/LatexEditor.vue






/* normalize component */

var component = normalizeComponent(
  component_LatexEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6a7f7038",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/component/LatexEditor.vue"
/* harmony default export */ var LatexEditor = (component.exports);
// CONCATENATED MODULE: ./src/index.js


LatexEditor.install = function (Vue) {
  Vue.component(LatexEditor.name, LatexEditor);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.LatexEditor = LatexEditor;
}

/* harmony default export */ var src = __webpack_exports__["default"] = (LatexEditor);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);