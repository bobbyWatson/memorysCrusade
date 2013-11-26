define(["B2D", "InputsHandler"], function (Box2D, InputsHandler){

	return function control (){
		
		var vec2 =  new Box2D.Vec2(0,0);
		if(InputsHandler.keys[InputsHandler.keyCode.d]){
			vec2.x += this.speedX;
		}
		if(InputsHandler.keys[InputsHandler.keyCode.q]){
			vec2.x -= this.speedX;
		}
		if(InputsHandler.keys[InputsHandler.keyCode.z] && !this.hasGravity){
			vec2.y -= this.speedY;
		}
		if(InputsHandler.keys[InputsHandler.keyCode.s] && !this.hasGravity){
			vec2.y += this.speedY;
		}

		this.move(vec2);
	}
})