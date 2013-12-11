define(["Photo", "Canvas","Cube", "Camera"],function (Photo, Canvas, Cube, Camera){
	return function SnapShoot (e){
		if(!this.photoTaken)
		{
            var x = e.offsetX/Canvas.SCALE + (Camera.x-Camera.width/2)/Canvas.SCALE;
            var y = e.offsetY/Canvas.SCALE + (Camera.y-Camera.height/2)/Canvas.SCALE;
			Game.gameObjects.push(new Photo({x : x, y : y, width : 5*this.zoom, height : 5*this.zoom, creator:this}));
			this.photoTaken=true;
		}
	}
})