define(["Game", "B2D", "doWaitingActions", "draw", "MaskControler"], function (Game, Box2D, doWaitingActions, draw, MaskControler){

	var StaticPlateform = function StaticPlateform (args){
		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.color = "red";
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0.5;
		this.width = args.width || 1;
		this.layer = MaskControler.Plateform;
		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width	: this.width,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box",
			layer   : this.layer
		});
		this.hitBox.GetBody().SetUserData(this);

	}

	StaticPlateform.prototype.doWaitingActions = doWaitingActions
	
	StaticPlateform.prototype.draw = draw

	StaticPlateform.prototype.actions = function (){
		this.doWaitingActions();
		this.draw();
	}

	return StaticPlateform;
})