define(["Game", "B2D", "doWaitingActions", "draw", "ShapeSprite"], function (Game, Box2D, doWaitingActions, draw, ShapeSprite){

	var StaticPlateform = function StaticPlateform (args){
		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0.5;
		this.width = args.width || 1;

		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width	: this.width,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box"
		});
		this.hitBox.GetBody().SetUserData(this);

		this.shapeSprite = new ShapeSprite({color : "rgb(255,255,255)", shape : "box", height : this.height, width : this.width});
	}

	StaticPlateform.prototype.doWaitingActions = doWaitingActions
	
	StaticPlateform.prototype.draw = draw

	StaticPlateform.prototype.actions = function (){
		this.doWaitingActions();
		this.draw();
	}


	return StaticPlateform;
})