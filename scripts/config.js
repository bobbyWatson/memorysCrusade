require.config({
		//urlArgs: "bust=" +  Date.now(),

	 paths: {
	 		"toto"					: "toto",
	 		"box2d"					: "libs/box2d",
	 		"stats"					: "libs/stats.min",
	 		"RAF"	    			: "libs/requestAnimFrame",
	 		"Init"					: "game/Init",
	 		"B2D"					: "game/Box2D",
	 		"Run"					: "game/Run",
			"Game"      			: "game/Game",
			"Canvas"    			: "game/Canvas",
	 		"Ladder"				: "game/prefabs/Ladder",
	 		"Generator"				: "game/prefabs/Generator",
	 		"Water"					: "game/prefabs/Water",
	 		"GrabPoint"				: "game/prefabs/GrabPoint",
	 		"DeathZone"				: "game/prefabs/DeathZone",
	 		"BouncingBall"			: "game/prefabs/BouncingBall",
	 		"Player"				: "game/prefabs/Player",
	 		"Spawn"					: "game/prefabs/Spawn",
	 		"Photo" 				: "game/prefabs/Photo",
	 		"Cube" 					: "game/prefabs/Cube",
	 		"Spike" 				: "game/prefabs/Spike",
	 		"Fire" 				    : "game/prefabs/Fire",
	 		"Background"			: "game/prefabs/Background",
	 		"MovingPlateform" 		: "game/prefabs/MovingPlateform",
	 		"StaticPlateform"		: "game/prefabs/StaticPlateform",
	 		"MovingPlateform"		: "game/prefabs/MovingPlateform",
	 		"WorldGround"			: "game/prefabs/WorldGround",
	 		"isPlayerInside"		: "game/functions/IsPlayerInside",
	 		"killPlayer"		    : "game/functions/killPlayer",
	 		"isPlayerOut"			: "game/functions/IsPlayerOut",
	 		"emitContactEvent"		: "game/functions/EmitContactEvent",
	 		"emitEndContactEvent"	: "game/functions/EmitEndContactEvent",
	 		"createB2Object"		: "game/functions/createB2Object",
	 		"doWaitingActions"		: "game/functions/DoWaitingActions",
	 		"checkPoint"			: "game/functions/checkPoint",
	 		"grabCrates"			: "game/functions/grabCrates",
	 		"elementIsInside"		: "game/functions/elementIsInside",
	 		"touchPlayer"			: "game/functions/touchPlayer",
	 		"checkDirection"		: "game/functions/checkDirection",
	 		"Zoom"					: "game/functions/Zoom",
	 		"action"				: "game/functions/Action",
	 		"down"					: "game/functions/Down",
	 		"up"					: "game/functions/Up",
	 		"jump"					: "game/functions/Jump",
	 		"checkDirection"		: "game/functions/checkDirection",
	 		"control"				: "game/functions/Control",
	 		"move"					: "game/functions/Move",
	 		"death"					: "game/functions/Death",
	 		"AddEvent"				: "game/functions/AddEventHandler",
	 		"snapShoot" 			: "game/functions/snapShoot",
	 		"createLevel" 			: "game/functions/createLevel",
	 		"followPlayer"			: "game/functions/Rendering/FollowPlayer",
	 		"draw"					: "game/functions/Rendering/Draw",
	 		"drawWater"				: "game/functions/Rendering/drawWater",
	 		"waitForImagesLoaded"	: "game/functions/init/waitForImagesLoaded",
	 		"Camera" 				: "game/Instances/Camera",
	 		"LevelController"		: "game/Instances/LevelController",
	 		"AssetsController"		: "game/Instances/AssetsController",
	 		"followPlayer"			: "game/functions/Rendering/FollowPlayer",
	 		"draw"					: "game/functions/Rendering/Draw",
	 		"Camera" 				: "game/Instances/Camera",
	 		"InputsHandler" 		: "game/controlers/InputsHandler",
	 		"MaskControler" 		: "game/controlers/MaskControler",
	 		"InputsHandler" 		: "game/controlers/InputsHandler",
	 		"MaskControler" 		: "game/controlers/MaskControler",
	 		"ImageSprite" 			: "game/Components/ImageSprite",
	 		"ShapeSprite" 			: "game/Components/ShapeSprite",
	 		"SpriteSheet" 			: "game/Components/SpriteSheet",
	 		"Animation" 			: "game/Components/Animation"
		}

	, shim: {
			"box2d": {exports: "Box2D"}
		}
});
require(["main"]);