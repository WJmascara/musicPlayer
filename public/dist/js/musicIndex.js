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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__);


__webpack_require__(1);



new Vue({
    el: "#app",
    components: { topList: __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default.a }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(5)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangjie/Desktop/vueStudy/Tour_Heroes_vue/public/src/components/music-vue/topList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b459e88", Component.options)
  } else {
    hotAPI.reload("data-v-5b459e88", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topList_module"
  }, [_c('div', {
    staticClass: "list_wrap"
  }, _vm._l((_vm.items), function(item, i) {
    return _c('div', {
      staticClass: "item_box"
    }, [_c('div', {
      staticClass: "img_box"
    }, [_c('img', {
      attrs: {
        "src": item.picUrl
      }
    }), _c('span', {
      staticClass: "num_cont"
    }, [_c('i', {
      staticClass: "icon_listen"
    }, [_vm._v(_vm._s(item.listenCount) + "万")])])]), _c('div', {
      staticClass: "songs_box"
    }, [_c('div', {
      staticClass: "tit_cont"
    }, [_vm._v(_vm._s(item.topTitle))]), _c('div', {
      staticClass: "list_cont"
    }, [_c('ul', _vm._l((item.songList), function(value, k) {
      return _c('li', [_c('span', {
        staticClass: "song_num"
      }, [_vm._v(_vm._s(k + 1))]), _c('span', {
        staticClass: "song_name"
      }, [_vm._v(_vm._s(value.songname) + "-")]), _c('span', {
        staticClass: "singer_name"
      }, [_vm._v(_vm._s(value.singername))])])
    }))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5b459e88", module.exports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = {
    name: "topList_module",
    data() {
        return {
            items: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getSuccessList: function (data) {

            this.items = data.data.topList;
        },
        getList: function () {

            $.ajax({

                url: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1486287537095&jsonpCallback=?",
                type: "get",
                dataType: "jsonp",
                jsonp: "callback"

            }).done(this.getSuccessList).fail(function () {

                return false;
            }).always(function () {
                console.log(1);
            });
        }
    }
};

/***/ })
/******/ ]);
//# sourceMappingURL=../sourceMap/js/musicIndex.js.map