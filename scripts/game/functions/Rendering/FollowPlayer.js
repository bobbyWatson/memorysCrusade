define(["Game", "Canvas"], function (Game, Canvas){

	return function followPLayer (){
		if(this.player === undefined){
			
			for(var i = 0; i < Game.gameObjects.length; i++){
				if(Game.gameObjects[i].tag === "Player"){
					this.player = Game.gameObjects[i];
				}
			}
		}
		if(this.player.hitBox.GetBody().GetWorldCenter().x * Canvas.SCALE > this.width/2){
			this.x = Math.round(this.player.hitBox.GetBody().GetWorldCenter().x * Canvas.SCALE);
		} else {
			this.x = this.width/2;
		}
		if(this.player.hitBox.GetBody().GetWorldCenter().y * Canvas.SCALE > this.height/2){
			this.y = Math.round(this.player.hitBox.GetBody().GetWorldCenter().y * Canvas.SCALE);
		} else{
			this.y = this.height/2;
		}
	}
})