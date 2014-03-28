define(["Canvas", "Camera"],function (Canvas, Camera){

    return function write(){
        this.f ++;
        if(this.f % this.speedWrite === 0 && this.txt.length < this.textBox.text.length){
            this.txt += this.textBox.text[this.characters];
            this.characters ++;
        }

        var x = ((this.textBox.x - this.textBox.width/2) * Canvas.SCALE) - (Camera.x - Camera.width/2);
        var y = ((this.textBox.y) * Canvas.SCALE) - (Camera.y - Camera.height/2);

        Canvas.ctx.fillStyle = this.textBox.textColor;
        Canvas.ctx.font = this.textBox.textFont;
        Canvas.ctx.fillText(this.txt, x, y);
    }
})