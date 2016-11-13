(function() {
<<<<<<< HEAD
		function config($stateProvider, $locationProvider) {
			$locationProvider
				.html5Mode({
					enabled: true,
					requireBase: false
			});
			
			$stateProvider
				.state('landing', {
					url: '/',
					controller: 'LandingCtrl as landing',
					templateUrl: '/templates/landing.html'
			})
			
				.state('album', {
					url: '/album',
					controller: 'AlbumCtrl as album',
					templateUrl: '/templates/album.html'
			})
			
				.state('collection', {
					url: '/collection',
					controller: 'CollectionCtrl as collection',
					templateUrl: '/templates/collection.html'
			});
		}
=======
	function config($stateProvider, $locationProvider){
		$locationProvider.html5Mode({
      enabled: true, //hides #! from url (hashbang indicates that the page load is triggered by JS)
      requireBase: false
    });

    $stateProvider
    .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html'
    })
    .state('album', {
      url: '/album',
      controller: 'AlbumCtrl as album',
      templateUrl: '/templates/album.html'
    })
    .state('collection', {
      url: '/collection',
      controller: 'CollectionCtrl as collection',
      templateUrl: '/templates/collection.html'
    });
	}

>>>>>>> 42801c40b32f43f64922a9f4b0f0658ad6ca3498
	angular
		.module('blocJams', ['ui.router'])
		.config(config)
})();
