import {Component} from "@angular/core";
import {AppAvailability} from 'ionic-native';
import {Platform} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/app-availability/app-availability.html'
})

export class AppAvailabilityPlugin {
    private isAvailable:string;
    private app:any;

    constructor(private platform:Platform) {
        if (this.platform.is('ios')) {
            this.app = 'twitter://';
        } else if (this.platform.is('android')) {
            this.app = 'com.twitter.android';
        }
    }

    checkTwitter() {
        AppAvailability.check(this.app)
            .then(
                yes => this.isAvailable = 'Twitter is Installed',
                no => this.isAvailable = 'Twitter is not Installed'
            );
    }
}