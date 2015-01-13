
# svg path generator

## utilities to generate svg paths

## installation

use with node or in browser with browserify

```
npm install svg-path-generator
```

## usage

```
var Path = require('svg-path-generator');

var path = Path()
            .moveTo(10, 25)
            .lineTo(10, 75)
            .lineTo(60, 75)
            .lineTo(10, 25)
            .end();

console.log(path) // M 10 25 L 10 75 L 60 75 L 10 25

```

to use relative coordinates, call `.relative()` before any method

e.g.
```
var Path = require('svg-path-generator');

var path = Path()
            .moveTo(10, 25)
            .relative().lineTo(0, 50)
            .relative().lineTo(50, 0)
            .relative().lineTo(-50, -50)
            .end();

console.log(path) // M 10 25 l 0 50 l 50 0 l -50 -50

```

both paths are equivalent.



## methods

### svg path methods

* `moveTo(x, y)`
    * moves current position to x,y without drawing anything
    * multiple sets of coordinates can be provided, i.e. `Path.moveTo(x1, y1, x2, y2)` is equivalent to `Path.moveTo(x1, y1).moveTo(x2, y2)`
* `lineTo(x, y)`
    * moves current position to x,y while drawing a line from previous position
    * multiple sets of coordinates can be provided
* `horizontalLineTo(x)`
    * move from previous position along the x axis, drawing a line
* `verticalLineTo(y)`
    * move from previous position along the y axis, drawing a line
* `curveTo(x1, y1, x2, y2, x, y)`
    * Draws a cubic Bézier curve from the current point to (x,y) using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve.
    * multiple sets of coordinates can be provided

* `smoothCurveTo(x2, y2, x, y)`
    * Draws a cubic Bézier curve from the current point to (x,y). The first control point is assumed to be the reflection of the second control point on the previous command relative to the current point.
    * multiple sets of coordinates can be provided

* `bezierCurveTo(x1, y1, x, y)`
    * Draws a quadratic Bézier curve from the current point to (x,y) using (x1,y1) as the control point. 
    * multiple sets of coordinates can be provided

* `smoothBezierCurveTo(x, y)`
    * Draws a quadratic Bézier curve from the current point to (x,y). The control point is assumed to be the reflection of the control point on the previous command relative to the current point.
    * multiple sets of coordinates can be provided

* `ellipticalArc(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y)`
    * Draws an elliptical arc from the current point to (x, y). The size and orientation of the ellipse are defined by two radii (rx, ry) and an x-axis-rotation, which indicates how the ellipse as a whole is rotated relative to the current coordinate system. The center (cx, cy) of the ellipse is calculated automatically to satisfy the constraints imposed by the other parameters. large-arc-flag and sweep-flag contribute to the automatic calculations and help determine how the arc is drawn.

* `close()`
    * closes the current path

### other methods

* `.relative()` call before any method to have the method accept relative instead of absolute coordinates
* `.end()` converts the Path object to a string. This also gets called on the `.toString()` method


## license

MIT
