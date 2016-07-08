import {Component} from "@angular/core";
import {BarcodeScanner} from 'ionic-native'

@Component({
    templateUrl: 'build/pages/barcode/barcode.html'
})

export class Barcode{
    private data:any;
    constructor() {

    }

    scan(){
        BarcodeScanner.scan().then(
            barcodeData=>{
                this.data = barcodeData;
            },
            err=>{
                this.data = 'There was an error:'+err;
            }
        );
    }
}