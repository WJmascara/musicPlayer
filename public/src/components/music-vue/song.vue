<template lang="pug">
	.song_module(:style="{backgroundImage:'url(' + (childDataModel.topinfo.pic ? childDataModel.topinfo.pic_album:'')+')'}")
		.mask_bg
		.music_controls
			.progress
				.left_time {{songData.beginTime}}
				.progress_bar
					span.load_bar(:style="{width:songData.loadedPercent}")
				.right_time {{songData.endTime}}
			.btns
				a(href="javascript:;",class="prev_btn",v-on:click="playNextSong('prev')")
				a(href="javascript:;",class="broadCast_btn",:class="{paused:songData.isPaused}",v-on:click="playerPaused()")
				a(href="javascript:;",class="next_btn",v-on:click="playNextSong('next')")
				a(href="javascript:;",class="list_btn",v-on:click="showSongList()")
		.mid_circle(:style="{backgroundImage:'url(' + (childDataModel.topinfo.pic ? childDataModel.topinfo.pic:'')+')'}",class="rotate",:class="{pause:songData.isRotatePause}")
		.song_list(v-show="isSongListShow")
			ul
				li(v-for="(item,i) in childDataModel.songlist",v-on:click="selectSong(i)") {{item.data.songname}} {{item.data.singer[0].name}}
			a(href="javascript:;",v-on:click="closeSongList()",class="close_btn") 关闭
		audio(ref="audio")
</template>
<script>
	
	import {CreateAudio} from "../../js/common.js"

	export default {
		name:"song_module",
		data(){
			return {
				init:CreateAudio,
				songData:{
					beginTime:"",
					endTime:"",
					loadedPercent:"",
					rotatedeg:"",
					isPaused:true,
					isRotatePause:true
				},
				audio:"",
				isSongListShow:false
			}
		},
		props:{
			childDataModel:Object,
			songindex:Object
		},
		watch:{
			"songindex.i":function(){
				this.playSong(this.songindex.i);
			}
		},
		methods:{
			playSong:function(index){

				this.audio = this.$refs.audio;
				//console.log(this.audio);
				this.instanceObj = new this.init(this.audio,this.songData,this.childDataModel.songlist[index].data.songid);

			},
			playerPaused:function(){
				if( !this.songData.isPaused ) {

					this.instanceObj.pause();

				}else {

					this.instanceObj.play();

				}
			},
			playNextSong:function(btnStatus) {

				var nextIndex = 0;
				var currentIndex = this.songindex.i;
				var songsLength = this.childDataModel.songlist.length;

				if( btnStatus == "prev" ) {

					if( currentIndex > 0 ) {
						nextIndex = currentIndex - 1;
					}else {
						nextIndex = songsLength - 1;
					}

				}else if( btnStatus == "next" ) {

					if( currentIndex < songsLength - 1 ) {
						nextIndex = currentIndex + 1;
					}else {
						nextIndex = 0;
					}
				}else {}

				this.songindex.i = nextIndex;
				//console.log(nextIndex);
				this.playSong(nextIndex);

			},
			showSongList:function(){
				this.isSongListShow = true;
			},
			closeSongList:function(){
				this.isSongListShow = false;;
			},
			selectSong:function(index){

				this.playSong(index);

				//关闭列表
				this.closeSongList();
				
			}
		}
	}
</script>
<style lang="scss">
	.song_module {
		position: absolute;
		left: 0;
		top: 0;
		width:100%;
		height: 100%;
		background-size:cover;
		background-position: center center;
		.mid_circle {
			width: 8.6rem;
		    height: 8.6rem;
		    background-size: cover;
		    position: absolute;
		    left: 50%;
		    top: 50%;
		    z-index: 3;
		    border-radius: 50%;
		    margin-top: -4.3rem;
		    margin-left: -4.3rem;
		    border: 1rem solid #000;
		    &.rotate {
		    	animation: rotateSlide 5s linear both infinite;
		    	-webkit-animation: rotateSlide 5s linear both infinite;
		    	
		    	@-webkit-keyframes rotateSlide {
		    		0% {
		    			transform:rotate(0);
		    			-webkit-transform:rotate(0);
		    		}100% {
						transform:rotate(360deg);
		    			-webkit-transform:rotate(360deg);
		    		}
		    	}
		    	@keyframes rotateSlide {
		    		0% {
		    			transform:rotate(0);
		    			-webkit-transform:rotate(0);
		    		}100% {
						transform:rotate(360deg);
		    			-webkit-transform:rotate(360deg);
		    		}
		    	}
		    }
		    &.pause{
	    		animation-play-state:paused;
	    		-webkit-animation-play-state:paused;
	    	}
		}
		.mask_bg {
			position: absolute;
			left:0;
			top:0;
			z-index:1;
			width:100%;
			height:100%;
			background:rgba(0,0,0,.7);
		}
		.music_controls {
			position: absolute;
			left: 0;
			bottom: 1rem;
			width: 100%;
			color: #fff;
			padding: 0 .3rem;
			font-size: .4rem;
			z-index: 2;
			.progress {
				display: flex;
				display: -webkit-flex;
				display: -webkit-box;
				justify-content: center;
				align-items: center;
				width: 100%;
				.progress_bar {
					position: relative;
					flex:1;
					-webkit-flex:1;
					height: 2px;
					background: #fff;
					margin:0 .3rem;
					.load_bar {
						position: absolute;
						left: 0;
						top: 0;
						height: 100%;
						background: #31c27c;
					}	
				}
			}
			.btns {
				margin-top:.4rem;
				text-align:center;
				.broadCast_btn {
					display: inline-block;
					position: relative;
					width: 2rem;
					height:2rem;
					border-radius: 50%;
					border: 3px solid #fff;
					vertical-align:middle;
					margin:0 2rem;
					&:before {
						display:block;
						position: absolute;
						left:50%;
						top:50%;
						transform:translate(-50%,-50%);
						content:"";
						width:.6rem;
						height:1rem;
						border-left:6px solid #fff;
						border-right:6px solid #fff;
					}
					&.paused {
						&:before {
							display:none;
						}
						&:after {
							content: "";
						    position: absolute;
						    top: 50%;
						    left: 50%;
						    transform: translate(-50%,-50%);
						    -webkit-transform: translate(-50%,-50%);
						    height: 0;
						    width: 0;
						    overflow: hidden;
						    border-color: transparent transparent transparent #fff;
						    border-width: .5rem 0 .5rem .6rem;
						    border-style: solid;
						}
					}
				}
				%base_btn {
					position: relative;
					vertical-align:middle;
					display: inline-block;
					width:1rem;
					height:1rem;
					border-top: 2px solid #fff;
					border-right:2px solid #fff;
				}
				.prev_btn {
					transform: rotate(-135deg);
					@extend %base_btn;
				}
				.next_btn {
					transform: rotate(45deg);
					@extend %base_btn;
				}
				.list_btn {
					position: absolute;
					right:.6rem;
					top:1.6rem;
					width: .8rem;
					height: .8rem;
					border-top: 6px solid #fff;
					border-bottom: 6px solid #fff;
					&:after {
						content:"";
						width:.8rem;
						height:6px;
						background:#fff;
						position: absolute;
						left:0;
						top:50%;
						transform:translate(0,-50%);
					}
				}
			}
			
		}
		.song_list {
			display: block;
			position: absolute;
			padding-bottom:2rem;
			left: 0;
			bottom: 0;
			width:100%;
			height: 12rem;
			overflow-y:scroll;
			background:#fff;
			z-index: 3;
			li {
				line-height: 2rem;
			    font-size: .6rem;
			    padding: 0 .3rem;
			    border-bottom: 2px solid #ddd;
			    overflow:hidden;
			    text-overflow:ellipsis;
			    white-space:nowrap;
			}
			.close_btn {
				position: fixed;
				bottom:0;
				left:0;
				width:100%;
				height:2rem;
				line-height:2rem;
				background:#fff;
				color:#333;
				text-align:center;
				font-size:.7rem;
				border-top: 2px solid #ddd;
			}
		}
	}
</style>

