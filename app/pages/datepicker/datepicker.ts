import {Component} from '@angular/core';
import {DatePicker} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/datepicker/datepicker.html'
})

export class DatePlugin {
    private date:any;

    constructor() {

    }

    pickDate() {
        let today = new Date();
        DatePicker.show({
            date: new Date,
            mode: 'date'
        }).then(
            date=> {
                this.date = date;
            },
            err=> {
            })
    }
}
