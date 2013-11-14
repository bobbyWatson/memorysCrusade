define(["Canvas", "Game", "followPlayer"],function (Canvas, Game, followPlayer){
	
	var Camera = function Camera (args){

		this.id = Game.ids;
		Game.ids++;
		this.width = args.width || Canvas.DOM.width; 
		this.height = args.height || Canvas.DOM.height; 
		this.x = args.x || this.width/2;
		this.y = args.y || this.height/2;
		this.waitingActions = [];
		this.player = args.player;


		Camera.instance = this;
	}

	Camera.prototype.actions = function (){
		this.followPlayer();
	}

	Camera.prototype.followPlayer = followPlayer;

	new Camera({});

	return Camera.instance;
})