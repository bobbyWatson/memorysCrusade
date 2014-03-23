
define(["B2D", "Game"], function (Box2D, Game){

	return function move (vec2){
		var _vec2 = {x : vec2.x, y : vec2.y};
		if(this.hitBox2)
		{
			var startOfRay = new Box2D.Vec2(this.hitBox2.GetBody().GetPosition().x,this.hitBox2.GetBody().GetPosition().y);
			var endOfRay =new Box2D.Vec2(this.hitBox2.GetBody().GetPosition().x,this.hitBox2.GetBody().GetPosition().y+3);
		
		// console.log(this);
		var _this=this;	
		Game.world.RayCast(test, startOfRay, endOfRay);
		function test(e,t)
		{
			if(e.GetBody().GetUserData().tag !== "Player"){
				var _velocity = e.GetBody().GetLinearVelocity();
				_vec2.x += _velocity.x/3;
				_vec2.y += _velocity.y/3;
			}
			if(e.GetBody().GetUserData().tag !== "Player")
				if(!e.IsSensor())
					_this.canJump = true;
			
		}
		}
		var moveVec = new Box2D.Vec2(_vec2.x, _vec2.y);
		if(this.hitBox.GetBody().GetType()==1){
			this.hitBox.GetBody().SetLinearVelocity(vec2);
			
		}
		
		else{
			if(this.joint !== undefined){
				if(this.joint.m_bodyB.GetUserData().tag!== "Player"){
					this.joint.m_bodyB.ApplyImpulse(new Box2D.Vec2(moveVec.x *8,moveVec.y) ,this.joint.m_bodyB.GetWorldCenter());
				}else{
					this.joint.m_bodyA.ApplyImpulse(new Box2D.Vec2(moveVec.x *8,moveVec.y),this.joint.m_bodyA.GetWorldCenter());
				}
			}
			this.hitBox.GetBody().ApplyImpulse(moveVec,this.hitBox.GetBody().GetWorldCenter());
			if(!this.hitBox.GetBody().hasGravity){
				if(moveVec.y === 0){
					this.hitBox2.GetBody().m_linearVelocity.y = 0;
					this.hitBox.GetBody().m_linearVelocity.y = 0;
					this.jointCenter.GetBody().m_linearVelocity.y = 0;
				}
				if(moveVec.x === 0){
					this.hitBox2.GetBody().m_linearVelocity.x = 0;
					this.hitBox.GetBody().m_linearVelocity.x = 0;
					this.jointCenter.GetBody().m_linearVelocity.x = 0;
				}
			}
		}
	}
})