define(["B2D","doWaitingActions","Game","touchPlayer", "MaskControler", "AssetsController", "ImageSprite", "draw"], function (Box2D, doWaitingActions,Game,touchPlayer,MaskControler,AssetsController,ImageSprite,draw){

    var FallingDanger = function FallingDanger (args){

        this.id = Game.ids;
        Game.ids++;
        this.waitingActions = [];
        this.playerInside = false;

        this.objects = [];
        this.x = args.x || 0;
        this.y = args.y || 0;
        this.height = args.height || 1;
        this.width = args.width || 1;

        this.layer = MaskControler.Object;
        this.hitBox = Game.createB2Object({
            x        : this.x,
            y        : this.y,
            width    : this.width,
            height   : this.height,
            dynamism : Box2D.Body.b2_dynamicBody,
            shape    : "box",
            layer    : this.layer
        });

        this.imageSprite = new ImageSprite({image : AssetsController.images.fallingDanger, width : this.width*2 , height : this.height * 2});

        this.hitBox.GetBody().SetUserData(this);

        this.hitBox.SetSensor(true);

        Game.on("gameObject"+this.id+"Collides", this.collision, this);
    }


    FallingDanger.prototype.actions = function (){
        this.draw();
        this.doWaitingActions();
    }
    
    FallingDanger.prototype.collision = function killPlayer(args){
        if(args.m_fixtureA.GetBody().GetUserData().tag === "Player"){
            var player = args.m_fixtureA.GetBody().GetUserData();
            this.waitingActions.push([this.killPlayer, [player]]);
            console.log(player);
        }else if(args.m_fixtureB.GetBody().GetUserData().tag === "Player"){
            var player = args.m_fixtureB.GetBody().GetUserData();
            this.waitingActions.push([this.killPlayer, [player]]);
            console.log(player);
        }
        this.isDead = true;
    }

    FallingDanger.prototype.killPlayer = function killPlayer(player){
        console.log(player);
        player.death(true);
    }
    
    FallingDanger.prototype.doWaitingActions = doWaitingActions;

    FallingDanger.prototype.draw = draw;

    return FallingDanger;
})