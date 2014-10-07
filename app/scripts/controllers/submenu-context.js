'use strict';

/**
 * @ngdoc function
 * @name DomainCoderApp.controller:SubmenuContextCtrl
 */
angular.module('DomainCoderApp').controller('SubmenuContextCtrl',
    ['$scope', '$modal', '$state', 'AppContext', 'ContextCollection',
    function ($scope, $modal, $state, AppContext, ContextCollection) {

    $scope.AppContext = AppContext;
    $scope.contextCollection = ContextCollection.all();

    /**
     *
     */
    $scope.openAdd = function() {
        var modalInstance = $modal.open({
            templateUrl: 'views/context/add.html',
            controller: 'AddContextCtrl'
        });

        modalInstance.result.then(function () {
        }, function () {
        });
    };

    /**
     *
     * @param context
     */
    $scope.selectContext = function(context) {
        this.AppContext.selectContext(context);
    };
}]);

/**
 * @ngdoc function
 * @name DomainCoderApp.controller:AddContextCtrl
 */
angular.module('DomainCoderApp').controller('AddContextCtrl',
    ['$scope', '$modalInstance', 'AppContext', 'ContextFactory',
    function ($scope, $modalInstance, AppContext, ContextFactory) {

    $scope.ok = function () {
        AppContext.targetContext = ContextFactory.create($scope.name);
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);
