<template lang="pug">
	.edit_box(v-bind:class="{show:childModel.show}")
		h2.tit_box
			strong {{childModel.list.hero_name}}
			| 	details!
		.detail_box
			ul
				li
					label.lft_col    id:
					span.rgt_col    {{hero_id}}
				li
					label.lft_col    name:
					span.rgt_col 
						input(type="text",v-model="childModel.list.hero_name")
		.btns_box
			a(href="javascript:;",v-on:click="backToIndex()")    Back
			a(href="javascript:;",v-on:click="upDateDetail()")    Save
</template>

<script>
	export default{
		name: 'edit_box',
		data(){
			return {
				
			}
		},
		props:{
			childModel:Object,
		},
		methods:{
			upDateDetail:function(){

				var _that = this;

				$.post('/heros/update',{'id':this.childModel.list.hero_id,'name':this.childModel.list.hero_name}).done(function(data){
					if(data.result) {

						alert("更新成功");
						
						_that.childModel.show = false;
						_that.childModel.hide = false;

						_that.$parent.getList();

						console.log(_that);


					}else {
						alert("更新必须要有ID");
					}
				});
			},
			backToIndex:function(){

				this.childModel.show = false;
				this.childModel.hide = false;

			}
		}
	}
</script>
<style lang="scss" scope>
	.edit_box {
		display: none;
		margin: 30px 0 0 30px;
		&.show {
			display: block;
		}
		.tit_box{
			font-size:22px;
			color: #444;
			strong {
				font-size:30px;
			}
		}
		.detail_box {
			li {
				margin-bottom:5px;
				.lft_col {
					display: inline-block;
				    width: 50px;
				    color: #607D8B;
				    font-weight: bold;
				}
				.rgt_col {
					input[type="text"] {
						height: 30px;
					    font-size: 14px;
					}
				}
			}
		}
		.btns_box {
			a {
				display: inline-block;
				margin-top: 20px;
			    font-family: Arial;
			    background-color: #eee;
			    border: none;
			    padding: 5px 10px;
			    border-radius: 4px;
			    cursor: pointer;
			    color: #888;
			    font-size:14px;
			    &:first-child {
			    	margin-right:10px;
			    }
			}
		}
	}
</style>