
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
            .lineTo(10, 75)
            .lineTo(60, 75)
            .relative()
            .lineTo(-50, -50)
            .end();

console.log(path) // M 10 25 L 10 75 L 60 75 l -50 -50

```

both paths are equivalent.



## methods

### svg path methods

* `moveTo(x, y)`
    * multiple coordinates can be provided, i.e. `Path.moveTo(x1, y1, x2, y2) is equivalent to Path.moveTo(x1, y1).moveTo(x2, y2)
* `lineTo(x, y)`
    * multiple coordinates can be provided
* `horizontalLineTo(x)`
* `verticalLineTo(y)`
* `curveTo(x1, y1, x2, y2, x, y)`
    * Draws a cubic Bézier curve from the current point to (x,y) using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve. C (uppercase) indicates that absolute coordinates will follow; c (lowercase) indicates that relative coordinates will follow. Multiple sets of coordinates may be specified to draw a polybézier. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybézier.

* `smoothCurveTo(x2, y2, x, y)`
    * Draws a cubic Bézier curve from the current point to (x,y). The first control point is assumed to be the reflection of the second control point on the previous command relative to the current point. (If there is no previous command or if the previous command was not an C, c, S or s, assume the first control point is coincident with the current point.) (x2,y2) is the second control point (i.e., the control point at the end of the curve). S (uppercase) indicates that absolute coordinates will follow; s (lowercase) indicates that relative coordinates will follow. Multiple sets of coordinates may be specified to draw a polybézier. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybézier.

* `bezierCurveTo(x1, y1, x, y)`
    * Draws a quadratic Bézier curve from the current point to (x,y) using (x1,y1) as the control point. Q (uppercase) indicates that absolute coordinates will follow; q (lowercase) indicates that relative coordinates will follow. Multiple sets of coordinates may be specified to draw a polybézier. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybézier.

* `smoothBezierCurveTo(x, y)`
    * Draws a quadratic Bézier curve from the current point to (x,y). The control point is assumed to be the reflection of the control point on the previous command relative to the current point. (If there is no previous command or if the previous command was not a Q, q, T or t, assume the control point is coincident with the current point.) T (uppercase) indicates that absolute coordinates will follow; t (lowercase) indicates that relative coordinates will follow. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybézier.


### other methods

* `.relative()` call before any method to have the method accept relative instead of absolute coordinates
* `.end()` converts the Path object to a string. This also gets called on the `.toString()` method


## license

MIT