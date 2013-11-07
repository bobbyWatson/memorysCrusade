define(["Game", "B2D", "GrabPoint"], function (Game, Box2D, GrabPoint){

	return function action (){
		var actionObject;
		for(var i = 0; i <  Game.gameObjects.length; i++){
			if(Game.gameObjects[i].playerInside){
				actionObject = Game.gameObjects[i];
			}
		}
		if(actionObject){
			if(GrabPoint.prototype.isPrototypeOf(actionObject)){
				if(this.joint === undefined){
					var jointDef = new Box2D.DistanceJointDef();
					jointDef.bodyA = this.hitBox.GetBody();
					jointDef.bodyB = actionObject.actionBox.GetBody();
					jointDef.localAnchorA.Set(0,-1);
					this.joint = Game.world.CreateJoint(jointDef);
				}
			} 
		}
	}
})