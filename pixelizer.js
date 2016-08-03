var canvas = document.getElementById('image');
var ctx = canvas.getContext('2d')
var range = document.getElementById('range').value;


function pixelate() {

    var fw = (img.width / range)|0,
        fh = (img.height / range)|0;
    
    ctx.imageSmoothingEnabled =
    ctx.mozImageSmoothingEnabled =
    ctx.msImageSmoothingEnabled =
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(img, 0, 0, fw, fh);
    ctx.drawImage(canvas, 0, 0, fw, fh, 0, 0, img.width, img.height);
}

document.getElementById('range').oninput = function() {
  range = document.getElementById('range').value;
  pixelate();
}
