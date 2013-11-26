define(["B2D","doWaitingActions"], function (Box2D, doWaitingActions){

	var Photo = function Photo (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0.5;
		this.width = args.width || 1;
		this.hitbox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width 	: this.width,
			dynamism: Box2D.Body.b2_kinematicBody,
			shape 	: "box"
		});
		this.hitbox.SetSensor(true)
		this.hitbox.GetBody().GetContactList()
		
	}

	Photo.prototype.actions = function (){
		if(this.hitbox.GetBody().GetContactList())
			this.hitbox.GetBody().GetContactList().other.m_type=0;
	}
	Photo.prototype.undo=function(){
	var _this=this;
	window.setTimeout(function(){
			for (var i=0;i<Game.gameObjects.length;i++){
				if(Game.gameObjects[i].id==_this.id){
					_this.hitbox.GetBody().GetContactList().other.m_type=2;
					Game.world.DestroyBody(Game.gameObjects[i].hitbox.GetBody())
					Game.gameObjects.splice(i,1);
				}
			}
		},2000);
	}

	Photo.prototype.doWaitingActions = doWaitingActions;
	return Photo;
})