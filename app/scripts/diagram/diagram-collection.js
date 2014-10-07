'use strict';

/**
 * @ngdoc function
 * @name domainCoderApp.controller:MainCtrl
 */
angular.module('Diagram').factory('DiagramCollection', function ($collection) {
    var collectionInstance = $collection.getInstance();

    collectionInstance.getConceptDiagram = function() {
        return this.find('type', 'conceptual');
    };

    return collectionInstance;
});
