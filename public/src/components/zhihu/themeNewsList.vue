<template lang="pug">
    .theme_list_module
        router-link(:to="{ name:'themeNewsDetail', params:{ id:item.id } }",v-for="(item,i) in items",class="card_box")
            div(v-if="item.images")
                <img v-bind:src="item.images[0]">
            .card_info {{item.title}}
</template>
<script>
    export default{
        name:"theme_list_module",
        data(){
            return {
                items:[]
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getListSuccess:function(data){                

                var _that = this;

                _that.items = data.stories;

                // data.stories.forEach(function(value,index,array){ 

                //     if( value.images ) {

                //         _that.items[index].isHide = false;

                //     }else {

                //         _that.items[index].isHide = true;
                //     }
                // })

            },
            getList:function(){

                var _that = this;

                $.ajax({
                    url:"http://news-at.zhihu.com/api/4/theme/"+_that.$route.params.id,
                    type:"get",
                    dataType:"json"
                }).done(this.getListSuccess).fail(function(){
                    return false;
                }).always(function(){
                    return;
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .theme_list_module {
        .card_box {
            padding: 20px;
            margin-top:30px;
            display:flex;
            display: -webkit-flex;
            display:-moz-flex;
            background:#fff;
            color: #333;
            .card_img {
                width:9em;
                height:9em;
                background-size:cover;
                &.hide {
                    display: none;
                }
            }
            .card_info {
                margin:20px;
                -webkit-flex:1;
                -moz-flex:1;
                flex:1;
                font-size:2em;
            }
        }
    }
</style>