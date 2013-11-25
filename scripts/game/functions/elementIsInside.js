define(["Game", "Player"], function (Game, Player){

	return function elementIsInside( args ){
		var Player = require("Player");
		if(Player.prototype.isPrototypeOf(args.m_fixtureA.GetBody().GetUserData()) ||
			Player.prototype.isPrototypeOf(args.m_fixtureB.GetBody().GetUserData())){
			console.log(args.m_fixtureB.GetBody().GetUserData(),args.m_fixtureA.GetBody().GetUserData());
			this.playerInside = true;
		}
		else 
		{
			Game.gameObjects[args.m_fixtureB.GetBody().GetUserData()].hitbox.GetBody().m_type=0;
		}
	}
})