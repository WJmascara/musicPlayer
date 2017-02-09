"use strict";

import dayNews from "../components/zhihu/dayNews.vue"
import newsDetail from "../components/zhihu/newsDetail.vue"
import themeNews from "../components/zhihu/themeNews.vue"
import themeNewsList from "../components/zhihu/themeNewsList.vue"
import themeNewsDetail from "../components/zhihu/themeNewsDetail.vue"

require("../sass/base.sass");
window.$ = window.jQuery = require("../assets/js/jquery.js");

var router = new VueRouter({
    routes:[
        { name: 'dayNews', path:'/dayNews', component: dayNews},
        { name: 'newsDetail', path:'/name/:id', component: newsDetail},
        { name:'themeNews', path:'/components/themeNews', component: themeNews},
        { name: 'themeNewsList', path:'/themeNewsList/:id', component: themeNewsList},
        { name: 'themeNewsDetail', path:'/themeNewsDetail/:id', component:themeNewsDetail }
    ]
});

new Vue({
    router
}).$mount("#app")
