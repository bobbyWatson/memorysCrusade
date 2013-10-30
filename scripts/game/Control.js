define(["B2D"], function (Box2D){

	return function control (){
		
		var vec2 =  new Box2D.Vec2(0,0);
		if(Game.InputsHandler.keys[Game.InputsHandler.keyCode.right]){
			vec2.x += this.speed;
		}
		if(Game.InputsHandler.keys[Game.InputsHandler.keyCode.left]){
			vec2.x -= this.speed;
		}

		this.move(vec2);
	}
})