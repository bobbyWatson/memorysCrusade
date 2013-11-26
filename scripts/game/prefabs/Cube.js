define(["B2D","doWaitingActions","Game"], function (Box2D, doWaitingActions,Game){

	var Cube = function Cube (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0.5;
		this.width = args.width || 1;
		this.hitbox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width 	: this.width,
			dynamism: Box2D.Body.b2_dynamicBody,
			shape 	: "box"
		});
		// this.hitbox.SetSensor(true)
		this.hitbox.GetBody().SetUserData(this.id);
			
	}

	Cube.prototype.actions = function (){
	}
	Cube.prototype.doWaitingActions = doWaitingActions;
	return Cube;
})