<template lang="pug">
    .news_list_module
        .day_news(v-for="list in lists")
            h2.date_tit  {{date}}
            .news_list
                ul
                    li(v-for="item in list.stories")
                        router-link(:to="{ name: 'newsDetail', params: { id: item.id }}")
                            span.new_tit  {{item.title}}
                            span.new_pic
                                img(v-bind:src="item.images[0]")
        a(href="javascript:;",class="more_btn",v-on:click="moreNews()") 更多
</template>

<script>

    export default{
        name:"news_list_module",
        data(){
            return{
                date:"",
                lists:[]
            }
        },
        created(){
            this.getNewsList();

        },
        methods:{
            addZero:function(num) {
                (num>0&&num<10)?(num="0"+num):num;
                return num;
            },
            getDate:function(){

                var i = this.lists.length;

                var today = new Date();
                var yesterday_milliseconds = today.getTime()-1000*60*60*24*i;

                var yesterday=new Date();      
                yesterday.setTime(yesterday_milliseconds);

                var year = yesterday.getFullYear();
                var month = yesterday.getMonth() + 1;
                var day = yesterday.getDate();
                var current_date = String(year) + this.addZero(month) + this.addZero(day);

                return current_date;
            },
            getSuccessList:function(data) {
                this.date = this.getDate();
                this.lists.push(data);
            },
            getNewsList:function(){

                var _that = this;

                $.ajax({
                    url:"http://news.at.zhihu.com/api/4/news/before/"+this.getDate(),
                    type:"get",
                    dataType:"json"
                }).done(this.getSuccessList).fail(function(){
                    return false
                }).always(function(){
                    return;
                });
            },
            moreNews:function(){
                this.getNewsList();
            }
        }
    }

</script>
<style lang="scss" scoped>
    body {
        background:#f5f5f5;
    }
    .news_list_module {
        .date_tit {
            padding-left:15px;
            font-size: 3em;
            color: #b2bac2;
            font-weight: 500;
            line-height:2;
        }
        .news_list {
            li a {
                display: flex;
                display:-webkit-flex;
                display:-moz-flex;
                margin-bottom:15px;
                padding:10px;
                background:#fff;
                .new_pic {
                    display: block;
                    margin-left:10px;
                    width:6em;
                    height:6em;
                }
                .new_tit {
                    -webkit-flex:1;
                    -moz-flex:1;
                    flex:1;
                    font-size:2em;
                    color:#333;
                }
            }
        }
        .more_btn {
            display: block;
            font-size: 1.5em;
            padding: 1em 0;
            width: 100%;
            border: 0;
            color: #fff;
            background-color: #252e39;
            border: none;
            margin: 10px 0;
            border-radius: .5em;
            outline: none;
            cursor: pointer;
            text-align:center;
        }
    }
</style>