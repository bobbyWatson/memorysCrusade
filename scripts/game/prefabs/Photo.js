define(["B2D","doWaitingActions","Game","elementIsInside", "move"], function (Box2D, doWaitingActions,Game,elementIsInside,move){

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
		this.hasGravity=false;
		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width 	: this.width,
			dynamism: Box2D.Body.b2_dynamicBody,
			shape 	: "box"
		});
		this.hitBox.SetSensor(true)
		this.hitBox.GetBody().SetUserData(this);
		// this.hitBox.GetBody().SetType(0);
		// this.hitbox.GetBody().GetContactList();
		Game.on("gameObject"+this.id+"Collides", this.elementIsInside, this);
		
		
	}

	Photo.prototype.actions = function (){
		this.move({x:0,y:0});
		this.minusTime()
	}

	Photo.prototype.undo=function(){
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i][0].hitBox.GetBody().SetType(this.objects[i][3]);
			this.objects[i][0].hitBox.GetBody().ApplyForce({x:0.1,y:0.1}, {x:0.1,y:0.1});
			this.objects[i][0].hitBox.GetBody().SetLinearVelocity(this.objects[i][1]);
			this.objects[i][0].hitBox.GetBody().SetAngularVelocity(this.objects[i][2]);
		}
		for (var i=0;i<Game.gameObjects.length;i++){
			if(Game.gameObjects[i].id == this.id){
				Game.world.DestroyBody(Game.gameObjects[i].hitBox.GetBody())
				Game.gameObjects.splice(i,1);
			}
		}
	}
	
	Photo.prototype.elementIsInside = elementIsInside;
	
	Photo.prototype.move = move;
	
	Photo.prototype.doWaitingActions = doWaitingActions;

	Photo.prototype.minusTime = function (){

		this.timeToStay -= 1/60;
		if(this.timeToStay <= 0){
			this.undo();
		}
	}
	
	return Photo;
})