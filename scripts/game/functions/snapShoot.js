define(["Photo", "Canvas","Cube"],function (Photo, Canvas, Cube){
	return function SnapShoot (e){
		if(!this.photoTaken)
		{
			Game.gameObjects.push(new Photo({x : e.offsetX/Canvas.SCALE, y : e.offsetY/Canvas.SCALE, width : 5*this.zoom, height : 5*this.zoom, creator:this}));
			this.photoTaken=true;
		}
	}
})