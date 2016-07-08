import {Component} from '@angular/core';
import {GoogleMap, GoogleMapsEvent} from 'ionic-native';

@Component({
    templateUrl:'build/pages/google-maps/googlemaps.html'
})

export class Map{
    constructor(){
        let map = new GoogleMap('googleMap');
        map.on(GoogleMapsEvent.MAP_READY).subscribe(() => console.log("Map is ready!"));
    }
}