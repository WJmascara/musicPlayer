<template lang="pug">
    .dashBoard_modules
        .dashBoard_modules_inner(v-bind:class="{hide:DashModel.hide}")
            h2.tit_box Top Heroes
            ul.top_hero_list
                li(v-for="(item,index) in items",v-on:click="editInfo(index)")
                    a(href="javascript:;")  {{item.name}}
            .search_box
                p Hero Searxh
                input(type="text",v-on:keyup="searchResult()",v-model="inputMsg")
                ul.result_list
                    li(v-for="list in lists") {{list.name}}
        editInfo(v-bind:childModel="DashModel")
</template>
<script>

    import editInfo from "./editInfo.vue";

    export default{
        name:"dashBoard_modules",
        data(){
            return {
                items:[],
                inputMsg:'',
                lists:[],
                DashModel:{
                    hide:true,
                    show:false,
                    list:{
                        hero_name:"",
                        hero_id:0
                    }
                }
            }
        },
        components:{
            editInfo
        },
        watch:{
            
        },
        created(){
            this.getList();
        },
        methods:{
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

                    console.log("sa");

                })
            },
            editInfo:function(index){
                this.DashModel.show = true;
                this.DashModel.hide = true;

                this.DashModel.list.hero_name = this.items[index].name;
                this.DashModel.list.hero_id = this.items[index].id;

            },
            searchResult:function(){
                //console.log(1);
                var _that = this;

                $.get("/heros/search",{"keyword":this.inputMsg}).done(function(data){

                    if(data.result) {
                         _that.lists = data.list;
                    }else {
                        alert("没找到相关字段");
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .dashBoard_modules{
        .dashBoard_modules_inner {
            display: block;
            &.hide {
                display:none;
            }
        }
        .tit_box {
            font-size: 26px;
            color: #333;
            margin-bottom: 20px;
        }
        .top_hero_list {
            width:560px;
            height:80px;
            overflow:hidden;
            li {
                float:left;
                margin:0 20px 20px 0;
                a {
                    display: block;
                    padding: 20px;
                    text-align: center;
                    color: #eee;
                    height: 80px;
                    width: 120px;
                    background-color: #607D8B;
                    border-radius: 2px;
                }
            }
        }
        .search_box {
            p {
                color: #444
            }
        }
    }
</style>