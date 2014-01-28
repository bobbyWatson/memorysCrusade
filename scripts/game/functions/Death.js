define(["Player"],function (Player){
	return function Death (Spawn){
		if(Spawn)
		{
            this.canJump = true;
            Game.world.DestroyJoint(this.joint1);
            Game.world.DestroyJoint(this.joint2);
            Game.world.DestroyJoint(this.joint3);
            this.joint1 = undefined
            this.joint3 = undefined
            this.joint2 = undefined
            this.hitBox.GetBody().SetLinearVelocity({x:0,y:0});
            this.jointCenter.GetBody().SetLinearVelocity({x:0,y:0});
            this.hitBox2.GetBody().SetLinearVelocity({x:0,y:0});
            this.jumpBox.GetBody().SetLinearVelocity({x:0,y:0});
            this.hitBox.GetBody().SetPosition(this.spawn);
            this.hitBox2.GetBody().SetPosition(this.spawn);
            this.jointCenter.GetBody().SetPosition(this.spawn);
            this.jumpBox.GetBody().SetPosition(this.spawn);
            this.joint1 = this.CreateJoint1();
            this.joint2 = this.CreateJoint2();
            this.joint3 = this.CreateJoint3();	
    	}
	}
})