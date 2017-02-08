<template lang="pug">
	.recommend_module
		.banner_list
			ul(:style="{width:'500%'}")
				li(v-for="(item,i) in recomData.data.slider",:style="{width:'20%'}")
					img(:src="item.picUrl")
		.radio_list
			h2 电台
			ul
				li(v-for="(item,i) in recomData.data.radioList")
					.radio_item
						img(:src="item.picUrl")
						span.icon_play

</template>
<script>
	export default {
		name:"recommend_module",
		data(){
			return {
				recomData:{
					data:""
				}
			}
		},
		created(){
			this.getList();
		},
		mounted(){
		},
		methods:{
			getSuccessList:function(data) {
				this.recomData = data;
			},
			getList:function(){

				$.ajax({
					url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1486545054837&jsonpCallback=?",
					dataType:"jsonp",
					type:"get",
					jsonp:"callback"
				}).done(this.getSuccessList).fail(function(){

				}).always(function(){

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
				li {
					width: 50%;
				}
			}
		}
	}
</style>