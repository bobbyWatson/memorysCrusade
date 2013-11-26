define(["Game", "Player"], function (Game, Player){

	return function isElementOut( args ){
		var Player = require("Player");
		if(Player.prototype.isPrototypeOf(args.m_fixtureA.GetBody().GetUserData())){
			var player = args.m_fixtureA.GetBody().GetUserData();
		} else if(Player.prototype.isPrototypeOf(args.m_fixtureB.GetBody().GetUserData())){
			var player = args.m_fixtureB.GetBody().GetUserData();
		} else{
			args.m_fixtureB.GetBody().GetUserData().hitBox.GetBody().m_type=2;
		}
		// player.hasGravity = true;
		this.playerInside = false;
	}
})