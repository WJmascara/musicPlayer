<template lang="pug">
    .theme_news_module
        router-link(v-for="item in items",class="card_item",:to="{name: 'themeNewsList', params: {id: item.id}}")
            .card_img(:style="{backgroundImage: 'url('+item.thumbnail+')'}")
            .card_info
                .card_tit {{item.name}}
                .card_description {{item.description}}
</template>

<script>
    export default{
        name:"theme_news_module",
        data(){
            return {
                items:[]
            }
        },
        created(){
            this.getThemeList();
        },
        methods:{
            getThemeSuccess:function(data){
                //console.log(data);
                this.items = data.others;

            },
            getThemeList:function(){

                $.ajax({
                    url:"http://news-at.zhihu.com/api/4/themes",
                    type:"get",
                    dataType:"json"
                }).done(this.getThemeSuccess).fail(function(){
                    return false;
                }).always(function(){
                    return;
                })

            }
        }
    }
</script>

<style lang="scss" scoped>
    .theme_news_module{
        .card_item {
            margin: 15px;
            display:block;
            margin-bottom:30px;
            border-radius: 4px;
            overflow: hidden;
            background:#fff;
            border-bottom: 1px solid #fff;
            &:hover{
                border-bottom: 1px solid #ddd;
                // background-color: #eee;
            }
            .card_img {
                height: 200px;
                float: right;
                width: 200px;
                background-size:contain;
            }
            .card_info {
                padding:30px;
                float: left;
                color:#333;
                .card_tit {
                    font-size:1.5em;
                    line-height:1.6;
                    margin-bottom: 10px;
                }
                .card_description {
                    font-size:1em;
                }
            }
        }
    }
</style>