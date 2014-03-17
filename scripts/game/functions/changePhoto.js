define(["Canvas","Cube","Player", "DarkPhoto"],function (Photo, Canvas, Cube,Player, DarkPhoto){
    return function changePhoto (e){
       this.currentPhoto ++;
       if(this.currentPhoto == this.photos.length){
            this.currentPhoto = 0;
       }
    }
})