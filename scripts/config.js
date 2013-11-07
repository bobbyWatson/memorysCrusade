require.config({
		urlArgs: "bust=" +  Date.now(),

	 paths: {
	 		"L"						: "libs/L",
	 		"box2d"					: "libs/box2d",
	 		"RAF"	    			: "libs/requestAnimFrame",
	 		"Init"					: "game/Init",
	 		"B2D"					: "game/Box2D",
	 		"Run"					: "game/Run",
			"Game"      			: "game/Game",
			"Canvas"    			: "game/Canvas",
	 		"Ladder"				: "game/prefabs/Ladder",
	 		"GrabPoint"				: "game/prefabs/GrabPoint",
	 		"BouncingBall"			: "game/prefabs/BouncingBall",
	 		"Player"				: "game/prefabs/Player",
	 		"Photo" 				: "game/prefabs/Photo",
	 		"StaticPlateform"		: "game/prefabs/StaticPlateform",
	 		"isPlayerInside"		: "game/functions/IsPlayerInside",
	 		"isPlayerOut"			: "game/functions/IsPlayerOut",
	 		"emitContactEvent"		: "game/functions/EmitContactEvent",
	 		"emitEndContactEvent"	: "game/functions/EmitEndContactEvent",
	 		"createB2Object"		: "game/functions/createB2Object",
	 		"doWaitingActions"		: "game/functions/DoWaitingActions",
	 		"action"				: "game/functions/Action",
	 		"down"					: "game/functions/Down",
	 		"up"					: "game/functions/Up",
	 		"jump"					: "game/functions/Jump",
	 		"control"				: "game/functions/Control",
	 		"move"					: "game/functions/Move",
	 		"AddEvent"				: "game/functions/AddEventHandler",
	 		"snapShoot" 			: "game/functions/snapShoot",
	 		"InputsHandler" 		: "game/controlers/InputsHandler"
		}

	, shim: {
			"box2d": {exports: "Box2D"}
		}
});
require(["main"]);