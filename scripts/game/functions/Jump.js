define(["B2D"], function (Box2D){

	return function jump (){
		if(this.canJump){	
			var moveVec = new Box2D.Vec2(0, -this.jumpForce);
			this.hitBox.GetBody().ApplyImpulse(moveVec, this.hitBox.GetBody().GetWorldCenter());
			this.canJump = false
		}
	}
})