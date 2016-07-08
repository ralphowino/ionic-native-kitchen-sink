import {Component} from '@angular/core';
import {StatusBar} from 'ionic-native';

@Component({
    templateUrl:'build/pages/statusbar/statusbar.html'
})

export class Status{
    constructor(){

    }

    overlay(){
        StatusBar.overlaysWebView(true);
    }
}