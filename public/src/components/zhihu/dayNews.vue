<template lang="pug">
    .news_list_module
        .day_news(v-for="list in lists")
            h2.date_tit  {{list.date}}
            .news_list
                ul
                    li(v-for="item in list.stories")
                        router-link(:to="{ name: 'newsDetail', params: { id: item.id }}")
                            span.new_tit  {{item.title}}
                            span.new_pic
                                img(v-bind:src="item.images[0]")
        a(href="javascript:;",class="more_btn",v-on:click="moreNews()") {{text}}
</template>

<script>

    export default{
        name:"news_list_module",
        data(){
            return{
                lists:[],
                text: '更多'
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
            getOutPutDate:function(dateString){

                var date = new Date();

                var dateStr = dateString.substr(0,4) + "-" + dateString.substr(4,2) + "-" + dateString.substr(6,2);
                var currentDate_milliseconds = new Date(dateStr).getTime() + 24*60*60*1000;
                date.setTime(currentDate_milliseconds);

                var current_date2 = date.getFullYear() + "-" + this.addZero(date.getMonth()+1) +  "-" + this.addZero(date.getDate());
                
                return current_date2;
            },
            getSuccessList:function(data) {
                this.text = '更多'
                data.date = this.getOutPutDate(data.date);
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
                }).always(()=>{
                    
                    return;
                });
            },
            moreNews:function(){
                this.text = '加载中...'
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
            padding-left:30px;
            font-size: 1em;
            color: #b2bac2;
            font-weight: 500;
            line-height:2;
            margin: 15px 0 5px;
        }
        .news_list {
            margin: 0 15px 30px;

            li a {
                border-radius: 4px;
                display: flex;
                display:-webkit-flex;
                display:-moz-flex;
                margin-bottom:15px;
                border-bottom: 1px solid #fff;
                background:#fff;
                &:hover{
                    border-color: #ccc;
                }
                .new_pic {
                    display: block;
                    margin-left:10px;
                    width:6em;
                    height:6em;
                }
                .new_tit {
                    padding: 20px;
                    -webkit-flex:1;
                    -moz-flex:1;
                    flex:1;
                    font-size:20px;
                    color:#333;
                }
            }
        }
        .more_btn {
            display: block;
            font-size: 14px;
            padding: 10px 0;
            width: 100%;
            border: 0;
            color: #000;
            background-color: #ddd;
            border: none;
            margin: 30px auto 50px;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            text-align:center;
            width: 75%;
        }
    }
</style>