<template lang="pug">
	.song_module
		.music_controls
			.progress(ref="aa")
				.left_time {{songData.beginTime}}
				.progress_bar
					span.load_bar(:style="{width:'20%'}")
				.right_time {{songData.eddTime}}
		audio(:src="songData.url",ref="audio")
</template>
<script>
	export default {
		name:"song_module",
		data(){
			return {
				songData:{
					url:"",
					beginTime:"",
					eddTime:""
				}
			}
		},
		mounted(){
			this.getSongData();
		},
		methods:{
			getSongData:function(){

				var that = this;
				var song_url = "http://ws.stream.qqmusic.qq.com/" + this.$route.params.id + ".m4a?fromtag=46";
				this.songData.url = song_url;


				//获取audio元素
				var audio = this.$refs.audio;
				audio.addEventListener("loadedmetadata",function(){

					that.songData.beginTime = that.getTime(0);
					that.songData.eddTime = that.getTime(audio.duration);
					
				});
				

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
		background: rgba(0,0,0,.5);
		.music_controls {
			position: absolute;
			left: 0;
			bottom: 1rem;
			width: 100%;
			color: #fff;
			padding: 0 .3rem;
			font-size: .4rem;
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
						background: blue;
					}	
				}
			}
			
		}
	}
</style>

