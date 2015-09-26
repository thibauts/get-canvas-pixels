get-canvas-pixels
=================
### Get an array of RGBA pixel values from a canvas

Extracts an Uint8ClampedArray of RGBA pixel values from a canvas.

Install
-------

```bash
$ npm install get-canvas-pixels
```

Usage
-----

```javascript
var getCanvasPixels = require('get-canvas-pixels');

var canvas = document.getElementById('canvas');
var pixels = getCanvasPixels(canvas);

console.log(pixels);
/*
[0, 0, 0, 255, 255, 255, 255, 255, ...]
*/
```