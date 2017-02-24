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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Tujia Study\\codeSummary\\codes\\codes\\vue.js\\Tour_Heroes_vue\\public\\src\\components\\music-vue\\recom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] recom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e24ca57", Component.options)
  } else {
    hotAPI.reload("data-v-1e24ca57", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Tujia Study\\codeSummary\\codes\\codes\\vue.js\\Tour_Heroes_vue\\public\\src\\components\\music-vue\\search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5bae720f", Component.options)
  } else {
    hotAPI.reload("data-v-5bae720f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  "data-v-db8be178",
  /* cssModules */
  null
)
Component.options.__file = "D:\\Tujia Study\\codeSummary\\codes\\codes\\vue.js\\Tour_Heroes_vue\\public\\src\\components\\music-vue\\songListRecom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] songListRecom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-db8be178", Component.options)
  } else {
    hotAPI.reload("data-v-db8be178", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(13),
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(9),
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
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(11),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recommend_module"
  }, [_c('div', {
    staticClass: "banner_list"
  }, [_c('ul', {
    style: ({
      width: (_vm.recomData.data.focus.length * 100 + '%')
    })
  }, _vm._l((_vm.recomData.data.focus), function(item, i) {
    return _c('li', {
      style: ({
        width: (100 / _vm.recomData.data.focus.length + '%')
      })
    }, [_c('img', {
      attrs: {
        "src": item.pic
      }
    })])
  }))]), _c('div', {
    staticClass: "radio_list"
  }, [_c('h2', [_vm._v("电台")]), _c('ul', _vm._l((_vm.recomData.data.hotdiss.list), function(item, i) {
    return _c('router-link', {
      style: ({
        backgroundImage: 'url(' + item.imgurl + ')'
      }),
      attrs: {
        "to": {
          name: 'songListRecom',
          params: {
            disstid: item.dissid
          }
        }
      }
    }, [_c('span', {
      staticClass: "icon_play"
    }), _c('p', {
      staticClass: "tit_box"
    }, [_vm._v(_vm._s(item.title))])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1e24ca57", module.exports)
  }
}

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search_module"
  }, [_c('div', {
    staticClass: "search_box"
  }, [_c('input', {
    staticClass: "input_box",
    attrs: {
      "type": "text",
      "placeholder": "搜索歌曲、歌单、专辑"
    }
  }), _c('a', {
    staticClass: "search_btn",
    attrs: {
      "href": "javascript:;"
    }
  }), _c('span', {
    staticClass: "cancle_box"
  }, [_vm._v("取消")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5bae720f", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "song_module",
    style: ({
      backgroundImage: 'url(' + (_vm.childDataModel.topinfo.pic ? _vm.childDataModel.topinfo.pic_album : '') + ')'
    })
  }, [_c('div', {
    staticClass: "mask_bg"
  }), _c('div', {
    staticClass: "music_controls"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "left_time"
  }, [_vm._v(_vm._s(_vm.songData.beginTime))]), _c('div', {
    staticClass: "progress_bar"
  }, [_c('span', {
    staticClass: "load_bar",
    style: ({
      width: _vm.songData.loadedPercent
    })
  })]), _c('div', {
    staticClass: "right_time"
  }, [_vm._v(_vm._s(_vm.songData.endTime))])]), _c('div', {
    staticClass: "btns"
  }, [_c('a', {
    staticClass: "prev_btn",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.playNextSong('prev')
      }
    }
  }), _c('a', {
    staticClass: "broadCast_btn",
    class: {
      paused: _vm.songData.isPaused
    },
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.playerPaused()
      }
    }
  }), _c('a', {
    staticClass: "next_btn",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.playNextSong('next')
      }
    }
  }), _c('a', {
    staticClass: "list_btn",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.showSongList()
      }
    }
  })])]), _c('div', {
    staticClass: "mid_circle rotate",
    class: {
      pause: _vm.songData.isRotatePause
    },
    style: ({
      backgroundImage: 'url(' + (_vm.childDataModel.topinfo.pic ? _vm.childDataModel.topinfo.pic : '') + ')'
    })
  }), _c('div', {
    staticClass: "song_list",
    class: {
      show: _vm.songData.isSongListShow
    }
  }, [_c('ul', _vm._l((_vm.childDataModel.songlist), function(item, i) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.selectSong(i)
        }
      }
    }, [_vm._v(_vm._s(item.data.songname) + " " + _vm._s(item.data.singer[0].name))])
  })), _c('a', {
    staticClass: "close_btn",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.closeSongList()
      }
    }
  }, [_vm._v("关闭")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a5ccaa88", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.dataModel.cdlist) ? _c('div', {
    staticClass: "songListRecom_module"
  }, [_c('div', {
    staticClass: "img_box"
  }, [_c('img', {
    attrs: {
      "src": _vm.dataModel.cdlist[0].logo
    }
  }), _c('div', {
    staticClass: "gradient_bg"
  }), _c('div', {
    staticClass: "info_box"
  }, [_c('div', {
    staticClass: "txt_cont"
  }, [_c('p', [_vm._v(_vm._s(_vm.dataModel.cdlist[0].dissname))]), _c('p', [_vm._v(_vm._s(_vm.dataModel.cdlist[0].desc))])]), _c('div', {
    staticClass: "broad_cast"
  })])]), _c('div', {
    staticClass: "songs_list"
  }, [_c('ul', _vm._l((_vm.dataModel.cdlist[0].songlist), function(item, i) {
    return _c('li', {
      staticClass: "item_box"
    }, [_c('span', {
      staticClass: "num_cont"
    }, [_vm._v(_vm._s(i + 1))]), _c('div', {
      staticClass: "song_cont"
    }, [_c('p', {
      staticClass: "song_name"
    }, [_vm._v(_vm._s(item.title))]), _c('p', {
      staticClass: "singer_name"
    }, [_vm._v(_vm._s(item.singer[0].name))])])])
  }))])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-db8be178", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "songList_module"
  }, [_c('div', {
    staticClass: "songs_list_wrap",
    class: {
      hide: _vm.isSongListHide
    }
  }, [_c('a', {
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
  }, [_c('ul', _vm._l((_vm.dataModel.songlist), function(item, index) {
    return _c('li', {
      staticClass: "item_box",
      on: {
        "click": function($event) {
          _vm.playToSong(index)
        }
      }
    }, [_c('span', {
      staticClass: "num_cont"
    }, [_vm._v(_vm._s(index + 1))]), _c('div', {
      staticClass: "song_cont"
    }, [_c('p', {
      staticClass: "song_name"
    }, [_vm._v(_vm._s(item.data.songname))]), _c('p', {
      staticClass: "singer_name"
    }, [_vm._v(_vm._s(item.data.singer[0].name) + _vm._s(item.data.albumname ? " · " + item.data.albumname : "") + " " + _vm._s(item.data.albumdesc ? " · " + item.data.albumdesc : ""))])])])
  }))])]), _c('song', {
    class: {
      hide: _vm.isSongHide
    },
    attrs: {
      "childDataModel": _vm.dataModel,
      "songindex": _vm.songindex
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fb7ab7b6", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	name: "recommend_module",
	data() {
		return {
			recomData: {
				data: {
					focus: [],
					hotdiss: ""
				}
			}
		};
	},
	created() {
		this.getList();
	},
	mounted() {},
	methods: {
		getSuccessList: function (data) {
			this.recomData = data;
		},
		getList: function () {

			$.ajax({
				url: "https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=v12&page=other&rnd=0&g_tk=1486632476661&loginUin=0&hostUin=0&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0&jsonpCallback=?",
				dataType: "jsonp",
				type: "get",
				jsonp: "callback"
			}).done(this.getSuccessList).fail(function () {}).always(function () {});
		}
	}
};

/***/ }),
/* 21 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	name: "search_module"
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_common_js__ = __webpack_require__(26);
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




/* harmony default export */ __webpack_exports__["default"] = {
	name: "song_module",
	data() {
		return {
			audio: __WEBPACK_IMPORTED_MODULE_0__js_common_js__["a" /* CreateAudio */],
			songData: {
				beginTime: "",
				endTime: "",
				loadedPercent: "",
				rotatedeg: "",
				isPaused: false,
				isRotatePause: false,
				isSongListShow: false
			}
		};
	},
	props: {
		childDataModel: Object,
		songindex: Number
	},
	watch: {
		songindex: "playSong"
	},
	methods: {
		playSong: function (songindex) {

			this.songindex = songindex;
			this.Audio = new this.audio(this.songData, this.childDataModel.songlist[this.songindex].data.songid);
		},
		playerPaused: function () {
			if (!this.songData.isPaused) {

				this.Audio.pause();
			} else {

				this.Audio.play();
			}
		},
		playNextSong: function (btnStatus) {

			var nextIndex = 0;
			var currentIndex = this.songindex;
			var songsLength = this.childDataModel.songlist.length;

			if (btnStatus == "prev") {

				if (currentIndex > 0) {
					nextIndex = currentIndex - 1;
				} else {
					nextIndex = songsLength - 1;
				}
			} else if (btnStatus == "next") {

				if (currentIndex < songsLength - 1) {
					nextIndex = currentIndex + 1;
				} else {
					nextIndex = 0;
				}
			} else {}

			console.log(this.Audio);
			this.playSong(nextIndex);
		}

		// 	getAudio:function(songid){
		// 		var song_url = "http://ws.stream.qqmusic.qq.com/" + songid + ".m4a?fromtag=46";
		// 		return song_url;
		// 	},
		// 	getSongData:function(){

		// 		var _that = this;

		// 		//获取audio元素
		// 		var audio = _that.$refs.audio;
		// 		audio.addEventListener("loadedmetadata",function(){

		// 			_that.songData.beginTime = _that.getTime(0);
		// 			_that.songData.endTime = _that.getTime(audio.duration);

		// 			//播放音乐
		// 			audio.play();

		// 			//加载条的变化
		// 			_that.timer = setInterval(function(){
		// 				var loaded_time = audio.currentTime;
		// 				var loaded_percent = audio.currentTime / audio.duration * 100 + "%";

		// 				_that.songData.beginTime = _that.getTime(loaded_time);
		// 				_that.songData.loadedPercent = loaded_percent;

		// 				//播放完成自动暂停
		// 				if(  audio.currentTime == audio.duration ){

		// 					_that.songData.isPaused = true;
		// 					audio.pause();
		// 					_that.isRotatePause = true;

		// 					//清除计数器
		// 					clearInterval(_that.timer);
		// 				}
		// 			},200);

		// 		});
		// 	},
		// 	playNextSong:function(argument){

		// 		var result_index = 0;
		// 		var current_index = this.$route.params.songindex;
		// 		var songs_len = this.childDataModel.songlist.length;

		// 		//判断前进后退
		// 		if( argument == "prev" ) {

		// 		 	if( current_index > 0 ) {
		// 				result_index = current_index - 1;
		// 			}else {
		// 				result_index = songs_len - 1;
		// 			}

		// 		}else if( argument == "next" ) {

		// 			if( current_index < songs_len - 1 ) {
		// 				result_index = current_index + 1;
		// 			}else {
		// 				current_index = 0;
		// 			}

		// 		}else{}

		// 		var songid = this.childDataModel.songlist[result_index].data.songid;

		// 		//重置songindex
		// 		this.$route.params.songindex = result_index;
		// 		this.$route.params.songid = this.childDataModel.songlist[result_index].data.songid;

		// 		//播放
		// 		this.getAudio(songid);
		// 		this.songData.isPaused = false;

		// 		this.isRotatePause = false;

		// 	},
		// 	playerPaused:function(){

		// 		if( !this.songData.isPaused ) {

		// 			this.songData.isPaused = true;
		// 			this.$refs.audio.pause();
		// 			this.isRotatePause = true;

		// 		}else {

		// 			this.songData.isPaused = false;
		// 			this.$refs.audio.play();
		// 			this.isRotatePause = false;

		// 		}
		// 	},
		// 	showSongList:function(){
		// 		this.isShow = true;
		// 	},
		// 	closeSongList:function(){
		// 		this.isShow = false;
		// 	},
		// 	selectSong:function(index){

		// 		var songid = this.childDataModel.songlist[index].data.songid;
		// 		this.$route.params.songid = songid;

		// 		this.getAudio(songid);

		// 		//关闭列表
		// 		this.closeSongList();

		// 	},
		// 	getTime:function(time){

		// 		var minutes = this.addZero(parseInt(time / 60));
		// 		var seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0,2)));
		// 		return (minutes + ":" + seconds);
		// 	},
		// 	addZero:function(num){
		// 		if( num > -1 && num < 10 ) {
		// 			num = "0" + num;
		// 		}
		// 		return num;
		// 	}
		// }
	}
};

/***/ }),
/* 23 */
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
	name: "songListRecom_module",
	data() {
		return {
			dataModel: ""
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
				url: "https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&disstid=" + that.$route.params.disstid + "&type=1&json=1&utf8=1&onlysong=0&nosign=1&_=1486633911911&jsonpCallback=?",
				type: "get",
				dataType: "jsonp",
				jsonp: "callback"

			}).done(this.getSuccessList).fail(function () {}).always(function () {});
		}

	}
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__song_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__song_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__song_vue__);
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




/* harmony default export */ __webpack_exports__["default"] = {
	name: "songList_module",
	data() {
		return {
			dataModel: {
				topinfo: "",
				songlist: []
			},
			isSongHide: true,
			isSongListHide: false,
			songindex: -1
		};
	},
	components: {
		song: __WEBPACK_IMPORTED_MODULE_0__song_vue___default.a
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

			}).done(this.getSuccessList);
		},
		playToSong: function (index) {

			this.isSongHide = false;
			this.isSongListHide = true;

			this.songindex = index;
			console.log(this.songindex);
		}

	}
};

/***/ }),
/* 25 */
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
            console.log(data);
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

            // var str = String(value);
            // var str_a = str.substr(0,str.length-3);
            // var str_b = str_a.substr(0,str_a.length-1);
            // var str_c = Math.round(parseInt(str_a.charAt(str_a.length-1)));

            // var result = str_b +　"," + str_c;
            var result = (value / 10000).toFixed(1);

            return result;
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAudio; });


function CreateAudio(songData, songid) {

	this.songData = songData;
	this.songid = songid;

	songData = {
		beginTime: "",
		endTime: "",
		loadedPercent: "",
		rotatedeg: "",
		isPaused: false,
		isRotatePause: false,
		isSongListShow: false
	};

	this.audio = new Audio("http://ws.stream.qqmusic.qq.com/" + this.songid + ".m4a?fromtag=46");

	var _that = this;
	this.audio.addEventListener("canplay", function () {
		_that.audio.play();
		_that.songData.isPaused = false;
		_that.songData.isRotatePause = false;
	});

	this.audio.addEventListener("loadedmetadata", function () {

		_that.songData.beginTime = _that.getTime(0);
		_that.songData.endTime = _that.getTime(this.duration);
	});

	this.audio.addEventListener("timeupdate", function () {

		_that.songData.loadedPercent = this.currentTime / this.duration * 100 + "%";
		_that.songData.beginTime = _that.getTime(this.currentTime);
	});

	this.audio.addEventListener("ended", function () {

		_that.songData.isPaused = true;
		_that.songData.isRotatePause = true;
	});
}

CreateAudio.prototype.play = function () {
	this.audio.play();
	this.songData.isPaused = false;
	this.songData.isRotatePause = false;
};

CreateAudio.prototype.pause = function () {
	this.audio.pause();
	this.songData.isPaused = true;
	this.songData.isRotatePause = true;
};

CreateAudio.prototype.addZero = function (num) {
	if (num > -1 && num < 10) {
		num = "0" + num;
	}
	return num;
};

CreateAudio.prototype.getTime = function (time) {
	var minutes = this.addZero(parseInt(time / 60));
	var seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0, 2)));
	return minutes + ":" + seconds;
};



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_music_vue_recom_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_music_vue_recom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_music_vue_recom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_vue_search_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_vue_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_music_vue_search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_music_vue_songListRecom_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_music_vue_songListRecom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_music_vue_songListRecom_vue__);


__webpack_require__(6);







var router = new VueRouter({
	routes: [{
		name: "topList", path: "/topList", component: __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default.a
	}, {
		name: "songsList", path: "/topList/songsList/:id", component: __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue___default.a
	}, {
		name: "recom", path: "/recom", component: __WEBPACK_IMPORTED_MODULE_2__components_music_vue_recom_vue___default.a
	}, {
		name: "search", path: "/search", component: __WEBPACK_IMPORTED_MODULE_3__components_music_vue_search_vue___default.a
	}, {
		name: "songListRecom", path: "/recom/songListRecom/:disstid", component: __WEBPACK_IMPORTED_MODULE_4__components_music_vue_songListRecom_vue___default.a
	}]
});

new Vue({
	router: router
}).$mount("#app");

/***/ })
/******/ ]);
//# sourceMappingURL=../sourceMap/js/musicIndex.js.map