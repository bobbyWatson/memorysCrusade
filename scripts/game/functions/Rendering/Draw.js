define(["Canvas", "Camera"],function (Canvas, Camera){

	return function draw(_ctx){
		// DEBUG
		// return false;
		var ctx = _ctx === undefined ? Canvas.ctx : _ctx;
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

		ctx.fillStyle = spriteComponent.color === undefined ? "rgb(0,0,0)" : spriteComponent.color;

		var box2DPosition = {};
		if(this.hitBox !== undefined){
			var _body = this.hitBox.GetBody();
		}else if(this.actionBox !== undefined){
			var _body = this.actionBox.GetBody();
		}else{
			return
		}
		box2DPosition.x = _body.GetWorldCenter().x + spriteComponent.spriteBox.x;
		box2DPosition.y = _body.GetWorldCenter().y + spriteComponent.spriteBox.y;
		var width = spriteComponent.spriteBox.width * Canvas.SCALE * 2;
		var height = spriteComponent.spriteBox.height * Canvas.SCALE * 2;
		

		//For rotation
		if(spriteComponent.followRotation){
			ctx.save();
			ctx.translate(box2DPosition.x * Canvas.SCALE - (Camera.x - Camera.width/2), box2DPosition.y * Canvas.SCALE  - (Camera.y - Camera.height/2));
			ctx.rotate(this.hitBox.GetBody().GetAngle());
			//Draw the sprite
			if(this.shapeSprite !== undefined){
				ctx.fillRect(-width/2, -height/2, width, height);
			}else{
				ctx.drawImage(spriteComponent.image, -width/2, -height/2, width, height);
			}
			ctx.restore();
		}
		//No rotation
		else{
			var canvasX = box2DPosition.x * Canvas.SCALE - (Camera.x - Camera.width/2) - width/2;
			var canvasY = box2DPosition.y * Canvas.SCALE - (Camera.y - Camera.height/2) - height/2;
			if( this.shapeSprite !== undefined && this.shapeSprite.pattern){
				ctx.save();
				ctx.translate(canvasX, canvasY);
			}
			//Draw the sprite
			if(this.shapeSprite !== undefined){
				if(this.shapeSprite.pattern){
					ctx.fillRect(0, 0, width, height);
				}else{
					if(this.shapeSprite.spriteBox.shape === "circle"){
						ctx.beginPath();
						ctx.arc(canvasX, canvasY, this.shapeSprite.spriteBox.radius * Canvas.SCALE, 0, Math.PI*2);
						ctx.fill();
						ctx.closePath();
					}
					ctx.fillRect(canvasX, canvasY, width, height);
				}
			}else if(this.imageSprite !== undefined){
				ctx.drawImage(spriteComponent.image, canvasX, canvasY, width, height);
			}else{
				var sprite = this.animation.currentAnim.sprites[this.animation.currentSprite];
				ctx.drawImage(spriteComponent.image, sprite.x, sprite.y, sprite.width, sprite.height, canvasX, canvasY, width, height);
			}
			if( this.shapeSprite !== undefined && this.shapeSprite.pattern)
				ctx.restore();
		}

	}
})