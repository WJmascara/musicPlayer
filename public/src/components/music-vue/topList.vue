<template lang="pug">
    .topList_module
        .list_wrap
            router-link(class="item_box",v-for="(item,i) in items",v-bind:to="{name:'songsList',params:{id:item.id}}")
                .img_box
                    img(:src="item.picUrl")
                    span.num_cont
                        i.icon_listen 
                        | {{ item.listenCount | cutNum }}万
                .songs_box
                    .tit_cont {{item.topTitle}}
                    .list_cont
                        ul
                            li(v-for="(value,k) in item.songList")
                                span.song_num {{k+1}}
                                span.song_name {{value.songname}}-
                                span.singer_name {{value.singername}}
</template>
<script>
    
    export default{
        name:"topList_module",
        data(){
            return {
                items:[]
            }
        },
        created(){
            this.getList();
        },
        watch:{
            
        },
        methods:{
            getList:function(){

                this.$http({

                    url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",
                    method:"jsonp",
                    jsonp:"jsonpCallback"

                }).then((response) => {

                    //console.log(response);
                    let res_data = response.data;
                    this.items = res_data.data.topList;
                    
                }).catch((response)=>{

                    console.log(response);

                });
            }
        },
        filters:{
            cutNum: function(value) {
               
                var result = (value/10000).toFixed(1);
                return result;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .topList_module {
        .list_wrap {
            padding: .3rem;
            .item_box {
                width: 100%;
                overflow:hidden;
                background:#fff;
                margin-bottom:.3rem;
                display:flex;
                display:-webkit-flex;
                height:3.5rem;
                color: #333;
                .img_box {
                    position: relative;
                    width:3.5rem;
                    height:3.5rem;
                    img {
                        position: absolute;
                        left:0;
                        top:0;
                        z-index:1;
                    }
                    .num_cont {
                        position: absolute;
                        left:.2rem;
                        bottom:.2rem;
                        z-index:2;
                        color:#fff;
                        font-size:.4rem;
                        i {
                            font-style:normal;
                        }
                    }
                }
                .songs_box {
                    -webkit-flex:1;
                    flex:1;
                    width:0%;
                    margin-left:.2rem;
                    .tit_cont {
                        font-size:.6rem;
                    }
                    .list_cont {
                        li {
                            overflow:hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            font-size:.44rem;
                            color:#999;
                            .song_name{
                                color:#333;
                                margin-left:10px;
                            } 
                        }
                    }
                }
            }
        }
    }
</style>