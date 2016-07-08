import {Component} from '@angular/core';
import {LocalNotifications} from 'ionic-native';

@Component({
    templateUrl:'build/pages/local-notifications/localnotifications.html'
})

export class Local{
    constructor(){

    }

    scheduleNotification(){
        LocalNotifications.schedule({
            text: "This is a Notification",
            at: new Date(new Date().getTime() + 3600),
            led: "FF0000",
            sound: null
        });
    }
}