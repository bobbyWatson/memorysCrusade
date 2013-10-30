define(["B2D"], function (Box2D){

	var StaticPlateform = function StaticPlateform (args){

		this.x = args.x || 0;
		this.y = args.y || 0;
		this.h = args.h || 0.5;
		this.w = args.w || 1;

		this.hitbox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			h 		: this.h,
			w 		: this.w,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box"
		});
	}
	return StaticPlateform;
})