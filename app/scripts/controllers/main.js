'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:MainCtrl
 */
angular.module('DomainCoderApp').controller('MainCtrl',
    ['$scope', 'AppContext',
    function ($scope, AppContext) {

    $scope.AppContext = AppContext;

    $scope.selectConceptualMapEditor = function() {
    };
    $scope.selectFlowEditor = function() {
    };
    $scope.selectDescriptionEditor = function() {
    };
}]);
