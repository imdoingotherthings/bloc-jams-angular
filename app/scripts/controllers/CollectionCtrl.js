(function () {
	function CollectionCtrl	(Fixtures) {
//		console.log(Fixtures.getCollection());
//		var numberOfAlbums = 4;
		this.albums = Fixtures.getCollection(2);
//		this.albums = Fixtures.getCollection(Fixture.albums.length);
	}

	angular
		.module('blocJams')
		.controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
