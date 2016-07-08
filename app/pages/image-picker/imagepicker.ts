import {Component} from "@angular/core";
import {ImagePicker} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/image-picker/imagepicker.html'
})

export class Image {
    private images:string[];

    constructor() {

    }

    getImages() {
        let options = {
            width: 100,
            height: 100,
            quality: 100
        };
        ImagePicker.getPictures(options).then(results => {
            this.images = results;
        }, (err) => {

        });
    }
}
