define(["StaticPlateform", "BouncingBall", "Player"], function (StaticPlateform, BouncingBall, Player){
	return function Init(){
		Game.gameObjects.push(new StaticPlateform({x : 18, y : 19, w : 12, h : 0.5}));
		Game.gameObjects.push(new StaticPlateform({x : 10, y : 15, w : 1, h : 25}));
		Game.gameObjects.push(new BouncingBall({x : 22, y : 5}));
		Game.gameObjects.push(new Player({}));
		Game.run();
	}
})