define(["Game"], function (Game){

	return function isPlayerOut( args ){
		if(args.m_fixtureA.GetBody().GetUserData().tag === "Player"){
			var player = args.m_fixtureA.GetBody().GetUserData();
		} else if(args.m_fixtureB.GetBody().GetUserData().tag === "Player"){
			var player = args.m_fixtureB.GetBody().GetUserData();
		} else{
			return false;
		}
		player.hitBox.GetBody().hasGravity = true;
		player.jointCenter.GetBody().hasGravity = true;
		player.hitBox2.GetBody().hasGravity = true;
		this.playerInside = false;
	}
})