require.config({
		urlArgs: "bust=" +  Date.now(),

	 paths: {
	 		"Ladder"				: "game/Ladder",
	 		"down"					: "game/Down",
	 		"up"					: "game/Up",
	 		"L"						: "libs/L",
	 		"emitContactEvent"		: "game/EmitContactEvent",
	 		"emitEndContactEvent"	: "game/EmitEndContactEvent",
	 		"doWaitingActions"		: "game/DoWaitingActions",
	 		"isPlayerInside"		: "game/IsPlayerInside",
	 		"isPlayerOut"			: "game/IsPlayerOut",
	 		"jump"					: "game/Jump",
	 		"action"				: "game/Action",
	 		"control"				: "game/Control",
	 		"move"					: "game/Move",
	 		"Player"				: "game/Player",
	 		"Init"					: "game/Init",
	 		"BouncingBall"			: "game/BouncingBall",
	 		"GrabPoint"				: "game/GrabPoint",
	 		"StaticPlateform"		: "game/StaticPlateform",
	 		"createB2Object"		: "game/createB2Object",
	 		"B2D"					: "game/Box2D",
	 		"box2d"					: "libs/box2d",
	 		"InputsHandler" 		: "game/InputsHandler",
	 		"AddEvent"				: "game/AddEventHandler",
	 		"Run"					: "game/Run",
	 		"RAF"	    			: "libs/requestAnimFrame",
			"Game"      			: "game/Game",
			"Canvas"    			: "game/Canvas"
		}

	, shim: {
			"box2d": {exports: "Box2D"}
		}
});
require(["main"]);