require.config({
		urlArgs: "bust=" +  Date.now(),

	 paths: {
	 		"control"		: "game/Control",
	 		"move"			: "game/Move",
	 		"Player"		: "game/Player",
	 		"Init"			: "game/Init",
	 		"BouncingBall"	: "game/BouncingBall",
	 		"StaticPlateform": "game/StaticPlateform",
	 		"createB2Object": "game/createB2Object",
	 		"B2D"			: "game/Box2D",
	 		"box2d"			: "libs/box2d.min",
	 		"InputsHandler" : "game/InputsHandler",
	 		"snapShoot" 	: "game/snapShoot",
	 		"Photo" 		: "game/Photo",
	 		"AddEvent"		: "game/AddEventHandler",
	 		"Run"			: "game/Run",
	 		"RAF"	    	: "libs/requestAnimFrame",
			"Game"      	: "game/Game",
			"Canvas"    	: "game/Canvas"
		}

	, shim: {
			"box2d": {exports: "Box2D"}
		}
});
require(["main"]);