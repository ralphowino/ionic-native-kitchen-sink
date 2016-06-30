import {Component} from "@angular/core";
import {ActionSheet, NavController, Platform} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/actionsheet/action-sheet.html'
})

export class Action {
    static get parameters() {
        return [[NavController], [Platform]];
    }

    constructor(private nav, private platform) {

    }

    showSheet() {
        let actionsheet = ActionSheet.create({
            title: 'Albums',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionsheet);
    }

}