
function getCanvasPixels(canvas) {
  var ctx = canvas.getContext('2d');
  return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
}

module.exports = getCanvasPixels;