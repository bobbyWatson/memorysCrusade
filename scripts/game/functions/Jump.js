define(["B2D","Game"], function (Box2D, Game){

	return function jump (){
		if(this.canJump){	
			var moveVec = new Box2D.Vec2(0, -this.jumpForce);
			if(this.joint !== undefined){
				Game.world.DestroyJoint(this.joint);
				this.joint = undefined;
			}
			this.hitBox.GetBody().ApplyImpulse(moveVec, this.hitBox.GetBody().GetWorldCenter());
			this.canJump = false
		}
	}
})