'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:ConceptualMapCtrl
 */
angular.module('DomainCoderApp').controller('TermTabCtrl',
    ['$scope', '$log',
    function ($scope, $log) {
        $log.info('TermTabCtrl');
        $scope.message = 'termtab';
}]);
