define([], function (){

	var ImageSprite = function (args) {
		this.image = args.image;
		this.spriteBox = {
			x : args.x || 0,
			y : args.y || 0,
			width : args.width || 1,
			height : args.height || 1,
		}
		this.currentSprite = {x:0, y:0, width:this.image.width, height : this.image.height};
		this.followRotation = args.followRotation || false;
	}

	return ImageSprite;
})