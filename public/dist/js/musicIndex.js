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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(6),
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
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(8),
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(9),
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(7),
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
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recommend_module"
  }, [_c('div', {
    staticClass: "banner_list"
  }, [_c('ul', {
    style: ({
      width: '600%'
    })
  }, _vm._l((_vm.recomData.data.focus), function(item, i) {
    return _c('li', {
      style: ({
        width: '16%'
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
    }, [_vm._v(_vm._s(item.Ftitle))])])
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "song_module",
    style: ({
      backgroundImage: 'url(' + (_vm.dataModel.topinfo.pic ? _vm.dataModel.topinfo.pic_album : '') + ')'
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
    staticClass: "mid_circle",
    class: {
      transition: _vm.isAdd
    },
    style: ({
      backgroundImage: 'url(' + (_vm.dataModel.topinfo.pic ? _vm.dataModel.topinfo.pic : '') + ')',
      transform: 'rotate(' + _vm.songData.rotatedeg + ')'
    })
  }), _c('div', {
    staticClass: "song_list",
    class: {
      show: _vm.isShow
    }
  }, [_c('ul', _vm._l((_vm.dataModel.songlist), function(item, i) {
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
  }, [_vm._v("关闭")])]), _c('audio', {
    ref: "audio",
    attrs: {
      "src": _vm.getAudio(this.$route.params.songid)
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "songList_module"
  }, [_c('router-link', {
    staticClass: "img_box",
    attrs: {
      "to": {
        name: 'song',
        params: {
          songid: '200576210',
          songindex: 0
        }
      }
    }
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
          params: {
            songid: item.data.songid,
            songindex: i
          }
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
  }))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fb7ab7b6", module.exports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/* 15 */
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
				endTime: "",
				loadedPercent: "",
				rotatedeg: "",
				isPaused: false
			},
			dataModel: window.dataModel,
			isShow: false,
			isAdd: true,
			timer: ""
		};
	},
	mounted() {
		this.getSongData();
	},
	methods: {
		getAudio: function (songid) {
			var song_url = "http://ws.stream.qqmusic.qq.com/" + songid + ".m4a?fromtag=46";
			return song_url;
		},
		getSongData: function () {

			var _that = this;

			//获取audio元素
			var audio = _that.$refs.audio;
			audio.addEventListener("loadedmetadata", function () {

				_that.songData.beginTime = _that.getTime(0);
				_that.songData.endTime = _that.getTime(audio.duration);

				//播放音乐
				audio.play();

				//加载条的变化
				_that.timer = setInterval(function () {
					var loaded_time = audio.currentTime;
					var loaded_percent = audio.currentTime / audio.duration * 100 + "%";
					var loaded_deg = 360 * parseFloat(audio.currentTime / audio.duration) * 20;

					_that.songData.beginTime = _that.getTime(loaded_time);
					_that.songData.loadedPercent = loaded_percent;
					_that.songData.rotatedeg = loaded_deg + "deg";
					//console.log(typeof loaded_percent);

					//播放完成自动暂停
					if (audio.currentTime == audio.duration) {

						_that.songData.isPaused = true;
						audio.pause();

						//清除计数器
						clearInterval(_that.timer);
					}
				}, 200);
			});
		},
		playNextSong: function (argument) {

			var result_index = 0;
			var current_index = this.$route.params.songindex;
			var songs_len = this.dataModel.songlist.length;

			//判断前进后退
			if (argument == "prev") {

				if (current_index > 0) {
					result_index = current_index - 1;
				} else {
					result_index = songs_len - 1;
				}
			} else if (argument == "next") {

				if (current_index < songs_len - 1) {
					result_index = current_index + 1;
				} else {
					current_index = 0;
				}
			} else {}

			var songid = this.dataModel.songlist[result_index].data.songid;

			//重置songindex
			this.$route.params.songindex = result_index;
			this.$route.params.songid = this.dataModel.songlist[result_index].data.songid;

			//播放
			this.getAudio(songid);
			this.songData.isPaused = false;

			//圆盘控制
			this.circleControl();
		},
		playerPaused: function () {

			if (!this.songData.isPaused) {

				this.songData.isPaused = true;
				this.$refs.audio.pause();
			} else {

				this.songData.isPaused = false;
				this.$refs.audio.play();
			}
		},
		circleControl: function () {
			var _that = this;

			_that.isAdd = false;
			_that.songData.rotatedeg = 0;
			setTimeout(function () {
				_that.isAdd = true;
			}, 300);
		},
		showSongList: function () {
			this.isShow = true;
		},
		closeSongList: function () {
			this.isShow = false;
		},
		selectSong: function (index) {

			var songid = this.dataModel.songlist[index].data.songid;
			this.$route.params.songid = songid;

			this.getAudio(songid);

			//关闭列表
			this.closeSongList();

			//控制圆盘操作
			this.circleControl();
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

/***/ }),
/* 16 */
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
			this.dataModel = window.dataModel = data;
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
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_vue_recom_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_music_vue_recom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_music_vue_recom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_music_vue_search_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_music_vue_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_music_vue_search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_music_vue_songListRecom_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_music_vue_songListRecom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_music_vue_songListRecom_vue__);


__webpack_require__(5);








var router = new VueRouter({
	routes: [{
		name: "topList", path: "/topList", component: __WEBPACK_IMPORTED_MODULE_0__components_music_vue_topList_vue___default.a
	}, {
		name: "songsList", path: "/topList/songsList/:id", component: __WEBPACK_IMPORTED_MODULE_1__components_music_vue_songsList_vue___default.a
	}, {
		name: "song", path: "/topList/songsList/song/:songid/:songindex", component: __WEBPACK_IMPORTED_MODULE_2__components_music_vue_song_vue___default.a
	}, {
		name: "recom", path: "/recom", component: __WEBPACK_IMPORTED_MODULE_3__components_music_vue_recom_vue___default.a
	}, {
		name: "search", path: "/search", component: __WEBPACK_IMPORTED_MODULE_4__components_music_vue_search_vue___default.a
	}, {
		name: "songListRecom", path: "/recom/songListRecom/:disstid", component: __WEBPACK_IMPORTED_MODULE_5__components_music_vue_songListRecom_vue___default.a
	}]
});

new Vue({
	router: router
}).$mount("#app");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(20),
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(24),
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "songListRecom_module"
  }, [_c('div', {
    staticClass: "img_box"
  }, [_c('img', {
    attrs: {
      "src": _vm.logoPic
    }
  }), _c('div', {
    staticClass: "gradient_bg"
  }), _c('div', {
    staticClass: "info_box"
  }, [_c('div', {
    staticClass: "txt_cont"
  }, [_c('p', [_vm._v(_vm._s(_vm.dissname))]), _c('p', [_vm._v(_vm._s(_vm.desc))])]), _c('div', {
    staticClass: "broad_cast"
  })])]), _c('div', {
    staticClass: "songs_list"
  }, [_c('ul', _vm._l((_vm.songlist), function(item, i) {
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
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-db8be178", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
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
			songlist: [],
			logoPic: "",
			dissname: "",
			desc: ""
		};
	},
	created() {
		this.getList();
	},
	methods: {
		getSuccessList: function (data) {
			this.songlist = data.cdlist[0].songlist;
			this.logoPic = data.cdlist[0].logo;
			this.dissname = data.cdlist[0].dissname;
			this.desc = data.cdlist[0].desc;
			//console.log(this.songlist);
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

/***/ })
/******/ ]);
//# sourceMappingURL=../sourceMap/js/musicIndex.js.map