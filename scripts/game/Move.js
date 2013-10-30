define(["B2D"], function (Box2D){

	return function move (vec2){
		var vec2 = new Box2D.Vec2(vec2.x, vec2.y) + this.hitbox.GetBody();
		this.hitbox.GetBody().SetPosition(vec2);
	}
})