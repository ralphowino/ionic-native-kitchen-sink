import {Component} from '@angular/core';
import {Screenshot} from 'ionic-native';

@Component({
    templateUrl:'build/pages/screenshot/screenshot.html'
})

export class Screen{
    constructor(){

    }

    takeScreenshot(){
        Screenshot.save();
    }
}