define(["Player"],function (Player){
	return function Death (Spawn){
		if(Spawn)
		{
			this.hitBox.GetBody().SetPosition(Spawn);
		}
	}
})