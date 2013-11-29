define([], function (){

	var Animation = function (args){

		this.frame = 0;
		this.parent = args.parent;
		this.currentSprite = 0;
		this.currentAnim = this.parent.spriteSheet.animations[this.parent.spriteSheet.defaultAnimation];
	}

	Animation.prototype.animate = function(){
		this.frame++;
		if(this.frame % (this.currentAnim.time/this.currentAnim.sprites.length * 60) === 0){
			if(this.currentSprite < this.currentAnim.sprites.length-1){
				this.currentSprite++;
			}
		}

	} 


	return Animation;
})