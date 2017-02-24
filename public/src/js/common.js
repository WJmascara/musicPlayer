"use strict";
 
function CreateAudio(songData,songid) {

	this.songData = songData;
	this.songid = songid;

	songData = {
		beginTime:"",
		endTime:"",
		loadedPercent:"",
		rotatedeg:"",
		isPaused:false,
		isRotatePause:false,
		isSongListShow:false
	};

	this.audio = new Audio("http://ws.stream.qqmusic.qq.com/" + this.songid + ".m4a?fromtag=46");

	var _that = this;
	this.audio.addEventListener("canplay",function(){
		_that.audio.play();
		_that.songData.isPaused = false;
		_that.songData.isRotatePause = false;
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
		
		_that.songData.isPaused = true;
		_that.songData.isRotatePause = true;

	});

}

CreateAudio.prototype.play = function(){
	this.audio.play();
	this.songData.isPaused = false;
	this.songData.isRotatePause = false;
};

CreateAudio.prototype.pause = function(){
	this.audio.pause();
	this.songData.isPaused = true;
	this.songData.isRotatePause = true;
};

CreateAudio.prototype.addZero = function(num) {
	if( num > -1 && num < 10 ) {
		num = "0" + num;
	}
	return num;
};

CreateAudio.prototype.getTime = function(time) {
	var minutes = this.addZero(parseInt(time / 60));
	var seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0,2)));
	return (minutes + ":" + seconds);
};



export {CreateAudio}

