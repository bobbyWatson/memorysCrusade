define(["Game", "Player","B2D"], function (Game, Player,Box2D){

	return function elementIsInside( args ){

		var otherCollider;
		if(args.m_fixtureA.GetBody().GetUserData().id === this.id){
			otherCollider = args.m_fixtureB;
		} else{
			otherCollider = args.m_fixtureA;
		}

		if(otherCollider.GetBody().GetUserData().tag !== "Player"){
			 console.log(Box2D.Body.b2_kinematicBody);
			var velocity = {};
			velocity.x = otherCollider.GetBody().GetLinearVelocity().x;
			velocity.y = otherCollider.GetBody().GetLinearVelocity().y;
			var rotation = otherCollider.GetBody().GetAngularVelocity();
			var type=otherCollider.GetBody().GetType();
			this.objects.push([otherCollider.GetBody().GetUserData(), velocity, rotation, type]);
			// otherCollider.GetBody().GetUserData().hitBox.GetBody().m_type=1;
			otherCollider.GetBody().SetType(0);
			otherCollider.GetBody().SetLinearVelocity({x:0,y:0});
			otherCollider.GetBody().SetAngularVelocity(0);
		}
	}
})