define(["Game", "Player"], function (Game, Player){

	return function isPlayerOut( args ){
		var Player = require("Player");
		if(Player.prototype.isPrototypeOf(args.m_fixtureA.GetBody().GetUserData())){
			var player = args.m_fixtureA.GetBody().GetUserData();
		} else if(Player.prototype.isPrototypeOf(args.m_fixtureB.GetBody().GetUserData())){
			var player = args.m_fixtureB.GetBody().GetUserData();
		} else{
			return false;
		}
		player.hasGravity = true;
		player.hitBox2.GetBody().hasGravity = true;
		this.playerInside = false;
	}
})