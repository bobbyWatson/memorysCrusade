define(["createLevel"], function (createLevel){

	var LevelController = function (){

		this.loadedImages = 0;
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.levels = {
			level1 :function(){var Img = new Image();
					Img.src = "./assets/img/level1.png";
					Img.onload = function(){LevelController.instance.createLevel("level1")};
					return Img;
			}()
		}
		LevelController.instance = this;
	}

	LevelController.prototype.createLevel = createLevel;

	new LevelController();

	return LevelController.instance;
})