import {Component} from "@angular/core";
import {Loading as Load, NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/loading/loading.html'
})

export class Loading {
    static get parameters() {
        return [[NavController]]
    }

    constructor(private nav) {

    }

    showLoading() {
        let loader = Load.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        });

        this.nav.present(loader);
    }
}