define(["B2D"], function (Box2D){

	return function move (vec2){
		var moveVec = new Box2D.Vec2(vec2.x, vec2.y);
		moveVec.Add(this.hitbox.GetBody().GetWorldCenter())
		this.hitbox.GetBody().SetPosition(moveVec);
	}
})