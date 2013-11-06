define(["StaticPlateform", "BouncingBall", "Player", "GrabPoint", "B2D", "Ladder"], 
	function (StaticPlateform, BouncingBall, Player, GrabPoint, Box2D, Ladder){
	return function Init(){
		Game.gameObjects.push(new StaticPlateform({x : 18, y : 19, w : 12, h : 0.5}));
		Game.gameObjects.push(new StaticPlateform({x : 10, y : 15, w : 1, h : 25}));
		Game.gameObjects.push(new Ladder({x : 25, y : 15,  height : 25}));
		//Game.gameObjects.push(new BouncingBall({x : 22, y : 10})) -1;
		Game.gameObjects.push(new Player({}));
		Game.gameObjects.push(new GrabPoint({x : 13, y : 12}));
		Game.run();
	}
})