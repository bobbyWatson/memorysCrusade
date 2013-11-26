	define([], function (){

	return function emitEndContactEvent ( contact ){
		require("Game");
		Game.emit("gameObject"+ contact.m_fixtureA.GetBody().GetUserData().id +"EndCollides", [contact]);
		Game.emit("gameObject"+ contact.m_fixtureB.GetBody().GetUserData().id +"EndCollides", [contact]);
	}
})