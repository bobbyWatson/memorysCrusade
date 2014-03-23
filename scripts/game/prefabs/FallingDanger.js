define(["B2D","doWaitingActions","Game","touchPlayer", "MaskControler", "AssetsController", "SpriteSheet", "Animation", "draw", "isOnScreen", "fallingDanger_anim"],
 function (Box2D, doWaitingActions,Game,touchPlayer,MaskControler,AssetsController,SpriteSheet,Animation,draw, isOnScreen, fallingDanger_anim){

    var FallingDanger = function FallingDanger (args){

        this.id = Game.ids;
        Game.ids++;
        this.waitingActions = [];
        this.playerInside = false;

        this.objects = [];
        this.x = args.x || 0;
        this.y = args.y || 0;
        this.height = args.height || 1.5;
        this.width = args.width || 1.5;
        this.explode = false;
        this.isDead = false;

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

        var img = AssetsController.images[Game.level + "FallingDanger"];
        var myAnim = new fallingDanger_anim({parent : this});
        FallingDanger.prototype.spriteSheet = new SpriteSheet({defaultAnimation : "fall", image : img, y : -1.8, height : 3, width: 3, animations : myAnim});

        this.animation = new Animation({parent: this});
        
        this.hitBox.GetBody().SetUserData(this);

        this.hitBox.SetSensor(true);

        Game.on("gameObject"+this.id+"Collides", this.collision, this);
    }


    FallingDanger.prototype.actions = function (){
        if(this.isOnScreen()){   
            this.animation.checkNext();
            this.animation.animate();
            this.draw();
            this.doWaitingActions();
        }
    }
    
    FallingDanger.prototype.collision = function killPlayer(args){
        if(args.m_fixtureA.GetBody().GetUserData().tag === "Player"){
            var player = args.m_fixtureA.GetBody().GetUserData();
            this.waitingActions.push([this.killPlayer, [player]]);
        }else if(args.m_fixtureB.GetBody().GetUserData().tag === "Player"){
            var player = args.m_fixtureB.GetBody().GetUserData();
            this.waitingActions.push([this.killPlayer, [player]]);
        }
        this.explode = true;
    }

    FallingDanger.prototype.killPlayer = function killPlayer(player){
        player.death(true);
    }
    
    FallingDanger.prototype.doWaitingActions = doWaitingActions;

    FallingDanger.prototype.draw = draw;

    FallingDanger.prototype.isOnScreen = isOnScreen;

    return FallingDanger;
})