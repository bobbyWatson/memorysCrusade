define([], function (){

	return function emitContactEvent ( contact ){
		this.emit("gameObject"+ contact.m_fixtureA.GetBody().GetUserData() +"Collides", [contact]);
		this.emit("gameObject"+ contact.m_fixtureB.GetBody().GetUserData() +"Collides", [contact]);
	}
})