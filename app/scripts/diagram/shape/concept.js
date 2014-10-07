if (typeof exports === 'object') {
    var _ = require('lodash');
}

//
// カスタムシェイプクラス
// カスタムシェイプは joint.shapes 名前空間に定義する必要があることに注意する
//
if (joint.shapes.domaincoder == undefined) {
    joint.shapes.domaincoder = {};
}

joint.shapes.domaincoder.Concept = joint.shapes.basic.Generic.extend({

    markup: [
        '<ellipse class="dc-concept-name-circle"/>',
        '<text class="dc-concept-name-text"/>'
    ].join(''),

    defaults: joint.util.deepSupplement({

        type: 'domaincoder.Concept',

        attrs: {
            '.dc-concept-name-circle': { 'stroke': 'black', 'stroke-width': 1 },

            '.dc-concept-name-text': {
                'ref': '.dc-concept-name-circle', 'text-anchor': 'middle',
                'ref-x': .5, 'y': '0.2em',
                'font-weight': 'bold',
                'fill': 'black', 'font-size': 18, 'font-family': 'monospace'
            }
        },

        conceptType: [],
        name: []

    }, joint.shapes.basic.Generic.prototype.defaults),

    initialize: function() {

        this.on('change:name change:attributes change:keys', function() {
            this.updateRectangles();
            this.trigger('dc-concept-update');
        }, this);

        this.updateRectangles();

        joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments);
    },

    updateRectangles: function() {

        var attrs = this.get('attrs');

        var colors = {
            'main': '#FCAF22',
            'actor': '#5390CB',
            'other': '#F0F0F0'
        };
        var type = this.get('conceptType');
        var color = colors[type] ? colors[type] : colors['other'];

        attrs['.dc-concept-name-text'].text = this.get('name');
        attrs['.dc-concept-name-circle'].rx = 100;
        attrs['.dc-concept-name-circle'].ry = 50;
        attrs['.dc-concept-name-circle'].fill = color;
    }

});

if (typeof exports === 'object') {
    module.exports = joint.shapes.domaincoder.Concept;
}
