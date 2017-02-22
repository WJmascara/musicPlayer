"use strict";
 
function CreateAudio(songData,songlist) {

	this.songData = songData;
	this.songlist = songlist;

	songData = {
		songid:"",
		beginTime:"",
		endTime:"",
		loadedPercent:"",
		rotatedeg:"",
		isPaused:false,
		isRotatePause:false,
		isSongListShow:false
	}
	this.audio = new Audio("http://ws.stream.qqmusic.qq.com/" + this.songData.songid + ".m4a?fromtag=46");

	this.addZero = function(num) {
		if( num > -1 && num < 10 ) {
			num = "0" + num;
		}
		return num;
	};
	this.getTime = function(time){
		var minutes = this.addZero(parseInt(time / 60));
		var seconds = this.addZero(parseInt(String(Math.floor(time % 60)).substr(0,2)));
		return (minutes + ":" + seconds);
	};

}

//播放
CreateAudio.prototype.play = function(){

	this.audio.play();
	this.audio.isPaused = false;
	this.songData.isRotatePause = false;

};

CreateAudio.prototype.loadedmetadata = function() {

	var _that = this;

	this.audio.addEventListener("loadedmetadata",function(){

		_that.songData.beginTime = _that.getTime(0);
		_that.songData.endTime = _that.getTime(_that.audio.duration);

		//播放
		_that.play();

	})
};

//加载进度条
CreateAudio.prototype.progress = function(){

	var _that = this;

	this.audio.addEventListener("timeupdate",function(){
		//console.log(_that.audio.currentTime);
		_that.songData.loadedPercent = _that.audio.currentTime / _that.audio.duration *100 + "%";
		_that.songData.beginTime = _that.getTime(_that.audio.currentTime);

		if( _that.audio.currentTime == _that.audio.duration ) {

			//视频播放结束
			_that.audio.ended = true;

		}

	});
};

//暂停
CreateAudio.prototype.pause = function(){

	this.audio.pause();
	this.songData.isPaused = true;
	this.songData.isRotatePause = true;

};

//结束
CreateAudio.prototype.ended = function(){

	this.audio.ended = true;
	this.songData.isPaused = true;
	this.songData.isRotatePause = true;

};

//播放上一首、下一首
CreateAudio.prototype.playNextSong = function(btnStatus,currentIndex) {

	var nextIndex = 0;
	var songsLength = this.songlist.length;

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

	console.log(0);
	return nextIndex;

};












export {CreateAudio}

