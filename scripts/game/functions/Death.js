define([],function (){
	return function Death (Spawn){
		if(Spawn)
		{
			console.log(this);
			this.hitBox.GetBody().SetLinearVelocity({x:0,y:0});
			this.hitBox.GetBody().SetPosition(this.spawn);
		}
	}
})