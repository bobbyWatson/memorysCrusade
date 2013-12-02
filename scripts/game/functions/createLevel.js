define(["B2D", "Game", "Canvas", "WorldGround"],function (Box2D, Game, Canvas, WorldGround){

	return function createLevel (level){
		this.canvas.width = level.width;
		this.canvas.height = level.height;
		this.ctx.drawImage(level, 0, 0);

		var IntervalX = 15;
		var IntervalY = 15;
		var ImageData = this.ctx.getImageData(0,0,this.canvas.width, this.canvas.height).data;
		var alphaArray = [];
		var existingGround = [];
		for(var i = 0; i < this.canvas.width; i++) {
			alphaArray.push([]);
			for(var j = 0; j < this.canvas.height; j++){

				alphaArray[i].push(ImageData[j*this.canvas.width*4 + i*4+3])
			}
		}
		for(var x = 0; x < alphaArray.length; x++){
			for(var y = 0; y < alphaArray[x].length; y++){
				var point0, point1, point2, point3;
				point0 = point1 = point2 = point3 = undefined;
				//find point0
				if(alphaArray[x][y] === 255){
					point0 = [x,y];

					//find point1
					var lookingAlpha = alphaArray[x+IntervalX][y] === 255 ? 0 : 255;
					var pointUp = undefined;
					var pointDown = undefined;

					for(var k = 0; k < IntervalY; k++){
						if(alphaArray[x+IntervalX][y+k] === lookingAlpha){
							var pointDown = k-1;
							break;
						}
					}
					for(var k = 0; k > -IntervalY; k--){
						if(alphaArray[x+IntervalX][y+k] === lookingAlpha){
							var pointUp = k+1;
							break;
						}
					}
					if(pointDown !== undefined || pointUp !== undefined){

						if(pointDown === undefined && pointUp !== undefined){
							point1 = [x+IntervalX, y+pointUp];
						} else if(pointDown !== undefined && pointUp === undefined){
							point1 = [x+IntervalX, y+pointDown];
						}else{
							if(Math.abs(pointUp) >= pointDown){
								point1 = [x+IntervalX, y+pointUp];
							}else{
								point1 = [x+IntervalX, y+pointDown];
							}
						}

						//find point3
						for(var k = 0; k < this.canvas.height+1 - y; k++){
							if(alphaArray[x][y+k] === 0 || alphaArray[x][y+k] === undefined){
								point3 = [x,y+k-1];
								break;
							}
						}
						if(point3 !== undefined){

							//find point2
							var lookingAlpha = alphaArray[x+IntervalX][point3[1]] === 255 ? 0 : 255;
							var pointUp = undefined;
							var pointDown = undefined;

							for(var k = 0; k < IntervalY; k++){
								if(alphaArray[x+IntervalX][point3[1]+k] === lookingAlpha){
									pointDown = k-1;
									break;
								}
							}
							for(var k = 0; k > -IntervalY; k--){
								if(alphaArray[x+IntervalX][point3[1]+k] === lookingAlpha){
									pointUp = k+1;
									break;
								}
							}
							if(pointDown !== undefined || pointUp !== undefined){

								if(pointDown === undefined && pointUp !== undefined){
									point2 = [x+IntervalX, point3[1]+pointUp];
								} else if(pointDown !== undefined && pointUp === undefined){
									point2 = [x+IntervalX, point3[1]+pointDown];
								}else{
									if(Math.abs(pointUp) >= pointDown){
										point2 = [x+IntervalX, point3[1]+pointUp];
									}else{
										point2 = [x+IntervalX, point3[1]+pointDown];
									}
								}
								if(point2[1] > point1[1]){

									//check if already exist
									var canBeCreated = true;
									for(var k = 0; k < existingGround.length; k++){
										if(point0[0] <= existingGround[k][1][0]){
											if(point0[1] >= existingGround[k][0][1] && point0[1] <= existingGround[k][3][1]){
												canBeCreated = false;
												break;
											}else if(point3[1] >= existingGround[k][0][1] && point3[1] <= existingGround[k][3][1]){
												canBeCreated = false;
												break;
											}
										}
									}
									if(canBeCreated){
										existingGround.push([point0, point1, point2, point3]);
									}
								}
							}
						}
					}
				}
			}
		}
		//create Box2D Objects
		var fixDef = new Box2D.FixtureDef();
	    fixDef.density =  1.0;
	    fixDef.friction = 0.5;
	    fixDef.restitution = 0.2;
		fixDef.shape = new Box2D.PolygonShape;

		var bodyDef = new Box2D.BodyDef(); 
	    bodyDef.type = Box2D.Body.b2_kinematicBody;
	    for(var i = 0; i < existingGround.length; i++){
	    	var vertices = [];
	    	for(var j = 0; j < existingGround[i].length; j++){
	    		vertices.push(new Box2D.Vec2(existingGround[i][j][0] / Canvas.SCALE, existingGround[i][j][1] / Canvas.SCALE));
	    	}
	    	fixDef.shape.SetAsArray(vertices, vertices.length);
	    	var object = Game.world.CreateBody(bodyDef).CreateFixture(fixDef);
	    	Game.gameObjects.push( new WorldGround({hitbox : object}));
	    }
	} 
})
