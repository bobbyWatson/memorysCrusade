define(["waitForImagesLoaded"], function (waitForImagesLoaded){

    var AssetsController = function(){

        this.images = {};
        this.imagesName = [
            "bouncingBall.png",
            "level.png",
            "BG.png",
            "player.png",
            "ladder.png",
            "Props2.png",
            "Props3.png",
            "props_pierre.png",
            "photo.png"
        ]

        AssetsController.prototype.instance = this;
    }

    new AssetsController();

    AssetsController.prototype.loadImages = function(){

        for(var i = 0; i < this.imagesName.length; i++){
            var img = new Image();
            img.src = "./assets/img/"+this.imagesName[i];
            //remove extension
            var names = this.imagesName[i].split(".");
            var name = names[0];
            //stock the image
            AssetsController.prototype.addAnImage(img, name);
        }
    };
    
    AssetsController.prototype.addAnImage = function (img, name){
        _this = this;
        img.onload = function(){_this.instance.images[name] = img};
    }


    AssetsController.prototype.waitForImagesLoaded = waitForImagesLoaded;


    return AssetsController.prototype.instance;
})