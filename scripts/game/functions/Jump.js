define(["B2D","Game"], function (Box2D, Game){
	
	return function jump (){
		if(this.canJump || this.joint !== undefined){	
			var moveVec = new Box2D.Vec2(0, -this.jumpForce);
			if(this.joint !== undefined){
				Game.world.DestroyJoint(this.joint);
				this.joint = undefined;
			}
			this.hitBox.GetBody().SetLinearVelocity(new Box2D.Vec2(0,0));
			this.hitBox.GetBody().ApplyImpulse(moveVec, this.hitBox.GetBody().GetWorldCenter());
			this.canJump = false
			this.isJumping = 10;
		}
	}
})