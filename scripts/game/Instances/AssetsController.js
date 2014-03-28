define(["waitForImagesLoaded"], function (waitForImagesLoaded){

    var AssetsController = function(){

        this.images = {};
        this.imagesName = [
            "loadinBar.png",
            "loadingBar_content.png",
            "bouncingBall.png",
            "level1.png",
            "level2.png",
            "level1BG.png",
            "level2BG.jpg",
            "level3BG.png",
            "level4BG.jpg",
            "player.png",
            "level1Ladder.png",
            "level2Ladder.png",
            "level3Ladder.png",
            "level4Ladder.png",
            "level1Rock.png",
            "level2Rock.png",
            "level3Rock.png",
            "level4Rock.png",
            "photo.png",
            "darkPhoto.png",
            "level1Pikes.png",
            "level2Pikes.png",
            "level3Pikes.png",
            "level4Pikes.png",
            "level1FallingDanger.png",
            "level2FallingDanger.png",
            "level3FallingDanger.png",
            "level4FallingDanger.png",
            "level1Plateform.png",
            "level2Plateform.png",
            "level3Plateform.png",
            "level4Plateform.png"
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

    AssetsController.prototype.loadingPercent = function (){
        return this.imagesName.length / Object.keys(this.images).length * 100;
    }

    AssetsController.prototype.waitForImagesLoaded = waitForImagesLoaded;


    return AssetsController.prototype.instance;
})