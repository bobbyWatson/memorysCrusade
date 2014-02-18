define(["Game", "B2D"], function (Game, Box2D){
	return function action (){
		var actionObject;
		// console.log(GrabPoint,Cube);
		for(var i = 0; i <  Game.gameObjects.length; i++){
			if(Game.gameObjects[i].playerInside){
				actionObject = Game.gameObjects[i];
				console.log(Game.gameObjects[i].playerInside);
			}
		}
		if(actionObject){
			if(actionObject.tag!== undefined && actionObject.tag==="GrabPoint"){
				if(this.joint === undefined){
					var jointDef = new Box2D.DistanceJointDef();
					jointDef.bodyA = this.hitBox.GetBody();
					jointDef.bodyB = actionObject.actionBox.GetBody();
					jointDef.localAnchorA.Set(0,-1);
					this.joint = Game.world.CreateJoint(jointDef);
				}
			}
			if(actionObject.tag!== undefined && actionObject.tag==="Caisse"){
				if(this.joint === undefined){
					var jointDef = new Box2D.RevoluteJointDef();
					jointDef.bodyA = this.hitBox.GetBody();
					jointDef.bodyB = actionObject.hitBox.GetBody();
					jointDef.localAnchorA.Set(3, 0);
					this.joint = Game.world.CreateJoint(jointDef);
					actionObject.hitBox.GetBody().SetLinearDamping(0);

				}
			} 			
		}
	}
})