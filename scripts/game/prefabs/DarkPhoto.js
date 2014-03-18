define(["B2D","doWaitingActions","Game","elementIsInside", "move", "MaskControler", "draw", "ImageSprite", "AssetsController", "Canvas", "Camera"],
    function (Box2D, doWaitingActions,Game,elementIsInside,move,MaskControler, draw, ImageSprite, AssetsController, Canvas, Camera){

    var DarkPhoto = function DarkPhoto (args){

        this.id = Game.ids;
        Game.ids++;
        this.waitingActions = [];
        
        this.timeToStay = 2.0;
        this.objects = [];
        console.log(args.x);
        this.x = args.x || 0;
        this.y = args.y || 0;
        this.height = args.height || 0;
        this.width = args.width || 0;
        this.hasGravity=false;
        this.creator=args.creator || 0;
        this.layer=MaskControler.Photo;
        this.hitBox = Game.createB2Object({
            x       : this.x,
            y       : this.y,
            height  : this.height,
            width   : this.width,
            density : 0,
            dynamism: Box2D.Body.b2_dynamicBody,
            shape   : "box",
            layer   : this.layer
        });
        this.hitBox.SetSensor(true)
        this.hitBox.GetBody().SetUserData(this);
        this.hitBox.GetBody().hasGravity=false;
        
        this.photoImage = new ImageSprite({image : AssetsController.images.darkPhoto, width : this.width, height : this.height});
    }

    DarkPhoto.prototype.actions = function (){
        this.move({x:0,y:0});
        this.minusTime()
        this.imageSprite = this.toto();
        this.draw();
    }

    DarkPhoto.prototype.draw = draw;

    DarkPhoto.prototype.undo=function(){
        for(var i = 0; i < this.objects.length; i++){
            this.objects[i][0].hitBox.GetBody().SetType(this.objects[i][3]);
            this.objects[i][0].hitBox.GetBody().ApplyForce({x:0.1,y:0.1}, {x:0.1,y:0.1});
            this.objects[i][0].hitBox.GetBody().SetLinearVelocity(this.objects[i][1]);
            this.objects[i][0].hitBox.GetBody().SetAngularVelocity(this.objects[i][2]);
        }
        this.isDead = true;
        if(this.creator!==0)
        {
            this.creator.photoTaken=false;
        }
    }
    
    DarkPhoto.prototype.move = move;
    
    DarkPhoto.prototype.doWaitingActions = doWaitingActions;

    DarkPhoto.prototype.toto = function toto (){

        console.log(Camera.x - Camera.width /2);
        var _img = Canvas.darkWorldCtx.getImageData((this.x - this.width ) * Canvas.SCALE - (Camera.x - Camera.width /2),
                                                    (this.y - this.height )* Canvas.SCALE - (Camera.y - Camera.height /2),
                                                    this.width * 2 * Canvas.SCALE,
                                                    this.height * 2 * Canvas.SCALE);

        for(i = 0; i < _img.data.length; i++){
            if(i % 4 !== 3){
                _img.data[i] = (255 - _img.data[i]);
            }
        }

        Canvas.bfrCtx.putImageData(_img,0,0);
        Canvas.bfrCtx.drawImage(AssetsController.images.darkPhoto,0,0, this.width * 2 * Canvas.SCALE, this.height * 2 * Canvas.SCALE);

        return new ImageSprite({image : Canvas.bfr, width : this.width * 2 , height : this.height * 2, x : this.width, y :  this.height});

    }

    DarkPhoto.prototype.minusTime = function (){

        this.timeToStay -= 1/60;
        if(this.timeToStay <= 0){
            this.undo();
        }
    }
    return DarkPhoto;
})