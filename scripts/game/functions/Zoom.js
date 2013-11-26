define(["Canvas","Cube","Player"],function (Photo, Canvas, Cube,Player){
	return function Zoom (e){
		console.log(this,e);
		if(e.wheelDelta>0 && this.zoom<3)
		{
			this.zoom+=0.5;
		}
		else if(e.wheelDelta<0 && this.zoom>0)
		{
			this.zoom-=0.5;
		}
	}
})