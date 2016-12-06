(function () {
	function PlayerBarCtrl (Fixtures, SongPlayer) {
		this.songPlayer = SongPlayer;
		this.albumData = Fixtures.getAlbum();
	}
	
	angular
		.module('blocJams')
		.controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();