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

joint.shapes.domaincoder.Data = joint.shapes.basic.Generic.extend({

    markup: [
        '<rect class="dc-data-desc-rect"/><switch>',
        // if foreignObject supported

        '<foreignObject requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" class="dc-data-desc-fobj">',
        '<body xmlns="http://www.w3.org/1999/xhtml" style="padding: 0;"><div style="background-color: white; font-size: 12;"/></body>',
        '</foreignObject>',

        // else foreignObject is not supported (fallback for IE)
        '<text class="dc-data-desc-content"/>',

        '</switch>',
        '<rect class="dc-data-name-rect"/><rect class="dc-data-keys-rect"/><rect class="dc-data-attributes-rect"/>',
        '<text class="dc-data-name-text"/><text class="dc-data-keys-text"/><text class="dc-data-attributes-text"/>'
    ].join(''),

    defaults: joint.util.deepSupplement({

        type: 'domaincoder.Data',

        size: { width: 200 },

        attrs: {
            '.dc-data-name-rect': { 'stroke': 'black', 'stroke-width': 1 },
            '.dc-data-keys-rect': { 'stroke': 'black', 'stroke-width': 1, 'fill': 'white' },
            '.dc-data-attributes-rect': { 'stroke': 'black', 'stroke-width': 1, 'fill': 'white' },
            '.dc-data-desc-rect': { 'stroke': 'black', 'stroke-width': 1, 'fill': 'white' },

            '.dc-data-name-text': {
                'ref': '.dc-data-name-rect', 'ref-y': 5, 'ref-x': 5, 'font-weight': 'bold',
                'fill': 'black', 'font-size': 18, 'font-family': 'monospace'
            },
            '.dc-data-keys-text': {
                'ref': '.dc-data-keys-rect', 'ref-y': 5, 'ref-x': 5,
                'fill': 'black', 'font-size': 14, 'font-family': 'monospace'
            },
            '.dc-data-attributes-text': {
                'ref': '.dc-data-attributes-rect', 'ref-y': 5, 'ref-x': 5,
                'fill': 'black', 'font-size': 12, 'font-family': 'monospace'
            },
            '.dc-data-desc-fobj': {
                ref: '.dc-data-desc-rect',
                'ref-x': 5,
                'ref-y': 5
            },
            '.dc-data-desc-content': {
                text: '',
                ref: '.dc-data-desc-rect',
                'ref-x': .5,
                'ref-y': .5,
                'y-alignment': 'middle',
                'x-alignment': 'middle'
            }

        },

        entityType: [],
        name: [],
        keys: [],
        attributes: [],
        description: ''

    }, joint.shapes.basic.Generic.prototype.defaults),

    initialize: function() {

        if (typeof SVGForeignObjectElement !== 'undefined') {

            // foreignObject supported
            this.setForeignObjectSize(this, this.get('size'));
            this.setDivContent(this, this.get('description'));
            this.listenTo(this, 'change:size', this.setForeignObjectSize);
            this.listenTo(this, 'change:description', this.setDivContent);
        }

        this.on('change:name change:attributes change:keys', function() {
            this.updateRectangles();
            this.trigger('dc-data-update');
        }, this);

        this.updateRectangles();

        joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments);
    },

    updateRectangles: function() {

        var attrs = this.get('attrs');

        var colors = {
            'event': '#FCAF22',
            'resource': '#5390CB',
            'other': '#F0F0F0'
        };
        var type = this.get('entityType');
        var color = colors[type] ? colors[type] : colors['other'];

        var size = this.get('size');
        var width = size.width / 2.0;
        var height = Math.max(this.get('keys').length,this.get('attributes').length) * 20 + 20;

        attrs['.dc-data-name-text'].text = this.get('name');
        attrs['.dc-data-name-rect'].height = 40;
        attrs['.dc-data-name-rect'].width = width*2;
        attrs['.dc-data-name-rect'].transform = 'translate(0,0)';
        attrs['.dc-data-name-rect'].fill = color;

        attrs['.dc-data-keys-text'].text = this.get('keys').join('\n');
        attrs['.dc-data-keys-rect'].height = height;
        attrs['.dc-data-keys-rect'].width = width;
        attrs['.dc-data-keys-rect'].transform = 'translate(0,40)';

        attrs['.dc-data-attributes-text'].text = this.get('attributes').join('\n');
        attrs['.dc-data-attributes-rect'].height = height;
        attrs['.dc-data-attributes-rect'].width = width;
        attrs['.dc-data-attributes-rect'].transform = 'translate('+width+',40)';

        attrs['.dc-data-desc-rect'].height = height;
        attrs['.dc-data-desc-rect'].width = width*2;
        attrs['.dc-data-desc-rect'].transform = 'translate(0,40)';
        attrs['.dc-data-desc-fobj'].height = height * 0.9;
        attrs['.dc-data-desc-fobj'].width = width*2*0.9;

        this.set('size', {width: width*2*0.9, height: height*0.9});
    },

    setForeignObjectSize: function(cell, size) {
        cell.attr({
            '.dc-data-desc-fobj': _.clone(size),
            div: { style: _.clone(size) }
        });
    },

    setDivContent: function(cell, content) {
        cell.attr({ div : {
            html: content
        }});
    }

});

if (typeof exports === 'object') {
    module.exports = joint.shapes.domaincoder.Data;
}
