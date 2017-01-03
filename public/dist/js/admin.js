/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 158);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 1 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 3 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(37)
  , toPrimitive    = __webpack_require__(28)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(106)
  , defined = __webpack_require__(18);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(35)
  , hide      = __webpack_require__(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(15);
module.exports = __webpack_require__(2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(26)('wks')
  , uid        = __webpack_require__(16)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var baseUrl = "/api/admin/";

var Url = {
    common: {
        qiniutoken: '/api/common/qiniutoken',
        login: baseUrl + 'account/login',
        logout: baseUrl + 'account/logout'
    },
    article: {
        create: baseUrl + 'article/create',
        get: baseUrl + 'article',
        list: baseUrl + 'article/list',
        delete: baseUrl + 'article/delete',
        update: baseUrl + 'article/update'
    },
    vote: {
        create: baseUrl + 'vote/option/create',
        delete: baseUrl + 'vote/option/delete',
        list: baseUrl + 'vote/option/list',
        update: baseUrl + 'vote/option/update'
    }
};

exports.Url = Url;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(43)
  , enumBugKeys = __webpack_require__(19);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 16 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _iterator = __webpack_require__(154);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(153);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 18 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 19 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(9)
  , dPs         = __webpack_require__(112)
  , enumBugKeys = __webpack_require__(19)
  , IE_PROTO    = __webpack_require__(25)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(36)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(105).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 23 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(3)
  , TAG = __webpack_require__(8)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys')
  , uid    = __webpack_require__(16);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 27 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(21)
  , wksExt         = __webpack_require__(30)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(17);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleTypes = { 1: '链接', 2: '文章', 3: '公告', 4: '投票' };

var Model = function Model(options) {

    var defaults = {
        'Id': {
            type: 'text',
            name: 'Id',
            label: 'ID',
            value: ''
        },
        "UserId": {
            type: 'text',
            name: 'UserId',
            label: '用户ID',
            value: ''
        },
        "Type": {
            type: 'hidden',
            name: 'Type',
            label: '类型',
            value: ''
        },
        "Status": {
            type: 'select',
            name: 'Status',
            label: '状态',
            value: ''
        },
        "Title": {
            type: 'text',
            name: 'Title',
            label: '标题',
            error: false,
            errorMsg: '',
            value: ''
        },
        "Topic": {
            type: 'text',
            name: 'Topic',
            label: '简介',
            error: false,
            errorMsg: '',
            value: ''
        },
        "Description": {
            type: 'text',
            name: 'Description',
            label: '描述',
            error: false,
            errorMsg: '',
            value: ''
        },
        "Author": {
            type: 'text',
            name: 'Author',
            label: '作者',
            error: false,
            errorMsg: '',
            value: ''
        },
        "Url": {
            type: 'text',
            name: 'Url',
            error: false,
            errorMsg: '',
            label: '链接 (可选)',
            value: ''
        },

        "Props": {
            "HasChild": true,
            "Content": {
                type: 'richText',
                name: 'Content',
                label: '内容',
                error: false,
                errorMsg: '',
                value: ''
            },
            "WebHeaderImg": {
                HasChild: true,
                type: 'cropImg',
                name: 'WebHeaderImg',
                label: '头图',
                Url: {
                    value: '',
                    error: false,
                    errorMsg: ''
                },
                Width: {
                    value: ''
                },
                Height: {
                    value: ''
                },
                Format: {
                    value: ''
                }
            },
            "ShareImg": {
                HasChild: true,
                type: 'image',
                name: 'ShareImg',
                label: '分享图片',
                Url: {
                    value: ''
                },
                Width: {
                    value: ''
                },
                Height: {
                    value: ''
                },
                Format: {
                    value: ''
                }
            },
            "Thumb": {
                HasChild: true,
                type: 'image',
                name: 'Thumb',
                label: '封面图',
                Url: {
                    value: ''
                },
                Width: {
                    value: ''
                },
                Height: {
                    value: ''
                },
                Format: {
                    value: ''
                }
            }
        }
    };

    $.extend(true, this, defaults, this.serializeData(options));
};

Model.prototype.get = function (name) {
    return this[name].value;
};

Model.prototype.getTypeCn = function (type) {

    return articleTypes[type];
};

Model.prototype.set = function (name, value) {
    this[name] = value;
};

Model.prototype.fetchList = function (params) {
    var ajax = $.ajax({
        url: Url.article.list,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: params
    });
    return ajax;
};

Model.prototype.delete = function (params) {
    var ajax = $.ajax({
        url: Url.article.delete,
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: params
    });
    return ajax;
};

Model.prototype.save = function (params) {

    var url = Url.article.create;
    if (params.Id.value) {
        url = Url.article.update;
    }
    var ajax = $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: this.toJSONString(params)
    });
    return ajax;
};

Model.prototype.fetchById = function (id) {
    var ajax = $.ajax({
        url: Url.article.get + "/" + id,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
    return ajax;
};

Model.prototype.serializeData = function (data) {
    var temp = {};
    for (var i in data) {
        temp[i] = {};
        if (typeof data[i] !== "function") {
            if ((0, _typeof3.default)(data[i]) == "object") {
                temp[i] = this.serializeData(data[i]);
            } else {
                temp[i].value = data[i];
            }
        }
    }
    return temp;
};

Model.prototype.unSerializeData = function (data) {

    var temp = {};
    for (var i in data) {
        if (typeof data[i] !== "function") {
            temp[i] = {};
            if (typeof data[i].HasChild !== "undefined") {
                temp[i] = this.unSerializeData(data[i]);
            } else {
                temp[i] = data[i].value;
            }
        }
    }
    return temp;
};

Model.prototype.toJSONString = function (model) {
    return (0, _stringify2.default)(this.unSerializeData(model));
};

exports.default = Model;

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = jQuery;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(132)

/* template */
var __vue_template__ = __webpack_require__(77)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/article/edit.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d2ff991c", __vue_options__)
  } else {
    hotAPI.reload("data-v-d2ff991c", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] edit.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(101);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(10)(function(){
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(21)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(44)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(3)
  , Iterators      = __webpack_require__(20)
  , $iterCreate    = __webpack_require__(108)
  , setToStringTag = __webpack_require__(24)
  , getPrototypeOf = __webpack_require__(42)
  , ITERATOR       = __webpack_require__(8)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(23)
  , createDesc     = __webpack_require__(15)
  , toIObject      = __webpack_require__(5)
  , toPrimitive    = __webpack_require__(28)
  , has            = __webpack_require__(3)
  , IE8_DOM_DEFINE = __webpack_require__(37)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(43)
  , hiddenKeys = __webpack_require__(19).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 41 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(3)
  , toObject    = __webpack_require__(45)
  , IE_PROTO    = __webpack_require__(25)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(3)
  , toIObject    = __webpack_require__(5)
  , arrayIndexOf = __webpack_require__(103)(false)
  , IE_PROTO     = __webpack_require__(25)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 46 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(82)

/* script */
__vue_exports__ = __webpack_require__(139)

/* template */
var __vue_template__ = __webpack_require__(68)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b700502", __vue_options__)
  } else {
    hotAPI.reload("data-v-1b700502", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 48 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Project: Bootstrap Notify = v3.1.3
* Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
* Author: Mouse0270 aka Robert McIntosh
* License: MIT License
* Website: https://github.com/mouse0270/bootstrap-growl
*/
(function (factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	// Create the defaults once
	var defaults = {
			element: 'body',
			position: null,
			type: "info",
			allow_dismiss: true,
			newest_on_top: false,
			showProgressbar: false,
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
			icon_type: 'class',
			template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
		};

	String.format = function() {
		var str = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			str = str.replace(RegExp("\\{" + (i - 1) + "\\}", "gm"), arguments[i]);
		}
		return str;
	};

	function Notify ( element, content, options ) {
		// Setup Content of Notify
		var content = {
			content: {
				message: typeof content == 'object' ? content.message : content,
				title: content.title ? content.title : '',
				icon: content.icon ? content.icon : '',
				url: content.url ? content.url : '#',
				target: content.target ? content.target : '-'
			}
		};

		options = $.extend(true, {}, content, options);
		this.settings = $.extend(true, {}, defaults, options);
		this._defaults = defaults;
		if (this.settings.content.target == "-") {
			this.settings.content.target = this.settings.url_target;
		}
		this.animations = {
			start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
			end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
		}

		if (typeof this.settings.offset == 'number') {
		    this.settings.offset = {
		    	x: this.settings.offset,
		    	y: this.settings.offset
		    };
		}

		this.init();
	};

	$.extend(Notify.prototype, {
		init: function () {
			var self = this;

			this.buildNotify();
			if (this.settings.content.icon) {
				this.setIcon();
			}
			if (this.settings.content.url != "#") {
				this.styleURL();
			}
			this.styleDismiss();
			this.placement();
			this.bind();

			this.notify = {
				$ele: this.$ele,
				update: function(command, update) {
					var commands = {};
					if (typeof command == "string") {
						commands[command] = update;
					}else{
						commands = command;
					}
					for (var command in commands) {
						switch (command) {
							case "type":
								this.$ele.removeClass('alert-' + self.settings.type);
								this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
								self.settings.type = commands[command];
								this.$ele.addClass('alert-' + commands[command]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[command]);
								break;
							case "icon":
								var $icon = this.$ele.find('[data-notify="icon"]');
								if (self.settings.icon_type.toLowerCase() == 'class') {
									$icon.removeClass(self.settings.content.icon).addClass(commands[command]);
								}else{
									if (!$icon.is('img')) {
										$icon.find('img');
									}
									$icon.attr('src', commands[command]);
								}
								break;
							case "progress":
								var newDelay = self.settings.delay - (self.settings.delay * (commands[command] / 100));
								this.$ele.data('notify-delay', newDelay);
								this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[command]).css('width', commands[command] + '%');
								break;
							case "url":
								this.$ele.find('[data-notify="url"]').attr('href', commands[command]);
								break;
							case "target":
								this.$ele.find('[data-notify="url"]').attr('target', commands[command]);
								break;
							default:
								this.$ele.find('[data-notify="' + command +'"]').html(commands[command]);
						};
					}
					var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
					self.reposition(posX);
				},
				close: function() {
					self.close();
				}
			};
		},
		buildNotify: function () {
			var content = this.settings.content;
			this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
			this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);
			if (!this.settings.allow_dismiss) {
				this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
			}
			if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
				this.$ele.find('[data-notify="progressbar"]').remove();
			}
		},
		setIcon: function() {
			if (this.settings.icon_type.toLowerCase() == 'class') {
				this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
			}else{
				if (this.$ele.find('[data-notify="icon"]').is('img')) {
					this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
				}else{
					this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />');
				}
			}
		},
		styleDismiss: function() {
			this.$ele.find('[data-notify="dismiss"]').css({
				position: 'absolute',
				right: '10px',
				top: '5px',
				zIndex: this.settings.z_index + 2
			});
		},
		styleURL: function() {
			this.$ele.find('[data-notify="url"]').css({
				backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
				height: '100%',
				left: '0px',
				position: 'absolute',
				top: '0px',
				width: '100%',
				zIndex: this.settings.z_index + 1
			});
		},
		placement: function() {
			var self = this,
				offsetAmt = this.settings.offset.y,
				css = {
					display: 'inline-block',
					margin: '0px auto',
					position: this.settings.position ?  this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
					transition: 'all .5s ease-in-out',
					zIndex: this.settings.z_index
				},
				hasAnimation = false,
				settings = this.settings;

			$('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
				return offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) +  parseInt($(this).outerHeight()) +  parseInt(settings.spacing));
			});
			if (this.settings.newest_on_top == true) {
				offsetAmt = this.settings.offset.y;
			}
			css[this.settings.placement.from] = offsetAmt+'px';

			switch (this.settings.placement.align) {
				case "left":
				case "right":
					css[this.settings.placement.align] = this.settings.offset.x+'px';
					break;
				case "center":
					css.left = 0;
					css.right = 0;
					break;
			}
			this.$ele.css(css).addClass(this.settings.animate.enter);
			$.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function(index, prefix) {
				self.$ele[0].style[prefix+'AnimationIterationCount'] = 1;
			});

			$(this.settings.element).append(this.$ele);

			if (this.settings.newest_on_top == true) {
				offsetAmt = (parseInt(offsetAmt)+parseInt(this.settings.spacing)) + this.$ele.outerHeight();
				this.reposition(offsetAmt);
			}

			if ($.isFunction(self.settings.onShow)) {
				self.settings.onShow.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				if ($.isFunction(self.settings.onShown)) {
					self.settings.onShown.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					if ($.isFunction(self.settings.onShown)) {
						self.settings.onShown.call(this);
					}
				}
			}, 600);
		},
		bind: function() {
			var self = this;

			this.$ele.find('[data-notify="dismiss"]').on('click', function() {
				self.close();
			})

			this.$ele.mouseover(function(e) {
				$(this).data('data-hover', "true");
			}).mouseout(function(e) {
				$(this).data('data-hover', "false");
			});
			this.$ele.data('data-hover', "false");

			if (this.settings.delay > 0) {
				self.$ele.data('notify-delay', self.settings.delay);
				var timer = setInterval(function() {
					var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;
					if ((self.$ele.data('data-hover') === 'false' && self.settings.mouse_over == "pause") || self.settings.mouse_over != "pause") {
						var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
						self.$ele.data('notify-delay', delay);
						self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
					}
					if (delay <= -(self.settings.timer)) {
						clearInterval(timer);
						self.close();
					}
				}, self.settings.timer);
			}
		},
		close: function() {
			var self = this,
				$successors = null,
				posX = parseInt(this.$ele.css(this.settings.placement.from)),
				hasAnimation = false;

			this.$ele.data('closing', 'true').addClass(this.settings.animate.exit);
			self.reposition(posX);

			if ($.isFunction(self.settings.onClose)) {
				self.settings.onClose.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				$(this).remove();
				if ($.isFunction(self.settings.onClosed)) {
					self.settings.onClosed.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					self.$ele.remove();
					if (self.settings.onClosed) {
						self.settings.onClosed(self.$ele);
					}
				}
			}, 600);
		},
		reposition: function(posX) {
			var self = this,
				notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
				$elements = this.$ele.nextAll(notifies);
			if (this.settings.newest_on_top == true) {
				$elements = this.$ele.prevAll(notifies);
			}
			$elements.each(function() {
				$(this).css(self.settings.placement.from, posX);
				posX = (parseInt(posX)+parseInt(self.settings.spacing)) + $(this).outerHeight();
			});
		}
	});

	$.notify = function ( content, options ) {
		var plugin = new Notify( this, content, options );
		return plugin.notify;
	};
	$.notifyDefaults = function( options ) {
		defaults = $.extend(true, {}, defaults, options);
		return defaults;
	};
	$.notifyClose = function( command ) {
		if (typeof command === "undefined" || command == "all") {
			$('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
		}else{
			$('[data-notify-position="'+command+'"]').find('[data-notify="dismiss"]').trigger('click');
		}
	};

}));


/***/ },
/* 50 */
/***/ function(module, exports) {

"use strict";
"use strict";

Vue.filter('formatDate', function (val, fmt) {

    var date = new Date(val);
    var o = {
        "M+": date.getMonth() + 1,
        "D+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() };
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getFullYear() + "");
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }

    return fmt;
});

Vue.filter('toStatusCn', function (val) {

    var statusCn = {
        1: '草稿',
        2: '预发布',
        3: '删除',
        4: '已发布'
    };

    return statusCn[val];
});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueRouter = __webpack_require__(92);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _DashBoard = __webpack_require__(54);

var _DashBoard2 = _interopRequireDefault(_DashBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);

var routes = [{ path: '/', component: _DashBoard2.default }, { path: '/login', component: __webpack_require__(55) }, { path: '/article', component: __webpack_require__(56),
    children: [{
        name: 'articleList',
        path: ':type/list',
        component: __webpack_require__(57)
    }, {
        name: 'articleCreate',
        path: ':type/create',
        component: __webpack_require__(33)
    }, {
        name: 'articleEdit',
        path: ':type/edit/:id',
        component: __webpack_require__(33)
    }]
}, { name: 'jsPatch', path: '/jsPatch', component: __webpack_require__(58) }];

var router = new _vueRouter2.default({ routes: routes });

exports.default = router;

/***/ },
/* 52 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  Remodal - v1.1.0
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32)], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {
      return factory(root, $);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    factory(root, require('jquery'));
  } else {
    factory(root, root.jQuery || root.Zepto);
  }
})(this, function(global, $) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */
  var PLUGIN_NAME = 'remodal';

  /**
   * Namespace for CSS and events
   * @private
   * @const
   * @type {String}
   */
  var NAMESPACE = global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.NAMESPACE || PLUGIN_NAME;

  /**
   * Animationstart event with vendor prefixes
   * @private
   * @const
   * @type {String}
   */
  var ANIMATIONSTART_EVENTS = $.map(
    ['animationstart', 'webkitAnimationStart', 'MSAnimationStart', 'oAnimationStart'],

    function(eventName) {
      return eventName + '.' + NAMESPACE;
    }

  ).join(' ');

  /**
   * Animationend event with vendor prefixes
   * @private
   * @const
   * @type {String}
   */
  var ANIMATIONEND_EVENTS = $.map(
    ['animationend', 'webkitAnimationEnd', 'MSAnimationEnd', 'oAnimationEnd'],

    function(eventName) {
      return eventName + '.' + NAMESPACE;
    }

  ).join(' ');

  /**
   * Default settings
   * @private
   * @const
   * @type {Object}
   */
  var DEFAULTS = $.extend({
    hashTracking: true,
    closeOnConfirm: true,
    closeOnCancel: true,
    closeOnEscape: true,
    closeOnOutsideClick: true,
    modifier: '',
    appendTo: null
  }, global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.DEFAULTS);

  /**
   * States of the Remodal
   * @private
   * @const
   * @enum {String}
   */
  var STATES = {
    CLOSING: 'closing',
    CLOSED: 'closed',
    OPENING: 'opening',
    OPENED: 'opened'
  };

  /**
   * Reasons of the state change.
   * @private
   * @const
   * @enum {String}
   */
  var STATE_CHANGE_REASONS = {
    CONFIRMATION: 'confirmation',
    CANCELLATION: 'cancellation'
  };

  /**
   * Is animation supported?
   * @private
   * @const
   * @type {Boolean}
   */
  var IS_ANIMATION = (function() {
    var style = document.createElement('div').style;

    return style.animationName !== undefined ||
      style.WebkitAnimationName !== undefined ||
      style.MozAnimationName !== undefined ||
      style.msAnimationName !== undefined ||
      style.OAnimationName !== undefined;
  })();

  /**
   * Is iOS?
   * @private
   * @const
   * @type {Boolean}
   */
  var IS_IOS = /iPad|iPhone|iPod/.test(navigator.platform);

  /**
   * Current modal
   * @private
   * @type {Remodal}
   */
  var current;

  /**
   * Scrollbar position
   * @private
   * @type {Number}
   */
  var scrollTop;

  /**
   * Returns an animation duration
   * @private
   * @param {jQuery} $elem
   * @returns {Number}
   */
  function getAnimationDuration($elem) {
    if (
      IS_ANIMATION &&
      $elem.css('animation-name') === 'none' &&
      $elem.css('-webkit-animation-name') === 'none' &&
      $elem.css('-moz-animation-name') === 'none' &&
      $elem.css('-o-animation-name') === 'none' &&
      $elem.css('-ms-animation-name') === 'none'
    ) {
      return 0;
    }

    var duration = $elem.css('animation-duration') ||
      $elem.css('-webkit-animation-duration') ||
      $elem.css('-moz-animation-duration') ||
      $elem.css('-o-animation-duration') ||
      $elem.css('-ms-animation-duration') ||
      '0s';

    var delay = $elem.css('animation-delay') ||
      $elem.css('-webkit-animation-delay') ||
      $elem.css('-moz-animation-delay') ||
      $elem.css('-o-animation-delay') ||
      $elem.css('-ms-animation-delay') ||
      '0s';

    var iterationCount = $elem.css('animation-iteration-count') ||
      $elem.css('-webkit-animation-iteration-count') ||
      $elem.css('-moz-animation-iteration-count') ||
      $elem.css('-o-animation-iteration-count') ||
      $elem.css('-ms-animation-iteration-count') ||
      '1';

    var max;
    var len;
    var num;
    var i;

    duration = duration.split(', ');
    delay = delay.split(', ');
    iterationCount = iterationCount.split(', ');

    // The 'duration' size is the same as the 'delay' size
    for (i = 0, len = duration.length, max = Number.NEGATIVE_INFINITY; i < len; i++) {
      num = parseFloat(duration[i]) * parseInt(iterationCount[i], 10) + parseFloat(delay[i]);

      if (num > max) {
        max = num;
      }
    }

    return max;
  }

  /**
   * Returns a scrollbar width
   * @private
   * @returns {Number}
   */
  function getScrollbarWidth() {
    if ($(document.body).height() <= $(window).height()) {
      return 0;
    }

    var outer = document.createElement('div');
    var inner = document.createElement('div');
    var widthNoScroll;
    var widthWithScroll;

    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    document.body.appendChild(outer);

    widthNoScroll = outer.offsetWidth;

    // Force scrollbars
    outer.style.overflow = 'scroll';

    // Add inner div
    inner.style.width = '100%';
    outer.appendChild(inner);

    widthWithScroll = inner.offsetWidth;

    // Remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  /**
   * Locks the screen
   * @private
   */
  function lockScreen() {
    if (IS_IOS) {
      return;
    }

    var $html = $('html');
    var lockedClass = namespacify('is-locked');
    var paddingRight;
    var $body;

    if (!$html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) + getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.addClass(lockedClass);
    }
  }

  /**
   * Unlocks the screen
   * @private
   */
  function unlockScreen() {
    if (IS_IOS) {
      return;
    }

    var $html = $('html');
    var lockedClass = namespacify('is-locked');
    var paddingRight;
    var $body;

    if ($html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) - getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.removeClass(lockedClass);
    }
  }

  /**
   * Sets a state for an instance
   * @private
   * @param {Remodal} instance
   * @param {STATES} state
   * @param {Boolean} isSilent If true, Remodal does not trigger events
   * @param {String} Reason of a state change.
   */
  function setState(instance, state, isSilent, reason) {

    var newState = namespacify('is', state);
    var allStates = [namespacify('is', STATES.CLOSING),
                     namespacify('is', STATES.OPENING),
                     namespacify('is', STATES.CLOSED),
                     namespacify('is', STATES.OPENED)].join(' ');

    instance.$bg
      .removeClass(allStates)
      .addClass(newState);

    instance.$overlay
      .removeClass(allStates)
      .addClass(newState);

    instance.$wrapper
      .removeClass(allStates)
      .addClass(newState);

    instance.$modal
      .removeClass(allStates)
      .addClass(newState);

    instance.state = state;
    !isSilent && instance.$modal.trigger({
      type: state,
      reason: reason
    }, [{ reason: reason }]);
  }

  /**
   * Synchronizes with the animation
   * @param {Function} doBeforeAnimation
   * @param {Function} doAfterAnimation
   * @param {Remodal} instance
   */
  function syncWithAnimation(doBeforeAnimation, doAfterAnimation, instance) {
    var runningAnimationsCount = 0;

    var handleAnimationStart = function(e) {
      if (e.target !== this) {
        return;
      }

      runningAnimationsCount++;
    };

    var handleAnimationEnd = function(e) {
      if (e.target !== this) {
        return;
      }

      if (--runningAnimationsCount === 0) {

        // Remove event listeners
        $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
          instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
        });

        doAfterAnimation();
      }
    };

    $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
      instance[elemName]
        .on(ANIMATIONSTART_EVENTS, handleAnimationStart)
        .on(ANIMATIONEND_EVENTS, handleAnimationEnd);
    });

    doBeforeAnimation();

    // If the animation is not supported by a browser or its duration is 0
    if (
      getAnimationDuration(instance.$bg) === 0 &&
      getAnimationDuration(instance.$overlay) === 0 &&
      getAnimationDuration(instance.$wrapper) === 0 &&
      getAnimationDuration(instance.$modal) === 0
    ) {

      // Remove event listeners
      $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
        instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
      });

      doAfterAnimation();
    }
  }

  /**
   * Closes immediately
   * @private
   * @param {Remodal} instance
   */
  function halt(instance) {
    if (instance.state === STATES.CLOSED) {
      return;
    }

    $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
      instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
    });

    instance.$bg.removeClass(instance.settings.modifier);
    instance.$overlay.removeClass(instance.settings.modifier).hide();
    instance.$wrapper.hide();
    unlockScreen();
    setState(instance, STATES.CLOSED, true);
  }

  /**
   * Parses a string with options
   * @private
   * @param str
   * @returns {Object}
   */
  function parseOptions(str) {
    var obj = {};
    var arr;
    var len;
    var val;
    var i;

    // Remove spaces before and after delimiters
    str = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',');

    // Parse a string
    arr = str.split(',');
    for (i = 0, len = arr.length; i < len; i++) {
      arr[i] = arr[i].split(':');
      val = arr[i][1];

      // Convert a string value if it is like a boolean
      if (typeof val === 'string' || val instanceof String) {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string' || val instanceof String) {
        val = !isNaN(val) ? +val : val;
      }

      obj[arr[i][0]] = val;
    }

    return obj;
  }

  /**
   * Generates a string separated by dashes and prefixed with NAMESPACE
   * @private
   * @param {...String}
   * @returns {String}
   */
  function namespacify() {
    var result = NAMESPACE;

    for (var i = 0; i < arguments.length; ++i) {
      result += '-' + arguments[i];
    }

    return result;
  }

  /**
   * Handles the hashchange event
   * @private
   * @listens hashchange
   */
  function handleHashChangeEvent() {
    var id = location.hash.replace('#', '');
    var instance;
    var $elem;

    if (!id) {

      // Check if we have currently opened modal and animation was completed
      if (current && current.state === STATES.OPENED && current.settings.hashTracking) {
        current.close();
      }
    } else {

      // Catch syntax error if your hash is bad
      try {
        $elem = $(
          '[data-' + PLUGIN_NAME + '-id="' + id + '"]'
        );
      } catch (err) {}

      if ($elem && $elem.length) {
        instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];

        if (instance && instance.settings.hashTracking) {
          instance.open();
        }
      }

    }
  }

  /**
   * Remodal constructor
   * @constructor
   * @param {jQuery} $modal
   * @param {Object} options
   */
  function Remodal($modal, options) {
    var $body = $(document.body);
    var $appendTo = $body;
    var remodal = this;

    remodal.settings = $.extend({}, DEFAULTS, options);
    remodal.index = $[PLUGIN_NAME].lookup.push(remodal) - 1;
    remodal.state = STATES.CLOSED;

    remodal.$overlay = $('.' + namespacify('overlay'));

    if (remodal.settings.appendTo !== null && remodal.settings.appendTo.length) {
      $appendTo = $(remodal.settings.appendTo);
    }

    if (!remodal.$overlay.length) {
      remodal.$overlay = $('<div>').addClass(namespacify('overlay') + ' ' + namespacify('is', STATES.CLOSED)).hide();
      $appendTo.append(remodal.$overlay);
    }

    remodal.$bg = $('.' + namespacify('bg')).addClass(namespacify('is', STATES.CLOSED));

    remodal.$modal = $modal
      .addClass(
        NAMESPACE + ' ' +
        namespacify('is-initialized') + ' ' +
        remodal.settings.modifier + ' ' +
        namespacify('is', STATES.CLOSED))
      .attr('tabindex', '-1');

    remodal.$wrapper = $('<div>')
      .addClass(
        namespacify('wrapper') + ' ' +
        remodal.settings.modifier + ' ' +
        namespacify('is', STATES.CLOSED))
      .hide()
      .append(remodal.$modal);
    $appendTo.append(remodal.$wrapper);

    // Add the event listener for the close button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="close"]', function(e) {
      e.preventDefault();

      remodal.close();
    });

    // Add the event listener for the cancel button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="cancel"]', function(e) {
      e.preventDefault();

      remodal.$modal.trigger(STATE_CHANGE_REASONS.CANCELLATION);

      if (remodal.settings.closeOnCancel) {
        remodal.close(STATE_CHANGE_REASONS.CANCELLATION);
      }
    });

    // Add the event listener for the confirm button
    remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="confirm"]', function(e) {
      e.preventDefault();

      remodal.$modal.trigger(STATE_CHANGE_REASONS.CONFIRMATION);

      if (remodal.settings.closeOnConfirm) {
        remodal.close(STATE_CHANGE_REASONS.CONFIRMATION);
      }
    });

    // Add the event listener for the overlay
    remodal.$wrapper.on('click.' + NAMESPACE, function(e) {
      var $target = $(e.target);

      if (!$target.hasClass(namespacify('wrapper'))) {
        return;
      }

      if (remodal.settings.closeOnOutsideClick) {
        remodal.close();
      }
    });
  }

  /**
   * Opens a modal window
   * @public
   */
  Remodal.prototype.open = function() {
    var remodal = this;
    var id;

    // Check if the animation was completed
    if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING) {
      return;
    }

    id = remodal.$modal.attr('data-' + PLUGIN_NAME + '-id');

    if (id && remodal.settings.hashTracking) {
      scrollTop = $(window).scrollTop();
      location.hash = id;
    }

    if (current && current !== remodal) {
      halt(current);
    }

    current = remodal;
    lockScreen();
    remodal.$bg.addClass(remodal.settings.modifier);
    remodal.$overlay.addClass(remodal.settings.modifier).show();
    remodal.$wrapper.show().scrollTop(0);
    remodal.$modal.focus();

    syncWithAnimation(
      function() {
        setState(remodal, STATES.OPENING);
      },

      function() {
        setState(remodal, STATES.OPENED);
      },

      remodal);
  };

  /**
   * Closes a modal window
   * @public
   * @param {String} reason
   */
  Remodal.prototype.close = function(reason) {
    var remodal = this;

    // Check if the animation was completed
    if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING) {
      return;
    }

    if (
      remodal.settings.hashTracking &&
      remodal.$modal.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
    ) {
      location.hash = '';
      $(window).scrollTop(scrollTop);
    }

    syncWithAnimation(
      function() {
        setState(remodal, STATES.CLOSING, false, reason);
      },

      function() {
        remodal.$bg.removeClass(remodal.settings.modifier);
        remodal.$overlay.removeClass(remodal.settings.modifier).hide();
        remodal.$wrapper.hide();
        unlockScreen();

        setState(remodal, STATES.CLOSED, false, reason);
      },

      remodal);
  };

  /**
   * Returns a current state of a modal
   * @public
   * @returns {STATES}
   */
  Remodal.prototype.getState = function() {
    return this.state;
  };

  /**
   * Destroys a modal
   * @public
   */
  Remodal.prototype.destroy = function() {
    var lookup = $[PLUGIN_NAME].lookup;
    var instanceCount;

    halt(this);
    this.$wrapper.remove();

    delete lookup[this.index];
    instanceCount = $.grep(lookup, function(instance) {
      return !!instance;
    }).length;

    if (instanceCount === 0) {
      this.$overlay.remove();
      this.$bg.removeClass(
        namespacify('is', STATES.CLOSING) + ' ' +
        namespacify('is', STATES.OPENING) + ' ' +
        namespacify('is', STATES.CLOSED) + ' ' +
        namespacify('is', STATES.OPENED));
    }
  };

  /**
   * Special plugin object for instances
   * @public
   * @type {Object}
   */
  $[PLUGIN_NAME] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @constructor
   * @param {Object} options
   * @returns {JQuery}
   */
  $.fn[PLUGIN_NAME] = function(opts) {
    var instance;
    var $elem;

    this.each(function(index, elem) {
      $elem = $(elem);

      if ($elem.data(PLUGIN_NAME) == null) {
        instance = new Remodal($elem, opts);
        $elem.data(PLUGIN_NAME, instance.index);

        if (
          instance.settings.hashTracking &&
          $elem.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
        ) {
          instance.open();
        }
      } else {
        instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];
      }
    });

    return instance;
  };

  $(document).ready(function() {

    // data-remodal-target opens a modal window with the special Id
    $(document).on('click', '[data-' + PLUGIN_NAME + '-target]', function(e) {
      e.preventDefault();

      var elem = e.currentTarget;
      var id = elem.getAttribute('data-' + PLUGIN_NAME + '-target');
      var $target = $('[data-' + PLUGIN_NAME + '-id="' + id + '"]');

      $[PLUGIN_NAME].lookup[$target.data(PLUGIN_NAME)].open();
    });

    // Auto initialization of modal windows
    // They should have the 'remodal' class attribute
    // Also you can write the `data-remodal-options` attribute to pass params into the modal
    $(document).find('.' + NAMESPACE).each(function(i, container) {
      var $container = $(container);
      var options = $container.data(PLUGIN_NAME + '-options');

      if (!options) {
        options = {};
      } else if (typeof options === 'string' || options instanceof String) {
        options = parseOptions(options);
      }

      $container[PLUGIN_NAME](options);
    });

    // Handles the keydown event
    $(document).on('keydown.' + NAMESPACE, function(e) {
      if (current && current.settings.closeOnEscape && current.state === STATES.OPENED && e.keyCode === 27) {
        current.close();
      }
    });

    // Handles the hashchange event
    $(window).on('hashchange.' + NAMESPACE, handleHashChangeEvent);
  });
});


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(88)

/* script */
__vue_exports__ = __webpack_require__(130)

/* template */
var __vue_template__ = __webpack_require__(76)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/DashBoard.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c372916", __vue_options__)
  } else {
    hotAPI.reload("data-v-9c372916", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] DashBoard.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(84)

/* script */
__vue_exports__ = __webpack_require__(131)

/* template */
var __vue_template__ = __webpack_require__(71)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/Login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39690b2c", __vue_options__)
  } else {
    hotAPI.reload("data-v-39690b2c", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] Login.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(133)

/* template */
var __vue_template__ = __webpack_require__(75)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/article/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b3df49a", __vue_options__)
  } else {
    hotAPI.reload("data-v-7b3df49a", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(89)

/* script */
__vue_exports__ = __webpack_require__(134)

/* template */
var __vue_template__ = __webpack_require__(79)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/article/list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f18fe7f4", __vue_options__)
  } else {
    hotAPI.reload("data-v-f18fe7f4", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(135)

/* template */
var __vue_template__ = __webpack_require__(78)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/jsPatch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efea4b40", __vue_options__)
  } else {
    hotAPI.reload("data-v-efea4b40", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] jsPatch.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(80)

/* script */
__vue_exports__ = __webpack_require__(136)

/* template */
var __vue_template__ = __webpack_require__(66)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/addVoteOption.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0143dd83", __vue_options__)
  } else {
    hotAPI.reload("data-v-0143dd83", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] addVoteOption.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(83)

/* script */
__vue_exports__ = __webpack_require__(137)

/* template */
var __vue_template__ = __webpack_require__(69)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/cropImg.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-222c1854"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-222c1854", __vue_options__)
  } else {
    hotAPI.reload("data-v-222c1854", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] cropImg.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(85)

/* script */
__vue_exports__ = __webpack_require__(138)

/* template */
var __vue_template__ = __webpack_require__(72)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/field.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5000c606", __vue_options__)
  } else {
    hotAPI.reload("data-v-5000c606", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] field.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(87)

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/pagination.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78e8fcb2", __vue_options__)
  } else {
    hotAPI.reload("data-v-78e8fcb2", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(86)

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(73)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/popup/confirm.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65de1fe0", __vue_options__)
  } else {
    hotAPI.reload("data-v-65de1fe0", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] confirm.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(142)

/* template */
var __vue_template__ = __webpack_require__(70)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/richTextEdit.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ed73620", __vue_options__)
  } else {
    hotAPI.reload("data-v-2ed73620", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] richTextEdit.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(81)

/* script */
__vue_exports__ = __webpack_require__(143)

/* template */
var __vue_template__ = __webpack_require__(67)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangjie/Desktop/jie/StarCity/static/src/components/utils/upload.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0c9561e4"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c9561e4", __vue_options__)
  } else {
    hotAPI.reload("data-v-0c9561e4", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] upload.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "form-item form-group"
  }, [_c('label', [_vm._v("投票选项添加")]), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.addVote()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.input),
      expression: "input"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "输入选项文字"
    },
    domProps: {
      "value": _vm._s(_vm.input)
    },
    on: {
      "keyup": function($event) {
        if ($event.keyCode !== 13) { return; }
        _vm.addVote()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.input = $event.target.value
      }
    }
  })]), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.voteOptions.length),
      expression: "voteOptions.length"
    }],
    staticClass: "list well"
  }, _vm._l((_vm.voteOptions), function(list, index) {
    return _c('li', [_c('input', {
      directives: [{
        name: "tfocus",
        rawName: "v-tfocus",
        value: (_vm.editable == index),
        expression: "editable == index"
      }, {
        name: "show",
        rawName: "v-show",
        value: (_vm.editable == index),
        expression: "editable == index"
      }],
      staticClass: "editable form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": list.Title
      },
      on: {
        "blur": function($event) {
          _vm.saveVote(list.Id)
        }
      }
    }), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.editable != index),
        expression: "editable != index"
      }],
      staticClass: "content data-tip-top data-tip-rounded",
      attrs: {
        "data-tip": "双击进行编辑"
      },
      on: {
        "dblclick": function($event) {
          _vm.editVote(list.Id)
        }
      }
    }, [_vm._v(_vm._s(list.Title)), _c('div', {
      staticClass: "close",
      on: {
        "click": function($event) {
          _vm.delVote(list, index)
        }
      }
    }, [_vm._v("×")])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0143dd83", module.exports)
  }
}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "form-group input-group-lg"
  }, [_c('label', [_vm._v(_vm._s(_vm.model.label))]), _c('div', {
    staticClass: "upload-wrap"
  }, [_c('div', {
    staticClass: "upload-btn btn btn-primary"
  }, [_c('input', {
    ref: "file",
    attrs: {
      "type": "file"
    },
    on: {
      "change": function($event) {
        _vm.upload()
      }
    }
  }), _c('i', {
    staticClass: "fa fa-cloud-upload"
  }), _vm._v("选择图片")]), _c('span', {
    staticClass: "upload-progress"
  }, [_vm._v(_vm._s(_vm.progress))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.source),
      expression: "source"
    }],
    staticClass: "upload-preview"
  }, [(_vm.type == 'image') ? _c('span', {
    staticClass: "preview-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.source
    }
  }), _c('a', {
    staticClass: "zoom data-tip-bottom data-tip-rounded",
    attrs: {
      "href": _vm.source,
      "target": "_blank",
      "data-tip": "查看原图"
    }
  }, [_c('i', {
    staticClass: "fa fa-search-plus"
  })])]) : _vm._e(), (_vm.type == 'music') ? _c('audio', {
    attrs: {
      "src": _vm.source,
      "controls": "controls"
    }
  }) : _vm._e(), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.source),
      expression: "source"
    }],
    ref: "selected",
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": _vm.name
    },
    domProps: {
      "value": _vm._s(_vm.source)
    },
    on: {
      "focus": function($event) {
        _vm.selectAll()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.source = $event.target.value
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0c9561e4", module.exports)
  }
}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "spinner"
  }, [_vm._m(0), _vm._v(" " + _vm._s(_vm.txt))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('span', {
    staticClass: "loading"
  }, [_c('i', {
    staticClass: "fa fa-spinner"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1b700502", module.exports)
  }
}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "vue-compontent form-group"
  }, [_c('div', {
    staticClass: "crop-img input-item"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.label) + "（格式仅支持PNG，JPG，GIF）")]), _c('input', {
    attrs: {
      "name": "${name}",
      "value": "${value}",
      "type": "hidden"
    }
  }), _c('div', {
    staticClass: "upload-pic upload-file"
  }, [_c('input', {
    ref: "file",
    staticClass: "file",
    attrs: {
      "type": "file"
    }
  }), _vm._m(0), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cropping),
      expression: "cropping"
    }],
    staticClass: "progress"
  }, [_vm._v("剪切中...")]), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.uploading),
      expression: "uploading"
    }],
    staticClass: "progress"
  }, [_vm._v("上传中...")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "preview fn-dib"
  }, [_c('img', {
    attrs: {
      "src": _vm.value
    }
  }), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.uploadType !== 'gif'),
      expression: "uploadType !== 'gif'"
    }],
    staticClass: "bg",
    on: {
      "click": function($event) {
        _vm.preview_edit()
      }
    }
  }, [_c('i', {
    staticClass: "g-icon-edit"
  })])])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.preview_src),
      expression: "preview_src"
    }],
    ref: "popup",
    staticClass: "crop-img-wrap"
  }, [_c('img', {
    ref: "img",
    attrs: {
      "src": _vm.preview_src
    }
  }), _c('div', {
    staticClass: "crop-option"
  }, [_c('span', {
    staticClass: "zoom"
  }, [_c('span', {
    staticClass: "crop-add",
    on: {
      "click": function($event) {
        _vm.crop_add()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })]), _vm._v(" "), _c('span', {
    staticClass: "crop-minus",
    on: {
      "click": function($event) {
        _vm.crop_minus()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-minus"
  })])]), _c('span', {
    staticClass: "crop-confirm btn btn-primary",
    on: {
      "click": function($event) {
        _vm.handleConfirmBtn()
      }
    }
  }, [_vm._v("确认")]), _vm._v(" "), _c('span', {
    staticClass: "crop-cancel btn btn-default",
    attrs: {
      "data-remodal-action": "close"
    }
  }, [_vm._v("取消")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('button', {
    staticClass: "btn btn-primary upload-btn"
  }, [_c('i', {
    staticClass: "fa fa-cloud-upload"
  }), _vm._v(" 选择图片")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-222c1854", module.exports)
  }
}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.model.label))]), _c('textarea', {
    staticClass: "form-control",
    attrs: {
      "name": _vm.model.name
    }
  }, [_vm._v(_vm._s(_vm.richText))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2ed73620", module.exports)
  }
}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4 col-md-offset-4"
  }, [_c('div', {
    staticClass: "login-panel panel panel-default"
  }, [_vm._m(0), _c('div', {
    staticClass: "panel-body"
  }, [_c('fieldset', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("手机号")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "输入手机号码"
    },
    domProps: {
      "value": _vm._s(_vm.username)
    },
    on: {
      "keyup": function($event) {
        if ($event.keyCode !== 13) { return; }
        _vm.login()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })]), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("密码")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "placeholder": "输入密码"
    },
    domProps: {
      "value": _vm._s(_vm.password)
    },
    on: {
      "keyup": function($event) {
        if ($event.keyCode !== 13) { return; }
        _vm.login()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "btn-block btn btn-success",
    attrs: {
      "value": "登录 ^_^ !"
    },
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  })])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("StarCity 后台登录")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-39690b2c", module.exports)
  }
}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "form-item"
  }, [(_vm.model.type == 'text') ? _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.model.error
    }
  }, [_c('label', {
    staticClass: "control-label"
  }, [_vm._v(_vm._s(_vm.model.label))]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model.value),
      expression: "model.value"
    }],
    staticClass: "form-control",
    class: _vm.cls,
    attrs: {
      "name": _vm.model.name,
      "type": "text",
      "id": _vm.id
    },
    domProps: {
      "value": _vm._s(_vm.model.value)
    },
    on: {
      "change": _vm.changeModel,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.model.value = $event.target.value
      }
    }
  }), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.model.error),
      expression: "model.error"
    }],
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.model.errorMsg))])]) : _vm._e(), (_vm.model.type == 'select') ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.model.label))]), (_vm.model.name == 'Status') ? [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model.value),
      expression: "model.value"
    }],
    staticClass: "form-control",
    class: _vm.cls,
    attrs: {
      "name": _vm.model.name,
      "id": _vm.id
    },
    on: {
      "change": function($event) {
        _vm.model.value = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        })[0]
      }
    }
  }, _vm._l((_vm.status), function(o) {
    return _c('option', {
      domProps: {
        "value": o
      }
    }, [_vm._v(_vm._s(_vm._f("toStatusCn")(o)))])
  }))] : _vm._e()], true) : _vm._e(), (_vm.model.type == 'image') ? _c('div', {
    staticClass: "form-group"
  }, [_c('upload', {
    attrs: {
      "model": _vm.model
    }
  })]) : _vm._e(), (_vm.model.type == 'richText') ? _c('div', {
    staticClass: "form-group"
  }, [_c('richTextEdit', {
    attrs: {
      "model": _vm.model
    }
  })]) : _vm._e(), (_vm.model.type == 'cropImg') ? _c('div', {
    staticClass: "form-group"
  }, [_c('crop-img', {
    attrs: {
      "model": _vm.model,
      "label": "专辑封面(400X400)",
      "configs": {
        aspectRatio: 1 / 1
      }
    }
  })]) : _vm._e(), (_vm.model.type == 'hidden') ? _c('div', [(_vm.model.type == 'hidden') ? _c('input', {
    staticClass: "form-control",
    class: _vm.cls,
    attrs: {
      "label": _vm.model.label,
      "name": _vm.model.name,
      "type": _vm.model.type,
      "id": _vm.id,
      "model": _vm.model.value
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5000c606", module.exports)
  }
}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('span', {
    staticClass: "popup"
  }, [_c('button', {
    staticClass: "btn btn-sm",
    class: _vm.cls,
    attrs: {
      "type": "button",
      "id": _vm.id,
      "data-target": _vm.targetId,
      "data-url": _vm.url
    },
    on: {
      "click": function($event) {
        _vm.handleClick()
      }
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.icon),
      expression: "icon"
    }],
    class: _vm.icon
  }), _vm._v(_vm._s(_vm.text))]), _c('div', {
    staticClass: "modal fade-scale",
    attrs: {
      "tabindex": "-1",
      "role": "dialog",
      "aria-labelledby": "myModalLabel",
      "id": _vm.targetId
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(0), _c('div', {
    staticClass: "modal-body"
  }, [_c('h2', [_c('i', {
    staticClass: "fa fa-alert"
  }), _vm._v(_vm._s(_vm.alertMsg))])]), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("取消")]), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleConfirm
    }
  }, [_vm._v("确认")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "myModalLabel"
    }
  }, [_vm._v("操作提示")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-65de1fe0", module.exports)
  }
}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('nav', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page.total > _vm.page.limit),
      expression: "page.total > page.limit"
    }],
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "disabled": _vm.page.start == 0
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.goTo(0)
      }
    }
  }, [_vm._v("首页")]), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentPage > 1),
      expression: "currentPage > 1"
    }],
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.goTo(_vm.currentPage - 2)
      }
    }
  }, [_vm._v("上一页")]), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.totalPage != _vm.currentPage),
      expression: "totalPage != currentPage "
    }],
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.goTo(_vm.currentPage)
      }
    }
  }, [_vm._v("下一页")]), _c('button', {
    staticClass: "btn btn-default",
    class: {
      active: _vm.currentPage > _vm.totalPage
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.goTo(_vm.totalPage)
      }
    }
  }, [_vm._v("末页")])]), _vm._v("    " + _vm._s(_vm.currentPage) + " / " + _vm._s(_vm.totalPage) + " 页，共 " + _vm._s(this.page.total) + " 条记录。")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-78e8fcb2", module.exports)
  }
}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "article"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.tabName) + "管理")]), _c('ul', {
    staticClass: "nav nav-tabs"
  }, [_c('li', {
    class: {
      active: _vm.name == 'articleList'
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'articleList',
        params: {
          type: _vm.type
        }
      }
    }
  }, [_vm._v(_vm._s(_vm.tabName) + "列表")])]), _c('li', {
    class: {
      active: _vm.name == 'articleCreate'
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'articleCreate',
        params: {
          type: _vm.type
        }
      }
    }
  }, [_vm._v("新建" + _vm._s(_vm.tabName))])])]), _c('transition', {
    attrs: {
      "name": "slide-fade",
      "mode": "out-in"
    }
  }, [_c('router-view')])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7b3df49a", module.exports)
  }
}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "dashboard"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("星座城后台")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9c372916", module.exports)
  }
}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "article-edit"
  }, [(_vm.$route.params.type != 4) ? _c('div', [_c('field', {
    attrs: {
      "model": _vm.model.Title
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Description
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Topic
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Author
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Url
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Status
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Type
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Props.WebHeaderImg
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Props.Thumb
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Props.ShareImg
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Props.Content
    }
  })]) : _c('div', [_c('field', {
    attrs: {
      "model": _vm.model.Title
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Description
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Topic
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Author
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Status
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Type
    }
  }), _c('add-vote-option', {
    attrs: {
      "model": _vm.model.Id
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Props.WebHeaderImg
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Props.Thumb
    }
  }), _c('field', {
    attrs: {
      "model": _vm.model.Props.ShareImg
    }
  })]), _c('div', {
    staticClass: "fix-operate"
  }, [_c('button', {
    staticClass: "btn btn-success",
    on: {
      "click": function($event) {
        _vm.savePost()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save"
  }), _vm._v("保存")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d2ff991c", module.exports)
  }
}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "jspatch"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("前端 Patch 更新")]), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.input),
      expression: "input"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "输入ZIP链接"
    },
    domProps: {
      "value": _vm._s(_vm.input)
    },
    on: {
      "keyup": function($event) {
        if ($event.keyCode !== 13) { return; }
        _vm.jsPatch()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.input = $event.target.value
      }
    }
  })]), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.jsPatch()
      }
    }
  }, [_vm._v("更新")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-efea4b40", module.exports)
  }
}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('div', {
    staticClass: "article-list"
  }, [_c('loading', {
    attrs: {
      "loading": _vm.loading
    }
  }), _c('table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "table table-striped table-hover table-bordered table-responsive"
  }, [_vm._m(0), _c('tbody', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page.total == 0),
      expression: "page.total == 0"
    }]
  }, [_c('tr', [_c('td', {
    attrs: {
      "colspan": "8",
      "align": "center"
    }
  }, [_vm._v("没有" + _vm._s(_vm.typeCn) + "数据")])])]), _c('tbody', _vm._l((_vm.Articles), function(article, index) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(article.Id))]), _c('td', [_vm._v(_vm._s(article.Title))]), _c('td', [_c('div', {
      staticClass: "h4"
    }, [_c('span', {
      staticClass: "label label-info"
    }, [_vm._v(_vm._s(_vm._f("toStatusCn")(article.Status)))])])]), _c('td', [_vm._v(_vm._s(article.Author))]), _c('td', [_vm._v(_vm._s(_vm._f("formatDate")(article.CreateTime, 'YY-MM-DD hh:mm')))]), _c('td', [_c('div', {
      staticClass: "btns"
    }, [_c('router-link', {
      staticClass: "btn btn-sm btn-primary",
      attrs: {
        "to": {
          name: 'articleEdit',
          params: {
            'id': article.Id
          }
        }
      }
    }, [_vm._v("编辑")]), _c('confirm-pop', {
      attrs: {
        "data-list-key": "Articles",
        "index": index,
        "id": 'del_' + article.Id,
        "target-id": 'delete-popup-' + article.Id,
        "text": "删除",
        "params": {
          'id': article.Id
        }
      }
    }), _c('a', {
      staticClass: "btn btn-sm btn-info"
    }, [_vm._v("浏览")])])])])
  }))]), _c('pagination', {
    attrs: {
      "page": _vm.page,
      "model": _vm.model,
      "data-list-key": "Articles"
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("ID")]), _c('th', [_vm._v("标题")]), _c('th', [_vm._v("状态")]), _c('th', [_vm._v("作者")]), _c('th', [_vm._v("创建时间")]), _c('th', [_vm._v("操作")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f18fe7f4", module.exports)
  }
}

/***/ },
/* 80 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 81 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 82 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 83 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 84 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 85 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 86 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 87 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 88 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 89 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 90 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 91 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.1.1
  * (c) 2016 Evan You
  * @license MIT
  */
'use strict';

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true

    var route = parent.$route
    var cache = parent._routerViewCache || (parent._routerViewCache = {})
    var depth = 0
    var inactive = false

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++
      }
      if (parent._inactive) {
        inactive = true
      }
      parent = parent.$parent
    }

    data.routerViewDepth = depth
    var matched = route.matched[depth]
    if (!matched) {
      return h()
    }

    var name = props.name
    var component = inactive
      ? cache[name]
      : (cache[name] = matched.components[name])

    if (!inactive) {
      var hooks = data.hook || (data.hook = {})
      hooks.init = function (vnode) {
        matched.instances[name] = vnode.child
      }
      hooks.prepatch = function (oldVnode, vnode) {
        matched.instances[name] = vnode.child
      }
      hooks.destroy = function (vnode) {
        if (matched.instances[name] === vnode.child) {
          matched.instances[name] = undefined
        }
      }
    }

    return h(component, data, children)
  }
}

/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
  }
}

/*  */

var encode = encodeURIComponent
var decode = decodeURIComponent

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  if (query) {
    var parsedQuery
    try {
      parsedQuery = parseQuery(query)
    } catch (e) {
      process.env.NODE_ENV !== 'production' && warn(false, e.message)
      parsedQuery = {}
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key]
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = {}

  query = query.trim().replace(/^(\?|#|&)/, '')

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=')
    var key = decode(parts.shift())
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null

    if (res[key] === undefined) {
      res[key] = val
    } else if (Array.isArray(res[key])) {
      res[key].push(val)
    } else {
      res[key] = [res[key], val]
    }
  })

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key]

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = []
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key))
        } else {
          result.push(encode(key) + '=' + encode(val2))
        }
      })
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null
  return res ? ("?" + res) : ''
}

/*  */

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  }
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom)
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
})

function formatMatch (record) {
  var res = []
  while (record) {
    res.unshift(record)
    record = record.parent
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  return (path || '/') + stringifyQuery(query) + hash
}

var trailingSlashRE = /\/$/
function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a)
  var bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.indexOf(target.path.replace(/\/$/, '')) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object]

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    event: {
      type: [String, Array],
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router
    var current = this.$route
    var ref = router.resolve(this.to, current, this.append);
    var normalizedTo = ref.normalizedTo;
    var resolved = ref.resolved;
    var href = ref.href;
    var classes = {}
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
    var compareTarget = normalizedTo.path ? createRoute(null, normalizedTo) : resolved
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget)

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(normalizedTo)
        } else {
          router.push(normalizedTo)
        }
      }
    }

    var on = { click: guardEvent }
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler })
    } else {
      on[this.event] = handler
    }

    var data = {
      class: classes
    }

    if (this.tag === 'a') {
      data.on = on
      data.attrs = { href: href }
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default)
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false
        var extend = _Vue.util.extend
        var aData = a.data = extend({}, a.data)
        aData.on = on
        var aAttrs = a.data.attrs = extend({}, a.data.attrs)
        aAttrs.href = href
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  /* istanbul ignore if */
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  /* istanbul ignore if */
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  /* istanbul ignore if */
  if (e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  /* istanbul ignore if */
  var target = e.target.getAttribute('target')
  if (/\b_blank\b/i.test(target)) { return }

  e.preventDefault()
  return true
}

function findAnchor (children) {
  if (children) {
    var child
    for (var i = 0; i < children.length; i++) {
      child = children[i]
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue

function install (Vue) {
  if (install.installed) { return }
  install.installed = true

  _Vue = Vue

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get$1 () { return this.$root._route }
  })

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      }
    }
  })

  Vue.component('router-view', View)
  Vue.component('router-link', Link)

  var strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/')
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i]
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop()
    } else {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = ''
  var query = ''

  var hashIndex = path.indexOf('#')
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex)
    path = path.slice(0, hashIndex)
  }

  var queryIndex = path.indexOf('?')
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1)
    path = path.slice(0, queryIndex)
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function createRouteMap (routes) {
  var pathMap = Object.create(null)
  var nameMap = Object.create(null)

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route)
  })

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.")
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    )
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {}
  }

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(false, ("Named Route '" + (route.name) + "' has a default child route.\n          When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), the default child route will not be rendered.\n          Remove the name from this route and use the name of the default child route for named links instead.")
        )
      }
    }
    route.children.forEach(function (child) {
      addRouteRecord(pathMap, nameMap, child, record)
    })
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
      })
    } else {
      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record
  }
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, ("Duplicate named routes definition: { name: \"" + name + "\", path: \"" + (record.path) + "\" }"))
    }
  }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '')
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

var __moduleExports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = __moduleExports

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp
var parse_1 = parse
var compile_1 = compile
var tokensToFunction_1 = tokensToFunction
var tokensToRegExp_1 = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCache = Object.create(null)

function getRouteRegex (path) {
  var hit = regexpCache[path]
  var keys, regexp

  if (hit) {
    keys = hit.keys
    regexp = hit.regexp
  } else {
    keys = []
    regexp = index(path, keys)
    regexpCache[path] = { keys: keys, regexp: regexp }
  }

  return { keys: keys, regexp: regexp }
}

var regexpCompileCache = Object.create(null)

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path))
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)))
    }
    return ''
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next)
    next._normalized = true
    var params = assign(assign({}, current.params), next.params)
    if (current.name) {
      next.name = current.name
      next.params = params
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path
      next.path = fillParams(rawPath, params, ("path " + (current.path)))
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.")
    }
    return next
  }

  var parsedPath = parsePath(next.path || '')
  var basePath = (current && current.path) || '/'
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : (current && current.path) || '/'
  var query = resolveQuery(parsedPath.query, next.query)
  var hash = next.hash || parsedPath.hash
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key]
  }
  return a
}

/*  */

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute)
    var name = location.name;

    if (name) {
      var record = nameMap[name]
      var paramNames = getRouteRegex(record.path).keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; })

      if (typeof location.params !== 'object') {
        location.params = {}
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key]
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {}
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect

    if (typeof redirect === 'string') {
      redirect = { path: redirect }
    }

    if (!redirect || typeof redirect !== 'object') {
      process.env.NODE_ENV !== 'production' && warn(
        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
      )
      return _createRoute(null, location)
    }

    var re = redirect
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query
    hash = re.hasOwnProperty('hash') ? re.hash : hash
    params = re.hasOwnProperty('params') ? re.params : params

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name]
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record)
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    })
    if (aliasedMatch) {
      var matched = aliasedMatch.matched
      var aliasedRecord = matched[matched.length - 1]
      location.params = aliasedMatch.params
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return match
}

function matchRoute (
  path,
  params,
  pathname
) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp)

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1]
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
    if (key) { params[key.name] = val }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var inBrowser = typeof window !== 'undefined'

var supportsHistory = inBrowser && (function () {
  var ua = window.navigator.userAgent

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})()

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb()
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1)
        })
      } else {
        step(index + 1)
      }
    }
  }
  step(0)
}

/*  */


var History = function History (router, base) {
  this.router = router
  this.base = normalizeBase(base)
  // start with a route object that stands for "nowhere"
  this.current = START
  this.pending = null
};

History.prototype.listen = function listen (cb) {
  this.cb = cb
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current)
  this.confirmTransition(route, function () {
    this$1.updateRoute(route)
    onComplete && onComplete(route)
    this$1.ensureURL()
  }, onAbort)
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current
  var abort = function () { onAbort && onAbort() }
  if (isSameRoute(route, current)) {
    this.ensureURL()
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  )

  this.pending = route
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL(true)
        abort()
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to)
        abort()
      } else {
        // confirm transition and pass on the value
        next(to)
      }
    })
  }

  runQueue(queue, iterator, function () {
    var postEnterCbs = []
    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
      return this$1.current === route
    })
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null
      onComplete(route)
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); })
        })
      }
    })
  })
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current
  this.current = route
  this.cb && this.cb(route)
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev)
  })
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base')
      base = baseEl ? baseEl.getAttribute('href') : '/'
    } else {
      base = '/'
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i
  var max = Math.max(current.length, next.length)
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def)
  }
  return def.options[key]
}

function extractLeaveGuards (matched) {
  return flatten(flatMapComponents(matched, function (def, instance) {
    var guard = extractGuard(def, 'beforeRouteLeave')
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return wrapLeaveGuard(guard, instance); })
        : wrapLeaveGuard(guard, instance)
    }
  }).reverse())
}

function wrapLeaveGuard (
  guard,
  instance
) {
  return function routeLeaveGuard () {
    return guard.apply(instance, arguments)
  }
}

function extractEnterGuards (
  matched,
  cbs,
  isValid
) {
  return flatten(flatMapComponents(matched, function (def, _, match, key) {
    var guard = extractGuard(def, 'beforeRouteEnter')
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return wrapEnterGuard(guard, cbs, match, key, isValid); })
        : wrapEnterGuard(guard, cbs, match, key, isValid)
    }
  }))
}

function wrapEnterGuard (
  guard,
  cbs,
  match,
  key,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb)
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid)
        })
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key])
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid)
    }, 16)
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = function (resolvedDef) {
          match.components[key] = resolvedDef
          next()
        }

        var reject = function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason))
          next(false)
        }

        var res = def(resolve, reject)
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject)
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

/*  */

var positionStore = Object.create(null)

function saveScrollPosition (key) {
  if (!key) { return }
  positionStore[key] = {
    x: window.pageXOffset,
    y: window.pageYOffset
  }
}

function getScrollPosition (key) {
  if (!key) { return }
  return positionStore[key]
}

function getElementPosition (el) {
  var docRect = document.documentElement.getBoundingClientRect()
  var elRect = el.getBoundingClientRect()
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */


var genKey = function () { return String(Date.now()); }
var _key = genKey()

var HTML5History = (function (History) {
  function HTML5History (router, base) {
    var this$1 = this;

    History.call(this, router, base)

    var expectScroll = router.options.scrollBehavior
    window.addEventListener('popstate', function (e) {
      _key = e.state && e.state.key
      var current = this$1.current
      this$1.transitionTo(getLocation(this$1.base), function (next) {
        if (expectScroll) {
          this$1.handleScroll(next, current, true)
        }
      })
    })

    if (expectScroll) {
      window.addEventListener('scroll', function () {
        saveScrollPosition(_key)
      })
    }
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n)
  };

  HTML5History.prototype.push = function push (location) {
    var this$1 = this;

    var current = this.current
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath))
      this$1.handleScroll(route, current, false)
    })
  };

  HTML5History.prototype.replace = function replace (location) {
    var this$1 = this;

    var current = this.current
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath))
      this$1.handleScroll(route, current, false)
    })
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath)
      push ? pushState(current) : replaceState(current)
    }
  };

  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
    var router = this.router
    if (!router.app) {
      return
    }

    var behavior = router.options.scrollBehavior
    if (!behavior) {
      return
    }
    if (process.env.NODE_ENV !== 'production') {
      assert(typeof behavior === 'function', "scrollBehavior must be a function")
    }

    // wait until re-render finishes before scrolling
    router.app.$nextTick(function () {
      var position = getScrollPosition(_key)
      var shouldScroll = behavior(to, from, isPop ? position : null)
      if (!shouldScroll) {
        return
      }
      var isObject = typeof shouldScroll === 'object'
      if (isObject && typeof shouldScroll.selector === 'string') {
        var el = document.querySelector(shouldScroll.selector)
        if (el) {
          position = getElementPosition(el)
        } else if (isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll)
        }
      } else if (isObject && isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll)
      }

      if (position) {
        window.scrollTo(position.x, position.y)
      }
    })
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}

function pushState (url, replace) {
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url)
    } else {
      _key = genKey()
      history.pushState({ key: _key }, '', url)
    }
    saveScrollPosition(_key)
  } catch (e) {
    window.location[replace ? 'assign' : 'replace'](url)
  }
}

function replaceState (url) {
  pushState(url, true)
}

/*  */


var HashHistory = (function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base)
    // check history fallback deeplinking
    if (fallback && this.checkFallback()) {
      return
    }
    ensureSlash()
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  HashHistory.prototype.checkFallback = function checkFallback () {
    var location = getLocation(this.base)
    if (!/^\/#/.test(location)) {
      window.location.replace(
        cleanPath(this.base + '/#' + location)
      )
      return true
    }
  };

  HashHistory.prototype.onHashChange = function onHashChange () {
    if (!ensureSlash()) {
      return
    }
    this.transitionTo(getHash(), function (route) {
      replaceHash(route.fullPath)
    })
  };

  HashHistory.prototype.push = function push (location) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath)
    })
  };

  HashHistory.prototype.replace = function replace (location) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath)
    })
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n)
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current)
    }
  };

  return HashHistory;
}(History));

function ensureSlash () {
  var path = getHash()
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path)
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href
  var index = href.indexOf('#')
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#')
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  )
}

/*  */


var AbstractHistory = (function (History) {
  function AbstractHistory (router) {
    History.call(this, router)
    this.stack = []
    this.index = -1
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
      this$1.index++
    })
  };

  AbstractHistory.prototype.replace = function replace (location) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
    })
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex]
    this.confirmTransition(route, function () {
      this$1.index = targetIndex
      this$1.updateRoute(route)
    })
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null
  this.options = options
  this.beforeHooks = []
  this.afterHooks = []
  this.match = createMatcher(options.routes || [])

  var mode = options.mode || 'hash'
  this.fallback = mode === 'history' && !supportsHistory
  if (this.fallback) {
    mode = 'hash'
  }
  if (!inBrowser) {
    mode = 'abstract'
  }
  this.mode = mode

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base)
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback)
      break
    case 'abstract':
      this.history = new AbstractHistory(this)
      break
    default:
      process.env.NODE_ENV !== 'production' && assert(false, ("invalid mode: " + mode))
  }
};

var prototypeAccessors = { currentRoute: {} };

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  )

  this.app = app

  var history = this.history

  if (history instanceof HTML5History) {
    history.transitionTo(getLocation(history.base))
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      window.addEventListener('hashchange', function () {
        history.onHashChange()
      })
    }
    history.transitionTo(getHash(), setupHashListener, setupHashListener)
  }

  history.listen(function (route) {
    this$1.app._route = route
  })
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn)
};

VueRouter.prototype.push = function push (location) {
  this.history.push(location)
};

VueRouter.prototype.replace = function replace (location) {
  this.history.replace(location)
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n)
};

VueRouter.prototype.back = function back () {
  this.go(-1)
};

VueRouter.prototype.forward = function forward () {
  this.go(1)
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).resolved
    : this.currentRoute
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var normalizedTo = normalizeLocation(to, current || this.history.current, append)
  var resolved = this.match(normalizedTo, current)
  var fullPath = resolved.redirectedFrom || resolved.fullPath
  var base = this.history.base
  var href = createHref(base, fullPath, this.mode)
  return {
    normalizedTo: normalizedTo,
    resolved: resolved,
    href: href
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}

module.exports = VueRouter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Cropper v2.3.4
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2016 Fengyuan Chen and contributors
 * Released under the MIT license
 *
 * Date: 2016-09-03T05:50:45.412Z
 */

(function (factory) {
  if (true) {
    // AMD. Register as anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node / CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
})(function ($) {

  'use strict';

  // Globals
  var $window = $(window);
  var $document = $(document);
  var location = window.location;
  var navigator = window.navigator;
  var ArrayBuffer = window.ArrayBuffer;
  var Uint8Array = window.Uint8Array;
  var DataView = window.DataView;
  var btoa = window.btoa;

  // Constants
  var NAMESPACE = 'cropper';

  // Classes
  var CLASS_MODAL = 'cropper-modal';
  var CLASS_HIDE = 'cropper-hide';
  var CLASS_HIDDEN = 'cropper-hidden';
  var CLASS_INVISIBLE = 'cropper-invisible';
  var CLASS_MOVE = 'cropper-move';
  var CLASS_CROP = 'cropper-crop';
  var CLASS_DISABLED = 'cropper-disabled';
  var CLASS_BG = 'cropper-bg';

  // Events
  var EVENT_MOUSE_DOWN = 'mousedown touchstart pointerdown MSPointerDown';
  var EVENT_MOUSE_MOVE = 'mousemove touchmove pointermove MSPointerMove';
  var EVENT_MOUSE_UP = 'mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel';
  var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_LOAD = 'load.' + NAMESPACE;
  var EVENT_ERROR = 'error.' + NAMESPACE;
  var EVENT_RESIZE = 'resize.' + NAMESPACE; // Bind to window with namespace
  var EVENT_BUILD = 'build.' + NAMESPACE;
  var EVENT_BUILT = 'built.' + NAMESPACE;
  var EVENT_CROP_START = 'cropstart.' + NAMESPACE;
  var EVENT_CROP_MOVE = 'cropmove.' + NAMESPACE;
  var EVENT_CROP_END = 'cropend.' + NAMESPACE;
  var EVENT_CROP = 'crop.' + NAMESPACE;
  var EVENT_ZOOM = 'zoom.' + NAMESPACE;

  // RegExps
  var REGEXP_ACTIONS = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_HEAD = /^data:([^;]+);base64,/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg.*;base64,/;

  // Data keys
  var DATA_PREVIEW = 'preview';
  var DATA_ACTION = 'action';

  // Actions
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_NONE = 'none';

  // Supports
  var SUPPORT_CANVAS = $.isFunction($('<canvas>')[0].getContext);
  var IS_SAFARI_OR_UIWEBVIEW = navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);

  // Maths
  var num = Number;
  var min = Math.min;
  var max = Math.max;
  var abs = Math.abs;
  var sin = Math.sin;
  var cos = Math.cos;
  var sqrt = Math.sqrt;
  var round = Math.round;
  var floor = Math.floor;

  // Utilities
  var fromCharCode = String.fromCharCode;

  function isNumber(n) {
    return typeof n === 'number' && !isNaN(n);
  }

  function isUndefined(n) {
    return typeof n === 'undefined';
  }

  function toArray(obj, offset) {
    var args = [];

    // This is necessary for IE8
    if (isNumber(offset)) {
      args.push(offset);
    }

    return args.slice.apply(obj, args);
  }

  // Custom proxy to avoid jQuery's guid
  function proxy(fn, context) {
    var args = toArray(arguments, 2);

    return function () {
      return fn.apply(context, args.concat(toArray(arguments)));
    };
  }

  function isCrossOriginURL(url) {
    var parts = url.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);

    return parts && (
      parts[1] !== location.protocol ||
      parts[2] !== location.hostname ||
      parts[3] !== location.port
    );
  }

  function addTimestamp(url) {
    var timestamp = 'timestamp=' + (new Date()).getTime();

    return (url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp);
  }

  function getCrossOrigin(crossOrigin) {
    return crossOrigin ? ' crossOrigin="' + crossOrigin + '"' : '';
  }

  function getImageSize(image, callback) {
    var newImage;

    // Modern browsers (ignore Safari, #120 & #509)
    if (image.naturalWidth && !IS_SAFARI_OR_UIWEBVIEW) {
      return callback(image.naturalWidth, image.naturalHeight);
    }

    // IE8: Don't use `new Image()` here (#319)
    newImage = document.createElement('img');

    newImage.onload = function () {
      callback(this.width, this.height);
    };

    newImage.src = image.src;
  }

  function getTransform(options) {
    var transforms = [];
    var rotate = options.rotate;
    var scaleX = options.scaleX;
    var scaleY = options.scaleY;

    // Rotate should come first before scale to match orientation transform
    if (isNumber(rotate) && rotate !== 0) {
      transforms.push('rotate(' + rotate + 'deg)');
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      transforms.push('scaleX(' + scaleX + ')');
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      transforms.push('scaleY(' + scaleY + ')');
    }

    return transforms.length ? transforms.join(' ') : 'none';
  }

  function getRotatedSizes(data, isReversed) {
    var deg = abs(data.degree) % 180;
    var arc = (deg > 90 ? (180 - deg) : deg) * Math.PI / 180;
    var sinArc = sin(arc);
    var cosArc = cos(arc);
    var width = data.width;
    var height = data.height;
    var aspectRatio = data.aspectRatio;
    var newWidth;
    var newHeight;

    if (!isReversed) {
      newWidth = width * cosArc + height * sinArc;
      newHeight = width * sinArc + height * cosArc;
    } else {
      newWidth = width / (cosArc + sinArc / aspectRatio);
      newHeight = newWidth / aspectRatio;
    }

    return {
      width: newWidth,
      height: newHeight
    };
  }

  function getSourceCanvas(image, data) {
    var canvas = $('<canvas>')[0];
    var context = canvas.getContext('2d');
    var dstX = 0;
    var dstY = 0;
    var dstWidth = data.naturalWidth;
    var dstHeight = data.naturalHeight;
    var rotate = data.rotate;
    var scaleX = data.scaleX;
    var scaleY = data.scaleY;
    var scalable = isNumber(scaleX) && isNumber(scaleY) && (scaleX !== 1 || scaleY !== 1);
    var rotatable = isNumber(rotate) && rotate !== 0;
    var advanced = rotatable || scalable;
    var canvasWidth = dstWidth * abs(scaleX || 1);
    var canvasHeight = dstHeight * abs(scaleY || 1);
    var translateX;
    var translateY;
    var rotated;

    if (scalable) {
      translateX = canvasWidth / 2;
      translateY = canvasHeight / 2;
    }

    if (rotatable) {
      rotated = getRotatedSizes({
        width: canvasWidth,
        height: canvasHeight,
        degree: rotate
      });

      canvasWidth = rotated.width;
      canvasHeight = rotated.height;
      translateX = canvasWidth / 2;
      translateY = canvasHeight / 2;
    }

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    if (advanced) {
      dstX = -dstWidth / 2;
      dstY = -dstHeight / 2;

      context.save();
      context.translate(translateX, translateY);
    }

    // Rotate should come first before scale as in the "getTransform" function
    if (rotatable) {
      context.rotate(rotate * Math.PI / 180);
    }

    if (scalable) {
      context.scale(scaleX, scaleY);
    }

    context.drawImage(image, floor(dstX), floor(dstY), floor(dstWidth), floor(dstHeight));

    if (advanced) {
      context.restore();
    }

    return canvas;
  }

  function getTouchesCenter(touches) {
    var length = touches.length;
    var pageX = 0;
    var pageY = 0;

    if (length) {
      $.each(touches, function (i, touch) {
        pageX += touch.pageX;
        pageY += touch.pageY;
      });

      pageX /= length;
      pageY /= length;
    }

    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    var i;

    for (i = start, length += start; i < length; i++) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }

  function getOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var length = dataView.byteLength;
    var orientation;
    var exifIDCode;
    var tiffOffset;
    var firstIFDOffset;
    var littleEndian;
    var endianness;
    var app1Start;
    var ifdStart;
    var offset;
    var i;

    // Only handle JPEG image (start by 0xFFD8)
    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
      offset = 2;

      while (offset < length) {
        if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
          app1Start = offset;
          break;
        }

        offset++;
      }
    }

    if (app1Start) {
      exifIDCode = app1Start + 4;
      tiffOffset = app1Start + 10;

      if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
        endianness = dataView.getUint16(tiffOffset);
        littleEndian = endianness === 0x4949;

        if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
      }
    }

    if (ifdStart) {
      length = dataView.getUint16(ifdStart, littleEndian);

      for (i = 0; i < length; i++) {
        offset = ifdStart + i * 12 + 2;

        if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

          // 8 is the offset of the current tag's value
          offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(offset, littleEndian);

          // Override the orientation with its default value for Safari (#120)
          if (IS_SAFARI_OR_UIWEBVIEW) {
            dataView.setUint16(offset, 1, littleEndian);
          }

          break;
        }
      }
    }

    return orientation;
  }

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var length = binary.length;
    var arrayBuffer = new ArrayBuffer(length);
    var dataView = new Uint8Array(arrayBuffer);
    var i;

    for (i = 0; i < length; i++) {
      dataView[i] = binary.charCodeAt(i);
    }

    return arrayBuffer;
  }

  // Only available for JPEG image
  function arrayBufferToDataURL(arrayBuffer) {
    var dataView = new Uint8Array(arrayBuffer);
    var length = dataView.length;
    var base64 = '';
    var i;

    for (i = 0; i < length; i++) {
      base64 += fromCharCode(dataView[i]);
    }

    return 'data:image/jpeg;base64,' + btoa(base64);
  }

  function Cropper(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Cropper.DEFAULTS, $.isPlainObject(options) && options);
    this.isLoaded = false;
    this.isBuilt = false;
    this.isCompleted = false;
    this.isRotated = false;
    this.isCropped = false;
    this.isDisabled = false;
    this.isReplaced = false;
    this.isLimited = false;
    this.wheeling = false;
    this.isImg = false;
    this.originalUrl = '';
    this.canvas = null;
    this.cropBox = null;
    this.init();
  }

  Cropper.prototype = {
    constructor: Cropper,

    init: function () {
      var $this = this.$element;
      var url;

      if ($this.is('img')) {
        this.isImg = true;

        // Should use `$.fn.attr` here. e.g.: "img/picture.jpg"
        this.originalUrl = url = $this.attr('src');

        // Stop when it's a blank image
        if (!url) {
          return;
        }

        // Should use `$.fn.prop` here. e.g.: "http://example.com/img/picture.jpg"
        url = $this.prop('src');
      } else if ($this.is('canvas') && SUPPORT_CANVAS) {
        url = $this[0].toDataURL();
      }

      this.load(url);
    },

    // A shortcut for triggering custom events
    trigger: function (type, data) {
      var e = $.Event(type, data);

      this.$element.trigger(e);

      return e;
    },

    load: function (url) {
      var options = this.options;
      var $this = this.$element;
      var read;
      var xhr;

      if (!url) {
        return;
      }

      // Trigger build event first
      $this.one(EVENT_BUILD, options.build);

      if (this.trigger(EVENT_BUILD).isDefaultPrevented()) {
        return;
      }

      this.url = url;
      this.image = {};

      if (!options.checkOrientation || !ArrayBuffer) {
        return this.clone();
      }

      read = $.proxy(this.read, this);

      // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
      if (REGEXP_DATA_URL.test(url)) {
        return REGEXP_DATA_URL_JPEG.test(url) ?
          read(dataURLToArrayBuffer(url)) :
          this.clone();
      }

      xhr = new XMLHttpRequest();

      xhr.onerror = xhr.onabort = $.proxy(function () {
        this.clone();
      }, this);

      xhr.onload = function () {
        read(this.response);
      };

      if (options.checkCrossOrigin && isCrossOriginURL(url) && $this.prop('crossOrigin')) {
        url = addTimestamp(url);
      }

      xhr.open('get', url);
      xhr.responseType = 'arraybuffer';
      xhr.send();
    },

    read: function (arrayBuffer) {
      var options = this.options;
      var orientation = getOrientation(arrayBuffer);
      var image = this.image;
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      if (orientation > 1) {
        this.url = arrayBufferToDataURL(arrayBuffer);

        switch (orientation) {

          // flip horizontal
          case 2:
            scaleX = -1;
            break;

          // rotate left 180°
          case 3:
            rotate = -180;
            break;

          // flip vertical
          case 4:
            scaleY = -1;
            break;

          // flip vertical + rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;

          // rotate right 90°
          case 6:
            rotate = 90;
            break;

          // flip horizontal + rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;

          // rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
      }

      if (options.rotatable) {
        image.rotate = rotate;
      }

      if (options.scalable) {
        image.scaleX = scaleX;
        image.scaleY = scaleY;
      }

      this.clone();
    },

    clone: function () {
      var options = this.options;
      var $this = this.$element;
      var url = this.url;
      var crossOrigin = '';
      var crossOriginUrl;
      var $clone;

      if (options.checkCrossOrigin && isCrossOriginURL(url)) {
        crossOrigin = $this.prop('crossOrigin');

        if (crossOrigin) {
          crossOriginUrl = url;
        } else {
          crossOrigin = 'anonymous';

          // Bust cache (#148) when there is not a "crossOrigin" property
          crossOriginUrl = addTimestamp(url);
        }
      }

      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      this.$clone = $clone = $('<img' + getCrossOrigin(crossOrigin) + ' src="' + (crossOriginUrl || url) + '">');

      if (this.isImg) {
        if ($this[0].complete) {
          this.start();
        } else {
          $this.one(EVENT_LOAD, $.proxy(this.start, this));
        }
      } else {
        $clone.
          one(EVENT_LOAD, $.proxy(this.start, this)).
          one(EVENT_ERROR, $.proxy(this.stop, this)).
          addClass(CLASS_HIDE).
          insertAfter($this);
      }
    },

    start: function () {
      var $image = this.$element;
      var $clone = this.$clone;

      if (!this.isImg) {
        $clone.off(EVENT_ERROR, this.stop);
        $image = $clone;
      }

      getImageSize($image[0], $.proxy(function (naturalWidth, naturalHeight) {
        $.extend(this.image, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });

        this.isLoaded = true;
        this.build();
      }, this));
    },

    stop: function () {
      this.$clone.remove();
      this.$clone = null;
    },

    build: function () {
      var options = this.options;
      var $this = this.$element;
      var $clone = this.$clone;
      var $cropper;
      var $cropBox;
      var $face;

      if (!this.isLoaded) {
        return;
      }

      // Unbuild first when replace
      if (this.isBuilt) {
        this.unbuild();
      }

      // Create cropper elements
      this.$container = $this.parent();
      this.$cropper = $cropper = $(Cropper.TEMPLATE);
      this.$canvas = $cropper.find('.cropper-canvas').append($clone);
      this.$dragBox = $cropper.find('.cropper-drag-box');
      this.$cropBox = $cropBox = $cropper.find('.cropper-crop-box');
      this.$viewBox = $cropper.find('.cropper-view-box');
      this.$face = $face = $cropBox.find('.cropper-face');

      // Hide the original image
      $this.addClass(CLASS_HIDDEN).after($cropper);

      // Show the clone image if is hidden
      if (!this.isImg) {
        $clone.removeClass(CLASS_HIDE);
      }

      this.initPreview();
      this.bind();

      options.aspectRatio = max(0, options.aspectRatio) || NaN;
      options.viewMode = max(0, min(3, round(options.viewMode))) || 0;

      if (options.autoCrop) {
        this.isCropped = true;

        if (options.modal) {
          this.$dragBox.addClass(CLASS_MODAL);
        }
      } else {
        $cropBox.addClass(CLASS_HIDDEN);
      }

      if (!options.guides) {
        $cropBox.find('.cropper-dashed').addClass(CLASS_HIDDEN);
      }

      if (!options.center) {
        $cropBox.find('.cropper-center').addClass(CLASS_HIDDEN);
      }

      if (options.cropBoxMovable) {
        $face.addClass(CLASS_MOVE).data(DATA_ACTION, ACTION_ALL);
      }

      if (!options.highlight) {
        $face.addClass(CLASS_INVISIBLE);
      }

      if (options.background) {
        $cropper.addClass(CLASS_BG);
      }

      if (!options.cropBoxResizable) {
        $cropBox.find('.cropper-line, .cropper-point').addClass(CLASS_HIDDEN);
      }

      this.setDragMode(options.dragMode);
      this.render();
      this.isBuilt = true;
      this.setData(options.data);
      $this.one(EVENT_BUILT, options.built);

      // Trigger the built event asynchronously to keep `data('cropper')` is defined
      this.completing = setTimeout($.proxy(function () {
        this.trigger(EVENT_BUILT);
        this.trigger(EVENT_CROP, this.getData());
        this.isCompleted = true;
      }, this), 0);
    },

    unbuild: function () {
      if (!this.isBuilt) {
        return;
      }

      if (!this.isCompleted) {
        clearTimeout(this.completing);
      }

      this.isBuilt = false;
      this.isCompleted = false;
      this.initialImage = null;

      // Clear `initialCanvas` is necessary when replace
      this.initialCanvas = null;
      this.initialCropBox = null;
      this.container = null;
      this.canvas = null;

      // Clear `cropBox` is necessary when replace
      this.cropBox = null;
      this.unbind();

      this.resetPreview();
      this.$preview = null;

      this.$viewBox = null;
      this.$cropBox = null;
      this.$dragBox = null;
      this.$canvas = null;
      this.$container = null;

      this.$cropper.remove();
      this.$cropper = null;
    },

    render: function () {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();

      this.renderCanvas();

      if (this.isCropped) {
        this.renderCropBox();
      }
    },

    initContainer: function () {
      var options = this.options;
      var $this = this.$element;
      var $container = this.$container;
      var $cropper = this.$cropper;

      $cropper.addClass(CLASS_HIDDEN);
      $this.removeClass(CLASS_HIDDEN);

      $cropper.css((this.container = {
        width: max($container.width(), num(options.minContainerWidth) || 200),
        height: max($container.height(), num(options.minContainerHeight) || 100)
      }));

      $this.addClass(CLASS_HIDDEN);
      $cropper.removeClass(CLASS_HIDDEN);
    },

    // Canvas (image wrapper)
    initCanvas: function () {
      var viewMode = this.options.viewMode;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var image = this.image;
      var imageNaturalWidth = image.naturalWidth;
      var imageNaturalHeight = image.naturalHeight;
      var is90Degree = abs(image.rotate) === 90;
      var naturalWidth = is90Degree ? imageNaturalHeight : imageNaturalWidth;
      var naturalHeight = is90Degree ? imageNaturalWidth : imageNaturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerWidth;
      var canvasHeight = containerHeight;
      var canvas;

      if (containerHeight * aspectRatio > containerWidth) {
        if (viewMode === 3) {
          canvasWidth = containerHeight * aspectRatio;
        } else {
          canvasHeight = containerWidth / aspectRatio;
        }
      } else {
        if (viewMode === 3) {
          canvasHeight = containerWidth / aspectRatio;
        } else {
          canvasWidth = containerHeight * aspectRatio;
        }
      }

      canvas = {
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        aspectRatio: aspectRatio,
        width: canvasWidth,
        height: canvasHeight
      };

      canvas.oldLeft = canvas.left = (containerWidth - canvasWidth) / 2;
      canvas.oldTop = canvas.top = (containerHeight - canvasHeight) / 2;

      this.canvas = canvas;
      this.isLimited = (viewMode === 1 || viewMode === 2);
      this.limitCanvas(true, true);
      this.initialImage = $.extend({}, image);
      this.initialCanvas = $.extend({}, canvas);
    },

    limitCanvas: function (isSizeLimited, isPositionLimited) {
      var options = this.options;
      var viewMode = options.viewMode;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var canvas = this.canvas;
      var aspectRatio = canvas.aspectRatio;
      var cropBox = this.cropBox;
      var isCropped = this.isCropped && cropBox;
      var minCanvasWidth;
      var minCanvasHeight;
      var newCanvasLeft;
      var newCanvasTop;

      if (isSizeLimited) {
        minCanvasWidth = num(options.minCanvasWidth) || 0;
        minCanvasHeight = num(options.minCanvasHeight) || 0;

        if (viewMode) {
          if (viewMode > 1) {
            minCanvasWidth = max(minCanvasWidth, containerWidth);
            minCanvasHeight = max(minCanvasHeight, containerHeight);

            if (viewMode === 3) {
              if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                minCanvasWidth = minCanvasHeight * aspectRatio;
              } else {
                minCanvasHeight = minCanvasWidth / aspectRatio;
              }
            }
          } else {
            if (minCanvasWidth) {
              minCanvasWidth = max(minCanvasWidth, isCropped ? cropBox.width : 0);
            } else if (minCanvasHeight) {
              minCanvasHeight = max(minCanvasHeight, isCropped ? cropBox.height : 0);
            } else if (isCropped) {
              minCanvasWidth = cropBox.width;
              minCanvasHeight = cropBox.height;

              if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                minCanvasWidth = minCanvasHeight * aspectRatio;
              } else {
                minCanvasHeight = minCanvasWidth / aspectRatio;
              }
            }
          }
        }

        if (minCanvasWidth && minCanvasHeight) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          } else {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          }
        } else if (minCanvasWidth) {
          minCanvasHeight = minCanvasWidth / aspectRatio;
        } else if (minCanvasHeight) {
          minCanvasWidth = minCanvasHeight * aspectRatio;
        }

        canvas.minWidth = minCanvasWidth;
        canvas.minHeight = minCanvasHeight;
        canvas.maxWidth = Infinity;
        canvas.maxHeight = Infinity;
      }

      if (isPositionLimited) {
        if (viewMode) {
          newCanvasLeft = containerWidth - canvas.width;
          newCanvasTop = containerHeight - canvas.height;

          canvas.minLeft = min(0, newCanvasLeft);
          canvas.minTop = min(0, newCanvasTop);
          canvas.maxLeft = max(0, newCanvasLeft);
          canvas.maxTop = max(0, newCanvasTop);

          if (isCropped && this.isLimited) {
            canvas.minLeft = min(
              cropBox.left,
              cropBox.left + cropBox.width - canvas.width
            );
            canvas.minTop = min(
              cropBox.top,
              cropBox.top + cropBox.height - canvas.height
            );
            canvas.maxLeft = cropBox.left;
            canvas.maxTop = cropBox.top;

            if (viewMode === 2) {
              if (canvas.width >= containerWidth) {
                canvas.minLeft = min(0, newCanvasLeft);
                canvas.maxLeft = max(0, newCanvasLeft);
              }

              if (canvas.height >= containerHeight) {
                canvas.minTop = min(0, newCanvasTop);
                canvas.maxTop = max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvas.minLeft = -canvas.width;
          canvas.minTop = -canvas.height;
          canvas.maxLeft = containerWidth;
          canvas.maxTop = containerHeight;
        }
      }
    },

    renderCanvas: function (isChanged) {
      var canvas = this.canvas;
      var image = this.image;
      var rotate = image.rotate;
      var naturalWidth = image.naturalWidth;
      var naturalHeight = image.naturalHeight;
      var aspectRatio;
      var rotated;

      if (this.isRotated) {
        this.isRotated = false;

        // Computes rotated sizes with image sizes
        rotated = getRotatedSizes({
          width: image.width,
          height: image.height,
          degree: rotate
        });

        aspectRatio = rotated.width / rotated.height;

        if (aspectRatio !== canvas.aspectRatio) {
          canvas.left -= (rotated.width - canvas.width) / 2;
          canvas.top -= (rotated.height - canvas.height) / 2;
          canvas.width = rotated.width;
          canvas.height = rotated.height;
          canvas.aspectRatio = aspectRatio;
          canvas.naturalWidth = naturalWidth;
          canvas.naturalHeight = naturalHeight;

          // Computes rotated sizes with natural image sizes
          if (rotate % 180) {
            rotated = getRotatedSizes({
              width: naturalWidth,
              height: naturalHeight,
              degree: rotate
            });

            canvas.naturalWidth = rotated.width;
            canvas.naturalHeight = rotated.height;
          }

          this.limitCanvas(true, false);
        }
      }

      if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
        canvas.left = canvas.oldLeft;
      }

      if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
        canvas.top = canvas.oldTop;
      }

      canvas.width = min(max(canvas.width, canvas.minWidth), canvas.maxWidth);
      canvas.height = min(max(canvas.height, canvas.minHeight), canvas.maxHeight);

      this.limitCanvas(false, true);

      canvas.oldLeft = canvas.left = min(max(canvas.left, canvas.minLeft), canvas.maxLeft);
      canvas.oldTop = canvas.top = min(max(canvas.top, canvas.minTop), canvas.maxTop);

      this.$canvas.css({
        width: canvas.width,
        height: canvas.height,
        left: canvas.left,
        top: canvas.top
      });

      this.renderImage();

      if (this.isCropped && this.isLimited) {
        this.limitCropBox(true, true);
      }

      if (isChanged) {
        this.output();
      }
    },

    renderImage: function (isChanged) {
      var canvas = this.canvas;
      var image = this.image;
      var reversed;

      if (image.rotate) {
        reversed = getRotatedSizes({
          width: canvas.width,
          height: canvas.height,
          degree: image.rotate,
          aspectRatio: image.aspectRatio
        }, true);
      }

      $.extend(image, reversed ? {
        width: reversed.width,
        height: reversed.height,
        left: (canvas.width - reversed.width) / 2,
        top: (canvas.height - reversed.height) / 2
      } : {
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0
      });

      this.$clone.css({
        width: image.width,
        height: image.height,
        marginLeft: image.left,
        marginTop: image.top,
        transform: getTransform(image)
      });

      if (isChanged) {
        this.output();
      }
    },

    initCropBox: function () {
      var options = this.options;
      var canvas = this.canvas;
      var aspectRatio = options.aspectRatio;
      var autoCropArea = num(options.autoCropArea) || 0.8;
      var cropBox = {
            width: canvas.width,
            height: canvas.height
          };

      if (aspectRatio) {
        if (canvas.height * aspectRatio > canvas.width) {
          cropBox.height = cropBox.width / aspectRatio;
        } else {
          cropBox.width = cropBox.height * aspectRatio;
        }
      }

      this.cropBox = cropBox;
      this.limitCropBox(true, true);

      // Initialize auto crop area
      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

      // The width of auto crop area must large than "minWidth", and the height too. (#164)
      cropBox.width = max(cropBox.minWidth, cropBox.width * autoCropArea);
      cropBox.height = max(cropBox.minHeight, cropBox.height * autoCropArea);
      cropBox.oldLeft = cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
      cropBox.oldTop = cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;

      this.initialCropBox = $.extend({}, cropBox);
    },

    limitCropBox: function (isSizeLimited, isPositionLimited) {
      var options = this.options;
      var aspectRatio = options.aspectRatio;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var isLimited = this.isLimited;
      var minCropBoxWidth;
      var minCropBoxHeight;
      var maxCropBoxWidth;
      var maxCropBoxHeight;

      if (isSizeLimited) {
        minCropBoxWidth = num(options.minCropBoxWidth) || 0;
        minCropBoxHeight = num(options.minCropBoxHeight) || 0;

        // The min/maxCropBoxWidth/Height must be less than containerWidth/Height
        minCropBoxWidth = min(minCropBoxWidth, containerWidth);
        minCropBoxHeight = min(minCropBoxHeight, containerHeight);
        maxCropBoxWidth = min(containerWidth, isLimited ? canvas.width : containerWidth);
        maxCropBoxHeight = min(containerHeight, isLimited ? canvas.height : containerHeight);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        }

        // The minWidth/Height must be less than maxWidth/Height
        cropBox.minWidth = min(minCropBoxWidth, maxCropBoxWidth);
        cropBox.minHeight = min(minCropBoxHeight, maxCropBoxHeight);
        cropBox.maxWidth = maxCropBoxWidth;
        cropBox.maxHeight = maxCropBoxHeight;
      }

      if (isPositionLimited) {
        if (isLimited) {
          cropBox.minLeft = max(0, canvas.left);
          cropBox.minTop = max(0, canvas.top);
          cropBox.maxLeft = min(containerWidth, canvas.left + canvas.width) - cropBox.width;
          cropBox.maxTop = min(containerHeight, canvas.top + canvas.height) - cropBox.height;
        } else {
          cropBox.minLeft = 0;
          cropBox.minTop = 0;
          cropBox.maxLeft = containerWidth - cropBox.width;
          cropBox.maxTop = containerHeight - cropBox.height;
        }
      }
    },

    renderCropBox: function () {
      var options = this.options;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var cropBox = this.cropBox;

      if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
        cropBox.left = cropBox.oldLeft;
      }

      if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
        cropBox.top = cropBox.oldTop;
      }

      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

      this.limitCropBox(false, true);

      cropBox.oldLeft = cropBox.left = min(max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
      cropBox.oldTop = cropBox.top = min(max(cropBox.top, cropBox.minTop), cropBox.maxTop);

      if (options.movable && options.cropBoxMovable) {

        // Turn to move the canvas when the crop box is equal to the container
        this.$face.data(DATA_ACTION, (cropBox.width === containerWidth && cropBox.height === containerHeight) ? ACTION_MOVE : ACTION_ALL);
      }

      this.$cropBox.css({
        width: cropBox.width,
        height: cropBox.height,
        left: cropBox.left,
        top: cropBox.top
      });

      if (this.isCropped && this.isLimited) {
        this.limitCanvas(true, true);
      }

      if (!this.isDisabled) {
        this.output();
      }
    },

    output: function () {
      this.preview();

      if (this.isCompleted) {
        this.trigger(EVENT_CROP, this.getData());
      }
    },

    initPreview: function () {
      var crossOrigin = getCrossOrigin(this.crossOrigin);
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var $clone2;

      this.$preview = $(this.options.preview);
      this.$clone2 = $clone2 = $('<img' + crossOrigin + ' src="' + url + '">');
      this.$viewBox.html($clone2);
      this.$preview.each(function () {
        var $this = $(this);

        // Save the original size for recover
        $this.data(DATA_PREVIEW, {
          width: $this.width(),
          height: $this.height(),
          html: $this.html()
        });

        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * (Occur only when margin-top <= -height)
         */
        $this.html(
          '<img' + crossOrigin + ' src="' + url + '" style="' +
          'display:block;width:100%;height:auto;' +
          'min-width:0!important;min-height:0!important;' +
          'max-width:none!important;max-height:none!important;' +
          'image-orientation:0deg!important;">'
        );
      });
    },

    resetPreview: function () {
      this.$preview.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_PREVIEW);

        $this.css({
          width: data.width,
          height: data.height
        }).html(data.html).removeData(DATA_PREVIEW);
      });
    },

    preview: function () {
      var image = this.image;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var cropBoxWidth = cropBox.width;
      var cropBoxHeight = cropBox.height;
      var width = image.width;
      var height = image.height;
      var left = cropBox.left - canvas.left - image.left;
      var top = cropBox.top - canvas.top - image.top;

      if (!this.isCropped || this.isDisabled) {
        return;
      }

      this.$clone2.css({
        width: width,
        height: height,
        marginLeft: -left,
        marginTop: -top,
        transform: getTransform(image)
      });

      this.$preview.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        $this.css({
          width: newWidth,
          height: newHeight
        }).find('img').css({
          width: width * ratio,
          height: height * ratio,
          marginLeft: -left * ratio,
          marginTop: -top * ratio,
          transform: getTransform(image)
        });
      });
    },

    bind: function () {
      var options = this.options;
      var $this = this.$element;
      var $cropper = this.$cropper;

      if ($.isFunction(options.cropstart)) {
        $this.on(EVENT_CROP_START, options.cropstart);
      }

      if ($.isFunction(options.cropmove)) {
        $this.on(EVENT_CROP_MOVE, options.cropmove);
      }

      if ($.isFunction(options.cropend)) {
        $this.on(EVENT_CROP_END, options.cropend);
      }

      if ($.isFunction(options.crop)) {
        $this.on(EVENT_CROP, options.crop);
      }

      if ($.isFunction(options.zoom)) {
        $this.on(EVENT_ZOOM, options.zoom);
      }

      $cropper.on(EVENT_MOUSE_DOWN, $.proxy(this.cropStart, this));

      if (options.zoomable && options.zoomOnWheel) {
        $cropper.on(EVENT_WHEEL, $.proxy(this.wheel, this));
      }

      if (options.toggleDragModeOnDblclick) {
        $cropper.on(EVENT_DBLCLICK, $.proxy(this.dblclick, this));
      }

      $document.
        on(EVENT_MOUSE_MOVE, (this._cropMove = proxy(this.cropMove, this))).
        on(EVENT_MOUSE_UP, (this._cropEnd = proxy(this.cropEnd, this)));

      if (options.responsive) {
        $window.on(EVENT_RESIZE, (this._resize = proxy(this.resize, this)));
      }
    },

    unbind: function () {
      var options = this.options;
      var $this = this.$element;
      var $cropper = this.$cropper;

      if ($.isFunction(options.cropstart)) {
        $this.off(EVENT_CROP_START, options.cropstart);
      }

      if ($.isFunction(options.cropmove)) {
        $this.off(EVENT_CROP_MOVE, options.cropmove);
      }

      if ($.isFunction(options.cropend)) {
        $this.off(EVENT_CROP_END, options.cropend);
      }

      if ($.isFunction(options.crop)) {
        $this.off(EVENT_CROP, options.crop);
      }

      if ($.isFunction(options.zoom)) {
        $this.off(EVENT_ZOOM, options.zoom);
      }

      $cropper.off(EVENT_MOUSE_DOWN, this.cropStart);

      if (options.zoomable && options.zoomOnWheel) {
        $cropper.off(EVENT_WHEEL, this.wheel);
      }

      if (options.toggleDragModeOnDblclick) {
        $cropper.off(EVENT_DBLCLICK, this.dblclick);
      }

      $document.
        off(EVENT_MOUSE_MOVE, this._cropMove).
        off(EVENT_MOUSE_UP, this._cropEnd);

      if (options.responsive) {
        $window.off(EVENT_RESIZE, this._resize);
      }
    },

    resize: function () {
      var restore = this.options.restore;
      var $container = this.$container;
      var container = this.container;
      var canvasData;
      var cropBoxData;
      var ratio;

      // Check `container` is necessary for IE8
      if (this.isDisabled || !container) {
        return;
      }

      ratio = $container.width() / container.width;

      // Resize when width changed or height changed
      if (ratio !== 1 || $container.height() !== container.height) {
        if (restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (restore) {
          this.setCanvasData($.each(canvasData, function (i, n) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData($.each(cropBoxData, function (i, n) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },

    dblclick: function () {
      if (this.isDisabled) {
        return;
      }

      if (this.$dragBox.hasClass(CLASS_CROP)) {
        this.setDragMode(ACTION_MOVE);
      } else {
        this.setDragMode(ACTION_CROP);
      }
    },

    wheel: function (event) {
      var e = event.originalEvent || event;
      var ratio = num(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.isDisabled) {
        return;
      }

      event.preventDefault();

      // Limit wheel speed to prevent zoom too fast
      if (this.wheeling) {
        return;
      }

      this.wheeling = true;

      setTimeout($.proxy(function () {
        this.wheeling = false;
      }, this), 50);

      if (e.deltaY) {
        delta = e.deltaY > 0 ? 1 : -1;
      } else if (e.wheelDelta) {
        delta = -e.wheelDelta / 120;
      } else if (e.detail) {
        delta = e.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },

    cropStart: function (event) {
      var options = this.options;
      var originalEvent = event.originalEvent;
      var touches = originalEvent && originalEvent.touches;
      var e = event;
      var touchesLength;
      var action;

      if (this.isDisabled) {
        return;
      }

      if (touches) {
        touchesLength = touches.length;

        if (touchesLength > 1) {
          if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
            e = touches[1];
            this.startX2 = e.pageX;
            this.startY2 = e.pageY;
            action = ACTION_ZOOM;
          } else {
            return;
          }
        }

        e = touches[0];
      }

      action = action || $(e.target).data(DATA_ACTION);

      if (REGEXP_ACTIONS.test(action)) {
        if (this.trigger(EVENT_CROP_START, {
          originalEvent: originalEvent,
          action: action
        }).isDefaultPrevented()) {
          return;
        }

        event.preventDefault();

        this.action = action;
        this.cropping = false;

        // IE8  has `event.pageX/Y`, but not `event.originalEvent.pageX/Y`
        // IE10 has `event.originalEvent.pageX/Y`, but not `event.pageX/Y`
        this.startX = e.pageX || originalEvent && originalEvent.pageX;
        this.startY = e.pageY || originalEvent && originalEvent.pageY;

        if (action === ACTION_CROP) {
          this.cropping = true;
          this.$dragBox.addClass(CLASS_MODAL);
        }
      }
    },

    cropMove: function (event) {
      var options = this.options;
      var originalEvent = event.originalEvent;
      var touches = originalEvent && originalEvent.touches;
      var e = event;
      var action = this.action;
      var touchesLength;

      if (this.isDisabled) {
        return;
      }

      if (touches) {
        touchesLength = touches.length;

        if (touchesLength > 1) {
          if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
            e = touches[1];
            this.endX2 = e.pageX;
            this.endY2 = e.pageY;
          } else {
            return;
          }
        }

        e = touches[0];
      }

      if (action) {
        if (this.trigger(EVENT_CROP_MOVE, {
          originalEvent: originalEvent,
          action: action
        }).isDefaultPrevented()) {
          return;
        }

        event.preventDefault();

        this.endX = e.pageX || originalEvent && originalEvent.pageX;
        this.endY = e.pageY || originalEvent && originalEvent.pageY;

        this.change(e.shiftKey, action === ACTION_ZOOM ? event : null);
      }
    },

    cropEnd: function (event) {
      var originalEvent = event.originalEvent;
      var action = this.action;

      if (this.isDisabled) {
        return;
      }

      if (action) {
        event.preventDefault();

        if (this.cropping) {
          this.cropping = false;
          this.$dragBox.toggleClass(CLASS_MODAL, this.isCropped && this.options.modal);
        }

        this.action = '';

        this.trigger(EVENT_CROP_END, {
          originalEvent: originalEvent,
          action: action
        });
      }
    },

    change: function (shiftKey, event) {
      var options = this.options;
      var aspectRatio = options.aspectRatio;
      var action = this.action;
      var container = this.container;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var width = cropBox.width;
      var height = cropBox.height;
      var left = cropBox.left;
      var top = cropBox.top;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = container.width;
      var maxHeight = container.height;
      var renderable = true;
      var offset;
      var range;

      // Locking aspect ratio in "free mode" by holding shift key (#259)
      if (!aspectRatio && shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.isLimited) {
        minLeft = cropBox.minLeft;
        minTop = cropBox.minTop;
        maxWidth = minLeft + min(container.width, canvas.width, canvas.left + canvas.width);
        maxHeight = minTop + min(container.height, canvas.height, canvas.top + canvas.height);
      }

      range = {
        x: this.endX - this.startX,
        y: this.endY - this.startY
      };

      if (aspectRatio) {
        range.X = range.y * aspectRatio;
        range.Y = range.x / aspectRatio;
      }

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;

        // Resize crop box
        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio &&
            (top <= minTop || bottom >= maxHeight))) {

            renderable = false;
            break;
          }

          width += range.x;

          if (aspectRatio) {
            height = width / aspectRatio;
            top -= range.Y / 2;
          }

          if (width < 0) {
            action = ACTION_WEST;
            width = 0;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio &&
            (left <= minLeft || right >= maxWidth))) {

            renderable = false;
            break;
          }

          height -= range.y;
          top += range.y;

          if (aspectRatio) {
            width = height * aspectRatio;
            left += range.X / 2;
          }

          if (height < 0) {
            action = ACTION_SOUTH;
            height = 0;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio &&
            (top <= minTop || bottom >= maxHeight))) {

            renderable = false;
            break;
          }

          width -= range.x;
          left += range.x;

          if (aspectRatio) {
            height = width / aspectRatio;
            top += range.Y / 2;
          }

          if (width < 0) {
            action = ACTION_EAST;
            width = 0;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio &&
            (left <= minLeft || right >= maxWidth))) {

            renderable = false;
            break;
          }

          height += range.y;

          if (aspectRatio) {
            width = height * aspectRatio;
            left -= range.X / 2;
          }

          if (height < 0) {
            action = ACTION_NORTH;
            height = 0;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = 0;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += range.X;
          } else {
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = 0;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = 0;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            width += range.x;
            height = width / aspectRatio;
          } else {
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = 0;
          }

          break;

        // Move canvas
        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;

        // Zoom canvas
        case ACTION_ZOOM:
          this.zoom((function (x1, y1, x2, y2) {
            var z1 = sqrt(x1 * x1 + y1 * y1);
            var z2 = sqrt(x2 * x2 + y2 * y2);

            return (z2 - z1) / z1;
          })(
            abs(this.startX - this.startX2),
            abs(this.startY - this.startY2),
            abs(this.endX - this.endX2),
            abs(this.endY - this.endY2)
          ), event);
          this.startX2 = this.endX2;
          this.startY2 = this.endY2;
          renderable = false;
          break;

        // Create crop box
        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = this.$cropper.offset();
          left = this.startX - offset.left;
          top = this.startY - offset.top;
          width = cropBox.minWidth;
          height = cropBox.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          }

          // Show the crop box if is hidden
          if (!this.isCropped) {
            this.$cropBox.removeClass(CLASS_HIDDEN);
            this.isCropped = true;

            if (this.isLimited) {
              this.limitCropBox(true, true);
            }
          }

          break;

        // No default
      }

      if (renderable) {
        cropBox.width = width;
        cropBox.height = height;
        cropBox.left = left;
        cropBox.top = top;
        this.action = action;

        this.renderCropBox();
      }

      // Override
      this.startX = this.endX;
      this.startY = this.endY;
    },

    // Show the crop box manually
    crop: function () {
      if (!this.isBuilt || this.isDisabled) {
        return;
      }

      if (!this.isCropped) {
        this.isCropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          this.$dragBox.addClass(CLASS_MODAL);
        }

        this.$cropBox.removeClass(CLASS_HIDDEN);
      }

      this.setCropBoxData(this.initialCropBox);
    },

    // Reset the image and crop box to their initial states
    reset: function () {
      if (!this.isBuilt || this.isDisabled) {
        return;
      }

      this.image = $.extend({}, this.initialImage);
      this.canvas = $.extend({}, this.initialCanvas);
      this.cropBox = $.extend({}, this.initialCropBox);

      this.renderCanvas();

      if (this.isCropped) {
        this.renderCropBox();
      }
    },

    // Clear the crop box
    clear: function () {
      if (!this.isCropped || this.isDisabled) {
        return;
      }

      $.extend(this.cropBox, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });

      this.isCropped = false;
      this.renderCropBox();

      this.limitCanvas(true, true);

      // Render canvas after crop box rendered
      this.renderCanvas();

      this.$dragBox.removeClass(CLASS_MODAL);
      this.$cropBox.addClass(CLASS_HIDDEN);
    },

    /**
     * Replace the image's src and rebuild the cropper
     *
     * @param {String} url
     * @param {Boolean} onlyColorChanged (optional)
     */
    replace: function (url, onlyColorChanged) {
      if (!this.isDisabled && url) {
        if (this.isImg) {
          this.$element.attr('src', url);
        }

        if (onlyColorChanged) {
          this.url = url;
          this.$clone.attr('src', url);

          if (this.isBuilt) {
            this.$preview.find('img').add(this.$clone2).attr('src', url);
          }
        } else {
          if (this.isImg) {
            this.isReplaced = true;
          }

          // Clear previous data
          this.options.data = null;
          this.load(url);
        }
      }
    },

    // Enable (unfreeze) the cropper
    enable: function () {
      if (this.isBuilt) {
        this.isDisabled = false;
        this.$cropper.removeClass(CLASS_DISABLED);
      }
    },

    // Disable (freeze) the cropper
    disable: function () {
      if (this.isBuilt) {
        this.isDisabled = true;
        this.$cropper.addClass(CLASS_DISABLED);
      }
    },

    // Destroy the cropper and remove the instance from the image
    destroy: function () {
      var $this = this.$element;

      if (this.isLoaded) {
        if (this.isImg && this.isReplaced) {
          $this.attr('src', this.originalUrl);
        }

        this.unbuild();
        $this.removeClass(CLASS_HIDDEN);
      } else {
        if (this.isImg) {
          $this.off(EVENT_LOAD, this.start);
        } else if (this.$clone) {
          this.$clone.remove();
        }
      }

      $this.removeData(NAMESPACE);
    },

    /**
     * Move the canvas with relative offsets
     *
     * @param {Number} offsetX
     * @param {Number} offsetY (optional)
     */
    move: function (offsetX, offsetY) {
      var canvas = this.canvas;

      this.moveTo(
        isUndefined(offsetX) ? offsetX : canvas.left + num(offsetX),
        isUndefined(offsetY) ? offsetY : canvas.top + num(offsetY)
      );
    },

    /**
     * Move the canvas to an absolute point
     *
     * @param {Number} x
     * @param {Number} y (optional)
     */
    moveTo: function (x, y) {
      var canvas = this.canvas;
      var isChanged = false;

      // If "y" is not present, its default value is "x"
      if (isUndefined(y)) {
        y = x;
      }

      x = num(x);
      y = num(y);

      if (this.isBuilt && !this.isDisabled && this.options.movable) {
        if (isNumber(x)) {
          canvas.left = x;
          isChanged = true;
        }

        if (isNumber(y)) {
          canvas.top = y;
          isChanged = true;
        }

        if (isChanged) {
          this.renderCanvas(true);
        }
      }
    },

    /**
     * Zoom the canvas with a relative ratio
     *
     * @param {Number} ratio
     * @param {jQuery Event} _event (private)
     */
    zoom: function (ratio, _event) {
      var canvas = this.canvas;

      ratio = num(ratio);

      if (ratio < 0) {
        ratio =  1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      this.zoomTo(canvas.width * ratio / canvas.naturalWidth, _event);
    },

    /**
     * Zoom the canvas to an absolute ratio
     *
     * @param {Number} ratio
     * @param {jQuery Event} _event (private)
     */
    zoomTo: function (ratio, _event) {
      var options = this.options;
      var canvas = this.canvas;
      var width = canvas.width;
      var height = canvas.height;
      var naturalWidth = canvas.naturalWidth;
      var naturalHeight = canvas.naturalHeight;
      var originalEvent;
      var newWidth;
      var newHeight;
      var offset;
      var center;

      ratio = num(ratio);

      if (ratio >= 0 && this.isBuilt && !this.isDisabled && options.zoomable) {
        newWidth = naturalWidth * ratio;
        newHeight = naturalHeight * ratio;

        if (_event) {
          originalEvent = _event.originalEvent;
        }

        if (this.trigger(EVENT_ZOOM, {
          originalEvent: originalEvent,
          oldRatio: width / naturalWidth,
          ratio: newWidth / naturalWidth
        }).isDefaultPrevented()) {
          return;
        }

        if (originalEvent) {
          offset = this.$cropper.offset();
          center = originalEvent.touches ? getTouchesCenter(originalEvent.touches) : {
            pageX: _event.pageX || originalEvent.pageX || 0,
            pageY: _event.pageY || originalEvent.pageY || 0
          };

          // Zoom from the triggering point of the event
          canvas.left -= (newWidth - width) * (
            ((center.pageX - offset.left) - canvas.left) / width
          );
          canvas.top -= (newHeight - height) * (
            ((center.pageY - offset.top) - canvas.top) / height
          );
        } else {

          // Zoom from the center of the canvas
          canvas.left -= (newWidth - width) / 2;
          canvas.top -= (newHeight - height) / 2;
        }

        canvas.width = newWidth;
        canvas.height = newHeight;
        this.renderCanvas(true);
      }
    },

    /**
     * Rotate the canvas with a relative degree
     *
     * @param {Number} degree
     */
    rotate: function (degree) {
      this.rotateTo((this.image.rotate || 0) + num(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate()
     *
     * @param {Number} degree
     */
    rotateTo: function (degree) {
      degree = num(degree);

      if (isNumber(degree) && this.isBuilt && !this.isDisabled && this.options.rotatable) {
        this.image.rotate = degree % 360;
        this.isRotated = true;
        this.renderCanvas(true);
      }
    },

    /**
     * Scale the image
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale()
     *
     * @param {Number} scaleX
     * @param {Number} scaleY (optional)
     */
    scale: function (scaleX, scaleY) {
      var image = this.image;
      var isChanged = false;

      // If "scaleY" is not present, its default value is "scaleX"
      if (isUndefined(scaleY)) {
        scaleY = scaleX;
      }

      scaleX = num(scaleX);
      scaleY = num(scaleY);

      if (this.isBuilt && !this.isDisabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          image.scaleX = scaleX;
          isChanged = true;
        }

        if (isNumber(scaleY)) {
          image.scaleY = scaleY;
          isChanged = true;
        }

        if (isChanged) {
          this.renderImage(true);
        }
      }
    },

    /**
     * Scale the abscissa of the image
     *
     * @param {Number} scaleX
     */
    scaleX: function (scaleX) {
      var scaleY = this.image.scaleY;

      this.scale(scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the ordinate of the image
     *
     * @param {Number} scaleY
     */
    scaleY: function (scaleY) {
      var scaleX = this.image.scaleX;

      this.scale(isNumber(scaleX) ? scaleX : 1, scaleY);
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     *
     * @param {Boolean} isRounded (optional)
     * @return {Object} data
     */
    getData: function (isRounded) {
      var options = this.options;
      var image = this.image;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var ratio;
      var data;

      if (this.isBuilt && this.isCropped) {
        data = {
          x: cropBox.left - canvas.left,
          y: cropBox.top - canvas.top,
          width: cropBox.width,
          height: cropBox.height
        };

        ratio = image.width / image.naturalWidth;

        $.each(data, function (i, n) {
          n = n / ratio;
          data[i] = isRounded ? round(n) : n;
        });

      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = image.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = image.scaleX || 1;
        data.scaleY = image.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     *
     * @param {Object} data
     */
    setData: function (data) {
      var options = this.options;
      var image = this.image;
      var canvas = this.canvas;
      var cropBoxData = {};
      var isRotated;
      var isScaled;
      var ratio;

      if ($.isFunction(data)) {
        data = data.call(this.element);
      }

      if (this.isBuilt && !this.isDisabled && $.isPlainObject(data)) {
        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== image.rotate) {
            image.rotate = data.rotate;
            this.isRotated = isRotated = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== image.scaleX) {
            image.scaleX = data.scaleX;
            isScaled = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== image.scaleY) {
            image.scaleY = data.scaleY;
            isScaled = true;
          }
        }

        if (isRotated) {
          this.renderCanvas();
        } else if (isScaled) {
          this.renderImage();
        }

        ratio = image.width / image.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvas.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvas.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }
    },

    /**
     * Get the container size data
     *
     * @return {Object} data
     */
    getContainerData: function () {
      return this.isBuilt ? this.container : {};
    },

    /**
     * Get the image position and size data
     *
     * @return {Object} data
     */
    getImageData: function () {
      return this.isLoaded ? this.image : {};
    },

    /**
     * Get the canvas position and size data
     *
     * @return {Object} data
     */
    getCanvasData: function () {
      var canvas = this.canvas;
      var data = {};

      if (this.isBuilt) {
        $.each([
          'left',
          'top',
          'width',
          'height',
          'naturalWidth',
          'naturalHeight'
        ], function (i, n) {
          data[n] = canvas[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data
     *
     * @param {Object} data
     */
    setCanvasData: function (data) {
      var canvas = this.canvas;
      var aspectRatio = canvas.aspectRatio;

      if ($.isFunction(data)) {
        data = data.call(this.$element);
      }

      if (this.isBuilt && !this.isDisabled && $.isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvas.left = data.left;
        }

        if (isNumber(data.top)) {
          canvas.top = data.top;
        }

        if (isNumber(data.width)) {
          canvas.width = data.width;
          canvas.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvas.height = data.height;
          canvas.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }
    },

    /**
     * Get the crop box position and size data
     *
     * @return {Object} data
     */
    getCropBoxData: function () {
      var cropBox = this.cropBox;
      var data;

      if (this.isBuilt && this.isCropped) {
        data = {
          left: cropBox.left,
          top: cropBox.top,
          width: cropBox.width,
          height: cropBox.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data
     *
     * @param {Object} data
     */
    setCropBoxData: function (data) {
      var cropBox = this.cropBox;
      var aspectRatio = this.options.aspectRatio;
      var isWidthChanged;
      var isHeightChanged;

      if ($.isFunction(data)) {
        data = data.call(this.$element);
      }

      if (this.isBuilt && this.isCropped && !this.isDisabled && $.isPlainObject(data)) {

        if (isNumber(data.left)) {
          cropBox.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBox.top = data.top;
        }

        if (isNumber(data.width)) {
          isWidthChanged = true;
          cropBox.width = data.width;
        }

        if (isNumber(data.height)) {
          isHeightChanged = true;
          cropBox.height = data.height;
        }

        if (aspectRatio) {
          if (isWidthChanged) {
            cropBox.height = cropBox.width / aspectRatio;
          } else if (isHeightChanged) {
            cropBox.width = cropBox.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }
    },

    /**
     * Get a canvas drawn the cropped image
     *
     * @param {Object} options (optional)
     * @return {HTMLCanvasElement} canvas
     */
    getCroppedCanvas: function (options) {
      var originalWidth;
      var originalHeight;
      var canvasWidth;
      var canvasHeight;
      var scaledWidth;
      var scaledHeight;
      var scaledRatio;
      var aspectRatio;
      var canvas;
      var context;
      var data;

      if (!this.isBuilt || !SUPPORT_CANVAS) {
        return;
      }

      if (!this.isCropped) {
        return getSourceCanvas(this.$clone[0], this.image);
      }

      if (!$.isPlainObject(options)) {
        options = {};
      }

      data = this.getData();
      originalWidth = data.width;
      originalHeight = data.height;
      aspectRatio = originalWidth / originalHeight;

      if ($.isPlainObject(options)) {
        scaledWidth = options.width;
        scaledHeight = options.height;

        if (scaledWidth) {
          scaledHeight = scaledWidth / aspectRatio;
          scaledRatio = scaledWidth / originalWidth;
        } else if (scaledHeight) {
          scaledWidth = scaledHeight * aspectRatio;
          scaledRatio = scaledHeight / originalHeight;
        }
      }

      // The canvas element will use `Math.floor` on a float number, so floor first
      canvasWidth = floor(scaledWidth || originalWidth);
      canvasHeight = floor(scaledHeight || originalHeight);

      canvas = $('<canvas>')[0];
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context = canvas.getContext('2d');

      if (options.fillColor) {
        context.fillStyle = options.fillColor;
        context.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
      context.drawImage.apply(context, (function () {
        var source = getSourceCanvas(this.$clone[0], this.image);
        var sourceWidth = source.width;
        var sourceHeight = source.height;
        var canvas = this.canvas;
        var params = [source];

        // Source canvas
        var srcX = data.x + canvas.naturalWidth * (abs(data.scaleX || 1) - 1) / 2;
        var srcY = data.y + canvas.naturalHeight * (abs(data.scaleY || 1) - 1) / 2;
        var srcWidth;
        var srcHeight;

        // Destination canvas
        var dstX;
        var dstY;
        var dstWidth;
        var dstHeight;

        if (srcX <= -originalWidth || srcX > sourceWidth) {
          srcX = srcWidth = dstX = dstWidth = 0;
        } else if (srcX <= 0) {
          dstX = -srcX;
          srcX = 0;
          srcWidth = dstWidth = min(sourceWidth, originalWidth + srcX);
        } else if (srcX <= sourceWidth) {
          dstX = 0;
          srcWidth = dstWidth = min(originalWidth, sourceWidth - srcX);
        }

        if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
          srcY = srcHeight = dstY = dstHeight = 0;
        } else if (srcY <= 0) {
          dstY = -srcY;
          srcY = 0;
          srcHeight = dstHeight = min(sourceHeight, originalHeight + srcY);
        } else if (srcY <= sourceHeight) {
          dstY = 0;
          srcHeight = dstHeight = min(originalHeight, sourceHeight - srcY);
        }

        // All the numerical parameters should be integer for `drawImage` (#476)
        params.push(floor(srcX), floor(srcY), floor(srcWidth), floor(srcHeight));

        // Scale destination sizes
        if (scaledRatio) {
          dstX *= scaledRatio;
          dstY *= scaledRatio;
          dstWidth *= scaledRatio;
          dstHeight *= scaledRatio;
        }

        // Avoid "IndexSizeError" in IE and Firefox
        if (dstWidth > 0 && dstHeight > 0) {
          params.push(floor(dstX), floor(dstY), floor(dstWidth), floor(dstHeight));
        }

        return params;
      }).call(this));

      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box
     *
     * @param {Number} aspectRatio
     */
    setAspectRatio: function (aspectRatio) {
      var options = this.options;

      if (!this.isDisabled && !isUndefined(aspectRatio)) {

        // 0 -> NaN
        options.aspectRatio = max(0, aspectRatio) || NaN;

        if (this.isBuilt) {
          this.initCropBox();

          if (this.isCropped) {
            this.renderCropBox();
          }
        }
      }
    },

    /**
     * Change the drag mode
     *
     * @param {String} mode (optional)
     */
    setDragMode: function (mode) {
      var options = this.options;
      var croppable;
      var movable;

      if (this.isLoaded && !this.isDisabled) {
        croppable = mode === ACTION_CROP;
        movable = options.movable && mode === ACTION_MOVE;
        mode = (croppable || movable) ? mode : ACTION_NONE;

        this.$dragBox.
          data(DATA_ACTION, mode).
          toggleClass(CLASS_CROP, croppable).
          toggleClass(CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {

          // Sync drag mode to crop box when it is not movable(#300)
          this.$face.
            data(DATA_ACTION, mode).
            toggleClass(CLASS_CROP, croppable).
            toggleClass(CLASS_MOVE, movable);
        }
      }
    }
  };

  Cropper.DEFAULTS = {

    // Define the view mode of the cropper
    viewMode: 0, // 0, 1, 2, 3

    // Define the dragging mode of the cropper
    dragMode: 'crop', // 'crop', 'move' or 'none'

    // Define the aspect ratio of the crop box
    aspectRatio: NaN,

    // An object with the previous cropping result data
    data: null,

    // A jQuery selector for adding extra containers to preview
    preview: '',

    // Re-render the cropper when resize the window
    responsive: true,

    // Restore the cropped area after resize the window
    restore: true,

    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,

    // Check the current image's Exif Orientation information
    checkOrientation: true,

    // Show the black modal
    modal: true,

    // Show the dashed lines for guiding
    guides: true,

    // Show the center indicator for guiding
    center: true,

    // Show the white modal to highlight the crop box
    highlight: true,

    // Show the grid background
    background: true,

    // Enable to crop the image automatically when initialize
    autoCrop: true,

    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,

    // Enable to move the image
    movable: true,

    // Enable to rotate the image
    rotatable: true,

    // Enable to scale the image
    scalable: true,

    // Enable to zoom the image
    zoomable: true,

    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,

    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,

    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,

    // Enable to move the crop box
    cropBoxMovable: true,

    // Enable to resize the crop box
    cropBoxResizable: true,

    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,

    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,

    // Shortcuts of events
    build: null,
    built: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  Cropper.setDefaults = function (options) {
    $.extend(Cropper.DEFAULTS, options);
  };

  Cropper.TEMPLATE = (
    '<div class="cropper-container">' +
      '<div class="cropper-wrap-box">' +
        '<div class="cropper-canvas"></div>' +
      '</div>' +
      '<div class="cropper-drag-box"></div>' +
      '<div class="cropper-crop-box">' +
        '<span class="cropper-view-box"></span>' +
        '<span class="cropper-dashed dashed-h"></span>' +
        '<span class="cropper-dashed dashed-v"></span>' +
        '<span class="cropper-center"></span>' +
        '<span class="cropper-face"></span>' +
        '<span class="cropper-line line-e" data-action="e"></span>' +
        '<span class="cropper-line line-n" data-action="n"></span>' +
        '<span class="cropper-line line-w" data-action="w"></span>' +
        '<span class="cropper-line line-s" data-action="s"></span>' +
        '<span class="cropper-point point-e" data-action="e"></span>' +
        '<span class="cropper-point point-n" data-action="n"></span>' +
        '<span class="cropper-point point-w" data-action="w"></span>' +
        '<span class="cropper-point point-s" data-action="s"></span>' +
        '<span class="cropper-point point-ne" data-action="ne"></span>' +
        '<span class="cropper-point point-nw" data-action="nw"></span>' +
        '<span class="cropper-point point-sw" data-action="sw"></span>' +
        '<span class="cropper-point point-se" data-action="se"></span>' +
      '</div>' +
    '</div>'
  );

  // Save the other cropper
  Cropper.other = $.fn.cropper;

  // Register as jQuery plugin
  $.fn.cropper = function (option) {
    var args = toArray(arguments, 1);
    var result;

    this.each(function () {
      var $this = $(this);
      var data = $this.data(NAMESPACE);
      var options;
      var fn;

      if (!data) {
        if (/destroy/.test(option)) {
          return;
        }

        options = $.extend({}, $this.data(), $.isPlainObject(option) && option);
        $this.data(NAMESPACE, (data = new Cropper(this, options)));
      }

      if (typeof option === 'string' && $.isFunction(fn = data[option])) {
        result = fn.apply(data, args);
      }
    });

    return isUndefined(result) ? this : result;
  };

  $.fn.cropper.Constructor = Cropper;
  $.fn.cropper.setDefaults = Cropper.setDefaults;

  // No conflict
  $.fn.cropper.noConflict = function () {
    $.fn.cropper = Cropper.other;
    return this;
  };

});


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(120);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(121);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(124);
__webpack_require__(127);
__webpack_require__(128);
module.exports = __webpack_require__(0).Symbol;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(125);
__webpack_require__(129);
module.exports = __webpack_require__(30).f('iterator');

/***/ },
/* 101 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 102 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5)
  , toLength  = __webpack_require__(118)
  , toIndex   = __webpack_require__(117);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(14)
  , gOPS    = __webpack_require__(41)
  , pIE     = __webpack_require__(23);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(34);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(34);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(22)
  , descriptor     = __webpack_require__(15)
  , setToStringTag = __webpack_require__(24)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(8)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(14)
  , toIObject = __webpack_require__(5);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(16)('meta')
  , isObject = __webpack_require__(11)
  , has      = __webpack_require__(3)
  , setDesc  = __webpack_require__(4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(10)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(4)
  , anObject = __webpack_require__(9)
  , getKeys  = __webpack_require__(14);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(5)
  , gOPN      = __webpack_require__(40).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(10);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(11)
  , anObject = __webpack_require__(9);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(35)(Function.call, __webpack_require__(39).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
  , defined   = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(102)
  , step             = __webpack_require__(109)
  , Iterators        = __webpack_require__(20)
  , toIObject        = __webpack_require__(5);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(38)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(22)});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(45)
  , $getPrototypeOf = __webpack_require__(42);

__webpack_require__(114)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(6);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(115).set});

/***/ },
/* 124 */
/***/ function(module, exports) {



/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(116)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(38)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(3)
  , DESCRIPTORS    = __webpack_require__(2)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(44)
  , META           = __webpack_require__(111).KEY
  , $fails         = __webpack_require__(10)
  , shared         = __webpack_require__(26)
  , setToStringTag = __webpack_require__(24)
  , uid            = __webpack_require__(16)
  , wks            = __webpack_require__(8)
  , wksExt         = __webpack_require__(30)
  , wksDefine      = __webpack_require__(29)
  , keyOf          = __webpack_require__(110)
  , enumKeys       = __webpack_require__(104)
  , isArray        = __webpack_require__(107)
  , anObject       = __webpack_require__(9)
  , toIObject      = __webpack_require__(5)
  , toPrimitive    = __webpack_require__(28)
  , createDesc     = __webpack_require__(15)
  , _create        = __webpack_require__(22)
  , gOPNExt        = __webpack_require__(113)
  , $GOPD          = __webpack_require__(39)
  , $DP            = __webpack_require__(4)
  , $keys          = __webpack_require__(14)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(23).f  = $propertyIsEnumerable;
  __webpack_require__(41).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(21)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(29)('asyncIterator');

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(29)('observable');

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(119);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(20)
  , TO_STRING_TAG = __webpack_require__(8)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 130 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            a: 2251
        };
    }
};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mounted: function mounted() {
        document.querySelector('body').classList.add('login-page');
    },
    destroyed: function destroyed() {
        document.querySelector('body').classList.remove('login-page');
    },
    data: function data() {
        return {
            username: '18612566404',
            password: 'fuck'
        };
    },

    methods: {
        login: function login() {
            var _this = this;

            var username = $.trim(this.username);
            var password = $.trim(this.password);

            if (username && password) {
                $.ajax({
                    url: Url.common.login,
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: (0, _stringify2.default)({
                        'PhoneNumber': username,
                        'Password': password,
                        'CountryCode': '+86'
                    })
                }).done(function (data) {
                    if (data.ErrorCode == 0) {
                        $.notify('登录成功！', { type: 'success' });
                        setTimeout(function () {
                            _this.$router.push('/');
                        }, 1000);
                    }
                    console.log(data);
                }).fail(function (data) {
                    $.notify('登录失败！', { type: 'danger' });
                });
                console.log(username);
                console.log(password);
            } else {
                $.notify('填写正确信息！', { type: 'danger' });
            }
        }
    }
};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _field = __webpack_require__(61);

var _field2 = _interopRequireDefault(_field);

var _common = __webpack_require__(145);

var _addVoteOption = __webpack_require__(59);

var _addVoteOption2 = _interopRequireDefault(_addVoteOption);

var _model = __webpack_require__(31);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'article',
    created: function created() {
        if (!window.UpToken) {
            (0, _common.getToken)().done(function (data) {
                window.UpToken = data.Token;
                window.BucketName = data.Bucket;
            });
        }
    },
    mounted: function mounted() {
        if (this.$route.name == "articleEdit") {
            this.msg = '更新成功！';
            this.model.Id.value = this.$route.params.id;
            this.fetchById(this.model.Id.value);
        }
    },
    data: function data() {
        return {
            msg: '添加成功！',
            model: new _model2.default({
                'Type': this.$route.params.type * 1,
                'Status': 1
            })
        };
    },

    watch: {
        $route: function $route(r) {
            if (r.name == "articleCreate") {
                this.msg = '新建成功！';
                this.model = new _model2.default({
                    'Type': this.$route.params.type * 1,
                    'Status': 1
                });
            }
            console.log(this.model);
        }
    },
    components: { field: _field2.default, addVoteOption: _addVoteOption2.default },
    methods: {
        fetchById: function fetchById(id) {
            var _this = this;

            this.model.fetchById(id).done(function (data) {
                $.extend(true, _this.model, _this.model.serializeData(data));
            });
        },
        saveDone: function saveDone(data) {
            if (!data.ErrorCode) {
                $.notify({ message: this.msg }, { type: 'success', 'delay': 3000 });
                this.$router.push({ name: 'articleList', params: { type: this.$route.params.type } });
            }
        },
        saveServerFail: function saveServerFail(xhr, error) {
            var _this2 = this;

            $.notify('添加失败！', { type: 'danger' });
            var errorJSON = JSON.parse(xhr.responseText);
            var errorArr = errorJSON.ValidationResults;
            if (errorJSON.HttpStatusCode === 400) {
                if (errorArr.length) {
                    errorArr.map(function (i) {
                        _this2.model[i.FieldName].error = true;
                        _this2.model[i.FieldName].errorMsg = i.Message;
                    });
                }
            }
        },
        savePost: function savePost() {
            this.model.save(this.model).done(this.saveDone).fail(this.saveServerFail);
        }
    }
};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = __webpack_require__(31);

var _model2 = _interopRequireDefault(_model);

var _article = __webpack_require__(147);

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = new _model2.default();

exports.default = {
    watch: {
        $route: function $route(r) {
            this.tabName = model.getTypeCn(r.params.type);
            this.type = r.params.type;
            this.name = r.name;
            document.title = window.title + " - " + model.getTypeCn(r.params.type) + "管理";
        }
    },
    data: function data() {
        return {
            type: this.$route.params.type,
            tabName: model.getTypeCn(this.$route.params.type),
            name: this.$route.name
        };
    }
};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = __webpack_require__(31);

var _model2 = _interopRequireDefault(_model);

var _pagination = __webpack_require__(62);

var _pagination2 = _interopRequireDefault(_pagination);

var _confirm = __webpack_require__(63);

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            loading: false,
            Articles: null,
            type: this.$route.params.type,
            status: this.$route.query.status || 1,
            model: new _model2.default(),
            typeCn: '',
            page: {
                total: 0,
                limit: 7,
                start: 0,
                type: this.$route.params.type,
                status: this.$route.query.status || 1
            }
        };
    },

    components: { pagination: _pagination2.default, confirmPop: _confirm2.default },
    watch: {
        $route: function $route(r) {
            this.type = r.params.type;
            this.typeCn = this.model.getTypeCn(this.$route.params.type);
            document.title = window.title + " - " + this.typeCn + "管理";
            this.featchData();
        }
    },
    created: function created() {
        this.featchData();
    },
    mounted: function mounted() {
        this.typeCn = this.model.getTypeCn(this.$route.params.type);
    },

    methods: {
        featchSuccess: function featchSuccess(data) {
            this.Articles = data.Articles;
            this.page.total = data.Total;
        },
        featchData: function featchData() {
            var _this = this;

            this.loading = true;
            var params = {
                'type': this.type,
                'status': this.status,
                'start': this.page.start,
                'limit': this.page.limit
            };
            this.model.fetchList(params).done(this.featchSuccess).fail(function (data) {}).always(function (data) {
                _this.loading = false;
            });
        }
    }
};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(146);

exports.default = {
    data: function data() {
        return {
            input: ''
        };
    },

    methods: {
        jsPatch: function jsPatch() {
            var val = $.trim(this.input);
            if ((0, _utils.isUrl)(val)) {
                $.notify('添加成功！', { type: 'success' });
                console.log(val);
            } else {
                $.notify('输入错误，请检查！', { type: 'danger' });
            }
        }
    }
};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _Ajax = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        model: Object
    },
    mounted: function mounted() {
        this.$nextTick(function () {
            var id = this.model.value;
            if (id) {
                this.fetchVoteOption(id);
            }
        });
    },
    data: function data() {
        return {
            input: '',
            editable: null,
            voteOptions: []
        };
    },

    watch: {
        model: function model(data) {
            console.log(data);
        }
    },
    directives: {
        "tfocus": function tfocus(el, obj) {
            if (obj.value) {
                setTimeout(function () {
                    el.focus();
                }, 100);
            }
        }
    },
    methods: {
        fetchVoteOption: function fetchVoteOption(id) {
            var _this = this;

            $.get(_Ajax.Url.vote.list + "?article_id=" + id).done(function (data) {
                _this.voteOptions = data.VoteOptions;
            }).fail(function (data) {
                console.log('error');
            });
        },
        addVote: function addVote() {
            var _this2 = this;

            var val = $.trim(this.input);
            if (val) {
                $.post(_Ajax.Url.vote.create, (0, _stringify2.default)({
                    'ArticleId': this.model.value,
                    'Description': '',
                    'Title': val
                })).done(function (data) {
                    if (data.Id) {
                        _this2.voteOptions.push(data);
                        _this2.input = '';
                    }
                    console.log(data);
                }).fail(function (data) {
                    console.log(data);
                });
            }
        },
        saveVote: function saveVote() {
            this.editable = null;
        },
        delVote: function delVote(list, index) {
            var _this3 = this;

            $.post(_Ajax.Url.vote.delete, (0, _stringify2.default)({
                'Id': list.Id
            })).done(function (data) {
                if (!data.ErrorCode) {
                    _this3.voteOptions.splice(index, 1);
                }
            }).fail(function (data) {
                console.log(data);
            });
        },
        editVote: function editVote(index) {
            this.editable = index;
        }
    }
};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


__webpack_require__(53);
__webpack_require__(90);
__webpack_require__(159);

if (typeof $.fn.cropper !== "function") {
    __webpack_require__(93);
    __webpack_require__(91);
}

var config = {
    props: {
        'model': Object,
        'label': String,
        'name': String,
        'value': {
            type: String,
            default: function _default() {
                return '';
            }
        },
        'configs': {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        'url': {
            type: String,
            default: "/admin_v2/editor/upload_image"
        }
    },
    data: function data() {
        return {
            file: '',
            files: '',
            $modal: '',
            isModify: false,
            tip: false,
            uploadType: "pic",
            uploading: false,
            cropping: false,
            preview_src: this.value
        };
    },

    methods: {
        renderImgData: function renderImgData(file) {
            var _this = this;

            var reader = new FileReader();
            reader.onload = function () {
                _this.preview_src = reader.result;
                _this.initCropImg();
            };
            reader.readAsDataURL(file);
        },
        initCropImg: function initCropImg() {
            var _this2 = this;

            var crop_config = {
                aspectRatio: 9 / 5,
                autoCropArea: 0.8,
                exts: ['png', 'jpg', 'gif']
            };
            crop_config = $.extend(crop_config, this.configs);
            if (this.file) {
                var ext = this.file.name.toLowerCase().split(/[\s.]+/).pop();
                if (crop_config.exts.indexOf(ext) == -1) {
                    alert('上传图片格式仅支持PNG，JPG，GIF');
                    return false;
                }
            }
            this.$modal.open();
            setTimeout(function () {
                $(_this2.$refs.img).cropper(crop_config);
            }, 100);

            this.$file.val('');
        },
        getImgBlobData: function getImgBlobData(image, callback) {

            var img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');
            img.src = this.preview_src;

            var dataURItoBlob = function dataURItoBlob(dataURI) {
                var byteString = void 0;
                if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                    byteString = atob(dataURI.split(',')[1]);
                } else {
                    byteString = unescape(dataURI.split(',')[1]);
                }

                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ia], { type: mimeString });
            };

            img.onload = function () {

                var canvas = document.createElement("canvas");
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                var base64data = canvas.toDataURL();
                var fileBlob = dataURItoBlob(base64data);
                callback(fileBlob);
            };
        },
        handleConfirmBtn: function handleConfirmBtn() {
            var self = this;
            var crop_data = $(this.$refs.img).cropper("getData");
            var image = $(this.$refs.img).cropper('getImageData');
            var zoomLevel = image.width / image.naturalWidth || 0;
            var crop_url = this.url + "?x=" + crop_data.x + "&y=" + crop_data.y + "&w=" + crop_data.width + "&h=" + crop_data.height + "&z=" + zoomLevel;

            this.cropping = true;
            this.$modal.close();
            if (this.isModify) {
                this.getImgBlobData(image, function (fileBlob) {
                    self.xhrCropImg({
                        url: crop_url,
                        file: fileBlob,
                        success: function success() {},
                        error: '',
                        abort: ''
                    });
                });
            } else {
                this.xhrCropImg({
                    url: crop_url,
                    file: this.file,
                    success: function success() {},
                    error: '',
                    abort: ''
                });
            }
        },
        xhrCropImg: function xhrCropImg(options) {

            var self = this;
            var xhr = new XMLHttpRequest();
            var onProgressListener = function onProgressListener(e) {
                var done = e.position || e.loaded;
                var total = e.totalSize || e.total;
                var progress = Math.floor(done / total * 1000) / 10;
            };
            var fd = new FormData();
            fd.append('upfile', options.file);
            $.ajax({
                url: options.url,
                data: fd,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function success(data) {
                    var img = $("<img >").attr("src", data.file_path);
                    img.one("load", function () {
                        self.cropping = false;
                        self.preview_src = self.value = data.file_path;
                        options.success(data);
                    });
                },

                fail: function fail(e, xhr) {
                    self.cropping = false;
                    options.error(e, xhr);
                }
            });
        },
        crop_add: function crop_add() {
            var image = $(this.$refs.img).cropper('getImageData');
            var zoomLevel = image.width / image.naturalWidth;
            if (zoomLevel >= 2) {} else {
                $(this.$refs.img).cropper("zoom", 0.1);
            }
        },
        crop_minus: function crop_minus() {
            $(this.$refs.img).cropper("zoom", -0.1);
        },
        preview_edit: function preview_edit() {
            if (this.uploadType !== "gif") {
                this.preview_src = this.value;
                this.isModify = true;
                this.file = '';
                this.initCropImg();
            }
        },
        isGif: function isGif(v) {
            if (v.split(".").reverse()[0] === "gif") {
                return true;
            } else {
                return false;
            }
        },
        uploadGif: function uploadGif(file) {
            var reader = new FileReader();
            var self = this;
            reader.addEventListener("load", function () {
                var image = new Image();
                image.addEventListener("load", function () {
                    var w = image.width;
                    var h = image.height;
                    var size = Math.round(file.size / 1024);
                    var ratio = w / h;

                    if (w / h <= 2 && w / h >= 0.5 && size <= 2048) {
                        self.uploading = true;
                        self.xhrCropImg({
                            url: self.url,
                            file: file,
                            success: function success() {
                                self.uploading = false;
                            },
                            error: '',
                            abort: ''
                        });
                    } else {
                        alert("请保持上传的GIF图长宽比例为2:1，且大小不能超过2M！");
                    }
                });
                image.src = reader.result;
            });
            reader.readAsDataURL(file);
        }
    },
    watch: {
        file: function file(new_val) {

            if (new_val) {

                this.renderImgData(new_val);
            }
        }
    },
    mounted: function mounted() {

        var self = this;

        this.$file = $(this.$el).find(".file");
        this.$modal = $(this.$refs.popup).remodal();

        console.log(this.$modal);

        $(this.$refs.file).on("change", function () {
            if (self.isGif(this.files[0].name)) {
                self.uploadGif(this.files[0]);
                self.uploadType = 'gif';
            } else {
                self.file = this.files[0];
                self.isModify = false;
                self.uploadType = 'pic';
            }
        });
        $(document).on('closed', '.remodal', function (e) {
            $(self.$els.img).cropper('destroy');
        });

        if (this.isGif(this.value)) {
            this.uploadType = "gif";
        }
    }
};
exports.default = config;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _upload = __webpack_require__(65);

var _upload2 = _interopRequireDefault(_upload);

var _richTextEdit = __webpack_require__(64);

var _richTextEdit2 = _interopRequireDefault(_richTextEdit);

var _cropImg = __webpack_require__(60);

var _cropImg2 = _interopRequireDefault(_cropImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'field',
    components: { upload: _upload2.default, richTextEdit: _richTextEdit2.default, cropImg: _cropImg2.default },
    mounted: function mounted() {},

    methods: {
        changeModel: function changeModel() {
            if (this.model.value) {
                this.model.error = false;
            }
        }
    },
    watch: {},
    data: function data() {
        return {
            v: this.model.value,
            status: [1, 2, 4]
        };
    },

    props: {
        id: String,
        model: Object,
        cls: String
    }
};

/***/ },
/* 139 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        loading: false,
        txt: {
            type: String,
            default: ""
        }
    }
};

/***/ },
/* 140 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    mounted: function mounted() {
        if (this.$route.query.page > 1) {
            this.goTo(this.$route.query.page * 1 - 1);
        }
    },

    watch: {
        'currentPage': function currentPage(val) {},
        'page.total': function pageTotal(val) {
            this.totalPage = parseInt(this.page.total / this.page.limit);
            if (this.page.total % this.page.limit !== 0) {
                this.totalPage++;
            }
        }
    },
    methods: {
        goTo: function goTo(page) {
            var _this = this;

            if (page == this.totalPage) {
                page = page - 1;
            }
            this.page.start = page * this.page.limit;
            this.model.fetchList(this.page).done(function (data) {
                _this.currentPage = page + 1;
                _this.$parent[_this.dataListKey] = data[_this.dataListKey];
                _this.page.total = data.Total;
                _this.$router.push({ name: _this.$router.name, query: { page: _this.currentPage } });
            });
        }
    },
    data: function data() {
        return {
            currentPage: 1,
            totalPage: 0,
            isPrevious: false
        };
    },

    props: {
        model: Object,
        dataListKey: String,
        page: {
            type: Object,
            default: {
                limit: 5,
                start: 0,
                total: 0
            }
        }
    }
};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        targetId: String,
        text: String,
        url: String,
        id: String,
        dataListKey: String,
        params: Object,
        icon: String,
        index: Number,
        alertMsg: {
            type: String,
            default: '确认进行此操作吗？'
        },
        cls: {
            type: String,
            default: "btn-warning"
        }
    },
    methods: {
        handleConfirm: function handleConfirm() {
            var _this = this;

            console.log(this.$parent.model);
            this.$parent.model.delete((0, _stringify2.default)(this.params)).done(function (data) {
                if (!data.ErrCode) {
                    $.notify('删除成功！', { type: 'success' });
                    $('#' + _this.targetId).modal('hide');
                    _this.$parent[_this.dataListKey].splice(_this.index, 1);
                }
            });
        },
        handleClick: function handleClick() {
            console.log(this);
            $('#' + this.targetId).modal();
        }
    }
};

/***/ },
/* 142 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var tinymcePlugins = function tinymcePlugins() {
    tinymce.addI18n('zh_CN', {
        "Cut": "\u526A\u5207",
        "Heading 5": "\u6807\u98985",
        "Header 2": "\u6807\u98982",
        "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5BF9\u526A\u8D34\u677F\u7684\u8BBF\u95EE\uFF0C\u8BF7\u4F7F\u7528Ctrl+X/C/V\u952E\u8FDB\u884C\u590D\u5236\u7C98\u8D34\u3002",
        "Heading 4": "\u6807\u98984",
        "Div": "Div\u533A\u5757",
        "Heading 2": "\u6807\u98982",
        "Paste": "\u7C98\u8D34",
        "Close": "\u5173\u95ED",
        "Font Family": "\u5B57\u4F53",
        "Pre": "\u9884\u683C\u5F0F\u6587\u672C",
        "Align right": "\u53F3\u5BF9\u9F50",
        "New document": "\u65B0\u6587\u6863",
        "Blockquote": "\u5F15\u7528",
        "Numbered list": "\u7F16\u53F7\u5217\u8868",
        "Heading 1": "\u6807\u98981",
        "Headings": "\u6807\u9898",
        "Increase indent": "\u589E\u52A0\u7F29\u8FDB",
        "Formats": "\u683C\u5F0F",
        "Headers": "\u6807\u9898",
        "Select all": "\u5168\u9009",
        "Header 3": "\u6807\u98983",
        "Blocks": "\u533A\u5757",
        "Undo": "\u64A4\u6D88",
        "Strikethrough": "\u5220\u9664\u7EBF",
        "Bullet list": "\u9879\u76EE\u7B26\u53F7",
        "Header 1": "\u6807\u98981",
        "Superscript": "\u4E0A\u6807",
        "Clear formatting": "\u6E05\u9664\u683C\u5F0F",
        "Font Sizes": "\u5B57\u53F7",
        "Subscript": "\u4E0B\u6807",
        "Header 6": "\u6807\u98986",
        "Redo": "\u91CD\u590D",
        "Paragraph": "\u6BB5\u843D",
        "Ok": "\u786E\u5B9A",
        "Bold": "\u7C97\u4F53",
        "Code": "\u4EE3\u7801",
        "Italic": "\u659C\u4F53",
        "Align center": "\u5C45\u4E2D",
        "Header 5": "\u6807\u98985",
        "Heading 6": "\u6807\u98986",
        "Heading 3": "\u6807\u98983",
        "Decrease indent": "\u51CF\u5C11\u7F29\u8FDB",
        "Header 4": "\u6807\u98984",
        "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "\u5F53\u524D\u4E3A\u7EAF\u6587\u672C\u7C98\u8D34\u6A21\u5F0F\uFF0C\u518D\u6B21\u70B9\u51FB\u53EF\u4EE5\u56DE\u5230\u666E\u901A\u7C98\u8D34\u6A21\u5F0F\u3002",
        "Underline": "\u4E0B\u5212\u7EBF",
        "Cancel": "\u53D6\u6D88",
        "Justify": "\u4E24\u7AEF\u5BF9\u9F50",
        "Inline": "\u6587\u672C",
        "Copy": "\u590D\u5236",
        "Align left": "\u5DE6\u5BF9\u9F50",
        "Visual aids": "\u7F51\u683C\u7EBF",
        "Lower Greek": "\u5C0F\u5199\u5E0C\u814A\u5B57\u6BCD",
        "Square": "\u65B9\u5757",
        "Default": "\u9ED8\u8BA4",
        "Lower Alpha": "\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD",
        "Circle": "\u7A7A\u5FC3\u5706",
        "Disc": "\u5B9E\u5FC3\u5706",
        "Upper Alpha": "\u5927\u5199\u82F1\u6587\u5B57\u6BCD",
        "Upper Roman": "\u5927\u5199\u7F57\u9A6C\u5B57\u6BCD",
        "Lower Roman": "\u5C0F\u5199\u7F57\u9A6C\u5B57\u6BCD",
        "Name": "\u540D\u79F0",
        "Anchor": "\u951A\u70B9",
        "You have unsaved changes are you sure you want to navigate away?": "\u4F60\u8FD8\u6709\u6587\u6863\u5C1A\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\uFF1F",
        "Restore last draft": "\u6062\u590D\u4E0A\u6B21\u7684\u8349\u7A3F",
        "Special character": "\u7279\u6B8A\u7B26\u53F7",
        "Source code": "\u6E90\u4EE3\u7801",
        "Color": "\u989C\u8272",
        "Right to left": "\u4ECE\u53F3\u5230\u5DE6",
        "Left to right": "\u4ECE\u5DE6\u5230\u53F3",
        "Emoticons": "\u8868\u60C5",
        "Robots": "\u673A\u5668\u4EBA",
        "Document properties": "\u6587\u6863\u5C5E\u6027",
        "Title": "\u6807\u9898",
        "Keywords": "\u5173\u952E\u8BCD",
        "Encoding": "\u7F16\u7801",
        "Description": "\u63CF\u8FF0",
        "Author": "\u4F5C\u8005",
        "Fullscreen": "\u5168\u5C4F",
        "Horizontal line": "\u6C34\u5E73\u5206\u5272\u7EBF",
        "Horizontal space": "\u6C34\u5E73\u8FB9\u8DDD",
        "Insert\/edit image": "\u63D2\u5165/\u7F16\u8F91\u56FE\u7247",
        "General": "\u666E\u901A",
        "Advanced": "\u9AD8\u7EA7",
        "Source": "\u5730\u5740",
        "Border": "\u8FB9\u6846",
        "Constrain proportions": "\u4FDD\u6301\u7EB5\u6A2A\u6BD4",
        "Vertical space": "\u5782\u76F4\u8FB9\u8DDD",
        "Image description": "\u56FE\u7247\u63CF\u8FF0",
        "Style": "\u6837\u5F0F",
        "Dimensions": "\u5927\u5C0F",
        "Insert image": "\u63D2\u5165\u56FE\u7247",
        "Insert date\/time": "\u63D2\u5165\u65E5\u671F/\u65F6\u95F4",
        "Remove link": "\u5220\u9664\u94FE\u63A5",
        "Url": "\u5730\u5740",
        "Text to display": "\u663E\u793A\u6587\u5B57",
        "Anchors": "\u951A\u70B9",
        "Insert link": "\u63D2\u5165\u94FE\u63A5",
        "New window": "\u5728\u65B0\u7A97\u53E3\u6253\u5F00",
        "None": "\u65E0",
        "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "\u4F60\u6240\u586B\u5199\u7684URL\u5730\u5740\u5C5E\u4E8E\u5916\u90E8\u94FE\u63A5\uFF0C\u9700\u8981\u52A0\u4E0Ahttp://:\u524D\u7F00\u5417\uFF1F",
        "Target": "\u6253\u5F00\u65B9\u5F0F",
        "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "\u4F60\u6240\u586B\u5199\u7684URL\u5730\u5740\u8C8C\u4F3C\u662F\u90AE\u4EF6\u5730\u5740\uFF0C\u9700\u8981\u52A0\u4E0Amailto:\u524D\u7F00\u5417\uFF1F",
        "Insert\/edit link": "\u63D2\u5165/\u7F16\u8F91\u94FE\u63A5",
        "Insert\/edit video": "\u63D2\u5165/\u7F16\u8F91\u89C6\u9891",
        "Poster": "\u5C01\u9762",
        "Alternative source": "\u955C\u50CF",
        "Paste your embed code below:": "\u5C06\u5185\u5D4C\u4EE3\u7801\u7C98\u8D34\u5728\u4E0B\u9762:",
        "Insert video": "\u63D2\u5165\u89C6\u9891",
        "Embed": "\u5185\u5D4C",
        "Nonbreaking space": "\u4E0D\u95F4\u65AD\u7A7A\u683C",
        "Page break": "\u5206\u9875\u7B26",
        "Paste as text": "\u7C98\u8D34\u4E3A\u6587\u672C",
        "Preview": "\u9884\u89C8",
        "Print": "\u6253\u5370",
        "Save": "\u4FDD\u5B58",
        "Could not find the specified string.": "\u672A\u627E\u5230\u641C\u7D22\u5185\u5BB9.",
        "Replace": "\u66FF\u6362",
        "Next": "\u4E0B\u4E00\u4E2A",
        "Whole words": "\u5168\u5B57\u5339\u914D",
        "Find and replace": "\u67E5\u627E\u548C\u66FF\u6362",
        "Replace with": "\u66FF\u6362\u4E3A",
        "Find": "\u67E5\u627E",
        "Replace all": "\u5168\u90E8\u66FF\u6362",
        "Match case": "\u533A\u5206\u5927\u5C0F\u5199",
        "Prev": "\u4E0A\u4E00\u4E2A",
        "Spellcheck": "\u62FC\u5199\u68C0\u67E5",
        "Finish": "\u5B8C\u6210",
        "Ignore all": "\u5168\u90E8\u5FFD\u7565",
        "Ignore": "\u5FFD\u7565",
        "Add to Dictionary": "\u6DFB\u52A0\u5230\u5B57\u5178",
        "Insert row before": "\u5728\u4E0A\u65B9\u63D2\u5165",
        "Rows": "\u884C",
        "Height": "\u9AD8",
        "Paste row after": "\u7C98\u8D34\u5230\u4E0B\u65B9",
        "Alignment": "\u5BF9\u9F50\u65B9\u5F0F",
        "Border color": "\u8FB9\u6846\u989C\u8272",
        "Column group": "\u5217\u7EC4",
        "Row": "\u884C",
        "Insert column before": "\u5728\u5DE6\u4FA7\u63D2\u5165",
        "Split cell": "\u62C6\u5206\u5355\u5143\u683C",
        "Cell padding": "\u5355\u5143\u683C\u5185\u8FB9\u8DDD",
        "Cell spacing": "\u5355\u5143\u683C\u5916\u95F4\u8DDD",
        "Row type": "\u884C\u7C7B\u578B",
        "Insert table": "\u63D2\u5165\u8868\u683C",
        "Body": "\u8868\u4F53",
        "Caption": "\u6807\u9898",
        "Footer": "\u8868\u5C3E",
        "Delete row": "\u5220\u9664\u884C",
        "Paste row before": "\u7C98\u8D34\u5230\u4E0A\u65B9",
        "Scope": "\u8303\u56F4",
        "Delete table": "\u5220\u9664\u8868\u683C",
        "H Align": "\u6C34\u5E73\u5BF9\u9F50",
        "Top": "\u9876\u90E8\u5BF9\u9F50",
        "Header cell": "\u8868\u5934\u5355\u5143\u683C",
        "Column": "\u5217",
        "Row group": "\u884C\u7EC4",
        "Cell": "\u5355\u5143\u683C",
        "Middle": "\u5782\u76F4\u5C45\u4E2D",
        "Cell type": "\u5355\u5143\u683C\u7C7B\u578B",
        "Copy row": "\u590D\u5236\u884C",
        "Row properties": "\u884C\u5C5E\u6027",
        "Table properties": "\u8868\u683C\u5C5E\u6027",
        "Bottom": "\u5E95\u90E8\u5BF9\u9F50",
        "V Align": "\u5782\u76F4\u5BF9\u9F50",
        "Header": "\u8868\u5934",
        "Right": "\u53F3\u5BF9\u9F50",
        "Insert column after": "\u5728\u53F3\u4FA7\u63D2\u5165",
        "Cols": "\u5217",
        "Insert row after": "\u5728\u4E0B\u65B9\u63D2\u5165",
        "Width": "\u5BBD",
        "Cell properties": "\u5355\u5143\u683C\u5C5E\u6027",
        "Left": "\u5DE6\u5BF9\u9F50",
        "Cut row": "\u526A\u5207\u884C",
        "Delete column": "\u5220\u9664\u5217",
        "Center": "\u5C45\u4E2D",
        "Merge cells": "\u5408\u5E76\u5355\u5143\u683C",
        "Insert template": "\u63D2\u5165\u6A21\u677F",
        "Templates": "\u6A21\u677F",
        "Background color": "\u80CC\u666F\u8272",
        "Custom...": "\u81EA\u5B9A\u4E49...",
        "Custom color": "\u81EA\u5B9A\u4E49\u989C\u8272",
        "No color": "\u65E0",
        "Text color": "\u6587\u5B57\u989C\u8272",
        "Show blocks": "\u663E\u793A\u533A\u5757\u8FB9\u6846",
        "Show invisible characters": "\u663E\u793A\u4E0D\u53EF\u89C1\u5B57\u7B26",
        "Words: {0}": "\u5B57\u6570\uFF1A{0}",
        "Insert": "\u63D2\u5165",
        "File": "\u6587\u4EF6",
        "Edit": "\u7F16\u8F91",
        "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "\u5728\u7F16\u8F91\u533A\u6309ALT-F9\u6253\u5F00\u83DC\u5355\uFF0C\u6309ALT-F10\u6253\u5F00\u5DE5\u5177\u680F\uFF0C\u6309ALT-0\u67E5\u770B\u5E2E\u52A9",
        "Tools": "\u5DE5\u5177",
        "View": "\u89C6\u56FE",
        "Table": "\u8868\u683C",
        "Format": "\u683C\u5F0F"
    });

    tinymce.PluginManager.add('margintop', function (editor) {

        editor.addButton('margintop', {
            type: 'listbox',
            classes: "margin",
            text: '⬆',
            title: '上边距',
            autofocus: false,
            icon: false,
            onselect: function onselect() {
                var nodes = editor.selection.getSelectedBlocks();
                var val = this.value() == "auto" ? '' : this.value();
                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].style.marginTop = val;
                }

                this.value(null);
                return false;
            },
            values: [{ text: 'auto', value: 'auto' }, { text: '5px', value: '5px' }, { text: '10px', value: '10px' }, { text: '26px', value: '26px' }, { text: '35px', value: '35px' }]
        });
    });

    tinymce.PluginManager.add('marginbottom', function (editor) {

        editor.addButton('marginbottom', {
            type: 'listbox',
            classes: "margin",
            text: '⬇',
            title: '下边距',
            icon: false,
            onselect: function onselect() {
                var nodes = editor.selection.getSelectedBlocks();
                var val = this.value() == "auto" ? '' : this.value();
                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].style.marginBottom = val;
                }
                this.value(null);
                return false;
            },
            values: [{ text: 'auto', value: 'auto' }, { text: '5px', value: '5px' }, { text: '10px', value: '10px' }, { text: '26px', value: '26px' }, { text: '35px', value: '35px' }]
        });
    });

    tinymce.PluginManager.add('charmapcustom', function (editor) {

        var charmap = "<div class=\"emoji-list\" style=\"height:340px;white-space:pre-wrap;\"><span>\u3001</span><span>\u3002</span><span>\xB7</span><span>\u02C9</span><span>\u02C7</span><span>\xA8</span><span>\u3003</span><span>\u3005</span><span>\u2014</span><span>\uFF5E</span><span>\u2016</span><span>\u2026</span><span>\u2018</span><span>\u2019</span><span>\u201C</span><span>\u201D</span><span>\u3014</span><span>\u3015</span><span>\u3008</span><span>\u3009</span><span>\u300A</span><span>\u300B</span><span>\u300C</span><span>\u300D</span><span>\u300E</span><span>\u300F</span><span>\u3016</span><span>\u3017</span><span>\u3010</span><span>\u3011</span><span>\xB1</span><span>\xD7</span><span>\xF7</span><span>\u2236</span><span>\u2227</span><span>\u2228</span><span>\u2211</span><span>\u220F</span><span>\u222A</span><span>\u2229</span><span>\u2208</span><span>\u2237</span><span>\u221A</span><span>\u22A5</span><span>\u2225</span><span>\u2220</span><span>\u2312</span><span>\u2299</span><span>\u222B</span><span>\u222E</span><span>\u2261</span><span>\u224C</span><span>\u2248</span><span>\u223D</span><span>\u221D</span><span>\u2260</span><span>\u226E</span><span>\u226F</span><span>\u2264</span><span>\u2265</span><span>\u221E</span><span>\u2235</span><span>\u2234</span><span>\u2642</span><span>\u2640</span><span>\xB0</span><span>\u2032</span><span>\u2033</span><span>\u2103</span><span>\uFF04</span><span>\xA4</span><span>\uFFE0</span><span>\uFFE1</span><span>\u2030</span><span>\xA7</span><span>\u2116</span><span>\u2606</span><span>\u2605</span><span>\u25CB</span><span>\u25CF</span><span>\u25CE</span><span>\u25C7</span><span>\u25C6</span><span>\u25A1</span><span>\u25A0</span><span>\u25B3</span><span>\u25B2</span><span>\u203B</span><span>\u2192</span><span>\u2190</span><span>\u2191</span><span>\u2193</span><span>\u3013</span><span>\u3021</span><span>\u3022</span><span>\u3023</span><span>\u3024</span><span>\u3025</span><span>\u3026</span><span>\u3027</span><span>\u3028</span><span>\u3029</span><span>\u32A3</span><span>\u338E</span><span>\u338F</span><span>\u339C</span><span>\u339D</span><span>\u339E</span><span>\u33A1</span><span>\u33C4</span><span>\u33CE</span><span>\u33D1</span><span>\u33D2</span><span>\u33D5</span><span>\uFE30</span><span>\uFFE2</span><span>\uFFE4</span><span>\u2121</span><span>\u02CA</span><span>\u02CB</span><span>\u02D9</span><span>\u2013</span><span>\u2015</span><span>\u2025</span><span>\u2035</span><span>\u2105</span><span>\u2109</span><span>\u2196</span><span>\u2197</span><span>\u2198</span><span>\u2199</span><span>\u2215</span><span>\u221F</span><span>\u2223</span><span>\u2252</span><span>\u2266</span><span>\u2267</span><span>\u22BF</span><span>\u2550</span><span>\u2551</span><span>\u2552</span><span>\u2553</span><span>\u2554</span><span>\u2555</span><span>\u2556</span><span>\u2557</span><span>\u2558</span><span>\u2559</span><span>\u255A</span><span>\u255B</span><span>\u255C</span><span>\u255D</span><span>\u255E</span><span>\u255F</span><span>\u2560</span><span>\u2561</span><span>\u2562</span><span>\u2563</span><span>\u2564</span><span>\u2565</span><span>\u2566</span><span>\u2567</span><span>\u2568</span><span>\u2569</span><span>\u256A</span><span>\u256B</span><span>\u256C</span><span>\u256D</span><span>\u256E</span><span>\u256F</span><span>\u2570</span><span>\u2571</span><span>\u2572</span><span>\u2573</span><span>\u2581</span><span>\u2582</span><span>\u2583</span><span>\u2584</span><span>\u2585</span><span>\u2586</span><span>\u2587</span><span>\uFFFD\x7F</span><span>\u2588</span><span>\u2589</span><span>\u258A</span><span>\u258B</span><span>\u258C</span><span>\u258D</span><span>\u258E</span><span>\u258F</span><span>\u2593</span><span>\u2594</span><span>\u2595</span><span>\u25BC</span><span>\u25BD</span><span>\u25E2</span><span>\u25E3</span><span>\u25E4</span><span>\u25E5</span><span>\u2609</span><span>\u2295</span><span>\u3012</span><span>\u301D</span><span>\u301E</span></div>";

        var showDialog = function showDialog() {

            var win = editor.windowManager.open({
                title: "Special character",
                width: 520,
                height: 400,
                spacing: 10,
                padding: 10,
                body: [{
                    type: 'container',
                    html: charmap,
                    onclick: function onclick(e) {
                        var target = e.target;
                        if (target.tagName == "SPAN") {
                            var chr = target.innerHTML;
                            editor.fire('insertCustomChar', { chr: chr }).chr;
                            editor.execCommand('mceInsertContent', false, chr);
                            win.close();
                        }
                    }
                }],
                buttons: [{ text: "Close", onclick: function onclick() {
                        win.close();
                    } }]
            });
        };

        editor.addButton("charmap", {
            icon: 'emoticons',
            onclick: function onclick() {
                showDialog();
            }
        });
    });
};

exports.default = {
    mounted: function mounted() {
        var self = this;
        var vaild_align_element = 'figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,section';
        var options = {
            selector: 'textarea[name="' + this.model.name + '"]',
            height: 600,
            menubar: false,
            image_dimensions: false,
            paste_data_images: true,
            plugins: 'code,media,link,imagetools,fullscreen,autolink,image,contextmenu,paste,textcolor,hr,margintop,marginbottom,charmapcustom',
            toolbar: 'formatselect  fontsizeselect  forecolor bold italic  alignleft aligncenter alignright margintop marginbottom removeformat uploadimg  link unlink insertvideo hr bullist numlist blockquote charmap code fullscreen',
            images_upload_credentials: true,
            block_formats: 'Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5',
            fontsize_formats: '12px 14px 18px 20px 26px 30px',
            content_css: $("#link_style").attr("href"),
            formats: {
                alignleft: [{ selector: vaild_align_element, styles: { textAlign: 'left' } }],
                aligncenter: [{ selector: vaild_align_element, styles: { textAlign: 'center' } }],
                alignright: [{ selector: vaild_align_element, styles: { textAlign: 'right' } }]
            },
            setup: function setup(ed) {
                ed.on("change", function () {
                    self.model.value = ed.getContent();
                });
            }
        };
        $.getScript('https://cdn.bootcss.com/tinymce/4.4.1/tinymce.min.js').done(function (data) {
            tinymcePlugins();
            tinymce.init(options);
        });
    },
    data: function data() {
        return {
            richText: this.model.value
        };
    },

    watch: {
        'model.value': function modelValue(data) {
            this.richText = data;
        }
    },
    props: {
        model: Object
    }
};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _qiniuJsSDK = __webpack_require__(144);

var _qiniuJsSDK2 = _interopRequireDefault(_qiniuJsSDK);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        'model': Object,
        "label": String,
        "name": String,
        "btnText": String,
        "bucketName": {
            type: String,
            default: "si00"
        },
        "uptoken": {
            type: String,
            default: ''
        },
        "type": {
            type: String,
            default: "image"
        },
        "extensions": {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            qiniu: '',
            source: this.value,
            file: "",
            'value': '',
            selected: "",
            progress: '',
            exts: ["png", "jpg", "jpeg", "gif", "bmp", "mp3", "mp4", "wav"]
        };
    },
    mounted: function mounted() {
        this.source = this.model.Url.value;
    },

    methods: {
        upload: function upload() {

            var self = this;
            var file = this.$refs.file.files[0];
            var fileKey = _qiniuJsSDK2.default.generateRandomFileKey(file.name);
            var requestTag = this.$refs.file.tagName;
            var token = window.UpToken;
            var bucketName = "http://ohr25ovqc.bkt.clouddn.com";

            if (!_qiniuJsSDK2.default.isExtension(file.name, this.exts.concat(this.extensions))) {
                $.notify('不允许的文件扩展名！', { type: 'danger' });
                return false;
            }

            console.log(file);

            _qiniuJsSDK2.default.uploadFile(file, token, fileKey, {

                requestTag: requestTag,
                progressCallback: function progressCallback(e, done, total, current) {
                    self.progress = current + "%";
                },
                uploadComplete: function uploadComplete(e, xhr) {

                    self.progress = '';
                    var resp = jQuery.parseJSON(xhr.responseText);
                    var url = bucketName + "/" + fileKey;;

                    self.source = self.value = url;

                    if (_qiniuJsSDK2.default.isImage(url)) {
                        var image = new Image();
                        image.src = url;
                        image.onload = function () {
                            self.model.Url.value = url;
                            self.model.Width.value = resp.w * 1;
                            self.model.Height.value = resp.h * 1;
                            self.model.Format.value = resp.mime_type;
                        };
                    } else if (_qiniuJsSDK2.default.isHTML5Video(url) || _qiniuJsSDK2.default.isMusic(url)) {

                        var duration = parseInt(_qiniuJsSDK2.default.getDuration(url));
                        duration = isNaN(duration) ? 0 : duration;
                    }
                },
                uploadFailed: function uploadFailed(xhr) {
                    self.source = false;
                    $.notify('上传错误，请刷新重试！', { type: 'danger' });
                },
                uploadCanceled: function uploadCanceled(e, xhr) {}
            });
        },
        addImgInfo: function addImgInfo(imgInfo) {

            if (this.meowId === 1 && this.name == "img_url") {
                $("input[name='img_width']").val(imgInfo.w);
                $("input[name='img_height']").val(imgInfo.h);
            }

            if (this.meowId === 2 && this.name == "bg_url") {
                $("input[name='bg_width']").val(imgInfo.w);
                $("input[name='bg_height']").val(imgInfo.h);
            }
        },
        selectAll: function selectAll() {
            this.$refs.selected.select();
        }
    },
    watch: {
        'model.Url.value': function modelUrlValue(val) {
            this.source = this.model.Url.value;
        },
        source: function source(val) {
            if (this.type == "music") {
                var url = val + '?avinfo';
                $.ajax({
                    url: url,
                    type: 'get',
                    success: function success(d) {
                        $('input[name="music_duration"]').val(d['streams'][0]['duration']);
                    }
                });
            }
        }
    }
};

/***/ },
/* 144 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


(function ($) {
    'use strict';

    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xFFFF;
    }

    function bit_rol(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
    }

    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
    }

    function binl_md5(x, len) {
        x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;

        var i,
            olda,
            oldb,
            oldc,
            oldd,
            a = 1732584193,
            b = -271733879,
            c = -1732584194,
            d = 271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
        }
        return output;
    }

    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
        }
        return output;
    }

    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }

    $.md5 = function (string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            } else {
                return raw_md5(string);
            }
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        } else {
            return raw_hmac_md5(key, string);
        }
    };
})(typeof jQuery === 'function' ? jQuery : undefined);

var QINIU = function () {

    var qiniuSDK = {
        requests: {} };

    qiniuSDK.uploadFile = function (file, uptoken, fileKey, options) {
        var xhr = new XMLHttpRequest();

        if (options['progressCallback']) {
            var progressCallback = options['progressCallback'];
            var onProgressListener = function onProgressListener(e) {
                var done = e.position || e.loaded;
                var total = e.totalSize || e.total;
                var progress = Math.floor(done / total * 1000) / 10;
                progressCallback(e, done, total, progress);
            };
            if (xhr.upload) {
                xhr.upload.onprogress = onProgressListener;
            } else {
                xhr.addEventListener('progress', onProgressListener, false);
            }
        }

        if (options['uploadComplete']) {
            xhr.addEventListener("load", function (e) {
                options['uploadComplete'](e, xhr);
            }, false);
        }
        if (options['uploadFailed']) {
            xhr.addEventListener("error", function (e) {
                options['uploadFailed'](e, xhr);
            }, false);
        }
        if (options['uploadCanceled']) {
            xhr.addEventListener("abort", function (e) {
                options['uploadCanceled'](e, xhr);
            }, false);
        }
        var fd = new FormData();
        fd.append('file', file);
        fd.append('token', uptoken);
        fd.append('key', fileKey);
        xhr.open('post', "http://upload.qiniu.com/", true);
        xhr.send(fd);

        var requestTag;
        if (!options['requestTag']) {
            requestTag = file.name;
        }
        fileKey = { "file": file, "request": xhr, 'tag': requestTag };
    };

    qiniuSDK.cancelRequestByKey = function (fileKey) {
        if (qiniuSDK.requests[fileKey]) {
            qiniuSDK.requests[fileKey]['xhr'].abort();
            delete qiniuSDK.requests[fileKey];
        }
    };
    qiniuSDK.cancelRequestByTag = function (requestTag) {
        for (var fileKey in qiniuSDK.requests) {
            var req = qiniuSDK.requests[fileKey];
            if (req['tag'] == requestTag) {
                qiniuSDK.cancelRequestByKey(fileKey);
                break;
            }
        }
    };

    qiniuSDK.isImage = function (url) {
        var res,
            suffix = "";
        var imageSuffixes = ["png", "jpg", "jpeg", "gif", "bmp"];
        var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

        if (!url || !suffixMatch.test(url)) {
            return false;
        }
        res = suffixMatch.exec(url);
        suffix = res[1].toLowerCase();
        for (var i = 0, l = imageSuffixes.length; i < l; i++) {
            if (suffix === imageSuffixes[i]) {
                return true;
            }
        }
        return false;
    };

    qiniuSDK.isHTML5Video = function (url) {
        var res,
            suffix = "";
        var videoSuffixes = ["mp4"];
        var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

        if (!url || !suffixMatch.test(url)) {
            return false;
        }
        res = suffixMatch.exec(url);
        suffix = res[1].toLowerCase();
        for (var i = 0, l = videoSuffixes.length; i < l; i++) {
            if (suffix === videoSuffixes[i]) {
                return true;
            }
        }
        return false;
    };

    qiniuSDK.isMusic = function (url) {
        var res,
            suffix = "";
        var musicSuffixes = ["mp3", "wav"];
        var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

        if (!url || !suffixMatch.test(url)) {
            return false;
        }
        res = suffixMatch.exec(url);
        suffix = res[1].toLowerCase();
        for (var i = 0, l = musicSuffixes.length; i < l; i++) {
            if (suffix === musicSuffixes[i]) {
                return true;
            }
        }
        return false;
    };

    qiniuSDK.isExtension = function (url, extensions) {

        var res,
            suffix = "";
        var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

        if (!url || !suffixMatch.test(url)) {
            return false;
        }
        res = suffixMatch.exec(url);
        suffix = res[1].toLowerCase();
        for (var i = 0, l = extensions.length; i < l; i++) {
            if (suffix === extensions[i]) {
                return true;
            }
        }
        return false;
    };

    qiniuSDK.getDuration = function (url) {
        var duration = '';
        $.ajax({
            url: url + "?avinfo",
            type: "get",
            dataType: "json",
            async: false,
            success: function success(data) {
                duration = data.format.duration;
            }
        });
        return duration;
    };

    qiniuSDK.generateRandomFileKey = function (url) {
        var parts = url.split('.');
        var suffix = parts[parts.length - 1];
        var prefix = url.substr(0, parts.length - suffix.length - 1);
        var ts = new Date().getTime();
        var seed = prefix + ts;
        var fileKey = $.md5(seed) + "." + suffix;
        return fileKey;
    };
    return qiniuSDK;
}();

exports.default = QINIU;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineColors = exports.ElementModel = exports.PlanetModel = exports.HoroModel = exports.formatDate = exports.getToken = undefined;

var _Ajax = __webpack_require__(13);

var getToken = function getToken() {
    var ajax = $.ajax({
        url: _Ajax.Url.common.qiniutoken,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
    return ajax;
};

var formatDate = function formatDate(val, fmt) {

    var date = new Date(val);
    var o = {
        "M+": date.getMonth() + 1,
        "D+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() };
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getFullYear() + "");
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
};

var HoroModel = [{
    index: 0,
    en: 'Aries',
    color: '#FF8E8E',
    cn: '白羊'

}, {
    index: 1,
    en: 'Taurus',
    color: '#FEDC62',
    cn: '金牛'
}, {
    index: 2,
    en: 'Gemini',
    color: '#44CB84',
    cn: '双子'
}, {
    index: 3,
    en: 'Cancer',
    color: '#8EDDFF',
    cn: '巨蟹'
}, {
    index: 4,
    en: 'Leo',
    color: '#FF8E8E',
    cn: '狮子'
}, {
    index: 5,
    en: 'Virgo',
    color: '#FEDC62',
    cn: '处女'
}, {
    index: 6,
    en: 'Scorpio',
    color: '#44CB84',
    cn: '天秤'
}, {
    index: 7,
    en: 'Scorpio',
    color: '#8EDDFF',
    cn: '天蝎'
}, {
    index: 8,
    en: 'Sagittarius',
    color: '#FF8E8E',
    cn: '射手'
}, {
    index: 9,
    en: 'Capricorn',
    color: '#FEDC62',
    cn: '魔羯'
}, {
    index: 10,
    en: 'Aquarius',
    color: '#44CB84',
    cn: '水瓶'
}, {
    index: 11,
    en: 'Pisces',
    color: '#8EDDFF',
    cn: '双鱼'
}];

var PlanetModel = [{
    index: 0,
    en: 'Sun',
    cn: '太阳',
    s_cn: '日'
}, {
    index: 1,
    en: 'Moon',
    cn: '月亮',
    s_cn: '月'
}, {
    index: 2,
    en: 'Mercury',
    cn: '水星',
    s_cn: '水'
}, {
    index: 3,
    en: 'Venus',
    cn: '金星',
    s_cn: '金'
}, {
    index: 4,
    en: 'Mars',
    cn: '火星',
    s_cn: '火'
}, {
    index: 5,
    en: 'Jupiter',
    cn: '木星',
    s_cn: '木'
}, {
    index: 6,
    en: 'Saturn',
    cn: '土星',
    s_cn: '土'
}, {
    index: 7,
    en: 'Uranus',
    cn: '天王星',
    s_cn: '天'

}, {
    index: 8,
    en: 'Neptune',
    cn: '海王星',
    s_cn: '海'
}, {
    index: 9,
    en: 'Pluto',
    cn: '冥王星',
    s_cn: '冥'
}];

PlanetModel[23] = {
    index: 23,
    en: 'Pluto',
    cn: '上升',
    s_cn: '升'
};
PlanetModel[24] = {
    index: 24,
    en: 'Pluto',
    cn: '中天',
    s_cn: '顶'
};

var ElementModel = [{
    index: 0,
    en: 'fire',
    color: '#FE6262',
    cn: '火'
}, {
    index: 1,
    en: 'earth',
    color: '#FEDC62',
    cn: '土'
}, {
    index: 2,
    en: 'air',
    color: '#32AF9E',
    cn: '风'
}, {
    index: 3,
    en: 'water',
    color: '#22A0CD',
    cn: '水'
}];

var LineColors = {
    0: '#855DFF',
    3: '#22A0CD',
    5: '#FF7474',
    6: '#32AF9E',
    10: '#FF7474' };

exports.getToken = getToken;
exports.formatDate = formatDate;
exports.HoroModel = HoroModel;
exports.PlanetModel = PlanetModel;
exports.ElementModel = ElementModel;
exports.LineColors = LineColors;

/***/ },
/* 146 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var isUrl = function isUrl(url) {
    var regexp = new RegExp("(http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "gi");
    return regexp.test(url);
};

exports.isUrl = isUrl;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(151);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(46);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(157);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(156);

var _inherits3 = _interopRequireDefault(_inherits2);

var _model = __webpack_require__(148);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function (_Model) {
    (0, _inherits3.default)(Article, _Model);

    function Article() {
        (0, _classCallCheck3.default)(this, Article);
        return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this));
    }

    return Article;
}(_model2.default);

exports.default = Article;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(17);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(46);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(155);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Ajax = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleTypes = { 1: '链接', 2: '文章', 3: '公告' };

var Model = function () {
    function Model() {
        (0, _classCallCheck3.default)(this, Model);

        this.url = _Ajax.Url;
        this.defaults = {
            'Id': {
                type: 'text',
                name: 'Id',
                label: 'ID',
                value: ''
            },
            "UserId": {
                type: 'text',
                name: 'UserId',
                label: '用户ID',
                value: ''
            },
            "Type": {
                type: 'hidden',
                name: 'Type',
                label: '类型',
                value: ''
            },
            "Status": {
                type: 'text',
                name: 'Status',
                label: '状态',
                value: ''
            },
            "Title": {
                type: 'text',
                name: 'Title',
                label: '标题',
                error: false,
                errorMsg: '',
                value: ''
            },
            "Topic": {
                type: 'text',
                name: 'Topic',
                label: '简介',
                error: false,
                errorMsg: '',
                value: ''
            },
            "Description": {
                type: 'text',
                name: 'Description',
                label: '描述',
                error: false,
                errorMsg: '',
                value: ''
            },
            "Author": {
                type: 'text',
                name: 'Author',
                label: '作者',
                error: false,
                errorMsg: '',
                value: ''
            },
            "Url": {
                type: 'text',
                name: 'Url',
                error: false,
                errorMsg: '',
                label: '链接 (可选)',
                value: ''
            },

            "Props": {
                "HasChild": true,
                "Content": {
                    type: 'richText',
                    name: 'Content',
                    label: '内容',
                    error: false,
                    errorMsg: '',
                    value: ''
                },
                "WebHeaderImg": {
                    HasChild: true,
                    type: 'image',
                    name: 'WebHeaderImg',
                    label: '头图',
                    Url: {
                        value: '',
                        error: false,
                        errorMsg: ''
                    },
                    Width: {
                        value: ''
                    },
                    Height: {
                        value: ''
                    }
                },
                "ShareImg": {
                    HasChild: true,
                    type: 'image',
                    name: 'ShareImg',
                    label: '分享图片',
                    Url: {
                        value: ''
                    },
                    Width: {
                        value: ''
                    },
                    Height: {
                        value: ''
                    }
                },
                "Thumb": {
                    HasChild: true,
                    type: 'image',
                    name: 'Thumb',
                    label: '封面图',
                    Url: {
                        value: ''
                    },
                    Width: {
                        value: ''
                    },
                    Height: {
                        value: ''
                    }
                }
            }
        };
    }

    (0, _createClass3.default)(Model, [{
        key: 'get',
        value: function get(name) {
            return this[name].value;
        }
    }, {
        key: 'getTypeCn',
        value: function getTypeCn(type) {

            return articleTypes[type];
        }
    }, {
        key: 'set',
        value: function set(name, value) {
            this[name] = value;
        }
    }, {
        key: 'fetchList',
        value: function fetchList(params) {
            var ajax = $.ajax({
                url: _Ajax.Url.article.list,
                type: "GET",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: params
            });
            return ajax;
        }
    }, {
        key: 'delete',
        value: function _delete(params) {
            var ajax = $.ajax({
                url: _Ajax.Url.article.delete,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: params
            });
            return ajax;
        }
    }, {
        key: 'save',
        value: function save(params) {
            var ajax = $.ajax({
                url: _Ajax.Url.article.create,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: params
            });
            return ajax;
        }
    }, {
        key: 'serializeData',
        value: function serializeData(data) {
            var temp = {};
            for (var i in data) {
                temp[i] = {};
                if (typeof data[i] !== "function") {
                    if ((0, _typeof3.default)(data[i]) == "object") {
                        temp[i] = this.serializeData(data[i]);
                    } else {
                        temp[i].value = data[i];
                    }
                }
            }
            return temp;
        }
    }, {
        key: 'unSerializeData',
        value: function unSerializeData(data) {

            var temp = {};
            for (var i in data) {
                if (typeof data[i] !== "function") {
                    temp[i] = {};
                    if (typeof data[i].HasChild !== "undefined") {
                        temp[i] = this.unSerializeData(data[i]);
                    } else {
                        temp[i] = data[i].value;
                    }
                }
            }
            return temp;
        }
    }, {
        key: 'toJSONString',
        value: function toJSONString(model) {
            return (0, _stringify2.default)(this.unSerializeData(model));
        }
    }]);
    return Model;
}();

exports.default = Model;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(150);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(152);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(149);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(17);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _typeof2 = __webpack_require__(17);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _bootstrapNotify = __webpack_require__(49);

var _bootstrapNotify2 = _interopRequireDefault(_bootstrapNotify);

var _dataTip = __webpack_require__(48);

var _dataTip2 = _interopRequireDefault(_dataTip);

var _filters = __webpack_require__(50);

var _filters2 = _interopRequireDefault(_filters);

var _router = __webpack_require__(51);

var _router2 = _interopRequireDefault(_router);

var _loading = __webpack_require__(47);

var _loading2 = _interopRequireDefault(_loading);

var _Ajax = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.title = "星座城后台";
window.Url = _Ajax.Url;

Vue.component('loading', _loading2.default);

new Vue({ router: _router2.default, methods: {
        logout: function logout() {
            var _this = this;

            $.get(_Ajax.Url.common.logout, 'json').done(function (data) {
                if (data.ErrorCode === 0) {
                    $.notify('退出成功！', { type: 'success' });
                    setTimeout(function () {
                        _this.$router.push('/login');
                    }, 1000);
                }
            }).fail(function () {
                _this.$router.push('/login');
            });
        }
    } }).$mount('#starcity-admin');

/***/ },
/* 159 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=../sourceMap/js/admin.js.map