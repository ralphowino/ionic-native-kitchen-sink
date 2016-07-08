import {Component} from "@angular/core";
import {Camera} from 'ionic-native'

@Component({
    templateUrl: 'build/pages/camera/camera.html'
})

export class CameraPlugin {
    private imageSrc:string;

    constructor() {

    }

    takePhoto() {
        let options = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            quality: 100,
            targetWidth: 100,
            targetHeight: 100
        }

        Camera.getPicture(options).then(
            imageUri=> {
                this.imageSrc = imageUri;
            },
            err=> {
                console.log(err);
            }
        )
    }
}