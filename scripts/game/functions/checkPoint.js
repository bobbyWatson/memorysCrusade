define([], function (){

	return function checkPoint( args ){
		var otherCollider;
		if(args.m_fixtureA.GetBody().GetUserData().id === this.id){
			otherCollider = args.m_fixtureB;
		} else{
			otherCollider = args.m_fixtureA;
		}

		if(otherCollider.GetBody().GetUserData().tag === "Player"){
			otherCollider.GetBody().GetUserData().spawn={x:this.x,y:this.y};
			console.log(otherCollider.GetBody().GetUserData().spawn);
		}
	}
})