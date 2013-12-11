define(["Game","RAF", "Canvas"], function (Game, RAF, Canvas){

    return function waitForImagesLoaded (){

        if(Object.keys(this.images).length === this.imagesName.length){
            Game.emit("all images loaded");
        }else{
            //Do cool stuffs Here
            Canvas.ctx.fillStyle = "rgb(150,0,150)";
            Canvas.ctx.fillRect(0,0, Canvas.DOM.width, Canvas.DOM.height);

            var _this = this;
            RAF(function(){_this.waitForImagesLoaded()});
        }
    }
})