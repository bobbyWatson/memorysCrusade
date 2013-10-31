define(["B2D", "move", "control","snapShoot"],function (Box2D, move, control,snapShoot){

	var Player = function Player (args){

		var x = args.x || 15;
		var y = args.y || 18;
		this.w = 1;
		this.h = 1.5;

		this.id = Game.ids;
		Game.ids++;
		this.speed = 0.2;
		this.jumpSpeed = 0.2;
		this.jumpHeight = 2;

		this.hitbox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			w		 : this.w,
			h		 : this.h,
			dynamism : Box2D.Body.b2_staticBody,
			shape	 : "box"
		});
		
		Game.on("click", this.snapShoot, this);
	}

	Player.prototype.move = move;
	
	Player.prototype.snapShoot = snapShoot;

	Player.prototype.control = control;

	return Player;
})