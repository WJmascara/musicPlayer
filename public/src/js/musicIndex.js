"use strict";

require("../sass/base.sass")

import topList from "../components/music-vue/topList.vue"
import songsList from "../components/music-vue/songsList.vue"
import song from "../components/music-vue/song.vue"

var router = new VueRouter({
	routes:[
		{
			name:"topList", path:"/", component:topList
		},
		{
			name:"songsList", path:"/songsList/:id", component:songsList
		},
		{
			name:"song", path:"/songsList/song/:id", component:song
		}
	]
});

new Vue({
    router: router
}).$mount("#app");


