define(["Game", "AssetsController", "Cube", "Run", "MovingPlateform", "BouncingBall", "Player", "GrabPoint", "DeathZone", "B2D", "Ladder", "StaticPlateform", "Camera", "Spawn", "Background", "LevelController"], 
	function (Game, AssetsController, Cube, Run, MovingPlateform, BouncingBall, Player, GrabPoint, DeathZone, Box2D, Ladder, StaticPlateform, Camera, Spawn, Background, LevelController){

	return function Init(){
		AssetsController.loadImages();
		AssetsController.waitForImagesLoaded();

		Game.on("all images loaded", function(){
		console.log(Cube);
			LevelController.createLevel(AssetsController.images.level);
			Game.gameObjects.push(new DeathZone({x : 50, y : 50, width : 100, height: 5}));
			Game.gameObjects.push(new Background({img : AssetsController.images.level}));
			Game.gameObjects.push(new GrabPoint({x : 43, y : 26}));
			Game.gameObjects.push(new GrabPoint({x : 58, y : 26}));
			Game.gameObjects.push(new GrabPoint({x : 60, y : 16}));
			Game.gameObjects.push(new Cube({x : 30, y : 15, width : 1, height: 1}));
			Game.gameObjects.push(new MovingPlateform({x : 80, y : 0,  height : 1, width:5, dist:15, speed:8, Vertical:true}));
			Game.gameObjects.push(new MovingPlateform({x : 90, y : 12,  height : 1, width:5, dist:10, speed:4, Vertical:false}));
			Game.gameObjects.push(new MovingPlateform({x : 120, y : 12,  height : 1, width:5, dist:10, speed:4, Vertical:false}));
			Game.gameObjects.push(new MovingPlateform({x : 145, y : 0,  height : 1, width:5, dist:15, speed:8, Vertical:true}));
			Game.gameObjects.push(new Ladder({x : 105, y :25,  height : 12}));
			Game.gameObjects.push(new GrabPoint({x : 157, y : 15}));
			Game.gameObjects.push(new BouncingBall({x : 43, y : 15}));
			Game.gameObjects.push(new MovingPlateform({x : 170, y : 18,  height : 1, width:5, dist:15, speed:3, Vertical:false}));
			Game.gameObjects.push(new MovingPlateform({x : 192, y : 18,  height : 1, width:5, dist:15, speed:3, Vertical:false}));
			Game.gameObjects.push(new MovingPlateform({x : 215, y : 18,  height : 1, width:5, dist:20, speed:3, Vertical:false}));
			Game.gameObjects.push(new GrabPoint({x : 240, y : 13}));
			Game.gameObjects.push(new GrabPoint({x : 250, y : 5}));
			Game.gameObjects.push(new Player({}));
			// Game.gameObjects.push(new Spawn({x : 16, y : 25,  height : 5}));
			// Game.gameObjects.push(new Spawn({x : 65, y : 13,  height : 5}));
			// Game.gameObjects.push(new Spawn({x : 162, y : 10,  height : 5}));
			Run.run();
		})
	}();
})