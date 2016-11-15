(function () {
	function SongPlayer () {
		var SongPlayer = {};
		var currentSong = null;
		
		/** 
		* @desc Buzz object audio file
		* @type {object}
		*/
		var currentBuzzObject = null;
		
		/** 
		* @function playSong
		* @desc Plays the current selected song 
		*/
		var playSong = function (song) {
			currentBuzzObject.play();
			currentSong.playing = true;
		};
		
		/** 
		* @function setSong
		* @desc Stops currently playing song and loads new audio file as currentBuzzObject
		* @param {object} song
		*/
		var setSong = function (song) {
			if (currentBuzzObject) {
				currentBuzzObject.stop();
				currentSong.playing = null;
			}
			
			currentBuzzObject = new buzz.sound(song.audioUrl, {
				formats: ['mp3'],
				preload: true
			});
			
			currentSong = song;
		};
		
		/** 
		* @desc Setting the main function SongPlayer to the play state. We then check if the current song is playing or not
		* @param {object} song
		*/
		SongPlayer.play = function (song) {
			if (currentSong !== song) {
				setSong(song);
				playSong();
			} else if (currentSong === song) {
					if (currentBuzzObject.isPaused()) {
						currentBuzzObject.play();
					}
				}
			};
		
		/** 
		* @desc Setting the main function songPlayer to the pause state
		* @param {object} song
		*/
		SongPlayer.pause = function (song) {
			currentBuzObject.pause();
			song.playing = false;
		};
		
		return SongPlayer;
	};

	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();