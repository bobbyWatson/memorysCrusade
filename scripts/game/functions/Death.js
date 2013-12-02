define(["Player"],function (Player){
	return function Death (Spawn){
		if(Spawn)
		{
			console.log("toto");
			this.hitBox.GetBody().SetLinearVelocity({x:0,y:0});
			this.hitBox.GetBody().SetPosition(Spawn);
		}
	}
})