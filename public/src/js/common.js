"use strict";
 
//音乐播放器

class CreateAudio{

	constructor(audio,songData,songid) {

		this.songData = songData;
		this.songid = songid;
		this.audio = audio;

		songData = {
			beginTime:"",
			endTime:"",
			loadedPercent:"",
			rotatedeg:"",
			isPaused:false,
			isRotatePause:false
		};

		this.audio.src = "http://ws.stream.qqmusic.qq.com/" + this.songid + ".m4a?fromtag=46";

		//播放
		const _that = this;

		this.audio.addEventListener("canplay",function(){

			_that.play();

		});

		this.audio.addEventListener("loadedmetadata",function(){

			_that.songData.beginTime = _that.handleTime(0);
			_that.songData.endTime = _that.handleTime(this.duration);

		});

		this.audio.addEventListener("timeupdate",function(){

			_that.songData.loadedPercent = this.currentTime / this.duration *100 + "%";
			_that.songData.beginTime = _that.handleTime(this.currentTime);

		});

		this.audio.addEventListener("ended",function(){
			
			_that.pause();

		});
	}

	play(){
		this.audio.play();
		this.songData.isPaused = false;
		this.songData.isRotatePause = false;
	}

	pause(){
		this.audio.pause();
		this.songData.isPaused = true;
		this.songData.isRotatePause = true;
	}

	addZero(num){
		if( num > -1 && num < 10 ) {
			num = "0" + num;
		}
		return num;
	}

	handleTime(time){
		const minutes = this.addZero(parseInt(time / 60));
		const seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0,2)));
		return (minutes + ":" + seconds);
	}

}

//数据转换
class ConverseData{}


export {CreateAudio,ConverseData,GetData}

