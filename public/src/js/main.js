"use strict";


import Vue from 'vue'
import heroes from '../components/heroes'
import DashBoard from '../components/DashBoard.vue'

require('../sass/base.sass');

console.log(DashBoard);

new Vue({
    el:"#app",
    components:{ heroes,DashBoard },
    methods:{
        showDashBoard:function(){
            //console.log(this);

            this.$children[0].HeroModel.hide = true;
            this.$children[1].DashModel.hide = false;

        },
        showHeroes:function(){
            
            this.$children[0].HeroModel.hide = false;
            this.$children[1].DashModel.hide = true;

        }
    }
})

// new Vue().$mount('#app');
