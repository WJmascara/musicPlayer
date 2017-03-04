"use strict";
 
//音乐播放器

var CreateAudio = function(audio,songData,songid) {

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
	var _that = this;

	this.audio.addEventListener("canplay",function(){

		_that.play();

	});

	this.audio.addEventListener("loadedmetadata",function(){

		_that.songData.beginTime = _that.getTime(0);
		_that.songData.endTime = _that.getTime(this.duration);

	});

	this.audio.addEventListener("timeupdate",function(){

		_that.songData.loadedPercent = this.currentTime / this.duration *100 + "%";
		_that.songData.beginTime = _that.getTime(this.currentTime);

	});

	this.audio.addEventListener("ended",function(){
		
		_that.pause();

	});

};

CreateAudio.prototype = {

	play:function(){
		this.audio.play();
		this.songData.isPaused = false;
		this.songData.isRotatePause = false;
	},
	pause:function(){
		this.audio.pause();
		this.songData.isPaused = true;
		this.songData.isRotatePause = true;
	},
	addZero:function(num){
		if( num > -1 && num < 10 ) {
			num = "0" + num;
		}
		return num;
	},
	getTime:function(time){
		var minutes = this.addZero(parseInt(time / 60));
		var seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0,2)));
		return (minutes + ":" + seconds);
	}

};

//数据转换
var ConverseData = function(){



}

export {CreateAudio,ConverseData}

