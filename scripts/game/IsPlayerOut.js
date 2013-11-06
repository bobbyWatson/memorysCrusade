define(["Player"], function (Player){

	return function isPlayerOut( args ){
		var Player = require("Player");
		for(var i = 0; i < Game.gameObjects.length; i++){
			if(Player.prototype.isPrototypeOf(Game.gameObjects[i])){
				var player = Game.gameObjects[i];
				if(player.id === args.m_fixtureA.GetBody().GetUserData() || player.id === args.m_fixtureB.GetBody().GetUserData()){
					this.playerInside = false;
				}
			}
		}
	}
})