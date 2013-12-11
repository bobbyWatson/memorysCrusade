define(["B2D", "Game"], function (Box2D, Game){

	return function checkDirection (){
		if(this.hitBox.GetBody().GetPosition().y>=this.margeY || this.hitBox.GetBody().GetPosition().x>=this.margeX)
		{
			//this.vec2=new Box2D.Vec2((this.vec2.x*-this.speed),(this.vec2.y*-this.speed));
			this.vec2.x *=-1;
			this.vec2.y *=-1;
		}
		else if(this.hitBox.GetBody().GetPosition().y<this.stockY || this.hitBox.GetBody().GetPosition().x<this.stockX)
		{
			this.vec2.x *=-1;
			this.vec2.y *=-1;
		}
	}
})