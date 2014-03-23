define(["Game", "Canvas", "ImageSprite", "draw", "B2D","followPlayer", "AssetsController"], function (Game, Canvas, ImageSprite, draw, Box2D, followPlayer, AssetsController){

    var Background = function Background (args){
        this.id = Game.ids;
        Game.ids++;
        
        this.height = args.height/Canvas.SCALE || args.img.height / Canvas.SCALE;
        this.width = args.width/Canvas.SCALE || args.img.width / Canvas.SCALE;
        this.x = this.width/2;
        this.y = this.height/2;
		this.follow = args.follow || false
		
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
		if(this.follow)
			this.hitBox.SetSensor(true);
        if(args.img == null)
            var img = AssetsController.images[Game.level + "BG"];
        else
            var img = args.img;
        this.imageSprite = new ImageSprite({image : img, width : this.width /2, height : this.height /2});

    }

    Background.prototype.actions = function (){
        this.draw();
		if(this.follow)
			this.followPlayer();
    }
	Background.prototype.followPlayer = followPlayer;
    Background.prototype.draw = draw;

    return Background;
})