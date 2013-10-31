define(["B2D"], function (Box2D){

	return function move (vec2){
		if(this.canJump !== undefined){
			if (this.hitbox.GetBody().GetLinearVelocity().y <= 0 && this.hitbox.GetBody().GetLinearVelocity().y >= -0.3) {
				this.canJump = true;
			}
		}
		var moveVec = new Box2D.Vec2(vec2.x, vec2.y);
		this.hitbox.GetBody().ApplyImpulse(moveVec,this.hitbox.GetBody().GetWorldCenter());
	}
})