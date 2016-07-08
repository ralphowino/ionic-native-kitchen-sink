import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {NavController,Storage, LocalStorage} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/introduction/introduction.html'
})

export class Introduction {
    private nav:any;
    private local:any;

    static get parameters() {
        return [[NavController]]
    }

    constructor(nav) {
        this.nav = nav;
        this.local = new Storage(LocalStorage);
        this.local.set('checkIntro', true);
    }

    goToHome() {
        this.nav.push(HomePage);
    }
}