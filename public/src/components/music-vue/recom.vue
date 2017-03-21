<template lang="pug">
	.recommend_module
		.banner_list
			ul(:style="{width:(recomData.data.focus.length*100+'%')}")
				li(v-for="(item,i) in recomData.data.focus",:style="{width:(100/recomData.data.focus.length +'%')}")
					img(:src="item.pic")
		.radio_list
			h2 电台
			ul
				router-link(:to="{name:'songListRecom',params:{disstid:item.dissid}}",v-for="(item,i) in recomData.data.hotdiss.list",:style="{backgroundImage:'url('+item.imgurl+')'}")
					span.icon_play
					p.tit_box {{item.title}}

</template>
<script>
	export default {
		name:"recommend_module",
		data(){
			return {
				recomData:{
					data:{
						focus:[],
						hotdiss:""
					}
				}
			}
		},
		created(){
			this.getList();
		},
		mounted(){
		},
		methods:{
			getList:function(){

				this.$http({

                    url:"https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=v12&page=other&rnd=0&g_tk=1486632476661&loginUin=0&hostUin=0&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq&needNewCode=0",
                    method:"jsonp",
                    jsonp:"jsonpCallback"

                }).then((response) => {

                    //console.log(response);
                    let res_data = response.data;
                    this.recomData = res_data;
                    
                }).catch((response)=>{

                    console.log(response);

                });

			}
		}
	}
</script>
<style lang="scss">
	.recommend_module {
		.banner_list {
			width: 100%;
			overflow: scroll;
		}
		.banner_list li {
			float: left;
			img {
				width: 100%;
			}
		}
		.radio_list {
			padding: 0 .3rem;
			h2 {
				font-size: .6rem;
				line-height: 3;
			}
			ul {
				display: flex;
				display:-webkit-flex;
				flex-wrap:wrap;
				-webkit-flex-wrap:wrap;
				align-items:center;
				-webkit-box-pack: justify;
			    -webkit-justify-content: space-between;
			    justify-content: space-between;
				a {
					display: block;
					position: relative;
					width: 7rem;
				    height: 7rem;
				    background-size: cover;
				    background-repeat: no-repeat;
				    margin-bottom: .3rem;
				    .icon_play{
						position: absolute;
						right: .3rem;
						bottom: .3rem;
						width: 1.2rem;
						height: 1.2rem;
						background: rgba(0,0,0,.5);
						border:2px solid #fff;
						border-radius: 50%;
						&:after {
							content: "";
							position: absolute;
							left: 50%;
							top: 50%;
							transform:translate(-50%,-50%);
							-webkit-transform:translate(-50%,-50%);
							margin-left: .05rem;
							border-style:dashed dashed dashed solid; 
							border-width: .3rem 0 .3rem .5rem;
							border-color: transparent transparent transparent #fff; 
						}
				    }
				    .tit_box {
				    	margin-top: 7rem;
					    font-size: .5rem;
					    padding: .3rem .3rem;
					    background: #fff;
					    border: 1px solid #eee;
					    overflow: hidden;
					    text-overflow:ellipsis;
					    white-space: nowrap;
				    }
				}
			}
		}
	}
</style>