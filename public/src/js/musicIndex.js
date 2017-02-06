"use strict";

require("../sass/base.sass")

import topList from "../components/music-vue/topList.vue"
import songsList from "../components/music-vue/songsList.vue"

var router = new VueRouter({
	routes:[
		{
			name:"topList", path:"/topList", component:topList
		},
		{
			name:"songsList", path:"/songsList/:id", component:songsList
		}
	]
});

new Vue({
    router: router
}).$mount("#app");


