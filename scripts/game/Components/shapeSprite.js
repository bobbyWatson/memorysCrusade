define(["Canvas"], function (Canvas){

	var ShapeSprite = function (args){

		this.spriteBox = {
			x : args.x || 0,
			y : args.y || 0,
			shape : args.shape,
			width : args.shape === "box" ? args.width || 1 : 0,
			height : args.shape === "box" ? args.height || 1 : 0,
			radius : args.shape === "circle" ? args.radius || 1 : 0
		}
		if(args.pattern){
			this.pattern = true;
			var pat = Canvas.ctx.createPattern(args.image, args.repeat);
			this.color = pat;
		} else{
			this.color = args.color || "rgb(180,180,180)";
		}
		this.followRotation = args.followRotation || false;
	}


	return ShapeSprite;
})