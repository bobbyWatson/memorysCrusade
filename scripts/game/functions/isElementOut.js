define(["Game", "Player"], function (Game, Player){

	return function isElementOut( args ){
		var Player = require("Player");
		if(Player.prototype.isPrototypeOf(args.m_fixtureA.GetBody().GetUserData())){
			var player = args.m_fixtureA.GetBody().GetUserData();
		} else if(Player.prototype.isPrototypeOf(args.m_fixtureB.GetBody().GetUserData())){
			var player = args.m_fixtureB.GetBody().GetUserData();
		} else{
			Game.gameObjects[args.m_fixtureB.GetBody().GetUserData()].hitbox.GetBody().m_type=2;
		}
		// player.hasGravity = true;
		this.playerInside = false;
	}
})