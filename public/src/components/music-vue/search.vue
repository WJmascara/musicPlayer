<template lang="pug">
	.search_module 
		.search_box
			input(type="text",placeholder="搜索歌曲、歌单、专辑",class="input_box")
			a(href="javascript:;",class="search_btn")
			span.cancle_box 取消
</template>
<script>
	export default {
		name:"search_module"
	}
</script>
<style lang="scss">
	.search_module {
		.search_box {
			position: relative;
			padding: 0 .3rem;
			display: flex;
			display: -webkit-flex;
			display: -webkit-box;
			width: 100%;
			-webkit-box-align: center;
		    -ms-flex-align: center;
		    align-items: center;
		}
		.input_box {
			position: relative;
			display: block;
			padding: .3rem .3rem .3rem 1.5rem;
			background: #fff;
			color: #333;
		    line-height: 1rem;
		    border: none;
		    font-size: .5rem;
		    flex:1;
		    -webkit-flex:1;
		    border: 1px solid #eee;

		}
		.search_btn {
	    	position: absolute;
	    	left: .6rem;
	    	top: .4rem;
	    	width: .6rem;
	    	height: .6rem;
	    	border:2px solid #999;
	    	background: transparent;
	    	border-radius: 50%;
	    	&:after {
	    		content: "";
			    position: absolute;
			    bottom: -.3rem;
			    left: 50%;
			    margin-left: 0.3rem;
			    width: 2px;
			    height: 8px;
			    height: .4rem;
			    background: #999;
			    transform: rotate(-45deg);
	    	}
	    }
		.cancle_box {
			font-size: .5rem;
		    color: #666;
		    margin-left: .3rem;
		    width: 0%;
		}
	}
</style>