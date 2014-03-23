define(["Game"], function (Game){

	return function isPlayerInside( args ){
		if(args.m_fixtureA.GetBody().GetUserData().tag == "Player" ||
			args.m_fixtureB.GetBody().GetUserData().tag == "Player"){
			this.playerInside = true;
		}
	}
})