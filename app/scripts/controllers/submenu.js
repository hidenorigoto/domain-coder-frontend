'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:MainCtrl
 * @description
 * # SubmenuCtrl
 * Controller of the domainCoderApp
 */
angular.module('domainCoderApp')
  .controller('SubmenuCtrl', function ($scope) {
    $scope.contexts = [
        {name:'test1'},
        {name:'test2'}
    ];
  });
