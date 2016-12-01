(function () {
	function PlayerBarCtrl (Fixtures, SongPlayer) {
		this.songPlayer = SongPlayer;
//		console.log(SongPlayer.currentSong);
	}
	
	angular
		.module('blocJams')
		.controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();