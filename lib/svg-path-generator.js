

function SvgPathGenerator(path) {
    if (!(this instanceof SvgPathGenerator)) {
        return new SvgPathGenerator(path);
    }

    this.currentPath = (path || '') + ' ';
    this.isRelative = false;
}


module.exports = SvgPathGenerator;



SvgPathGenerator.prototype.toString = function() {
    return this.end();
};


SvgPathGenerator.prototype.moveTo = function() {
    this._appendData('M', arguments);
    return this;
};


SvgPathGenerator.prototype.close = SvgPathGenerator.prototype.closePath = function() {
    this._appendData('Z', []);
    return this;
};

SvgPathGenerator.prototype.lineTo = function() {
    this._appendData('L', arguments);
    return this;
};

SvgPathGenerator.prototype.horizontalLineTo = function(x) {
    this._appendData('H', [x]);
    return this;
};

SvgPathGenerator.prototype.verticalLineTo = function(y) {
    this._appendData('V', [y]);
    return this;
};

SvgPathGenerator.prototype.curveTo = function() {
    this._appendData('C', arguments);
    return this;
};

SvgPathGenerator.prototype.smoothCurveTo = function() {
    this._appendData('S', arguments);
    return this;
};

SvgPathGenerator.prototype.bezierCurveTo = function() {
    this._appendData('Q', arguments);
    return this;
};

SvgPathGenerator.prototype.smoothBezierCurveTo = function() {
    this._appendData('T', arguments);
    return this;
};

SvgPathGenerator.prototype.ellipticalArc = function() {
    this._appendData('A', arguments);
    return this;
};


SvgPathGenerator.prototype.relative = function() {
    this.isRelative = true;
    return this;
};

SvgPathGenerator.prototype.end = function() {
    return this.currentPath.trim();
};


SvgPathGenerator.prototype._appendData = function(symbol, args) {

    args = Array.prototype.slice.call(args);

    if(this.isRelative) {
        symbol = symbol.toLowerCase();
        this.isRelative = false;
    }

    this.currentPath += symbol + ' ' + args.join(' ') + ' ';
};


