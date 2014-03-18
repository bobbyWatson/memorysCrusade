define(["Game"], function (Game){

	var WorldGround = function (args){
		this.id = Game.ids;
		Game.ids++;
		this.tag = "Ground";
		
		this.color = "red";

		this.hitBox = args.hitbox;

		this.hitBox.GetBody().SetUserData(this);
	}

	WorldGround.prototype.actions = function (){
	}

	return WorldGround;	
})