define(["B2D","doWaitingActions","Game","touchPlayer", "MaskControler", "AssetsController", "ImageSprite", "draw", "isPlayerInside"], function (Box2D, doWaitingActions,Game,touchPlayer,MaskControler,AssetsController,ImageSprite,draw, isPlayerInside){

    var Pikes = function Pikes (args){

        this.id = Game.ids;
        Game.ids++;
        this.waitingActions = [];
        this.playerInside = false;

        this.objects = [];
        this.x = args.x || 0;
        this.y = args.y || 0;
        this.height = args.height || 0;
        this.width = args.width || 0;

        this.layer=MaskControler.Object;
        this.hitBox = Game.createB2Object({
            x        : this.x,
            y        : this.y,
            width    : this.width,
            height   : this.height,
            dynamism : Box2D.Body.b2_kinematicBody,
            shape    : "box",
            layer    : this.layer
        });

        this.imageSprite = new ImageSprite({image : AssetsController.images.pikes, width : this.width*2 , height : this.height * 2});

        this.hitBox.GetBody().SetUserData(this);

        this.hitBox.SetSensor(true);

        Game.on("gameObject"+this.id+"Collides", this.isPlayerInside, this);
    }

    Pikes.prototype.isPlayerInside = isPlayerInside;

    Pikes.prototype.actions = function (){
        this.draw();
        this.killPlayer();
    }
    
    Pikes.prototype.killPlayer = function killPlayer(){
        if(this.playerInside){
                    console.log("toto");
            for(var i = 0; i < Game.gameObjects.length; i++){
                if(Game.gameObjects[i].tag === "Player"){
                    Game.gameObjects[i].death(true);
                    this.playerInside = false;
                }
            }
        }
    }
    
    Pikes.prototype.doWaitingActions = doWaitingActions;

    Pikes.prototype.draw = draw;

    return Pikes;
})