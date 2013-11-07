define(["Photo", "Canvas"],function (Photo, Canvas){
	return function snapShoot (e){
		var photo=new Photo({x : e.offsetX/Canvas.SCALE, y : e.offsetY/Canvas.SCALE, width : 5, height : 5});
		Game.gameObjects.push(photo);
	}
})