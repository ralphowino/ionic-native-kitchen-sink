import {Component} from '@angular/core';
import {InAppBrowser} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/inappbrowser/inappbrowser.html'
})

export class Browser {
    constructor() {

    }

    goToPage() {

        let url = 'https://github.com/angular-ui/ui-router/wiki';
        InAppBrowser.open(url, '_blank');
    }
}