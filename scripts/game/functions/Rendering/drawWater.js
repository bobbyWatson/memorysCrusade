define(["Canvas", "Game", "Camera"],function (Canvas, Game, Camera){


        var canvasbfr = document.createElement("canvas");
        canvasbfr.width = Canvas.DOM.width;
        canvasbfr.height = Canvas.DOM.height;
        var smallWidth = canvasbfr.width /10;
        var smallHeight = canvasbfr.height /10;
        ctxbfr = canvasbfr.getContext("2d");
        var image = ctxbfr.getImageData(0,0,canvasbfr.width, canvasbfr.height);
        var pixels = image.data;
        var toto = 0;

    function drawWater (){
        /*var distanceMin = 200;

        for(var i = 0; i < 100; i++){
            startPixel = ((Math.floor(i/10) * canvasbfr.width) * 4) + ((i % 10)* canvasbfr.width/10);
            var found = false;
            for(var k = 0; k < Game.waterArray.length; k++){
                var position = Game.waterArray[k].hitBox.GetBody().GetWorldCenter();
                if(position.x  * Canvas.SCALE > (Camera.x - Camera.width/2) + (i % 10) * smallWidth && position.x * Canvas.SCALE < (Camera.x + Camera.width/2) + ((i+1) % 10) * smallWidth
                && position.y * Canvas.SCALE > (Camera.y - Camera.height/2) + Math.floor(i/10) * smallHeight / 10 && position.y * Canvas.SCALE < (Camera.y + Camera.height/2)) + Math.floor((i+1)/10) * smallHeight
                    found = true;
            }

            if(found){

                for(var j = 0; j < smallHeight * smallWidth; j++){
                    var col = j % smallWidth;
                    var line = Math.floor(j / smallWidth);
                    var ratio = 0;
                    var colored = false
                    for(var k = 0; k < Game.waterArray.length; k++){
                        var position = Game.waterArray[k].hitBox.GetBody().GetWorldCenter();
                        var dst = distance(position.x * Canvas.SCALE, position.y * Canvas.SCALE, (i % canvasbfr.width) + (j % smallWidth), Math.floor(i / canvasbfr.width) + Math.floor(j / smallWidth));
                        if(dst < distanceMin){
                            colored = true;
                            break;
                        }
                    }
                    if(colored){
                        pixels[(startPixel + (line * canvasbfr.width * 4) + (line * 4)) + 2] = 255;
                        pixels[(startPixel + (line * canvasbfr.width * 4) + (line * 4)) + 3] = 255;
                    }
                }

            }else{
                for(var j = 0; j < smallHeight * smallWidth; j++){
                    var col = j % smallWidth;
                    var line = Math.floor(j / smallWidth);
                    pixels[(startPixel + (line * canvasbfr.width * 4) + (line * 4)) + 2] = 0;
                    pixels[(startPixel + (line * canvasbfr.width * 4) + (line * 4)) + 3] = 0;
                }
            }
        }
        ctxbfr.putImageData(image, 0, 0);
        Canvas.ctx.drawImage(canvasbfr,0,0);*/
    }

    function distance(xa, ya, xb, yb){
        return Math.sqrt( Math.pow( xb - xa,2) + Math.pow(yb - ya,2));
    }

    return drawWater;
})