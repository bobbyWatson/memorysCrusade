define(["B2D","doWaitingActions","Game","elementIsInside"], function (Box2D, doWaitingActions,Game,elementIsInside){

	var Photo = function Photo (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.timeToStay = 2.0;
		this.objects = [];
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0;
		this.width = args.width || 0;
		this.hitbox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width 	: this.width,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box"
		});
		this.hitbox.SetSensor(true)
		this.hitbox.GetBody().SetUserData(this);
		
		// this.hitbox.GetBody().GetContactList();
		Game.on("gameObject"+this.id+"Collides", this.elementIsInside, this);
		
		
	}

	Photo.prototype.actions = function (){
		
		this.minusTime()
	}

	Photo.prototype.undo=function(){
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].hitBox.GetBody().m_type=2;
		}
		for (var i=0;i<Game.gameObjects.length;i++){
			if(Game.gameObjects[i].id == this.id){
				Game.world.DestroyBody(Game.gameObjects[i].hitbox.GetBody())
				Game.gameObjects.splice(i,1);
			}
		}
	}
	
	Photo.prototype.elementIsInside = elementIsInside;
	
	Photo.prototype.doWaitingActions = doWaitingActions;

	Photo.prototype.minusTime = function (){

		this.timeToStay -= 1/60;
		if(this.timeToStay <= 0){
			this.undo();
		}
	}
	
	return Photo;
})