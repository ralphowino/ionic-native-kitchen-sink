import {Component} from '@angular/core';
import {SocialSharing} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/social-sharing/socialsharing.html'
})

export class Social {
    private message:string = 'Check out the Ionic 2 KitchenSink';

    constructor() {

    }

    share() {
        SocialSharing.share(this.message);
    }
}
