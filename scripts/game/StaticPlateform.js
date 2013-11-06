define(["B2D", "doWaitingActions"], function (Box2D, doWaitingActions){

	var StaticPlateform = function StaticPlateform (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.h = args.h || 0.5;
		this.w = args.w || 1;

		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			h 		: this.h,
			w 		: this.w,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box"
		});

		this.hitBox.GetBody().SetUserData(this.id);

	}

	StaticPlateform.prototype.doWaitingActions = doWaitingActions

	return StaticPlateform;
})