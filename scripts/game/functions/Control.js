define(["B2D", "InputsHandler"], function (Box2D, InputsHandler){

	return function control (){
		
		this.moveMev =  new Box2D.Vec2(0,0);
		if(this.joint !== undefined){
			if(this.joint.m_bodyA.GetUserData().tag === "GrabPoint" || this.joint.m_bodyB.GetUserData().tag === "GrabPoint"){
				return;
			}
		}
		if(InputsHandler.keys[InputsHandler.keyCode.d]){
			if(!this.hitBox.GetBody().hasGravity)
				this.moveMev.x += this.speedX / 4;
			else
				this.moveMev.x += this.speedX;
		}
		if(InputsHandler.keys[InputsHandler.keyCode.q]){
			if(!this.hitBox.GetBody().hasGravity)
				this.moveMev.x -= this.speedX / 4;
			else
				this.moveMev.x -= this.speedX;
		}
		if(InputsHandler.keys[InputsHandler.keyCode.z] && !this.hitBox.GetBody().hasGravity){
			this.moveMev.y -= this.speedY;
		}
		if(InputsHandler.keys[InputsHandler.keyCode.s] && !this.hitBox.GetBody().hasGravity){
			this.moveMev.y += this.speedY;
		}
		this.move(this.moveMev);
	}
})