define(["Game"], function (Game){

	return function killPlayer( args ){
		var otherCollider;
		if(args.m_fixtureA.GetBody().GetUserData().id === this.id){
			otherCollider = args.m_fixtureB;
		} else{
			otherCollider = args.m_fixtureA;
		}

		if(otherCollider.GetBody().GetUserData().tag === "Player"){
			otherCollider.GetBody().GetUserData().death(otherCollider.GetBody().GetUserData().spawn);
		}
	}
})