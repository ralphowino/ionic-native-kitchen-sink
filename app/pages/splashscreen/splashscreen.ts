import {Component} from '@angular/core';
import {Splashscreen} from 'ionic-native';

@Component({
    templateUrl:'build/pages/splashscreen/splashscreen.html'
})

export class Splash{
    constructor(){
        
    }
    
    showSplash(){
        Splashscreen.show();
    }
}
