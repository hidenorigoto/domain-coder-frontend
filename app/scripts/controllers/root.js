'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:RpptCtrl
 */
angular.module('DomainCoderApp').controller('RootCtrl',
    ['$scope', 'AppContext',
    function ($scope, AppContext) {

    $scope.AppContext = AppContext;
}]);
