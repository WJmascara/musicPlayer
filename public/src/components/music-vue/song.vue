<template lang="pug">
	.song_module(:style="{backgroundImage:'url(' + (dataModel.topinfo.pic ? dataModel.topinfo.pic_album:'')+')'}")
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
		.mid_circle(:style="{backgroundImage:'url(' + (dataModel.topinfo.pic ? dataModel.topinfo.pic:'')+')'}",class="rotate",:class="{pause:isRotatePause}")
		.song_list(:class="{show:isShow}")
			ul
				li(v-for="(item,i) in dataModel.songlist",v-on:click="selectSong(i)") {{item.data.songname}} {{item.data.singer[0].name}}
			a(href="javascript:;",v-on:click="closeSongList()",class="close_btn") 关闭
		audio(:src="getAudio(this.$route.params.songid)",ref="audio")
</template>
<script>

	export default {
		name:"song_module",
		data(){
			return {
				songData:{
					url:"",
					beginTime:"",
					endTime:"",
					loadedPercent:"",
					rotatedeg:"",
					isPaused:false
				},
				dataModel:window.dataModel,
				isShow:false,
				isRotatePause:false,
				timer:""
			}
		},
		mounted(){
			this.getSongData();
		},
		methods:{
			getAudio:function(songid){
				var song_url = "http://ws.stream.qqmusic.qq.com/" + songid + ".m4a?fromtag=46";
				return song_url;
			},
			getSongData:function(){

				var _that = this;

				//获取audio元素
				var audio = _that.$refs.audio;
				audio.addEventListener("loadedmetadata",function(){

					_that.songData.beginTime = _that.getTime(0);
					_that.songData.endTime = _that.getTime(audio.duration);

					//播放音乐
					audio.play();

					//加载条的变化
					_that.timer = setInterval(function(){
						var loaded_time = audio.currentTime;
						var loaded_percent = audio.currentTime / audio.duration * 100 + "%";

						_that.songData.beginTime = _that.getTime(loaded_time);
						_that.songData.loadedPercent = loaded_percent;

						//播放完成自动暂停
						if(  audio.currentTime == audio.duration ){

							_that.songData.isPaused = true;
							audio.pause();
							_that.isRotatePause = true;

							//清除计数器
							clearInterval(_that.timer);
						}
					},200);

				});
			},
			playNextSong:function(argument){

				var result_index = 0;
				var current_index = this.$route.params.songindex;
				var songs_len = this.dataModel.songlist.length;

				//判断前进后退
				if( argument == "prev" ) {

				 	if( current_index > 0 ) {
						result_index = current_index - 1;
					}else {
						result_index = songs_len - 1;
					}

				}else if( argument == "next" ) {

					if( current_index < songs_len - 1 ) {
						result_index = current_index + 1;
					}else {
						current_index = 0;
					}

				}else{}

				var songid = this.dataModel.songlist[result_index].data.songid;

				//重置songindex
				this.$route.params.songindex = result_index;
				this.$route.params.songid = this.dataModel.songlist[result_index].data.songid;

				//播放
				this.getAudio(songid);
				this.songData.isPaused = false;

				this.isRotatePause = false;

			},
			playerPaused:function(){

				if( !this.songData.isPaused ) {

					this.songData.isPaused = true;
					this.$refs.audio.pause();
					this.isRotatePause = true;

				}else {

					this.songData.isPaused = false;
					this.$refs.audio.play();
					this.isRotatePause = false;

				}
			},
			showSongList:function(){
				this.isShow = true;
			},
			closeSongList:function(){
				this.isShow = false;
			},
			selectSong:function(index){

				var songid = this.dataModel.songlist[index].data.songid;
				this.$route.params.songid = songid;

				this.getAudio(songid);

				//关闭列表
				this.closeSongList();
				
			},
			getTime:function(time){

				var minutes = this.addZero(parseInt(time / 60));
				var seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0,2)));
				return (minutes + ":" + seconds);
			},
			addZero:function(num){
				if( num > -1 && num < 10 ) {
					num = "0" + num;
				}
				return num;
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
			display: none;
			position: absolute;
			padding-bottom:2rem;
			left: 0;
			bottom: 0;
			width:100%;
			height: 12rem;
			overflow-y:scroll;
			background:#fff;
			z-index: 3;
			&.show {
				display: block;
			}
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

