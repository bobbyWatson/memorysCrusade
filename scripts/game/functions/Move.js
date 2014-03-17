
define(["B2D", "Game"], function (Box2D, Game){

	return function move (vec2){
		if(this.hitBox2)
		{
			var startOfRay = new Box2D.Vec2(this.hitBox2.GetBody().GetPosition().x,this.hitBox2.GetBody().GetPosition().y);
			var endOfRay =new Box2D.Vec2(this.hitBox2.GetBody().GetPosition().x,this.hitBox2.GetBody().GetPosition().y+3);
		
		// console.log(this);
		var _this=this;	
		Game.world.RayCast(test, startOfRay, endOfRay);
		function test(e,t)
		{
			if(e.GetBody().GetUserData().tag !== "Player")
				// console.log(e);
				if(!e.IsSensor())
					_this.canJump = true;
			
		}
		}
		if(!this.hasGravity){
			var gravity = Game.world.GetGravity();
			var antigrav = {x : 0 , y :  - gravity.y * this.hitBox.GetBody().GetMass()};
			this.hitBox.GetBody().ApplyForce(antigrav, this.hitBox.GetBody().GetWorldCenter())
		}
		var moveVec = new Box2D.Vec2(vec2.x, vec2.y);
		if(this.hitBox.GetBody().GetType()==1){
			this.hitBox.GetBody().SetLinearVelocity(vec2);
			
		}
		
		else{
			if(this.joint !== undefined){
				if(this.joint.m_bodyB.GetUserData().tag!== "Player"){
					this.joint.m_bodyB.ApplyImpulse(new Box2D.Vec2(moveVec.x *2,moveVec.y) ,this.joint.m_bodyB.GetWorldCenter());
				}else{
					this.joint.m_bodyA.ApplyImpulse(new Box2D.Vec2(moveVec.x *2,moveVec.y),this.joint.m_bodyA.GetWorldCenter());
				}
			}
			this.hitBox.GetBody().ApplyImpulse(moveVec,this.hitBox.GetBody().GetWorldCenter());
		}
	}
})