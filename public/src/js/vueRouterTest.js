"use strict";

import bar from "../components/vueRouterTest/bar.vue"
import foo from "../components/vueRouterTest/foo.vue"

var router = new VueRouter({
    routes:[
        {
            name: "bar", path: "/bar/333", component: bar
        },
        {
            name: "foo", path: "/foo", component: foo
        }
    ]
});

new Vue({
    router
}).$mount("#app");
