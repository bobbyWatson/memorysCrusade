define(["B2D", "move", "control", "jump"],function (Box2D, move, control, jump){

	var Player = function Player (args){

		var x = args.x || 15;
		var y = args.y || 18;
		this.w = 1;
		this.h = 1.5;

		this.id = Game.ids;
		Game.ids++;
		this.speed = 2;
		this.jumpForce = 50;
		this.canJump = true;

		this.hitbox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			w		 : this.w,
			h		 : this.h,
			dynamism : Box2D.Body.b2_dynamicBody,
			friction : 0,
			density  : 0.2,
			shape	 : "box"
		});
		this.hitbox.GetBody().SetFixedRotation(true);
		this.hitbox.GetBody().SetLinearDamping(4.5);

		Game.on("pressKey"+Game.InputsHandler.keyCode.space, jump, this)
	}

	Player.prototype.move = move;

	Player.prototype.control = control;
	
	Player.prototype.jump = jump;


	return Player;
})