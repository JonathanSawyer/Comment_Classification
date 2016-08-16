angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/comments', {
			templateUrl: 'views/comment.html',
			controller: 'CommentController'
		})

		.when('/sentimentanalysis', {
			templateUrl: 'views/sentiment.html',
			controller: 'SentimentController'	
		});

	$locationProvider.html5Mode(true);

}]);