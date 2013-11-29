define([], function (){

	var ShapeSprite = function (args){

		this.spriteBox = {
			x : args.x || 0,
			y : args.y || 0,
			shape : args.shape,
			width : args.shape === "box" ? args.width || 1 : 0,
			height : args.shape === "box" ? args.height || 1 : 0,
			radius : args.shape === "cicle" ? args.radius || 1 : 0
		}
		this.color = args.color || "rgb(180,180,180)";
		this.followRotation = args.followRotation || false;
	}


	return ShapeSprite;
})