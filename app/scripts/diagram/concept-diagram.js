'use strict';

if (typeof exports === 'object') {

    var joint = require('joint');
}
var Diagram = {};

/**
 * @ngdoc function
 * @name DomainCoder.Context.ConceptFactory
 */
angular.module('Diagram').service('ConceptDiagramFactory',
    ['DiagramCollection',
    function (DiagramCollection) {

    var factory = {};
    factory.DiagramCollection = DiagramCollection;

    factory.create = function(targetElementObject, width, height) {
        var diagram = new Diagram.Conceptual(targetElementObject, width, height);
        this.DiagramCollection.add(diagram);
        return diagram;
    };

    return factory;
}]);

/**
 * @name Diagram.Conceptual Constructor
 */
Diagram.Conceptual = function(targetElementObject, width, height) {
    this.type = 'conceptual';
    this.graph = new joint.dia.Graph();
    this.paper = new joint.dia.Paper({
        el: targetElementObject,
        width: width,
        height: height,
        model: this.graph,
        gridSize: 1
    });
};

/**
 * @name Diagram.Conceptual prototypes
 * @constructor
 */
Diagram.Conceptual.prototype =
{
    /**
     * @name addConcept
     * @param {Concept} concept
     */
    addConcept: function(concept) {
        var element = new joint.shapes.domaincoder.Concept({
            id: concept.id,
            position: { x: 200, y: 110 },
            name: concept.name
        });

        this.graph.addCell(element);
    },

    /**
     * @name addRelation
     * @param {Relation} relation
     */
    addRelation: function(relation) {
        var link = new joint.dia.Link({
            source: { id: relation.from.id },
            target: { id: relation.to.id },
            attrs: {
                '.marker-target': { fill: 'black', d: 'M 10 0 L 0 5 L 10 10 z' }
            },
            'smooth': true
        });
        link.label(0, {
            position: 0.5,
            attrs: {
                rect: { fill: 'white' },
                text: { fill: 'black', text: relation.name }
            }
        });

        this.graph.addCell(link);
    }
};