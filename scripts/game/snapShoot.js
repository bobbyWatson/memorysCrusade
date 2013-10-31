define(["Photo"],function(Photo){
	return function snapShoot (e){
		console.log(arguments[1].w);
		Game.gameObjects.push(new Photo({x : e.offsetX/Game.canvas.SCALE, y : e.offsetY/Game.canvas.SCALE, w : 15, h : 15}));
		// Game.gameObjects[2].hitbox.GetBody().m_type=0;
	}
})