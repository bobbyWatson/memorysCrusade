define(["Game", "Ladder", "B2D"], function (Game, Ladder, Box2D){

	return function up (){
		var actionObject;
		for(var i = 0; i <  Game.gameObjects.length; i++){
			if(Game.gameObjects[i].playerInside){
				actionObject = Game.gameObjects[i];
			}
		}
		if(actionObject){
			if(Ladder.prototype.isPrototypeOf(actionObject)){
				if(this.hasGravity){		
					this.hasGravity = false;
					this.hitBox.GetBody().SetLinearVelocity(new Box2D.Vec2(0,0));
				}
			}
		}
	}
})