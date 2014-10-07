'use strict';

/**
 * @ngdoc function
 * @name DomainCoder.Context.RelationFactory
 * @param ContextCollection
 * @param uuid4
 * @param $log
 */
angular.module('DomainCoder').service('RelationFactory',
    ['ContextCollection', 'uuid4', '$log',
    function (ContextCollection, uuid4, $log) {

    var factory = {};
    factory.contextCollection = ContextCollection;
    factory.uuid4 = uuid4;

    factory.create = function(name, type, fromConcept, toConcept, comment, context) {
        var relation = new DomainCoder.Relation(this.uuid4.generate(), name, type, fromConcept, toConcept, comment, context);

        context.registerConceptRelation(relation);
        return relation;
    };

    return factory;
}]);

/**
 * @name DomainCoder.Relation Constructor
 * @constructor
 */
DomainCoder.Relation = function(id, name, type, fromConcept, toConcept, comment, context) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.from = fromConcept;
    this.to = toConcept;
    this.comment = comment;
    this.context = context;
};

