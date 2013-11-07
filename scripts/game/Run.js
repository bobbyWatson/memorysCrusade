define(["Game","RAF"], function (Game, RAF){

	var Run =  function Run (){
		Run.instance = this;
	}

	Run.prototype.run = function (){
		Game.world.Step(
			1/60   //frame-rate
			,	10 //velocity
			,	10 //position iterations
		);
    	Game.world.DrawDebugData();

     	Game.world.ClearForces(); 
     	for(var i = 0; i < Game.gameObjects.length; i++){
     		Game.gameObjects[i].actions();
     	} 
		RAF(Run.instance.run);
	}

	new Run();

	return Run.instance;
})
