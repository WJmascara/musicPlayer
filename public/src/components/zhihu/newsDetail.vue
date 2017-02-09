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

<style lang="scss" scoped>
    
    .details_module{
        a{
            position: absolute;
            right:0;
            font-size: 12px;
            color: #fff
        }
        .head_img {
            position: relative;
            img {
                width:100%;
                height: 400px;
                object-fit: cover;
                vertical-align:top;
            }
            .tit {
                font-size: 36px;
                margin: 30px;

                color: #333;
                width:90%;
                text-align: center;
            }
            .source {
                text-align: center;
                font-style: italic;
                color: #666;
               
                font-size: 16px;
            }
        }
        
        
    }
</style>