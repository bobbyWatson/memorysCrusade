define(["Game", "Run", "BouncingBall", "MovingPlateform", "Player", "GrabPoint", "B2D", "Ladder", "StaticPlateform", "Camera", "Spawn", "LevelController"], 
	function (Game, Run, BouncingBall, MovingPlateform, Player, GrabPoint, Box2D, Ladder, StaticPlateform, Camera, Spawn, LevelController){
	return function Init(){
		//Game.gameObjects.push(new StaticPlateform({x : 30, y : 19, width : 85, height : 0.5}));
		Game.gameObjects.push(new StaticPlateform({x : 10, y : 15, width : 1, height : 25}));
		Game.gameObjects.push(new Spawn({x : 21, y : 15,  height : 5}));
		Game.gameObjects.push(new MovingPlateform({x : 45, y : 20,  height : 1, width:5, dist:2, speed:6, Vertical:true}));
		Game.gameObjects.push(new Ladder({x : 25, y : 15,  height : 25}));
		Game.gameObjects.push(new BouncingBall({x : 25, y : 5}));
		Game.gameObjects.push(new BouncingBall({x : 25, y : 5}));
		Game.gameObjects.push(new BouncingBall({x : 25, y : 5}));
		Game.gameObjects.push(new Spawn({x : 36, y : 15,  height : 5}));
		Game.gameObjects.push(new Player({}));
		Game.gameObjects.push(new GrabPoint({x : 13, y : 12}));
		Game.gameObjects.push(new GrabPoint({x : 65, y : 12}));
		Run.run();
	}();
})