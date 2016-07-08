import {Page} from 'ionic-angular';
import {MediaPlugin} from 'ionic-native';

@Page({
    templateUrl: 'build/pages/media/media.html'
})

export class Media {
    private file:any;
    private isActive:boolean;

    constructor() {
        this.file = new MediaPlugin("/android_asset/www/media/ode.mp3");
        this.isActive = true;
    }

    play() {
        this.file.play();
        this.isActive = false;
    }

    pause() {
        this.file.pause();
        this.isActive = true;
    }

    onPageDidLeave(){
        this.file.stop();
        this.file.release();
    }

}