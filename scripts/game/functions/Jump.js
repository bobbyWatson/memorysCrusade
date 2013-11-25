define(["B2D","Cube"], function (Box2D,Cube){

	return function jump (){
		if(this.canJump){	
			var moveVec = new Box2D.Vec2(0, -this.jumpForce);
			this.hitBox.GetBody().ApplyImpulse(moveVec, this.hitBox.GetBody().GetWorldCenter());
			this.canJump = false
			Game.gameObjects.push(new Cube({x : 45, y : 15}));
		}
	}
})