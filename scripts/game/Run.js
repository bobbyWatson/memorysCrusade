define(["RAF"], function (RAF){

	return function Run (){
		Game.world.Step(
			1/60   //frame-rate
			,	10 //velocity
			,	10 //position iterations
		);
    	Game.world.DrawDebugData();
     	Game.world.ClearForces(); 

		console.log("toto");
		RAF(Run);
	}
})
