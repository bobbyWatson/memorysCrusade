define(["Game", "B2D", "isPlayerInside", "doWaitingActions", "MaskControler"], function (Game, Box2D, isPlayerInside, doWaitingActions, MaskControler){

	var DeathZone = function DeathZone (args){

		this.id = Game.ids;
		this.playerInside = false;
		Game.ids++;
		this.waitingActions = [];

		var x = args.x || 0;
		var y = args.y || 0;
		this.width = args.width;
		this.height = args.height;
		this.layer = MaskControler.ActionPlateform;
		this.actionBox = Game.createB2Object({
			x 		 : x,
			y 		 : y,
			width	 : this.width,
			height	 : this.height,
			dynamism : Box2D.Body.b2_kinematicBody,
			shape	 : "box",
			layer	 : this.layer
		});

		this.actionBox.GetBody().SetUserData(this);

		this.actionBox.SetSensor(true);

		Game.on("gameObject"+this.id+"Collides", this.isPlayerInside, this);
	}

	DeathZone.prototype.isPlayerInside = isPlayerInside;

	DeathZone.prototype.doWaitingActions = doWaitingActions;

	DeathZone.prototype.actions = function (){
		this.doWaitingActions();
		if(this.playerInside){
			for(var i = 0; i < Game.gameObjects.length; i++){
				if(Game.gameObjects[i].tag === "Player"){
					Game.gameObjects[i].death(true);
					this.playerInside = false;
				}
			}
		}
	}

	return DeathZone;
})