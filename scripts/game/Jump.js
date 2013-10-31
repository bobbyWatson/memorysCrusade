define(["B2D"], function (Box2D){

	return function jump (){
		if(this.canJump){	
		var moveVec = new Box2D.Vec2(0, -this.jumpForce);
		this.hitbox.GetBody().ApplyImpulse(moveVec, this.hitbox.GetBody().GetWorldCenter());
		this.canJump = false
		}
	}
})