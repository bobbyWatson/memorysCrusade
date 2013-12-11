define([], function (){

	var SpriteSheet = function (args){

		this.defaultAnimation = args.defaultAnimation || "idle";
		this.animations = args.animations;
		this.image = args.image;
		this.spriteBox = {
			x : args.x || 0,
			y : args.y || 0,
			width : args.width || 1,
			height : args.height || 1
		}
	}
	return SpriteSheet;
})