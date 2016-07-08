import {Component} from "@angular/core";
import {SpinnerDialog} from 'ionic-native';

@Component({
    templateUrl:'build/pages/spinner-dialog/spinnerdialog.html'
})

export class Spinner{
    constructor(){

    }

    spin(){
        SpinnerDialog.show('Some Spinner','Spinning is what I do');
    }
}