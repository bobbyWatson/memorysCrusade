define(["Photo"],function(Photo){
	return function snapShoot (e){
		console.log(arguments[1].w);
		var photo=new Photo({x : e.offsetX/Game.canvas.SCALE, y : e.offsetY/Game.canvas.SCALE, w : 5, h : 5});
		Game.gameObjects.push(photo);
		// Game.gameObjects[2].hitbox.GetBody().m_type=0;
	}
})