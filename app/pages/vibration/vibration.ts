import {Component} from '@angular/core';
import {Vibration} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/vibration/vibration.html'
})

export class VibrationPlugin {
    constructor() {

    }

    vibrate() {
        Vibration.vibrate(1000);
    }
}