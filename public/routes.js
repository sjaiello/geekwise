(function(angular){
	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
                controller: 'HomeController',
				templateUrl: 'views/home.html'
			})
			.state('products', {
				url: '/products',
				controller: 'ProductList',
				templateUrl: 'views/product-list.html'
			})
            .state('product', {
                url: '/product/:id',
                controller: 'ProductDetail',
                templateUrl: 'views/product-detail.html'
            })
			.state('/about', {
				url: 'about',
				templateUrl: ""
			})


			.state('/contact', {
				url: 'contact',
				templateUrl: ''
			})

            .state('cart', {
                url: '/cart',
                controller: 'CartController',
                templateUrl: 'views/cart.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'views/login.html'
            })
            .state('signup', {
                url: '/signup',
                controller: 'SignupController',
                templateUrl: 'views/signup.html'
            });
	});
})(window.angular);