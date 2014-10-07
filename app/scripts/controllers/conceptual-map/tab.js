'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:ConceptualMapCtrl
 */
angular.module('DomainCoderApp').controller('ConceptualMapTabCtrl',
    ['$scope', '$log', '$window','$modal', 'ConceptDiagramFactory',
    function ($scope, $log, $window, $modal, ConceptDiagramFactory) {

    $scope.onLoad = function() {
        $scope.diagram = ConceptDiagramFactory.create(
            $('#conceptualMapEditor'),
            ($($window).width() - $('#submenu').width()) * 0.95,
            $($window).height() * 0.8);
    };

    /**
     *
     */
    $scope.openAddConcept = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/conceptual-map/add-concept.html',
            controller: 'AddConceptCtrl'
        });

        modalInstance.result.then(function () {
        }, function () {
        });
    };
    /**
     *
     */
    $scope.openAddRelation = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/conceptual-map/add-relation.html',
            controller: 'AddRelationCtrl'
        });

        modalInstance.result.then(function () {
        }, function () {
        });
    };
}]);

/**
 * @ngdoc function
 * @name DomainCoderApp.controller:AddConceptCtrl
 */
angular.module('DomainCoderApp').controller('AddConceptCtrl',
    ['$scope', '$modalInstance', 'AppContext', 'ConceptFactory', 'DiagramCollection',
    function ($scope, $modalInstance, AppContext, ConceptFactory, DiagramCollection) {

    $scope.ok = function () {
        var concept = ConceptFactory.create($scope.name, AppContext.targetContext);
        var diagram = DiagramCollection.getConceptDiagram();
        diagram.addConcept(concept);

        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

/**
 * @ngdoc function
 * @name DomainCoderApp.controller:AddRelationCtrl
 */
angular.module('DomainCoderApp').controller('AddRelationCtrl',
    ['$scope', '$modalInstance', 'AppContext', 'RelationFactory', 'DiagramCollection', '$log',
    function ($scope, $modalInstance, AppContext, RelationFactory, DiagramCollection, $log) {

    $scope.AppContext = AppContext;
    $scope.concepts = AppContext.targetContext.concepts;
    $scope.relationTypes = [
        {type:'ACCM', name:'伴って', label:'伴って (ACCM)'},
        {type:'AGNT', name:'アクター', label:'アクター (AGNT)'}
    ];

    $scope.ok = function () {

        $log.info($scope.from);

        var relation = RelationFactory.create(
            $scope.type.name,
            $scope.type.type,
            $scope.from,
            $scope.to,
            '',
            AppContext.targetContext
        );
        var diagram = DiagramCollection.getConceptDiagram();
        diagram.addRelation(relation);

        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
