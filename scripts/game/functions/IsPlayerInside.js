define(["Game", "Player"], function (Game, Player){

	return function isPlayerInside( args ){
		var Player = require("Player");
		if(Player.prototype.isPrototypeOf(args.m_fixtureA.GetBody().GetUserData()) ||
			Player.prototype.isPrototypeOf(args.m_fixtureB.GetBody().GetUserData())){
			this.playerInside = true;
		}
	}
})