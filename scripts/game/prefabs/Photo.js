define(["B2D","doWaitingActions","Game","elementIsInside", "move", "MaskControler", "draw", "ImageSprite", "AssetsController"],
	function (Box2D, doWaitingActions,Game,elementIsInside,move,MaskControler, draw, ImageSprite, AssetsController){

	var Photo = function Photo (args){

		this.id = Game.ids;
		Game.ids++;
		this.waitingActions = [];
		
		this.timeToStay = 2.0;
		this.objects = [];
		console.log(args.x);
		this.x = args.x || 0;
		this.y = args.y || 0;
		this.height = args.height || 0;
		this.width = args.width || 0;
		this.hasGravity=false;
		this.creator=args.creator || 0;
		this.layer=MaskControler.Photo;
		this.hitBox = Game.createB2Object({
			x 		: this.x,
			y 		: this.y,
			height	: this.height,
			width 	: this.width,
			density : 0,
			dynamism: Box2D.Body.b2_dynamicBody,
			shape 	: "box",
			layer   : this.layer
		});
		this.hitBox.SetSensor(true)
		this.hitBox.GetBody().SetUserData(this);
		this.hitBox.GetBody().hasGravity=false;
		Game.on("gameObject"+this.id+"Collides", this.elementIsInside, this);
		
		this.imageSprite = new ImageSprite({image : AssetsController.images.photo, width : this.width, height : this.height});
	}

	Photo.prototype.actions = function (){
		this.move({x:0,y:0});
		this.minusTime()
		this.draw();
	}

	Photo.prototype.draw = draw;

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
		if(this.creator!==0)
		{
			this.creator.photoTaken=false;
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