<template lang="pug">
	.theme_news_detail
		.content_inner(v-html="bodyHtml") {{bodyHtml}}
		link(:href="css",rel="stylesheet",v-ref="head")
</template>
<script>
	export default {
		name:"theme_news_detail",
		data(){
			return {
				css:"",
				bodyHtml:""
			}
		},
		created(){
			this.getDetail();
		},
		methods:{
			getSuccessDetail:function(data){

				this.bodyHtml = data.body;
				this.css = data.css;

			},
			getDetail:function(){

				console.log(this);
				$.ajax({
					url:"http://news-at.zhihu.com/api/4/news/" + this.$route.params.id,
					type:"get",
					dataType:"json"
				}).done(this.getSuccessDetail).fail(function(){
					return false;
				}).always(function(){
					return;
				});

			}
		}
	}
</script>
<style lang="scss">
	
</style>