'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:MainCtrl
 * @description
 * # SubmenuCtrl
 * Controller of the domainCoderApp
 */
angular.module('DomainCoder').factory('ContextCollection', function ($collection) {
    var collectionInstance = $collection.getInstance();

    return collectionInstance;
});
