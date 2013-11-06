define(["B2D","doWaitingActions"], function (Box2D, doWaitingActions){

	var Photo = function Photo (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.h = args.h || 0.5;
		this.w = args.w || 1;
		this.hitbox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			h 		: this.h,
			w 		: this.w,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box"
		});
		this.hitbox.SetSensor(true)
		this.hitbox.GetBody().GetContactList()
		
		this.Log=function()
		{
		if(this.hitbox.GetBody().GetContactList())
		this.hitbox.GetBody().GetContactList().other.m_type=0;
		}
		
		// for(var i = 0; i < Game.gameObjects.length; i++){
			// if(Game.gameObjects[i].hitbox)
			// {
				// console.log(Game.gameObjects[i].hitbox.GetBody().GetPosition().x+"   "+this.x);
				// if(Game.gameObjects[i].hitbox.GetBody().GetPosition().x>=this.x && Game.gameObjects[i].hitbox.GetBody().GetPosition().x<=this.x+this.w && Game.gameObjects[i].hitbox.GetBody().GetPosition().y>=this.y+this.h && Game.gameObjects[i].hitbox.GetBody().GetPosition().y<=this.y){
					// console.log("toto");
					// Game.gameObjects[2].hitbox.GetBody().m_type=0;
				// }
			// }
		// }
	}

	Photo.prototype.doWaitingActions = doWaitingActions;
	return Photo;
})