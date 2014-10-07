'use strict';

/**
 * @ngdoc function
 * @name DomainCoder.Context.ConceptFactory
 */
angular.module('DomainCoder').service('ConceptFactory',
    ['ConceptCollection', 'uuid4', '$log',
    function (ConceptCollection, uuid4, $log) {

    var factory = {};
    factory.conceptCollection = ConceptCollection;
    factory.uuid4 = uuid4;

    factory.create = function(name, context) {
        var concept = new DomainCoder.Concept(this.uuid4.generate(), name);
        this.conceptCollection.add(concept);

        context.registerConcept(concept);
        $log.info(this.conceptCollection);

        return concept;
    };

    return factory;
}]);

DomainCoder.Concept = function(id, name) {
    this.id = id;
    this.name = name;
};

DomainCoder.Concept.prototype = {
    equals: function(target) {
        return this.name == target.name;
    }
};
