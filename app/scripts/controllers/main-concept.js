'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:MainConceptCtrl
 */
angular.module('DomainCoderApp').controller('MainConceptCtrl',
    ['$scope', 'AppContext',
    function ($scope, AppContext) {

    $scope.AppContext = AppContext;
}]);
