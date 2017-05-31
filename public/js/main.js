angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/clientes', {
			templateUrl: 'partials/clienteList.html',
			controller: 'ClientesController'
		});

		$routeProvider.when('/clientes/new', {
			templateUrl: 'partials/clienteForm.html',
			controller: 'ClienteController'
		});

		$routeProvider.when('/clientes/edit/:clienteId', {
			templateUrl: 'partials/clienteForm.html',
			controller: 'ClienteController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.otherwise({redirectTo: '/clientes'});

	});