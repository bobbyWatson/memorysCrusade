define(["Photo", "Canvas","Cube"],function (Photo, Canvas, Cube){
	return function SnapShoot (e){
		// var photo=new Photo({x : e.offsetX/Canvas.SCALE, y : e.offsetY/Canvas.SCALE, width : 5, height : 5});
		// if(!this.photoTaken)
		// {
			Game.gameObjects.push(new Photo({x : e.offsetX/Canvas.SCALE, y : e.offsetY/Canvas.SCALE, width : 5*this.zoom, height : 5*this.zoom}));
			this.photoTaken=true;
		// }
		// Game.gameObjects.push(new Cube({x : 34, y : 15}));
	}
})