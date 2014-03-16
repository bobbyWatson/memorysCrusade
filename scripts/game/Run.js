define(["Game","RAF", "Camera", "Canvas","stats", "drawWater"], function (Game, RAF, Camera, Canvas,stats,drawWater){

	var Run =  function Run (){
		Run.instance = this;
	}

	Run.prototype.run = function (){
		Game.world.Step(
			1/60   //frame-rate
			,	10 //velocity
			,	10 //position iterations
		);
		stats.begin();
		Canvas.ctx.fillStyle = 'rgb(0,0,0)';
		Canvas.ctx.fillRect(0,0,Canvas.DOM.width, Canvas.DOM.height);

    	Game.world.DrawDebugData();
     	Game.world.ClearForces(); 
     	
     	Camera.actions();
     	for(var i = 0; i < Game.gameObjects.length; i++){
     		Game.gameObjects[i].actions();
     	}
        //drawWater();
		stats.end();
		RAF(Run.instance.run);

	}



	new Run();

	return Run.instance;
})
