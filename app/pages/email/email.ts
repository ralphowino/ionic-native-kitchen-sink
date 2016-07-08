import {Component} from "@angular/core";
import {EmailComposer} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/email/email.html'
})

export class Email {
    private to:string;
    private body:string;
    private subject:string;

    constructor() {

    }

    sendEmail() {
        EmailComposer.isAvailable().then((available) => {
            let email = {
                to: this.to,
                subject: this.subject,
                body: this.body,
                isHtml: true
            };
            if (available) {
                EmailComposer.open(email);
            }
        });
    }
}