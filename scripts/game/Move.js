define(["B2D"], function (Box2D){

	return function move (vec2){
		if(this.canJump !== undefined){
			if (this.hitBox.GetBody().GetLinearVelocity().y <= 0 && this.hitBox.GetBody().GetLinearVelocity().y >= -0.3) {
				this.canJump = true;
			}
		}
		var moveVec = new Box2D.Vec2(vec2.x, vec2.y);
		this.hitBox.GetBody().ApplyImpulse(moveVec,this.hitBox.GetBody().GetWorldCenter());
	}
})