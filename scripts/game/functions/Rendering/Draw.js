define(["Canvas", "Camera"],function (Canvas, Camera){

	return function draw(){

		Canvas.ctx.fillStyle = this.color || "green";
		var position = this.hitBox.GetBody().GetWorldCenter();
		var x = position.x * Canvas.SCALE - (Camera.x - Camera.width/2) - (this.width*Canvas.SCALE);
		var y = position.y * Canvas.SCALE - (Camera.y - Camera.height/2) - this.height * Canvas.SCALE;
		var width = this.width * Canvas.SCALE * 2;
		var height = this.height * Canvas.SCALE * 2;
		Canvas.ctx.fillRect(x, y, width, height);
	}
})