require.config({
		urlArgs: "bust=" +  Date.now(),

	 paths: {
	 		"StaticPlateform": "game/StaticPlateform",
	 		"createB2Object": "game/createB2Object",
	 		"B2D"			: "game/Box2D",
	 		"box2d"			: "libs/box2d.min",
	 		"InputsHandler" : "game/InputsHandler",
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