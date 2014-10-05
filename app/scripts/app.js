'use strict';

/**
 * @ngdoc overview
 * @name domainCoderApp
 * @description
 * # domainCoderApp
 *
 * Main module of the application.
 */
angular
  .module('domainCoderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('index',{
            url: '/',
            views: {
                'submenu': {
                    templateUrl: 'views/submenu.html',
                    controller: 'SubmenuCtrl'
                },
                'main': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                }
            }
        });
  }]);
