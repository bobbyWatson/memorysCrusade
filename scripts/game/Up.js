define(["Ladder", "B2D"], function (Ladder, Box2D){

	return function up (){
		var actionObject;
		for(var i = 0; i <  Game.gameObjects.length; i++){
			if(Game.gameObjects[i].playerInside){
				actionObject = Game.gameObjects[i];
			}
		}
		if(actionObject){
			if(Ladder.prototype.isPrototypeOf(actionObject)){
				
				if(this.joint === undefined){					
					var jointDef = new Box2D.PrismaticJointDef();
					jointDef.bodyA = this.hitBox.GetBody();
					jointDef.bodyB = actionObject.actionBox.GetBody();
					this.joint = Game.world.CreateJoint(jointDef);
				}
			}
		}
	}
})