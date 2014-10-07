'use strict';

/**
 * @ngdoc function
 * @name DomainCoder.Context.ContextFactory
 */
angular.module('DomainCoder').service('ContextFactory',
    ['ContextCollection', 'uuid4', '$log',
    function (ContextCollection, uuid4, $log) {

    var factory = {};
    factory.contextCollection = ContextCollection;
    factory.uuid4 = uuid4;

    factory.create = function(name) {
        var context = new DomainCoder.Context(this.uuid4.generate(), name);
        this.contextCollection.add(context);

        $log.info(this.contextCollection);

        return context;
    };

    return factory;
}]);

DomainCoder.Context = function(id, name) {
    this.id = id;
    this.name = name;
    this.concepts = [];
    this.conceptRelations = [];
};

DomainCoder.Context.prototype = {
    registerConcept: function(concept) {
        this.concepts.push(concept);
    },
    registerConceptRelation: function(relation) {
        this.conceptRelations.push(relation);
    }
};
