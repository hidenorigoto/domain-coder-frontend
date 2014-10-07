'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:ConceptualMapCtrl
 */
angular.module('DomainCoderApp').controller('FlowTabCtrl',
    ['$scope', '$log',
    function ($scope, $log) {
        $log.info('FlowTabCtrl');
        $scope.message = 'flowtab';
}]);
