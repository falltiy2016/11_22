(() => {
    'use strict';

    angular
    .module('lecture', ['ui.router'])
    .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/404');

        $stateProvider
        .state('home', {
	        url: '/',
	        views: {
	            'content': {
	                templateUrl: 'partials/home.html',
	                controller: 'HeaderController',
	                controllerAs: 'controller'
	            }
	        }
        })
    }


})();
