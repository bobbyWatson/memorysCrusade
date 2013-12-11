define(["Game", "AssetsController","Run", "Cube", "Fire","MovingPlateform", "BouncingBall", "Player", "GrabPoint", "B2D", "Ladder", "StaticPlateform", "Camera", "Spawn", "Background", "LevelController"], 
	function (Game, AssetsController, Run, Cube,Fire ,MovingPlateform, BouncingBall, Player, GrabPoint, Box2D, Ladder, StaticPlateform, Camera, Spawn, Background, LevelController){
	return function Init(){
		AssetsController.loadImages();
		AssetsController.waitForImagesLoaded();

		Game.on("all images loaded", function(){
			LevelController.createLevel(AssetsController.images.level);
			Game.gameObjects.push(new Background({img : AssetsController.images.level}));
			Game.gameObjects.push(new StaticPlateform({x : 30, y : 19, width : 45, height : 0.5}));
			Game.gameObjects.push(new Fire({x : 50, y : 16, width : 4, height : 3}));
			// Game.gameObjects.push(new Cube({x : 25, y : 12, width : 2, height : 2}));
			Game.gameObjects.push(new StaticPlateform({x : 10, y : 15, width : 1, height : 25}));
			Game.gameObjects.push(new MovingPlateform({x : 45, y : 20,  height : 1, width:5, dist:2, speed:4, Vertical:true}));
			Game.gameObjects.push(new MovingPlateform({x : 15, y : 25,  height : 1, width:5, dist:2, speed:4, Vertical:false}));
			Game.gameObjects.push(new Spawn({x : 21, y : 15,  height : 5}));
			Game.gameObjects.push(new Ladder({x : 40, y :25,  height : 15}));
			Game.gameObjects.push(new BouncingBall({x : 25, y : 5}));
			Game.gameObjects.push(new BouncingBall({x : 25, y : 5}));
			Game.gameObjects.push(new BouncingBall({x : 25, y : 5}));
			Game.gameObjects.push(new Spawn({x : 36, y : 15,  height : 5}));
			Game.gameObjects.push(new Player({}));
			Game.gameObjects.push(new GrabPoint({x : 13, y : 12}));
			Game.gameObjects.push(new GrabPoint({x : 55, y : 28}));
			Run.run();
		})
	}();
})