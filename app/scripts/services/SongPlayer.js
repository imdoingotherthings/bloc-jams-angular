(function () {
	function SongPlayer (Fixtures) {
		var SongPlayer = {};
		var currentAlbum = Fixtures.getAlbum();
		
		/** 
		* @desc Buzz object audio file
		* @type {object}
		*/
		var currentBuzzObject = null;
		
		/** 
		* @function playSong
		* @desc Plays the current selected song 
		*/
		var playSong = function (currentSong) {
			currentBuzzObject.play();
			currentSong.playing = true;
		};
		
		/**
		* @function stopSong
		* @desc Stopping the current playing song
		* param {Object} song
		*/
		var stopSong = function (song) {
			currentBuzzObject.stop();
			currentSong.playing = null;
		};
		
		/** 
		* @function setSong
		* @desc Stops currently playing song and loads new audio file as currentBuzzObject
		* @param {object} song
		*/
		var setSong = function (song) {
			if (currentBuzzObject) {
				currentBuzzObject.stop();
				SongPlayer.currentSong.playing = null;
			}
			
			currentBuzzObject = new buzz.sound(song.audioUrl, {
				formats: ['mp3'],
				preload: true
			});
			
			SongPlayer.currentSong = song;
		};
		
		/** 
		* @function getSongIndex 
		* @desc Grabing the index of the songs using currentAlbum which stores getAlbum() from the Fixtures.js file
		*/
		var getSongIndex = function (song) {
			return currentAlbum.songs.indexOf(song);
		};
		
		SongPlayer.currentSong = null;
		
		/** 
		* @desc Setting the main function SongPlayer to the play state. We then check if the current song is playing or not
		* @param {object} song
		*/
		SongPlayer.play = function (song) {
			song = song || SongPlayer.currentSong;
			if (SongPlayer.currentSong !== song) {
				setSong(song);
				playSong(song);
			} else if (SongPlayer.currentSong === song) {
					if (currentBuzzObject.isPaused()) {
						playSong(song);
					}
				}
			};
		
		/** 
		* @desc Setting the main function songPlayer to the pause state
		* @param {object} song
		*/
		SongPlayer.pause = function (song) {
			song = song || SongPlayer.currentSong;
			currentBuzzObject.pause();
			song.playing = false;
		};
		
		/** 
		* @desc Going back to the previous song
		*/
		SongPlayer.previous = function () {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex--;
			
			if (currentSongIndex < 0) {
				stopSong(SongPlayer.currentSong);
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};
		
		/** 
		* @desc When clicked on, the song will iterate through the index
		*/
		SongPlayer.next = function () {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex++;
			
			var lastSongIndex = currentAlbum.songs.length - 1;
			
			if (currentSongIndex > lastSongIndex) {
				stopSong(SongPlayer.currentSong);
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};
		
		
		
		return SongPlayer;
	};

	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();
