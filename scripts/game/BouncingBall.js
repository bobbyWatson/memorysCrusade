define(["B2D", "doWaitingActions"], function (Box2D, doWaitingActions){

	var BouncingBall = function BouncingBall (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.r = args.radius || 2;

		this.hitBox = Game.createB2Object({
			x 			: this.x,
			y	 		: this.y,
			r 			: this.r,
			dynamism	: Box2D.Body.b2_dynamicBody,
			shape 		: "circle",
			friction	: 0.2,
			density		: 0.2,
			restitution : 1
		});

		this.hitBox.GetBody().SetUserData(this.id);
	}

	BouncingBall.prototype.doWaitingActions = doWaitingActions;
	
	return BouncingBall;
})