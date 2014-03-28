define(["Game", "AssetsController","Run", "MovingPlateform", "BouncingBall", "Player", "GrabPoint", "DeathZone", "B2D", "Ladder", "StaticPlateform", "Camera", "Spawn", "Background", "Generator", "LevelController", "Cube", "Canvas", "Pikes", "FallingDanger", "TextZone"], 
	function (Game, AssetsController, Run, MovingPlateform, BouncingBall, Player, GrabPoint, DeathZone, Box2D, Ladder, StaticPlateform, Camera, Spawn, Background, Generator, LevelController, Cube, Canvas, Pikes, FallingDanger, TextZone){

	return function Init(){
		AssetsController.loadImages();
		AssetsController.waitForImagesLoaded();

		Game.on("all images loaded", function(){
			Game.StartLevel();
			Run.run();
		});

		Game.StartLevel = function StartLevel(){
			var bd;
			var nxt = Game.world.m_bodyList;
			while(nxt !== undefined && nxt !== null){
				var bd = nxt;
				nxt = bd.m_next;
				Game.world.DestroyBody(bd);
			}
			this.gameObjects = [];
			Camera.x = 0;
			Camera.y = 0;
			LevelController.createLevel(AssetsController.images.level1);
			Game.gameObjects.push(new Background({width:1050,height:600,follow:true}));
			Game.gameObjects.push(new Background({img : AssetsController.images.level1}));
			//Level1
			Game.gameObjects.push(new DeathZone({x : 250, y : 90, width : 500, height: 5}));
			Game.gameObjects.push(new Cube({x : 30, y : 10}));			
			Game.gameObjects.push(new Pikes({x : 90, y : 42, width : 2, height: 1}));			
			Game.gameObjects.push(new GrabPoint({x : 256, y : 38}));
			Game.gameObjects.push(new GrabPoint({x : 264, y : 28}));
			Game.gameObjects.push(new GrabPoint({x : 321, y : 36}));
			Game.gameObjects.push(new Cube({x : 301, y : 45}));
			Game.gameObjects.push(new MovingPlateform({x : 351, y : 20,  height : 4, width:5, dist:20, speed:8, Vertical:true, ctx : Canvas.darkWorldCtx}));
			Game.gameObjects.push(new MovingPlateform({x : 365, y : 20,  height : 4, width:5, dist:20, speed:8, Vertical:false}));
			Game.gameObjects.push(new MovingPlateform({x : 40, y : 35,  height : 4, width:5, dist:20, speed:8, Vertical:false}));
			Game.gameObjects.push(new Spawn({x : 40, y : 0,  height : 5}));
			Game.gameObjects.push(new Spawn({x : 105, y : 25,  height : 5}));
			Game.gameObjects.push(new Spawn({x : 225, y : 50,  height : 5}));
			Game.gameObjects.push(new Spawn({x : 300, y : 45,  height : 5}));
			Game.gameObjects.push(new Generator({x : 120, y :5, model : FallingDanger, time : 60, params : {}}));
			Game.gameObjects.push(new Generator({x : 60, y :5, model : FallingDanger, time : 60, params : {}}));
			Game.gameObjects.push(new Ladder({x : 18, y:25,  height : 15}));
			Game.gameObjects.push(new TextZone({triggerX : 105, triggerY:25,  triggerWidth : 13, triggerHeight : 7, textX : 125, textY : 18, textWidth : 20, textStr : "vas-y saute bonhomme"}));
			var player = new Player({x : 40, y :0});
			Game.gameObjects.push(player);
			Camera.player = player;	
			//Level2
			// Game.gameObjects.push(new Background({img : AssetsController.images.level2}));
			// Game.gameObjects.push(new DeathZone({x : 125, y : 340, width : 250, height: 5}));
			// Game.gameObjects.push(new GrabPoint({x : 180, y : 320}));
			//Game.gameObjects.push(new StaticPlateform({x : 25, y : 15,  height : 5, width:5,}));
			//Game.gameObjects.push(new Ladder({x : 18, y :10,  height : 15}));
			//Game.gameObjects.push(new BouncingBall({x : 43, y : 15}));
			//Game.gameObjects.push(new Player({x : 150, y :320}));
			console.log(Game.world);
		}
	}();
})