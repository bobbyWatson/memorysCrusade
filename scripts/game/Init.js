define(["Game","Cube", "Run", "Player", "GrabPoint", "B2D", "Ladder","Spawn", "StaticPlateform"], 
	function (Game,Cube, Run, Player, GrabPoint, Box2D, Ladder, Spawn,StaticPlateform){
	return function Init(){
		Game.gameObjects.push(new StaticPlateform({x : 18, y : 19, width : 25, height : 0.5}));
		Game.gameObjects.push(new StaticPlateform({x : 10, y : 15, width : 1, height : 25}));
		Game.gameObjects.push(new Spawn({x : 21, y : 15,  height : 5}));
		Game.gameObjects.push(new Ladder({x : 25, y : 15,  height : 25}));
		Game.gameObjects.push(new Spawn({x : 36, y : 15,  height : 5}));
		// 	Game.gameObjects.push(new Cube({x : 21, y : 15}));
		Game.gameObjects.push(new Player({}));
		Game.gameObjects.push(new GrabPoint({x : 13, y : 12}));
		Run.run();
	}();
})