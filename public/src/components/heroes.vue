<template lang="pug">
    .heroes_module
        .heroes_module_inner(v-bind:class="{hide:HeroModel.hide}")
            h2.tit_box My heroes
            .add_hero
                input(type='text', v-model='hero_message')
                a.add_btn(href='javascript:;', v-on:click='addHero()') Add
            .heroes_list
                ul
                    li(v-for='(item,index) in items')
                        a(href='javascript:;')
                            span.hero_id
                                | {{item.id}}
                            span.hero_name(v-on:click='showDetail(index)')
                                | {{item.name}}
                            i.close_btn(v-on:click='deleteHero(index)') X
            .detail_box(v-bind:class='{hide:isHide}')
                p.tit_cont
                    strong {{HeroModel.list.hero_name}}
                    | is my hero.
                a.detail_btn(href='javascript:;', v-on:click="editInfo()") View Details
        editInfo(v-bind:childModel="HeroModel")
</template>
    
<script>
    import editInfo from "./editInfo.vue";

    export default {
        name: 'heroes_module',
        data () {
            return {
                items: [],
                hero_message:'',
                isHide: true,
                HeroModel:{
                    hide:false,
                    show:false,
                    list:{
                        hero_name:"",
                        hero_id:0
                    }
                }
            }
        },
        watch:{
            hide(){
                console.log(222);
            }
        },
        components:{
            editInfo
        },
        created(){
            this.getList();
        },
        methods:{
            showDetail:function(index){

                this.isHide = false;

                if(this.HeroModel.list.hero_name == this.items[index].name.trim()) {
                    this.isHide = true;
                    this.HeroModel.list.hero_name = "";
                }else {
                    this.isHide = false;
                    this.HeroModel.list.hero_name = this.items[index].name.trim();
                    this.HeroModel.list.hero_id = this.items[index].id;
                }
            },
            editInfo:function(){
                this.HeroModel.show = true;
                this.HeroModel.hide = true;
            },
            getListSuccess:function(data) {
                this.items = data;
            },
            getList:function(){

                var _that = this;

                $.ajax({
                    url:'/heros/list',
                    type:'get',
                    dataType:'json'
                }).done(this.getListSuccess).fail(function(){
                    
                    return;

                }).always(function(){

                    console.log("1");

                })
            },
            addHero:function(){

                var _that = this;

                $.post('/heros/create',{'name':this.hero_message}).done(function(data){

                    if( data.result ) {
                        _that.items.push(
                            data.list
                        );
                        _that.hero_message = "";
                    }else {
                        
                        alert(data.message);
                    }

                });
            },
            deleteHero:function(index) {

                //console.log(this.items[index]);
                var _that = this;

                this.num_id = this.items[index].id;

                $.post('/heros/delete',{'id':this.num_id}).done(function(data){

                    if( data.result ) {

                        _that.items.splice(index,1);

                        alert(data.message);

                    } else {
                        return;
                    }

                });
            }
        }
    }
</script>

<style lang="scss" scoped>

    .heroes_module {
        margin: 30px 0 0 30px;
        .heroes_module_inner {
            display: block;
            &.hide {
                display: none;
            }
        }
        .tit_box {
            font-size: 26px;
            color: #333;
            margin-bottom: 20px;
        }
        .heroes_list {
            a {
                position: relative;
                display: block;
                margin-bottom: 10px;
                text-decoration: none;
                color: #333;
                width: 150px;
                height: 34px;
                background: #eee;
                line-height: 34px;
                border-radius: 3px;
                .hero_id {
                    float: left;
                    width: 32px;
                    background: #5f7d8c;
                    font-size: 14px;
                    font-weight: bold;
                    color: #fff;
                    text-align: center;
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .hero_name {
                    display: block;
                    padding-left: 47px;
                    font-size: 16px;
                }
                .close_btn {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    margin-top: -8px;
                    display: none;
                    transform: scale(1.4,1);
                    -webkit-transform: scale(1.4,1);
                    width: 16px;
                    height: 16px;
                    text-align: center;
                    font-size: 12px;
                    line-height: 16px;
                    font-style: normal;
                }
                &:hover {
                    .close_btn {
                        display: block;
                    }
                }
            }
        }
        .detail_box {
            margin-top: 30px;
            .tit_cont {
                font-size: 18px;
                color: #333;
                strong {
                    font-size: 22px;
                    font-weight: normal;
                    margin-right: 5px;
                }
            }
            .detail_btn {
                display: block;
                margin-top: 10px;
                width: 100px;
                line-height: 24px;
                text-align: center;
                background: #eee;
                color: #999;
                font-size: 14px;
                text-decoration: none;
                border-radius: 3px;
            }
            &.hide {
                display: none;
            }
        }
        .add_hero {
            margin-bottom: 15px;
            input {
                float: left;
                width: 150px;
                padding: 6px;
                line-height: 12px;
                background: transparent;
                border: 1px solid #ccc;
            }
            .add_btn {
                display: block;
                padding-left: 170px;
                width: 60px;
                line-height: 24px;
                color: #999;
                font-size: 16px;
            }
        }
    }
</style>