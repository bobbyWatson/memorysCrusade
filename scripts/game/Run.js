define(["RAF"], function (RAF){

	return function Run (){
		// Game.canvas.ctx.fillStyle = "rgb(0,100,0)";
		// Game.canvas.ctx.fillRect(0,0,Game.canvas.DOM.width, Game.canvas.DOM.height);


		Game.world.Step(
			1/60   //frame-rate
			,	10 //velocity
			,	10 //position iterations
		);
    	Game.world.DrawDebugData();
     	Game.world.ClearForces(); 




     	for(var i = 0; i < Game.gameObjects.length; i++){
     		if(Game.gameObjects[i].control){
     			Game.gameObjects[i].control();
     		}
			if(Game.gameObjects[i].Log)
				Game.gameObjects[i].Log();
     	}


		RAF(Run);
	}
})
