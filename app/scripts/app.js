'use strict';

/**
 * @ngdoc overview
 * @name DomainCoderApp
 */
angular.module('DomainCoderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCollection',
    'ui.router',
    'ui.bootstrap',
    'DomainCoder',
    'Diagram',
    'uuid'
])
.config(
    ['$stateProvider', '$locationProvider',
    function ($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
}]);

angular.module('DomainCoderApp').factory('AppContext', function() {
    var context = {
        targetContext: null,
        targetConcept: null,

        selectContext: function(context) {
            this.targetContext = context;
            this.targetConcept = null;
        },
        selectConcept: function(concept) {
            this.targetConcept = concept;
            this.targetContext = null;
        }
    };

    return context;
});