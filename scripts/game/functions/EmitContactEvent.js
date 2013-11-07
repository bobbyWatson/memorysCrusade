define([], function (){

	return function emitContactEvent ( contact ){
		require("Game")
		Game.emit("gameObject"+ contact.m_fixtureA.GetBody().GetUserData() +"Collides", [contact]);
		Game.emit("gameObject"+ contact.m_fixtureB.GetBody().GetUserData() +"Collides", [contact]);
	}
})