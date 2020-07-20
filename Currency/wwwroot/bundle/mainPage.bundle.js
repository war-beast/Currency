/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"mainPage": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "wwwroot/bundle/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Src/pages/main/init.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Src/components/currenciesTable/currenciesTable.ts?vue&type=script&lang=ts&":
/*!************************************************************************************!*\
  !*** ./Src/components/currenciesTable/currenciesTable.ts?vue&type=script&lang=ts& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_currenciesTable_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--0!./currenciesTable.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./Src/components/currenciesTable/currenciesTable.ts?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_currenciesTable_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./Src/components/currenciesTable/currenciesTable.vue":
/*!************************************************************!*\
  !*** ./Src/components/currenciesTable/currenciesTable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currenciesTable_vue_vue_type_template_id_3e588def___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currenciesTable.vue?vue&type=template&id=3e588def& */ "./Src/components/currenciesTable/currenciesTable.vue?vue&type=template&id=3e588def&");
/* harmony import */ var _currenciesTable_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currenciesTable.ts?vue&type=script&lang=ts& */ "./Src/components/currenciesTable/currenciesTable.ts?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _currenciesTable_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _currenciesTable_vue_vue_type_template_id_3e588def___WEBPACK_IMPORTED_MODULE_0__["render"],
  _currenciesTable_vue_vue_type_template_id_3e588def___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Src/components/currenciesTable/currenciesTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./Src/components/currenciesTable/currenciesTable.vue?vue&type=template&id=3e588def&":
/*!*******************************************************************************************!*\
  !*** ./Src/components/currenciesTable/currenciesTable.vue?vue&type=template&id=3e588def& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_currenciesTable_vue_vue_type_template_id_3e588def___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./currenciesTable.vue?vue&type=template&id=3e588def& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Src/components/currenciesTable/currenciesTable.vue?vue&type=template&id=3e588def&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_currenciesTable_vue_vue_type_template_id_3e588def___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_currenciesTable_vue_vue_type_template_id_3e588def___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./Src/components/currenciesTable/currenciesTableRow.ts?vue&type=script&lang=ts&":
/*!***************************************************************************************!*\
  !*** ./Src/components/currenciesTable/currenciesTableRow.ts?vue&type=script&lang=ts& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_currenciesTableRow_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--0!./currenciesTableRow.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./Src/components/currenciesTable/currenciesTableRow.ts?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_currenciesTableRow_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./Src/components/currenciesTable/currenciesTableRow.vue":
/*!***************************************************************!*\
  !*** ./Src/components/currenciesTable/currenciesTableRow.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currenciesTableRow_vue_vue_type_template_id_b0bf4eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currenciesTableRow.vue?vue&type=template&id=b0bf4eca& */ "./Src/components/currenciesTable/currenciesTableRow.vue?vue&type=template&id=b0bf4eca&");
/* harmony import */ var _currenciesTableRow_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currenciesTableRow.ts?vue&type=script&lang=ts& */ "./Src/components/currenciesTable/currenciesTableRow.ts?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _currenciesTableRow_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _currenciesTableRow_vue_vue_type_template_id_b0bf4eca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _currenciesTableRow_vue_vue_type_template_id_b0bf4eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Src/components/currenciesTable/currenciesTableRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./Src/components/currenciesTable/currenciesTableRow.vue?vue&type=template&id=b0bf4eca&":
/*!**********************************************************************************************!*\
  !*** ./Src/components/currenciesTable/currenciesTableRow.vue?vue&type=template&id=b0bf4eca& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_currenciesTableRow_vue_vue_type_template_id_b0bf4eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./currenciesTableRow.vue?vue&type=template&id=b0bf4eca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Src/components/currenciesTable/currenciesTableRow.vue?vue&type=template&id=b0bf4eca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_currenciesTableRow_vue_vue_type_template_id_b0bf4eca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_currenciesTableRow_vue_vue_type_template_id_b0bf4eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./Src/exceptions/requestException.ts":
/*!********************************************!*\
  !*** ./Src/exceptions/requestException.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestException; });
class RequestException extends Error {
    constructor(url) {
        super(`RequestException: ${url}`);
        this.name = "RequestException";
    }
}


/***/ }),

/***/ "./Src/models/apiResult.ts":
/*!*********************************!*\
  !*** ./Src/models/apiResult.ts ***!
  \*********************************/
/*! exports provided: ApiResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResult", function() { return ApiResult; });
class ApiResult {
    constructor(success, value) {
        this.success = success;
        this.value = value;
    }
}


/***/ }),

/***/ "./Src/pages/main/init.js":
/*!********************************!*\
  !*** ./Src/pages/main/init.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var Components_currenciesTable_currenciesTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/currenciesTable/currenciesTable.vue */ "./Src/components/currenciesTable/currenciesTable.vue");


class AppCore {
    constructor() {
        this.init();
    }
    init() {
        this.instance = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
            el: "#vue-app-container",
            render: h => h(Components_currenciesTable_currenciesTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
        });
    }
}
new AppCore();
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "./Src/util/request.ts":
/*!*****************************!*\
  !*** ./Src/util/request.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiRequest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Exceptions_requestException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Exceptions/requestException */ "./Src/exceptions/requestException.ts");
/* harmony import */ var Models_apiResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Models/apiResult */ "./Src/models/apiResult.ts");
/* harmony import */ var cookies_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-ts */ "./node_modules/cookies-ts/lib/main.esm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class ApiRequest {
    constructor() {
        const cookies = new cookies_ts__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.token = cookies.get(globalAccessToken);
    }
    getData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendGetRequest(url)
                .then((result) => {
                return result;
            });
        });
    }
    postData(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sendPostRequest(url, data)
                .then((result) => {
                return result;
            });
        });
    }
    sendGetRequest(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + this.token
                }
            }).then((result) => {
                return new Models_apiResult__WEBPACK_IMPORTED_MODULE_2__["ApiResult"](true, result.data);
            }).catch((error) => {
                return this.getErrorResult(error, url);
            });
        });
    }
    sendPostRequest(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, {
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json;charset=utf-8",
                    "Authorization": "Bearer " + this.token
                }
            }).then((result) => {
                var res = new Models_apiResult__WEBPACK_IMPORTED_MODULE_2__["ApiResult"](true, result.data);
                return res;
            }).catch((error) => {
                return this.getErrorResult(error, url);
            });
        });
    }
    getErrorResult(error, url) {
        const errorResult = new Models_apiResult__WEBPACK_IMPORTED_MODULE_2__["ApiResult"](false, "");
        if (error.response.data !== undefined && error.response.data !== "") {
            console.error(new Exceptions_requestException__WEBPACK_IMPORTED_MODULE_1__["default"](url), error.response.data);
            errorResult.value = error.response.data.title;
        }
        else {
            console.error(new Exceptions_requestException__WEBPACK_IMPORTED_MODULE_1__["default"](url), error.message);
            errorResult.value = error.message;
        }
        return errorResult;
    }
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./Src/components/currenciesTable/currenciesTable.ts?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./Src/components/currenciesTable/currenciesTable.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_currenciesTable_currenciesTableRow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/currenciesTable/currenciesTableRow.vue */ "./Src/components/currenciesTable/currenciesTableRow.vue");
/* harmony import */ var Util_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/request */ "./Src/util/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const currenciesListUrl = "/api/common/currencies";
const currenciesTotalCountUrl = "/api/common/currencyCount";
const currencyDetails = "/api/common/currency";
let CurrenciesTable = class CurrenciesTable extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"] {
    constructor() {
        super();
        this.currencies = [];
        this.selectedCurrency = null;
        this.totalCount = 0;
        this.pageCount = 0;
        this.visibleRowCount = 5;
        this.page = 1;
        this.isInfoVisible = false;
        this.isUserAuthorized = true;
        this.apiRequest = new Util_request__WEBPACK_IMPORTED_MODULE_2__["default"]();
        setTimeout(() => {
            this.loadCount();
            this.loadData(this.page, this.visibleRowCount);
        }, 0);
    }
    showPrevious() {
        if (this.page > 1)
            this.loadData(--this.page, this.visibleRowCount);
    }
    showNext() {
        if (this.page < this.pageCount)
            this.loadData(++this.page, this.visibleRowCount);
    }
    showDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiRequest.getData(`${currencyDetails}?id=${id}`)
                .then((result) => {
                if (result.success) {
                    this.selectedCurrency = JSON.parse(result.value);
                    this.isInfoVisible = true;
                }
                else {
                    console.log(`Ошибка загрузки данных по url: ${currencyDetails}`);
                    if (result.value.indexOf("401") !== -1)
                        this.isUserAuthorized = false;
                }
            });
        });
    }
    hideInfoModal() {
        this.isInfoVisible = false;
        this.selectedCurrency = null;
    }
    loadData(page, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiRequest.getData(`${currenciesListUrl}?page=${page}&pageSize=${pageSize}`)
                .then((result) => {
                if (result.success) {
                    this.currencies = JSON.parse(result.value);
                }
                else {
                    console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
                    if (result.value.indexOf("401") !== -1)
                        this.isUserAuthorized = false;
                }
            });
        });
    }
    loadCount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiRequest.getData(currenciesTotalCountUrl)
                .then((result) => {
                if (result.success) {
                    this.totalCount = JSON.parse(result.value);
                    this.pageCount = Math.ceil(this.totalCount / this.visibleRowCount);
                }
                else {
                    console.log(`Ошибка загрузки данных по url: ${currenciesListUrl}`);
                }
            });
        });
    }
};
CurrenciesTable = __decorate([
    Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        components: {
            currencyRow: Components_currenciesTable_currenciesTableRow_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
        }
    })
], CurrenciesTable);
/* harmony default export */ __webpack_exports__["default"] = (CurrenciesTable);


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./Src/components/currenciesTable/currenciesTableRow.ts?vue&type=script&lang=ts&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./Src/components/currenciesTable/currenciesTableRow.ts?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RowComponent = class RowComponent extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"] {
};
__decorate([
    Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
], RowComponent.prototype, "currency", void 0);
__decorate([
    Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
], RowComponent.prototype, "showDetails", void 0);
RowComponent = __decorate([
    vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]
], RowComponent);
/* harmony default export */ __webpack_exports__["default"] = (RowComponent);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Src/components/currenciesTable/currenciesTable.vue?vue&type=template&id=3e588def&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Src/components/currenciesTable/currenciesTable.vue?vue&type=template&id=3e588def& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      {
        staticClass:
          "row d-flex flex-wrap justify-content-between align-items-center my-4"
      },
      [
        _c("div", [
          _vm._v("\n\t\t\tВсего: " + _vm._s(_vm.totalCount) + " записей\n\t\t")
        ]),
        _vm._v(" "),
        _c("div", [
          _vm.page > 1
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { role: "button" },
                  on: { click: _vm.showPrevious }
                },
                [_vm._v("Назад")]
              )
            : _vm._e(),
          _vm._v(
            "\n\t\t\tСтраница: " +
              _vm._s(_vm.page) +
              " из " +
              _vm._s(_vm.pageCount) +
              "\n\t\t\t"
          ),
          _vm.page < _vm.pageCount
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { role: "button" },
                  on: { click: _vm.showNext }
                },
                [_vm._v("Вперёд")]
              )
            : _vm._e()
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _vm.isUserAuthorized
        ? _c("table", { staticClass: "table table-hover" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.currencies, function(item, index) {
                return _c("currencyRow", {
                  key: "item__" + index,
                  attrs: {
                    currency: item,
                    showDetails: function(id) {
                      return _vm.showDetails(id)
                    }
                  }
                })
              }),
              1
            )
          ])
        : _c("div", [
            _vm._v(
              "\n\t\t\tЧтобы увидеть данные о курсах валют, надо войти со своей учётной записью.\n\t\t"
            )
          ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        class: { show: _vm.isInfoVisible },
        attrs: {
          id: "exampleModalLong",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLongTitle",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLongTitle" }
                  },
                  [_vm._v("Информация о выбранной валюте")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button", "aria-label": "Close" },
                    on: { click: _vm.hideInfoModal }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "container" }, [
                  _vm.selectedCurrency != null
                    ? _c(
                        "div",
                        { staticClass: "row my-4 flex-column text-left" },
                        [
                          _c("h4", { staticClass: "h4" }, [_vm._v("Выбрано:")]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "label",
                              {
                                staticClass: "col-form-label font-weight-bold",
                                attrs: { for: "nameCaption" }
                              },
                              [_vm._v("Id:")]
                            ),
                            _vm._v(" "),
                            _c("span", { attrs: { id: "nameCaption" } }, [
                              _vm._v(_vm._s(_vm.selectedCurrency.id))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "label",
                              {
                                staticClass: "col-form-label font-weight-bold",
                                attrs: { for: "nameCaption" }
                              },
                              [_vm._v("Наименование:")]
                            ),
                            _vm._v(" "),
                            _c("span", { attrs: { id: "nameCaption" } }, [
                              _vm._v(_vm._s(_vm.selectedCurrency.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "label",
                              {
                                staticClass: "col-form-label font-weight-bold",
                                attrs: { for: "nameCaption" }
                              },
                              [
                                _vm._v(
                                  "Последнее значение курса (руб. за ед.):"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { attrs: { id: "nameCaption" } }, [
                              _vm._v(_vm._s(_vm.selectedCurrency.rate))
                            ])
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selectedCurrency != null
                    ? _c("div", [
                        _c("h5", { staticClass: "h5" }, [
                          _vm._v("История курсов")
                        ]),
                        _vm._v(" "),
                        _c("table", { staticClass: "table" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.selectedCurrency.dayRates, function(
                              item
                            ) {
                              return _c("tr", [
                                _c("td", [_vm._v(_vm._s(item.date))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.rate))])
                              ])
                            }),
                            0
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" },
                    on: { click: _vm.hideInfoModal }
                  },
                  [_vm._v("Закрыть")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Наименование")]),
        _vm._v(" "),
        _c("th", [_vm._v("Курс")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Дата")]),
        _vm._v(" "),
        _c("th", [_vm._v("Курс (руб. за ед.)")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Src/components/currenciesTable/currenciesTableRow.vue?vue&type=template&id=b0bf4eca&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Src/components/currenciesTable/currenciesTableRow.vue?vue&type=template&id=b0bf4eca& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tr",
    {
      on: {
        click: function($event) {
          return _vm.showDetails(_vm.currency.id)
        }
      }
    },
    [
      _c("td", [_vm._v(_vm._s(_vm.currency.id))]),
      _vm._v(" "),
      _c("td", [_vm._v(_vm._s(_vm.currency.name))]),
      _vm._v(" "),
      _c("td", [_vm._v(_vm._s(_vm.currency.rate))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

/******/ });
//# sourceMappingURL=mainPage.bundle.js.map