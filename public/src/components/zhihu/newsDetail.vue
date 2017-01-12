<template lang="pug">
    .details_module
        router-link(to="/") 后退
        link(:href="css",rel="stylesheet")
        .head_img 
            img(:src="imgData.image")
            h2.tit {{imgData.title}}
            p.source {{imgData.image_source}}
        .detail_box(v-html="bodyHTML") {{bodyHTML}}
</template>

<script>
    export default{
        name:"details_module",
        data(){
            return {
                css:"",
                bodyHTML:"",
                imgData:{}
            }
        },
        created(){
            this.getDetail();
        },
        methods:{
            getsucessDetail:function(data) {
                this.bodyHTML = data.body;
                this.css = data.css;
                this.imgData.image = data.image;
                this.imgData.title = data.title;
                this.imgData.image_source = data.image_source;
            },
            getDetail:function(){

                $.ajax({
                    url:"http://news-at.zhihu.com/api/4/news/"+this.$route.params.id,
                    type:"get"
                }).done(this.getsucessDetail).fail(function(){
                    return false;
                }).always(function(){
                    return;
                });

            }
        }
    }
</script>

<style lang="scss">
    .details_module{
        .head_img {
            position: relative;
            img {
                width:100%;
                vertical-align:top;
            }
            .tit {
                font-size: 4em;
                color: #fff;
                position: absolute;
                transform:translate(-50%,-50%);
                -webkit-transform:translate(-50%,-50%);
                top:50%;
                left:50%;
                width:90%;
                text-align:center;
            }
            .source {
                color: #e2e2e2;
                bottom: 15px;
                right: 15px;
                position: absolute;
                font-size: 2em;
            }
        }
        a {
            font-size:2em;
            color:#333;
            text-decoration:underline;
        }
    }
</style>