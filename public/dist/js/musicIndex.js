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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(7)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(5),
  /* scopeId */
  "data-v-fb7ab7b6",
  /* cssModules */
  null
)
Component.options.__file = "D:\\Tujia Study\\codeSummary\\codes\\codes\\vue.js\\Tour_Heroes_vue\\public\\src\\components\\music-vue\\songsList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] songsList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb7ab7b6", Component.options)
  } else {
    hotAPI.reload("data-v-fb7ab7b6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(6)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  "data-v-5b459e88",
  /* cssModules */
  null
)
Component.options.__file = "D:\\Tujia Study\\codeSummary\\codes\\codes\\vue.js\\Tour_Heroes_vue\\public\\src\\components\\music-vue\\topList.vue"
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

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topList_module"
  }, [_c('div', {
    staticClass: "list_wrap"
  }, _vm._l((_vm.items), function(item, i) {
    return _c('router-link', {
      staticClass: "item_box",
      attrs: {
        "to": {
          name: 'songsList',
          params: {
            id: item.id
          }
        }
      }
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
    }), _vm._v(_vm._s(_vm._f("cutNum")(item.listenCount)) + "万")])]), _c('div', {
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
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "songList_module"
  }, [_c('div', {
    staticClass: "img_box"
  }, [_c('img', {
    attrs: {
      "src": _vm.dataModel.topinfo.pic_album
    }
  }), _c('div', {
    staticClass: "gradient_bg"
  }), _c('div', {
    staticClass: "info_box"
  }, [_c('div', {
    staticClass: "txt_cont"
  }, [_c('p', [_vm._v(_vm._s(_vm.dataModel.topinfo.ListName))]), _c('p', [_vm._v(_vm._s(_vm.dataModel.update_time) + "更新")])]), _c('div', {
    staticClass: "broad_cast"
  })])]), _c('div', {
    staticClass: "songs_list"
  }, [_c('ul', _vm._l((_vm.dataModel.songlist), function(item, i) {
    return _c('router-link', {
      staticClass: "item_box",
      attrs: {
        "to": {
          name: 'song',
          params: item.data.songid
        }
      }
    }, [_c('span', {
      staticClass: "num_cont"
    }, [_vm._v(_vm._s(i + 1))]), _c('div', {
      staticClass: "song_cont"
    }, [_c('p', {
      staticClass: "song_name"
    }, [_vm._v(_vm._s(item.data.songname))]), _c('p', {
      staticClass: "singer_name"
    }, [_vm._v(_vm._s(item.data.singer[0].name) + _vm._s(item.data.albumname ? " · " + item.data.albumname : "") + " " + _vm._s(item.data.albumdesc ? " · " + item.data.albumdesc : ""))])])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fb7ab7b6", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
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
//

/* harmony default export */ __webpack_exports__["default"] = {
	name: "songList_module",
	data() {
		return {
			dataModel: {
				topinfo: "",
				songlist: []
			}
		};
	},
	created() {
		this.getList();
	},
	methods: {
		getSuccessList: function (data) {
			this.dataModel = data;
		},
		getList: function () {

			var that = this;
			$.ajax({
				url: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&" + "topid=" + that.$route.params.id + "&jsonpCallback=?",
				type: "get",
				dataType: "jsonp",
				jsonp: "callback"

			}).done(this.getSuccessList).fail(function () {}).always(function () {});
		}

	}
};

/***/ }),
/* 9 */
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
    },
    filters: {
        cutNum: function (value) {

            var str = String(value);
            var str_a = str.substr(0, str.length - 3);
            var str_b = str_a.substr(0, str_a.length - 1);
            var str_c = Math.round(parseInt(str_a.charAt(str_a.length - 1)));

            var result = str_b + "," + str_c;

            return result;
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue__);


__webpack_require__(3);





var router = new VueRouter({
	routes: [{
		name: "topList", path: "/", component: __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default.a
	}, {
		name: "songsList", path: "/songsList/:id", component: __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue___default.a
	}, {
		name: "song", path: "/songsList/song/:id", component: __WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue___default.a
	}]
});

new Vue({
	router: router
}).$mount("#app");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Tujia Study\\codeSummary\\codes\\codes\\vue.js\\Tour_Heroes_vue\\public\\src\\components\\music-vue\\song.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] song.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5ccaa88", Component.options)
  } else {
    hotAPI.reload("data-v-a5ccaa88", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "song_module"
  }, [_c('div', {
    staticClass: "music_controls"
  }, [_c('div', {
    ref: "aa",
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "left_time"
  }, [_vm._v(_vm._s(_vm.songData.beginTime))]), _c('div', {
    staticClass: "progress_bar"
  }, [_c('span', {
    staticClass: "load_bar",
    style: ({
      width: '20%'
    })
  })]), _c('div', {
    staticClass: "right_time"
  }, [_vm._v(_vm._s(_vm.songData.eddTime))])])]), _c('audio', {
    ref: "audio",
    attrs: {
      "src": _vm.songData.url
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a5ccaa88", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	name: "song_module",
	data() {
		return {
			songData: {
				url: "",
				beginTime: "",
				eddTime: ""
			}
		};
	},
	mounted() {
		this.getSongData();
	},
	methods: {
		getSongData: function () {

			var that = this;
			var song_url = "http://ws.stream.qqmusic.qq.com/" + this.$route.params.id + ".m4a?fromtag=46";
			this.songData.url = song_url;

			//获取audio元素
			var audio = this.$refs.audio;
			audio.addEventListener("loadedmetadata", function () {

				that.songData.beginTime = that.getTime(0);
				that.songData.eddTime = that.getTime(audio.duration);
			});
		},
		getTime: function (time) {

			var minutes = this.addZero(parseInt(time / 60));
			var seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0, 2)));
			return minutes + ":" + seconds;
		},
		addZero: function (num) {
			if (num > -1 && num < 10) {
				num = "0" + num;
			}
			return num;
		}
	}
};

/***/ })
/******/ ]);
//# sourceMappingURL=../sourceMap/js/musicIndex.js.map