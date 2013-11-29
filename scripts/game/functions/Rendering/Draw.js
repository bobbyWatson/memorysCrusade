define(["Canvas", "Camera"],function (Canvas, Camera){

	return function draw(){

		width = this.width === undefined ? this.radius : this.width;
		height = this.height === undefined ? this.radius : this.height;
		//find the right component
		if(this.shapeSprite !== undefined){
			var spriteComponent = this.shapeSprite;
		}else if(this.imageSprite !== undefined){
			var spriteComponent = this.imageSprite;
		}else{
			var spriteComponent = this.spriteSheet;
		}

		Canvas.ctx.fillStyle = spriteComponent.color === undefined ? "rgb(0,0,0)" : spriteComponent.color;

		var box2DPosition = {};
		box2DPosition.x = this.hitBox.GetBody().GetWorldCenter().x + spriteComponent.spriteBox.x;
		box2DPosition.y = this.hitBox.GetBody().GetWorldCenter().y + spriteComponent.spriteBox.y;
		var width = spriteComponent.spriteBox.width * Canvas.SCALE * 2;
		var height = spriteComponent.spriteBox.height * Canvas.SCALE * 2;
		

		//For rotation
		if(spriteComponent.followRotation){
			Canvas.ctx.save();
			Canvas.ctx.translate(box2DPosition.x * Canvas.SCALE - (Camera.x - Camera.width/2), box2DPosition.y * Canvas.SCALE  - (Camera.y - Camera.height/2));
			Canvas.ctx.rotate(this.hitBox.GetBody().GetAngle());
			//Draw the sprite
			if(this.shapeSprite !== undefined){
				Canvas.ctx.fillRect(-width/2, -height/2, width, height);
			}else{
				Canvas.ctx.drawImage(spriteComponent.image, -width/2, -height/2, width, height);
			}
			Canvas.ctx.restore();
		}
		//No rotation
		else{
			var canvasX = box2DPosition.x * Canvas.SCALE - (Camera.x - Camera.width/2) - width/2;
			var canvasY = box2DPosition.y * Canvas.SCALE - (Camera.y - Camera.height/2) - height/2;
			//Draw the sprite
			if(this.shapeSprite !== undefined){
				Canvas.ctx.fillRect(canvasX, canvasY, width, height);
			}else if(this.imageSprite !== undefined){
				Canvas.ctx.drawImage(spriteComponent.image, canvasX, canvasY, width, height);
			}else{
				var sprite = this.animation.currentAnim.sprites[this.animation.currentSprite];
				Canvas.ctx.drawImage(spriteComponent.image, sprite.x, sprite.y, sprite.width, sprite.height, canvasX, canvasY, width, height);
			}
			
		}

	}
})