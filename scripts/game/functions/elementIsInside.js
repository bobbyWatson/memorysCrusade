define(["Game", "Player"], function (Game, Player){

	return function elementIsInside( args ){

		var otherCollider;
		if(args.m_fixtureA.GetBody().GetUserData().id === this.id){
			otherCollider = args.m_fixtureB;
		} else{
			otherCollider = args.m_fixtureA;
		}

		if(otherCollider.GetBody().GetUserData().tag !== "Player"){
			otherCollider.GetBody().GetUserData().hitBox.GetBody().m_type=0;
			this.objects.push(otherCollider.GetBody().GetUserData());
		}
	}
})