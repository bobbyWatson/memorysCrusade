define(["MaskControler", "B2D", "draw", "ShapeSprite"],function (MaskControler, Box2D, draw, ShapeSprite){
    
    var Water = function Water(args){

        var x = args.x || 15;
        var y = args.y || 17;
        this.width = 1;
        this.height = 0.4;
        this.radius = this.width;
        this.waitingActions = [];
        this.id = Game.ids;
        Game.ids++;
        this.tag = "Water";
        this.layer = MaskControler.Player;

        this.hitBox = Game.createB2Object({
            x           : x,
            y           : y,
            radius      : this.width,
            dynamism    : Box2D.Body.b2_dynamicBody,
            friction    : 0.4,
            density     : 0.1,
            restitution : 0,
            shape       : "circle",
            layer       : this.layer
        });
        this.hitBox.GetBody().SetUserData(this);

        this.shapeSprite = new ShapeSprite({color : "rgb(0,0,255)", radius : this.radius*1.5 , shape : "circle"});
    }

    Water.prototype.actions = function(){
        this.draw();
    }

    Water.prototype.draw = draw;

    return Water;
})