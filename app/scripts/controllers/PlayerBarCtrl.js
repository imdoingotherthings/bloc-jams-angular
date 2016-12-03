(function () {
	function PlayerBarCtrl (Fixtures, SongPlayer) {
		this.songPlayer = SongPlayer;
		console.log(this.songPlayer);
	}
	
	angular
		.module('blocJams')
		.controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();