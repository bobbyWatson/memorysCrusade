define(["Canvas","Cube","Player", "DarkPhoto"],function (Photo, Canvas, Cube,Player, DarkPhoto){
    return function changePhoto (e){
       this.currentPhoto ++;
       if(this.currentPhoto == this.photos.length){
            this.currentPhoto = 0;
       }
       var photoGUIName = this.currentPhoto == 0 ? "oldPhoto" : "invertPhoto";
       Game.currentPhotoDOM.style.backgroundImage = "url(./assets/img/" + photoGUIName +".png)";
    }
})