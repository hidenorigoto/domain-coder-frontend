'use strict';

/**
 * @ngdoc function
 * @name DomainCoderApp.controller:SubmenuConceptCtrl
 */
angular.module('DomainCoderApp').controller('SubmenuConceptCtrl',
    ['$scope', '$modal', '$state', 'AppContext', 'ConceptCollection',
    function ($scope, $modal, $state, AppContext, ConceptCollection) {

    $scope.AppContext = AppContext;
    $scope.conceptCollection = ConceptCollection.all();

    /**
     *
     */
    $scope.openAdd = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/concept/add.html',
            controller: 'AddConceptCtrl'
        });

        modalInstance.result.then(function () {
        }, function () {
        });
    };

    /**
     *
     * @param concept
     */
    $scope.selectConcept = function(concept) {
        this.AppContext.selectConcept(concept);
    };
}]);

/**
 * @ngdoc function
 * @name DomainCoderApp.controller:AddConceptCtrl
 */
angular.module('DomainCoderApp').controller('AddConceptCtrl',
    [
    function () {
}]);
