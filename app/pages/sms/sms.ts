import {Component} from "@angular/core";
import {SMS} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/sms/sms.html'
})

export class SmsPlugin {
    private phone:string;
    private message:string;

    constructor() {

    }

    sendSMS() {
        SMS.send(this.phone, this.message)
    }
}