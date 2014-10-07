'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:MainCtrl
 */
angular.module('DomainCoder').factory('ConceptCollection', function ($collection) {
    var collectionInstance = $collection.getInstance();

    return collectionInstance;
});
