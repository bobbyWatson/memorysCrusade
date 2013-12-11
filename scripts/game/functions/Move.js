define(["B2D", "Game"], function (Box2D, Game){

	return function move (vec2){
		if(this.canJump !== undefined){
			if (this.jumpBox.GetBody().GetContactList() !== null) {
				this.canJump = true;
			}
		}
		if(!this.hasGravity){
			var gravity = Game.world.GetGravity();
			var antigrav = {x : 0 , y :  - gravity.y * this.hitBox.GetBody().GetMass()};
			this.hitBox.GetBody().ApplyForce(antigrav, this.hitBox.GetBody().GetWorldCenter())
		}
		var moveVec = new Box2D.Vec2(vec2.x, vec2.y);
		if(this.hitBox.GetBody().GetType()==1)
			this.hitBox.GetBody().SetLinearVelocity(vec2);
		else
			this.hitBox.GetBody().ApplyImpulse(moveVec,this.hitBox.GetBody().GetWorldCenter());
	}
})