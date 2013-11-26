define(["B2D","doWaitingActions","Game","elementIsInside","isElementOut"], function (Box2D, doWaitingActions,Game,elementIsInside,isElementOut){

	var Photo = function Photo (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
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
		this.hitbox.GetBody().SetUserData(this.id);
		
		// this.hitbox.GetBody().GetContactList();
		Game.on("gameObject"+this.id+"Collides", this.elementIsInside, this);
		
		
	}

	Photo.prototype.actions = function (){
		
		this.undo();
	}
	Photo.prototype.undo=function(){
	var _this=this;
	window.setTimeout(function(){
		Game.on("gameObject"+_this.id+"EndCollides", _this.isElementOut, _this);
			for (var i=0;i<Game.gameObjects.length;i++){
				if(Game.gameObjects[i].id==_this.id){
					Game.world.DestroyBody(Game.gameObjects[i].hitbox.GetBody())
					Game.gameObjects.splice(i,1);
				}
			}
		},2000);
	}
	
	Photo.prototype.elementIsInside = elementIsInside;
	
	Photo.prototype.isElementOut = isElementOut;

	Photo.prototype.doWaitingActions = doWaitingActions;
	
	return Photo;
})