define(["Game", "B2D", "isPlayerInside", "isPlayerOut", "doWaitingActions", "Canvas", "MaskControler", "Camera", "write"], function (Game, Box2D, isPlayerInside, isPlayerOut, doWaitingActions, Canvas, MaskControler, Camera, write){

    var TextZone = function TextZone (args){

        this.id = Game.ids;
        this.playerInside = false;
        Game.ids++;
        this.waitingActions = [];
        this.tag = "TextZone";

        var triggerX = args.triggerX || 0;
        var triggerY = args.triggerY || 0;
        var triggerWidth = args.triggerWidth || 2;
        var triggerHeight = args.triggerHeight || 2;
        var textX = args.textX || 0;
        var textY = args.textY || 0;
        var textWidth = args.textWidth || 20;
        var textHeight = args.textHeight || 20;
        var textFont = args.textFont || "Wizard";
        var textColor = args.textColor || "#FFE500";
        var textStr = args.textStr || "a text is missing Here";
        this.characters = 0;
        this.speedWrite = 5;
        this.f = 0;
        this.txt = "";

        this.layer = MaskControler.Object;
        this.actionBox = Game.createB2Object({
            x           : triggerX,
            y           : triggerY,
            width       : triggerWidth,
            height      : triggerHeight,
            dynamism    : Box2D.Body.b2_kinematicBody,
            shape       : "box",
            layer       : this.layer
        });

        this.textBox = {
            x           : textX,
            y           : textY,
            width       : textWidth, 
            textFont    : textHeight + "px " + textFont,
            textColor   : textColor,
            text        : textStr
        }

        this.actionBox.GetBody().SetUserData(this);

        this.actionBox.SetSensor(true);

        Game.on("gameObject"+this.id+"Collides", this.isPlayerInside, this);
        
        Game.on("gameObject"+this.id+"EndCollides", this.isPlayerOut, this);
    }

    TextZone.prototype.isPlayerInside = isPlayerInside;
    
    TextZone.prototype.isPlayerOut = isPlayerOut;

    TextZone.prototype.doWaitingActions = doWaitingActions;

    TextZone.prototype.actions = function (){
        this.doWaitingActions();
        if(this.playerInside){
            this.write();
        }
        else{
            this.txt = "";
            this.characters = 0;
        }
    }

    TextZone.prototype.write = write;

    return TextZone;
})