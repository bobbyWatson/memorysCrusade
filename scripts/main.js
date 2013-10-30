require(["Game", "StaticPlateform"], function (Game, StaticPlateform){
	window.Game = Game;
	Game.run();
	Game.plateform = new StaticPlateform({x : 5, y : 5, w : 2, h : 0.5});
})