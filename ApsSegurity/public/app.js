var appServersoft = angular.module("appServersoft", ['ngRoute', 'ServersoftApi', 'pascalprecht.translate', 'ui.bootstrap', 'angular-md5', 'ngCookies']);

appServersoft.config(function($routeProvider,$translateProvider) {
 
    $routeProvider.when('/login', {
        templateUrl: "/modules/login/loginView.html",
        controller: "loginController"
    });
   
   $routeProvider.when('/users', {
	      templateUrl: "/modules/User/userView.html",
	      controller: "userController"
	  });
	  $routeProvider.otherwise({
	    redirectTo: '/programs'
	  });




	  $translateProvider.useStaticFilesLoader({
          prefix: '/languages/',
          suffix: '.json'
      });
	  
	  $translateProvider.registerAvailableLanguageKeys(
			    ['es', 'en'],
			    {
			        'en*': 'en',
			        'es': 'es',
			         '*': 'es' // must be last!
			    }
			);
	  
	  $translateProvider.fallbackLanguage(['es']);
	  $translateProvider.determinePreferredLanguage();
	  $translateProvider.use('es');

	});

appServersoft.controller('indexController', ['$scope', '$filter', 'authentication', function ($scope, $filter, authentication) {

    ///verify session
    authentication.checkStatus();
    $scope.shutdown = function () {
        authentication.logout();
    }
}]);