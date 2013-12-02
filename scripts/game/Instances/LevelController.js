define(["createLevel", "AssetsController"], function (createLevel, AssetsController){

	var LevelController = function (){

		this.loadedImages = 0;
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		LevelController.instance = this;
	}

	LevelController.prototype.createLevel = createLevel;

	new LevelController();

	return LevelController.instance;
})