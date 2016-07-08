import {Component} from "@angular/core";
import {Flashlight} from 'ionic-native';

@Component({
    templateUrl:'build/pages/flashlight/flashlight.html'
})

export class Flash {
    constructor() {

    }

    toggleFlash() {
        Flashlight.available().then(available=> {
            if (available) {
                Flashlight.toggle();
            }
        })
    }
}
