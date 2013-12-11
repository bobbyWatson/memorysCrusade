define(["Game", "Canvas", "ImageSprite", "draw", "B2D"], function (Game, Canvas, ImageSprite, draw, Box2D){

    var Background = function Background (args){
        this.id = Game.ids;
        Game.ids++;
        
        this.height = args.img.height / Canvas.SCALE;
        this.width = args.img.width / Canvas.SCALE;
        this.x = this.width/2;
        this.y = this.height/2;

        this.hitBox = Game.createB2Object({
            x       : this.x,
            y       : this.y,
            height  : this.height,
            width   : this.width,
            dynamism: Box2D.Body.b2_kinematicBody,
            shape   : "box"
        });
        this.hitBox.SetSensor(true);
        this.hitBox.GetBody().SetUserData(this);
        this.imageSprite = new ImageSprite({image : args.img, width : this.width /2, height : this.height /2});

    }

    Background.prototype.actions = function (){
        this.draw();
    }

    Background.prototype.draw = draw;

    return Background;
})