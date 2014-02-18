define([], function (){

	return function grabCrates( args ){
		var otherCollider;
		if(args.m_fixtureA.GetBody().GetUserData().id === this.id){
			otherCollider = args.m_fixtureB;
		} else{
			otherCollider = args.m_fixtureA;
		}

		if(otherCollider.GetBody().GetUserData().tag === "Player"){
			this.playerInside = true;
		}
	}
})