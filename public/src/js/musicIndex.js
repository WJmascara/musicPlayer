"use strict";

require("../sass/base.sass")

import topList from "../components/music-vue/topList.vue"
import songsList from "../components/music-vue/songsList.vue"
import song from "../components/music-vue/song.vue"
import recom from "../components/music-vue/recom.vue"

var router = new VueRouter({
	routes:[
		{
			name:"topList", path:"/topList", component:topList
		},
		{
			name:"songsList", path:"/topList/songsList/:id", component:songsList
		},
		{
			name:"song", path:"/topList/songsList/song/:songid/:songindex", component:song
		},
		{
			name:"recom",path:"/recom",component:recom
		}
	]
});

new Vue({
    router: router
}).$mount("#app");


