define(["Game", "Player"], function (Game, Player){

	return function checkPoint( args ){
		var Player = require("Player");
		if(Player.prototype.isPrototypeOf(args.m_fixtureA.GetBody().GetUserData()) ||
			Player.prototype.isPrototypeOf(args.m_fixtureB.GetBody().GetUserData())){
			args.m_fixtureA.GetBody().GetUserData().spawn={x:this.x,y:this.y};
			
			this.playerInside = true;
		}
	}
})