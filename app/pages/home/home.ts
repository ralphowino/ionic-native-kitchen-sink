import {Component} from "@angular/core";
import {ActionSheet, NavController, Storage, LocalStorage} from 'ionic-angular';
import {Native} from '../native/native';
import {Cordova} from '../cordova/cordova';
import {EmailComposer} from 'ionic-native';
import {InAppBrowser} from 'ionic-native';
import {Introduction} from '../introduction/introduction';

@Component({
    templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
    nav:any;
    local:any;

    constructor(private navController:NavController) {
        this.nav = navController;
        this.local = new Storage(LocalStorage);
        this.local.get('checkIntro').then((success)=>{
            if (!success) {
                this.nav.push(Introduction);
            }
        });
    }

    cordovaPlugins() {
        this.nav.push(Cordova);
    }

    feedback() {
        let feedback = ActionSheet.create({
            title: 'Your Feedback',
            buttons: [
                {
                    text: 'Send us an Email',
                    icon: 'mail',
                    handler: ()=> {
                        EmailComposer.isAvailable().then((available) => {
                            let email = {
                                to: 'hello@ralphowino.com',
                                isHtml: true
                            };
                            if (available) {
                                EmailComposer.open(email);
                            }
                        });
                    }
                },
                {
                    text: 'Send an Issue',
                    icon: 'github',
                    handler: ()=> {
                        let url = 'https://github.com/angular-ui/ui-router/wiki';
                        InAppBrowser.open(url, '_blank');
                    }
                }]
        });
        this.nav.present(feedback);
    }

    goToIntroduction() {
        this.nav.push(Introduction);
    }

    nativeComponents() {
        this.nav.push(Native);
    }
}
