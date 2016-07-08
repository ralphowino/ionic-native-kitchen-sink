import {Component} from "@angular/core";
import {Geolocation} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/geolocation/geolocation.html'
})

export class Geo {
    private latitude:any;
    private altitude:any;
    private longitude:any;

    constructor() {

    }

    getGeo() {
        Geolocation.getCurrentPosition().then(resp=> {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.altitude = resp.coords.altitude
        })
    }
}