'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:ConceptualMapCtrl
 */
angular.module('DomainCoderApp').controller('DescriptionTabCtrl',
    ['$scope', '$log',
    function ($scope, $log) {
        $log.info('DescriptionTabCtrl');
        $scope.message = 'termtab';
}]);
