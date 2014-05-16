(function(angular){
	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('products', {
				url: '/products',
				controller: 'ProductList',
				templateUrl: 'views/product-list.html'
			})
			.state('/about', {
				url: 'about',
				templateUrl: ""
			})
			.state('/contact', {
				url: 'contact',
				templateUrl: ''
			});
	});
})(window.angular);