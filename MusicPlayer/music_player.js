class MusicPlayer{
    constructor(musicList){
        this.musicList = musicList ;
        this.index = 0 ;
    }

    getMusic(){
        return this.musicList[this.index]
    }

    sonraki(){
        if(this.index + 1 < this.musicList.length ){
            this.index++;
        }else{
            this.index = 0
        }
    }

    onceki(){
        if(this.index != 0 ){
            this.index--;
        }else{
            this.index = this.musicList.length -1;
        }
    }
}