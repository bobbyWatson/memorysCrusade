define([], function (){

	var Canvas = function (){

		this.SCALE = 10.0;
		this.DOM = document.createElement("canvas");
		this.ctx = this.DOM.getContext("2d");
		this.DOM.id = "canvas";
		this.DOM.width = 1050;
		this.DOM.height = 600;
		this.DOM.style.width = 1050 + "px";
		this.DOM.style.height = 600 + "px";
		this.DOM.style.marginLeft = "50%";
		this.DOM.style.left = -this.DOM.width/2 + "px";
		document.body.appendChild(this.DOM);

		Canvas.instance = this;
	}

	new Canvas();

	return Canvas.instance;
})