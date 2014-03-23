define(["Camera", "Canvas"],function (Camera, Canvas){

    function isOnScreen (){

        var MARGE= 200;
        var pos = {};
        if(this.hitBox !== undefined)
            pos = this.hitBox.GetBody().GetWorldCenter();
        else if(this.actionBox !== undefined)
            pos = this.actionBox.GetBody().GetWorldCenter();
        else{
            pos.x = this.x;
            pos.y = this.y;
        }
        if(pos.x * Canvas.SCALE >= Camera.x - Camera.width /2 && pos.x  * Canvas.SCALE <= Camera.x + Camera.width /2 &&
            pos.y * Canvas.SCALE >= Camera.y - Camera.height / 2 && pos.y * Canvas.SCALE <= Camera.y + Camera.height / 2)
        {
            return true;
        }
        return false;
    }

    return isOnScreen;
})