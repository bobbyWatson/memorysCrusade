define(["B2D"], function (Box2D){

	var BouncingBall = function BouncingBall (args){

		this.id = Game.ids;
		Game.ids++;
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.r = args.r || 2;

		this.hitbox = Game.createB2Object({
			x 			: this.x,
			y	 		: this.y,
			r 			: this.r,
			dynamism	: Box2D.Body.b2_dynamicBody,
			shape 		: "ball",
			friction	: 0.2,
			restitution : 1
		});
	}
	return BouncingBall;
})