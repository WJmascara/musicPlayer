"use strict";

require("../sass/base.sass")

import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"

Vue.use(VueRouter)
Vue.use(VueResource)

import topList from "../components/music-vue/topList.vue"
import songsList from "../components/music-vue/songsList.vue"
import recom from "../components/music-vue/recom.vue"
import search from "../components/music-vue/search.vue"
import songListRecom from "../components/music-vue/songListRecom.vue"

var router = new VueRouter({
	routes:[
		{
			name:"topList", path:"/topList", component:topList
		},
		{
			name:"songsList", path:"/topList/songsList/:id", component:songsList
		},
		{
			name:"recom",path:"/recom",component:recom
		},
		{
			name:"search",path:"/search",component:search
		},
		{
			name:"songListRecom",path:"/recom/songListRecom/:disstid",component:songListRecom
		}
	]
});

new Vue({
    router: router
}).$mount("#app");


