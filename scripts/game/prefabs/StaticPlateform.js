define(["Game", "B2D", "doWaitingActions"], function (Game, Box2D, doWaitingActions){

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

		this.hitBox.GetBody().SetUserData(this.id);

	}

	StaticPlateform.prototype.doWaitingActions = doWaitingActions

	StaticPlateform.prototype.actions = function (){
		this.doWaitingActions();
	}

	return StaticPlateform;
})