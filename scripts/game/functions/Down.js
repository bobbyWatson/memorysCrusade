define([], function (){

	return function down (){
		if(this.joint !== undefined){
			Game.world.DestroyJoint(this.joint);
			this.joint = undefined;
		}
	}
})